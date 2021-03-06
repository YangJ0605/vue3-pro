/* eslint-disable */
// https://gitmoji.dev/ 更多表情相关
// 相关文档 https://juejin.cn/post/6844903805499375630
// 检测提交信息 https://juejin.cn/post/6887391877801672711
module.exports = {
  types: [
    {
      value: ':tada: init',
      name: '🎉  init:      Init a project'
    },
    {
      value: ':construction: WIP',
      name: '💪  WIP:      Work in progress'
    },
    {
      value: ':sparkles: feat',
      name: '✨  feat:     A new feature'
    },
    {
      value: ':bug: fix',
      name: '🐛  fix:      A bug fix'
    },
    {
      value: ':hammer: refactor',
      name: '🔨  refactor: A code change that neither fixes a bug nor adds a feature'
    },
    {
      value: ':pencil: docs',
      name: '📝  docs:     Documentation only changes'
    },
    {
      value: ':white_check_mark: test',
      name: '✅  test:     Add missing tests or correcting existing tests'
    },
    {
      value: ':thought_balloon: chore',
      name: "🗯  chore:    Changes that don't modify src or test files. Such as updating build tasks, package manager"
    },
    {
      value: ':lipstick: ui',
      name: '💄 Updating the UI and style files.'
    },
    {
      value: ':art: style',
      name: '🎨 Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)'
    },
    {
      value: 'revert',
      name: '⏪  revert:   Revert to a commit'
    },
    {
      value: ':package: dep_up',
      name: '📦 Updating compiled files or packages.'
    },
    {
      value: ':green_heart: fixci',
      name: '💚 Fixing CI Build.'
    },
    {
      value: ':truck: mv',
      name: '🚚 Moving or renaming files.'
    },
    {
      value: ':fire: prune',
      name: '🔥 Removing code or files.'
    },
    {
      value: ':bookmark: release',
      name: '🔖 Releasing / Version tags.'
    },
    {
      value: ':rocket: first release',
      name: '🚀 first releast!'
    }
  ],

  scopes: [],

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix']
}
