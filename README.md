# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## 使用说明
### 添加照片
在src/content/gallery下新增一个md文件，文件里的
title是照片标题，
description是照片描述
image是图片路径
date是上传日期
featured是否为精选
albums是所属专辑
图片上传到cloudflare的r2存储桶

### 新增专辑
在src/content/albums下新增一个md文件，文件里的
title是专辑名称
description是专辑描述
coverImage是转接封面
date是专辑建立日期
featured暂时未用上
在src/pages/albums下新增同名的astro文件，可以复制同目录下其他文件的代码，但需要注意把其中头部的3处地方要修改成md同名。

### 新增视频专题
在src/pages/video下新增专题名astro文件，那么专题列表/video.astro会自动新增条目。
在专题名astro文件中，可以维护该专题的基本信息和内容。

### 维护个人信息
在src/content/pages/about.md中修改。

每次更新后，提交到GitHub，随后cloudflare会自动获取并运行生成。