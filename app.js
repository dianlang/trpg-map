const deckProfiles = {
    greymon: {
        shortName: "战暴系",
        name: "红色 战斗暴龙兽 / Greymon 系",
        tags: ["直观进化", "主角感", "正面突破"],
        summary: "适合想先掌握进化曲线、育成区出场和安全区交换的新手。它的游戏计划清楚：把关键成长线养起来，然后用高攻击力和安全攻击给压力。",
        goodFor: ["喜欢亚古兽、太一和主角路线", "想先玩清晰、稳定、容易复盘的进攻卡组", "希望后续有较多升级路线"],
        practice: ["每回合先规划费用和进化顺序", "练习什么时候从育成区推出主轴", "攻击前先判断是否需要处理对手场面"],
        caution: "热门路线的升级件可能随环境和地区价格波动，先用基础构筑试打更稳。"
    },
    garurumon: {
        shortName: "加鲁鲁系",
        name: "蓝色 加鲁鲁兽 / Garurumon 系",
        tags: ["连击", "速度", "资源管理"],
        summary: "适合喜欢高速进攻、抽滤和多段攻击的玩家。它能训练你计算斩杀线和把手牌资源转化为攻击次数。",
        goodFor: ["喜欢加布兽、阿和或奥米加兽路线", "愿意练习费用、手牌和攻击次数计算", "希望卡组节奏更主动"],
        practice: ["每回合估算最大伤害和剩余资源", "保留能延伸攻击的关键组件", "复盘给对手费用后是否会被反打"],
        caution: "它比纯直线进化更考验计算，新手一开始可以先降低连动复杂度。"
    },
    imperial: {
        shortName: "帝皇龙系",
        name: "蓝绿 帝皇龙甲兽 / Imperialdramon 系",
        tags: ["DNA 进化", "展开", "帅气成长线"],
        summary: "适合想体验数码宝贝卡牌特色机制的新手。它的展开感强，能帮助你学习横向铺场、合体进化和节奏爆发。",
        goodFor: ["喜欢 V 仔兽、虫虫兽和大辅路线", "想体验 DNA 进化的爽感", "愿意记住几条固定展开路线"],
        practice: ["熟悉两条颜色和等级线如何汇合", "练习保留 DNA 进化所需组件", "不要只追求展开，忽略安全区压力"],
        caution: "组件配合度要求较高，建议先照着入门构筑练熟基本路线。"
    },
    gallantmon: {
        shortName: "红莲系",
        name: "红色 红莲骑士兽 / Gallantmon 系",
        tags: ["去除", "骑士感", "中速压制"],
        summary: "适合喜欢红色进攻但又想顺手处理对手场面的玩家。它通常围绕删除效果和成长压制展开，手感比纯快攻更稳。",
        goodFor: ["喜欢基尔兽、启人或皇家骑士氛围", "想边进攻边清场", "偏好中速节奏"],
        practice: ["判断删除效果该留给谁", "练习用驯兽师稳定资源", "学会在安全攻击和场面控制之间取舍"],
        caution: "如果当地环境低 DP 目标少，部分删除收益会变低。"
    },
    angel: {
        shortName: "天使系",
        name: "黄色 天使兽 / Angel 系",
        tags: ["恢复", "容错", "安全区"],
        summary: "适合想要更高容错率、喜欢恢复和防守反击的新手。它能让你多看几个回合，更容易从失误中学习。",
        goodFor: ["喜欢巴达兽、天使兽或神圣天使兽", "不想太快被击倒，希望慢慢理解对局", "喜欢安全区互动"],
        practice: ["记录安全区数量和恢复收益", "不要只防守而忘记建立进攻主轴", "学习什么时候该消灭对手关键数码宝贝"],
        caution: "防守卡组容易拖长对局，要练习主动结束比赛的时机。"
    },
    beelzemon: {
        shortName: "别西卜系",
        name: "紫色 别西卜兽 / Beelzemon 系",
        tags: ["堆墓", "爆发", "高风险"],
        summary: "适合喜欢暗黑风格、弃牌区利用和关键回合爆发的玩家。爽点很强，但需要熟悉触发顺序和资源门槛。",
        goodFor: ["喜欢小妖兽、别西卜兽和反转局势", "不介意前期铺垫和一定波动", "愿意练习效果顺序"],
        practice: ["熟悉弃牌区数量门槛", "按顺序处理翻出和丢弃效果", "判断什么时候该继续堆墓，什么时候该爆发"],
        caution: "它不算最简单的新手卡组，如果你讨厌随机波动，建议先选更稳定路线。"
    },
    alphamon: {
        shortName: "阿尔法系",
        name: "黑色 阿尔法兽 / Alphamon 系",
        tags: ["防御", "高上限", "皇家骑士"],
        summary: "适合喜欢厚实场面、强力终端和皇家骑士主题的玩家。它能训练你围绕关键终端积累资源并寻找爆发窗口。",
        goodFor: ["喜欢多路兽、阿尔法兽和皇家骑士", "想玩更厚、更有压迫感的大哥卡组", "愿意慢慢学习复杂资源线"],
        practice: ["优先理解核心终端需要哪些素材", "练习保留防守和反击资源", "不要在组件不齐时盲目推进"],
        caution: "构筑和操作都可能偏贵偏复杂，建议作为第二套或进阶第一套。"
    },
    security: {
        shortName: "安全控制",
        name: "黄紫 安全控制 / Security Control 入门向",
        tags: ["控制", "防守", "慢速"],
        summary: "适合喜欢解场、防守和用安全区制造惊喜的玩家。它和普通进化卡组思路不同，更偏向用选项牌和恢复拖垮对手。",
        goodFor: ["喜欢后手反制和控制对局", "愿意接受较慢节奏", "想理解安全区和选项牌价值"],
        practice: ["学会判断哪些威胁必须立刻解掉", "记录对手可能的斩杀线", "练习把防守资源转化为胜利条件"],
        caution: "它不一定适合所有新手，因为对环境理解要求更高，对局时间也更长。"
    }
};

const questions = [
    {
        category: "操作难度",
        title: "你希望第一套卡组的操作复杂度是？",
        help: "先选最符合直觉的答案。没有绝对正确，只有更适合你当前阶段的路线。",
        options: [
            { title: "越清楚越好", copy: "按曲线进化、推出主轴、正面攻击。", weights: { greymon: 5, gallantmon: 3, angel: 2 } },
            { title: "可以有固定连动", copy: "我愿意记几条常用展开路线。", weights: { imperial: 5, garurumon: 3, alphamon: 2 } },
            { title: "想练资源计算", copy: "手牌、费用、攻击次数都可以认真算。", weights: { garurumon: 5, imperial: 3, alphamon: 2 } },
            { title: "不怕复杂和波动", copy: "高风险高回报反而更有趣。", weights: { beelzemon: 5, security: 2, alphamon: 2 } }
        ]
    },
    {
        category: "获胜节奏",
        title: "你更喜欢怎样赢下对局？",
        help: "这会影响系统推荐偏快攻、中速、防守还是爆发卡组。",
        options: [
            { title: "养出大哥后突破", copy: "我喜欢成长到强力终端再压制。", weights: { greymon: 4, alphamon: 4, gallantmon: 2 } },
            { title: "持续制造攻击压力", copy: "希望每回合都能逼迫对手防守。", weights: { garurumon: 5, imperial: 3, greymon: 2 } },
            { title: "防住以后反击", copy: "我想靠恢复、解场和耐心扩大优势。", weights: { angel: 5, security: 4, alphamon: 1 } },
            { title: "关键回合爆发", copy: "前面铺垫，时机到了直接翻盘。", weights: { beelzemon: 5, imperial: 3, garurumon: 2 } }
        ]
    },
    {
        category: "角色偏好",
        title: "你最喜欢哪类数码宝贝气质？",
        help: "角色厨也很重要。第一套卡组如果自己喜欢，会更愿意练。",
        options: [
            { title: "主角、火焰、恐龙", copy: "亚古兽、太一、战斗暴龙兽路线。", weights: { greymon: 6, gallantmon: 2 } },
            { title: "速度、野兽、友情", copy: "加布兽、阿和、加鲁鲁兽路线。", weights: { garurumon: 6, imperial: 1 } },
            { title: "天使、神圣、防护", copy: "巴达兽、天使兽和安全区主题。", weights: { angel: 6, security: 2 } },
            { title: "黑暗、骑士、反英雄", copy: "别西卜兽、阿尔法兽或皇家骑士。", weights: { beelzemon: 4, alphamon: 4, gallantmon: 2 } }
        ]
    },
    {
        category: "预算路线",
        title: "你对预算和升级路线的期待是？",
        help: "具体价格会随地区和版本变化，这里只判断你愿意投入的方式。",
        options: [
            { title: "先便宜试水", copy: "能玩起来最重要，之后再补强。", weights: { greymon: 3, angel: 3, gallantmon: 2, imperial: 1 } },
            { title: "愿意围绕喜欢的角色升级", copy: "只要主题喜欢，可以慢慢补组件。", weights: { greymon: 2, garurumon: 2, beelzemon: 2, alphamon: 2, gallantmon: 2 } },
            { title: "想要长期可成长", copy: "希望第一套以后还有进阶空间。", weights: { greymon: 3, garurumon: 3, imperial: 3, alphamon: 2 } },
            { title: "预算不是首要问题", copy: "更看重玩法上限和独特体验。", weights: { alphamon: 4, beelzemon: 3, security: 3, garurumon: 2 } }
        ]
    },
    {
        category: "练习目标",
        title: "你最想通过第一套卡组练会什么？",
        help: "不同卡组适合训练不同基本功。",
        options: [
            { title: "进化曲线和攻击判断", copy: "先把游戏基础流程练扎实。", weights: { greymon: 5, gallantmon: 3, angel: 1 } },
            { title: "斩杀线和资源转换", copy: "学习把费用和手牌转成胜利。", weights: { garurumon: 5, imperial: 3, beelzemon: 2 } },
            { title: "防守、恢复和解场", copy: "理解怎样活下来并反击。", weights: { angel: 5, security: 4, alphamon: 1 } },
            { title: "复杂触发和爆发顺序", copy: "想练更高上限的连锁操作。", weights: { beelzemon: 5, alphamon: 3, imperial: 2 } }
        ]
    },
    {
        category: "对局心态",
        title: "失败后你更愿意复盘哪件事？",
        help: "复盘方式会暴露你适合哪种学习曲线。",
        options: [
            { title: "我哪回合该推出主轴？", copy: "关注时机、曲线和场面判断。", weights: { greymon: 4, gallantmon: 3, alphamon: 2 } },
            { title: "我有没有算错斩杀？", copy: "关注伤害、费用和手牌资源。", weights: { garurumon: 5, imperial: 3 } },
            { title: "我是不是解错目标？", copy: "关注防守资源和威胁优先级。", weights: { security: 5, angel: 3, gallantmon: 2 } },
            { title: "我的触发顺序对吗？", copy: "关注墓地、概率和爆发窗口。", weights: { beelzemon: 5, alphamon: 3 } }
        ]
    },
    {
        category: "容错偏好",
        title: "你能接受第一套卡组有多大波动？",
        help: "有些卡组上限很高，但新手期会更容易卡手或失误。",
        options: [
            { title: "越稳定越好", copy: "我想每局都知道自己该做什么。", weights: { greymon: 5, angel: 3, gallantmon: 2 } },
            { title: "可以小幅波动", copy: "只要核心计划清晰就行。", weights: { imperial: 3, garurumon: 3, gallantmon: 2, alphamon: 1 } },
            { title: "能接受明显波动", copy: "爆发和上限比稳定更吸引我。", weights: { beelzemon: 5, garurumon: 2, alphamon: 2 } },
            { title: "慢也没关系", copy: "我愿意用更长对局换更强控制感。", weights: { security: 5, angel: 3, alphamon: 1 } }
        ]
    },
    {
        category: "第一套定位",
        title: "你希望这套卡组在你的收藏里扮演什么角色？",
        help: "最后一题会帮助区分“教学卡组”“长期主力”和“个性卡组”。",
        options: [
            { title: "教学用第一套", copy: "最好能帮我理解游戏核心规则。", weights: { greymon: 5, angel: 3, gallantmon: 2 } },
            { title: "长期主力", copy: "我希望之后不断升级它。", weights: { greymon: 3, garurumon: 3, imperial: 3, alphamon: 2 } },
            { title: "个性和帅气优先", copy: "强度可以慢慢调，主题一定要喜欢。", weights: { beelzemon: 3, alphamon: 3, gallantmon: 3, imperial: 2 } },
            { title: "朋友局恶心一下", copy: "我想体验控制、安全区和反制。", weights: { security: 5, angel: 2, beelzemon: 1 } }
        ]
    }
];

const STORAGE_KEY = "digimonDeckQuizState";

const defaultState = {
    currentStep: 0,
    answers: Array(questions.length).fill(null),
    lastResult: null
};

const state = loadState();

const form = document.getElementById("quizForm");
const questionMount = document.getElementById("questionMount");
const progressBar = document.getElementById("progressBar");
const categoryLabel = document.getElementById("categoryLabel");
const stepCount = document.getElementById("stepCount");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");
const formHint = document.getElementById("formHint");
const resultPanel = document.getElementById("resultPanel");

function loadState() {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (!savedState) return { ...defaultState, answers: [...defaultState.answers] };

    const parsed = JSON.parse(savedState);
    const answers = Array.isArray(parsed.answers) && parsed.answers.length === questions.length
        ? parsed.answers.map((answer) => Number.isInteger(answer) ? answer : null)
        : [...defaultState.answers];

    return {
        currentStep: Number.isInteger(parsed.currentStep) ? Math.min(Math.max(parsed.currentStep, 0), questions.length - 1) : 0,
        answers,
        lastResult: typeof parsed.lastResult === "string" ? parsed.lastResult : null
    };
}

function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function renderQuestion() {
    const question = questions[state.currentStep];
    categoryLabel.textContent = question.category;
    stepCount.textContent = `第 ${state.currentStep + 1} / ${questions.length} 题`;
    questionMount.innerHTML = `
        <h2>${question.title}</h2>
        <p class="question-help">${question.help}</p>
        <div class="options">
            ${question.options.map((option, index) => `
                <label class="option">
                    <input type="radio" name="answer" value="${index}" ${state.answers[state.currentStep] === index ? "checked" : ""}>
                    <span>
                        <span class="option-title">${option.title}</span>
                        <span class="option-copy">${option.copy}</span>
                    </span>
                </label>
            `).join("")}
        </div>
    `;
    updateControls();
}

function answeredCount() {
    return state.answers.filter((answer) => answer !== null).length;
}

function updateControls() {
    const count = answeredCount();
    saveState();
    const isLast = state.currentStep === questions.length - 1;
    progressBar.style.width = `${(count / questions.length) * 100}%`;
    prevBtn.disabled = state.currentStep === 0;
    nextBtn.disabled = state.answers[state.currentStep] === null || isLast;
    submitBtn.disabled = count < questions.length;
    nextBtn.style.display = isLast ? "none" : "inline-block";
    submitBtn.style.display = isLast ? "inline-block" : "none";
    formHint.textContent = count === questions.length
        ? "已完成全部题目，可以查看推荐。"
        : `已完成 ${count}/${questions.length} 题。`;
}

function calculateScores() {
    const scores = Object.fromEntries(Object.keys(deckProfiles).map((key) => [key, 0]));
    state.answers.forEach((answerIndex, questionIndex) => {
        if (answerIndex === null) return;
        const option = questions[questionIndex].options[answerIndex];
        Object.entries(option.weights).forEach(([deckKey, points]) => {
            scores[deckKey] += points;
        });
    });
    return Object.entries(scores).sort((a, b) => b[1] - a[1]);
}

function scorePercent(score, topScore) {
    return topScore === 0 ? 0 : Math.round((score / topScore) * 100);
}

function renderScoreBoard(rankedScores) {
    const topScore = rankedScores[0][1];
    return rankedScores.slice(0, 5).map(([deckKey, score]) => {
        const deck = deckProfiles[deckKey];
        return `
            <div class="score-row">
                <span>${deck.shortName}</span>
                <span class="score-track"><span class="score-fill" style="width: ${scorePercent(score, topScore)}%"></span></span>
                <strong>${score}</strong>
            </div>
        `;
    }).join("");
}

function buildResultText(deck, topScore, alternatives) {
    const altText = alternatives.map(([deckKey, score]) => `${deckProfiles[deckKey].name}（${score} 分）`).join("、");
    return `我的数码宝贝新手卡组推荐是：${deck.name}。匹配分数：${topScore}。备选方向：${altText}。上手建议：${deck.practice.join("；")}。`;
}

function renderResult() {
    const rankedScores = calculateScores();
    const [topKey, topScore] = rankedScores[0];
    const topDeck = deckProfiles[topKey];
    const alternativeScores = rankedScores.slice(1, 3);
    const alternatives = alternativeScores.map(([deckKey, score]) => {
        const deck = deckProfiles[deckKey];
        return `
            <div class="alt-card">
                <strong>${deck.name}</strong>
                <p>分数 ${score}：${deck.summary}</p>
            </div>
        `;
    }).join("");

    state.lastResult = buildResultText(topDeck, topScore, alternativeScores);
    saveState();

    resultPanel.innerHTML = `
        <span class="eyebrow">✨ 最适合你的入门方向</span>
        <h2 class="deck-name">${topDeck.name}</h2>
        <span class="match">匹配分数 ${topScore}</span>
        <div class="tag-list">${topDeck.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
        <p>${topDeck.summary}</p>
        <h3>为什么适合你</h3>
        <ul class="result-list">${topDeck.goodFor.map((item) => `<li>${item}</li>`).join("")}</ul>
        <h3>上手练习建议</h3>
        <ul class="result-list">${topDeck.practice.map((item) => `<li>${item}</li>`).join("")}</ul>
        <h3>备选方向</h3>
        <div class="alternatives">${alternatives}</div>
        <h3>分数构成</h3>
        <div class="score-board">${renderScoreBoard(rankedScores)}</div>
        <div class="notice"><strong>购买前提醒：</strong>${topDeck.caution} 不同版本和地区环境会变化，建议先用代理卡或线上工具试打 3～5 局，再决定实体卡投入。</div>
        <div class="result-actions">
            <button type="button" class="copy-btn" id="copyResultBtn">复制推荐结果</button>
        </div>
    `;
}

questionMount.addEventListener("change", (event) => {
    if (event.target.name !== "answer") return;
    state.answers[state.currentStep] = Number(event.target.value);
    state.lastResult = null;
    updateControls();
});

prevBtn.addEventListener("click", () => {
    if (state.currentStep === 0) return;
    state.currentStep -= 1;
    saveState();
    renderQuestion();
});

nextBtn.addEventListener("click", () => {
    if (state.answers[state.currentStep] === null || state.currentStep === questions.length - 1) return;
    state.currentStep += 1;
    saveState();
    renderQuestion();
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (answeredCount() < questions.length) {
        formHint.textContent = "还有题目没选，请完成全部题目。";
        return;
    }
    renderResult();
});

resetBtn.addEventListener("click", () => {
    state.currentStep = 0;
    state.answers = Array(questions.length).fill(null);
    state.lastResult = null;
    saveState();
    resultPanel.innerHTML = '<span class="eyebrow">📋 推荐结果</span><p class="empty-result">完成全部题目后，这里会显示你的主推荐卡组、两个备选方向、分数构成、上手练习建议和购买前提醒。</p>';
    renderQuestion();
});

resultPanel.addEventListener("click", async (event) => {
    if (event.target.id !== "copyResultBtn" || !state.lastResult) return;
    await navigator.clipboard.writeText(state.lastResult);
    event.target.textContent = "已复制";
});

renderQuestion();
