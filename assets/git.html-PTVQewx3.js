import{_ as s,o as n,c as a,e}from"./app-B2vjTo6J.js";const p={},t=e(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>用于生成 git 跳转地址和编辑链接。</p><p>如果我们文档项目存放在工程的子目录，比如 <code>/docs</code> 文件夹下，我们需要设置 <code>themeConfig.docsDir</code> 为 <code>./docs</code>。</p></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><p><strong>repo</strong></p><ul><li>类型： string</li><li>详情：项目仓库的 URL。它将被用作 仓库链接 的链接。仓库链接 将会显示为导航栏的最后一个元素。</li></ul><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token comment">// .vuepress/config.ts</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> recoTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress-theme-reco&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">recoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 如果你按照 \`organization/repository\` 的格式设置它</span></span>
<span class="line">    <span class="token comment">// 我们会将它作为一个 GitHub 仓库</span></span>
<span class="line">    repo<span class="token operator">:</span> <span class="token string">&#39;vuejs/vuepress&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 你也可以直接将它设置为一个 URL</span></span>
<span class="line">    repo<span class="token operator">:</span> <span class="token string">&#39;https://gitlab.com/foo/bar&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>docsRepo</strong></p><ul><li>类型： string</li><li>详情：文档源文件的仓库 URL 。它将会用于生成 编辑此页 的链接。如果你不设置该选项，则默认会使用 repo 配置项。但是如果你的文档源文件是在一个不同的仓库内，你就需要设置该配置项了。</li></ul><p><strong>docsBranch</strong></p><ul><li>类型： string</li><li>默认值： &#39;main&#39;</li><li>详情：文档源文件的仓库分支。它将会用于生成 编辑此页 的链接。</li></ul><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token comment">// .vuepress/config.ts</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> recoTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress-theme-reco&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">recoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    docsDir<span class="token operator">:</span> <span class="token string">&#39;/docs&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    docsRepo<span class="token operator">:</span> <span class="token string">&#39;https://github.com/vuepress-reco/vuepress-theme-reco&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    docsBranch<span class="token operator">:</span> <span class="token string">&#39;main&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>docsDir</strong></p><ul><li>类型： string</li><li>详情：文档项目存放在工程的子目录。如果我们文档项目存放在工程的子目录，比如 /docs 文件夹下，我们需要设置 themeConfig.docsDir 为 ./docs。务必要这样设置，因为这项配置与很多解析功能强相关。</li></ul>`,13),i=[t];function l(c,o){return n(),a("div",null,i)}const d=s(p,[["render",l],["__file","git.html.vue"]]),u=JSON.parse('{"path":"/docs/theme/git.html","title":"git 相关","lang":"zh-CN","frontmatter":{"title":"git 相关","date":"2024-02-23T00:00:00.000Z"},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]}],"git":{"createdTime":1722792062000,"updatedTime":1722792062000,"contributors":[{"name":"reco_luan","email":"recoluan@qq.com","commits":1}]},"filePathRelative":"docs/theme/git.md"}');export{d as comp,u as data};
