# Digimon 新手卡组推荐测试

这是一个静态测试网站，用 8 道题帮助数码宝贝卡牌游戏新手匹配第一套入门卡组方向。

## 本地运行

```bash
python3 -m http.server 8000
```

然后访问：

```text
http://127.0.0.1:8000/index.html
```


## 在线运行（GitHub Pages）

这个项目是纯静态网站，不需要构建步骤。推荐用 GitHub Pages 在线运行：

### 方法一：使用已内置的 GitHub Actions 自动部署

1. 把代码推送到 GitHub 仓库的 `main` 分支。
2. 在 GitHub 仓库页面打开 `Settings` → `Pages`。
3. 在 `Build and deployment` 的 `Source` 中选择 `GitHub Actions`。
4. 回到 `Actions` 页面，运行或等待 `Deploy static site to GitHub Pages` 工作流完成。
5. 部署成功后，在 `Settings` → `Pages` 里复制线上地址。

线上地址通常是：

```text
https://<你的 GitHub 用户名>.github.io/<仓库名>/
```

### 方法二：使用 GitHub Pages 分支部署

如果不想用 Actions，也可以在 `Settings` → `Pages` 中选择：

- `Source`: `Deploy from a branch`
- `Branch`: `main`
- `Folder`: `/ (root)`

保存后等待 GitHub Pages 构建完成即可。

## 自动化测试

```bash
npm test
```

测试会用 Node.js 加载 `app.js`，模拟最小 DOM、`localStorage` 和剪贴板环境，检查：

- 8 个卡组档案存在。
- 8 道问题存在并能渲染第一题。
- 未答完时提交按钮保持禁用。
- 一组固定答案能稳定推荐战斗暴龙兽路线。
- 结果面板会渲染推荐和复制按钮。
- 推荐结果会写入本地状态。

## 手动回归测试

1. 运行 `python3 -m http.server 8000`。
2. 打开 `http://127.0.0.1:8000/index.html`。
3. 验证首页显示 8 道题、8 个卡组方向、3 项练习建议。
4. 不选择答案时确认“下一题”不可用。
5. 选择答案后点击“下一题”，确认题号和进度条更新。
6. 刷新页面，确认答题进度仍然保留。
7. 完成全部 8 题，点击“查看推荐”。
8. 确认结果包含主推荐、两个备选方向、分数构成、练习建议和购买提醒。
9. 点击“复制推荐结果”，确认按钮文字变为“已复制”。
10. 点击“重新开始”，确认回到第一题并清空结果。

## 文件结构

- `index.html`：页面结构和问卷容器。
- `styles.css`：响应式布局、卡片视觉、结果区和移动端样式。
- `app.js`：卡组数据、问题数据、逐题状态、权重评分和结果渲染逻辑。
- `tests/quiz.test.js`：Node.js 冒烟测试，覆盖问卷数据、评分和结果渲染。
- `map.html`：保留的旧跑团地图页面。

## 调整推荐内容

- 在 `app.js` 的 `deckProfiles` 中添加或修改卡组展示文案。
- 在 `app.js` 的 `questions` 中调整题目、选项和权重。
- 每个选项的 `weights` 可以同时给多个卡组加分，用于表达“这个选择也部分适合其他卡组”。
