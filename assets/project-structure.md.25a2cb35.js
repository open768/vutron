import{_ as s,c as n,o as a,a as e}from"./app.4b285366.js";const y=JSON.parse('{"title":"Project Structure","description":"","frontmatter":{},"headers":[],"relativePath":"project-structure.md"}'),l={name:"project-structure.md"},o=e(`<h1 id="project-structure" tabindex="-1">Project Structure <a class="header-anchor" href="#project-structure" aria-hidden="true">#</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .github - GitHub files (only used for Vutron GitHub project contributions)</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ ISSUE_TEMPLATE/</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ resources/ - GitHub resources used for README.md, etc.</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ workflows/ - GitHub workflows definition</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ dependabot.yml</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ FUNDING.yml</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ buildAssets - Package resource (icon, logo, etc.) file used for Electron build</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ icons/</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ dist/ - Output directory used to build the package</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ docs/ - Project documents (optionally enabled)</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ .vitepress/</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  └─ config.mts - VitePress configuration file used for document hosting</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ public/ - Root resource directory for VitePress documentation pages</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ node_modules/</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ src/</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ main/ - Main (Electron) process source code</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ utils/ - Main process utilities</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  └─ Constants.ts - Main global definition</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  └─ Menus.ts - Main global menu definition</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  └─ index.ts - Main process entry point</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  └─ IPCs.ts - Main process ipc handlers definition</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  └─ MainRunner.ts - Main process main window processing</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ preload/ - Preload (Electron-Vue communication bridge) process source code</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  └─ index.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ renderer/ - Renderer (Vue) process source code</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ components/ - Vue components collection</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  └─ layout/ - Layout components</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ locales/ - Vue i18n language resource file</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ plugins/ - Vue plugin definition</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ public/ - Vue static resources</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  └─ images/</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ router/ - Vue routing definition</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ screens/ - Vue screen component</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  └─ ErrorScreen.vue - Screen displayed when renderer process and routing errors occur</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  └─ MainScreen.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  └─ SecondScreen.vue - Sample screen</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ store/ - Pinia store (Global state management) definition</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ utils/ - Renderer process utilities</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ App.vue - Vue app&#39;s root component</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ index.html - Root static index loaded by Electron renderer process</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ └─ main.ts - Renderer process entry point</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .editorconfig - Editor recommended configuration file for IDE</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .eslintignore - List of files to be ignored by ESLint</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .eslintrc.json - ESLint rule configurations</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .gitignore - List of files to not upload to Git</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .prettierignore - List of files to disable Prettier file formatting</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .prettierrc - Prettier rule configurations</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ CODE_OF_CONDUCT.md - Files used only on GitHub</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ electron-builder.json5</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ LICENSE - Project license file</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ package.json - NodeJS package configurations</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ package-lock.json</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ tsconfig.json - TypeScript configurations</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ tsconfig.node.json - TypeScript configurations</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ vite.config.ts - Vite compiler build configurations</span></span>
<span class="line"><span style="color:#A6ACCD;">└─ README.md - Files used only on GitHub</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,2),p=[o];function c(t,r,i,C,A,u){return a(),n("div",null,p)}const D=s(l,[["render",c]]);export{y as __pageData,D as default};
