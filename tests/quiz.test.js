const assert = require('assert');
const fs = require('fs');
const vm = require('vm');

class FakeElement {
    constructor(id = '') {
        this.id = id;
        this.innerHTML = '';
        this.textContent = '';
        this.disabled = false;
        this.style = {};
        this.listeners = {};
    }

    addEventListener(type, handler) {
        this.listeners[type] = handler;
    }
}

const elements = new Map();
const elementIds = [
    'quizForm',
    'questionMount',
    'progressBar',
    'categoryLabel',
    'stepCount',
    'prevBtn',
    'nextBtn',
    'submitBtn',
    'resetBtn',
    'formHint',
    'resultPanel'
];

elementIds.forEach((id) => elements.set(id, new FakeElement(id)));

const storage = new Map();
const context = {
    console,
    document: {
        getElementById(id) {
            return elements.get(id);
        }
    },
    localStorage: {
        getItem(key) {
            return storage.has(key) ? storage.get(key) : null;
        },
        setItem(key, value) {
            storage.set(key, value);
        }
    },
    navigator: {
        clipboard: {
            writeText(value) {
                context.__copiedText = value;
                return Promise.resolve();
            }
        }
    }
};

const source = fs.readFileSync('app.js', 'utf8');
const exported = vm.runInNewContext(`${source}\n({ deckProfiles, questions, state, calculateScores, renderResult, answeredCount });`, context);

assert.strictEqual(Object.keys(exported.deckProfiles).length, 8, 'expected 8 deck profiles');
assert.strictEqual(exported.questions.length, 8, 'expected 8 quiz questions');
assert.ok(elements.get('questionMount').innerHTML.includes('你希望第一套卡组的操作复杂度是？'), 'first question should render');
assert.strictEqual(elements.get('submitBtn').disabled, true, 'submit should be disabled before answering all questions');

exported.state.answers = exported.questions.map(() => 0);
assert.strictEqual(exported.answeredCount(), 8, 'all synthetic answers should be counted');

const rankedScores = exported.calculateScores();
assert.strictEqual(rankedScores[0][0], 'greymon', 'all first answers should recommend Greymon first');
assert.ok(rankedScores[0][1] > rankedScores[1][1], 'top recommendation should beat second place');

exported.renderResult();
assert.ok(elements.get('resultPanel').innerHTML.includes('红色 战斗暴龙兽'), 'result should render the top deck');
assert.ok(elements.get('resultPanel').innerHTML.includes('复制推荐结果'), 'result should include copy action');
assert.ok(storage.get('digimonDeckQuizState').includes('lastResult'), 'result should be persisted');

console.log('quiz smoke tests passed');
