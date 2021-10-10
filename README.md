# vue3-cms

#### .editorconfig

- 保持编辑器的风格统一 （vscode 需要安装插件 EditorConfig for VS Code）

#### .prettierrc

- 设计编辑器的格式化风格

#### .eslint.js

- 安装插件 eslint，让编辑器可以识别错误
- 与 prettier 可能冲突，需要安装`eslint-config-prettier eslint-plugin-prettier`，然后在 eslint 里面继承插件`plugin:prettier/recommended`

#### husky

- 规范提交，指令 `npx husky-init && yarn `
- 提交前 通过 `yarn lint`来格式化代码
- 校验提交信息 `npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'`
