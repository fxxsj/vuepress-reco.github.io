import{_ as t,r as e,o as l,c,a as n,b as a,d as o,w as i,e as s}from"./app-B2vjTo6J.js";const r={},u=s(`<h2 id="类型" tabindex="-1"><a class="header-anchor" href="#类型"><span>类型</span></a></h2><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">NavbarItemBasic</span> <span class="token punctuation">{</span></span>
<span class="line">  text<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">NavbarItem</span> <span class="token keyword">extends</span> <span class="token class-name">NavbarItemBasic</span> <span class="token punctuation">{</span></span>
<span class="line">  children<span class="token operator">?</span><span class="token operator">:</span> NavbarItemBasic<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">Navbar</span> <span class="token operator">=</span> NavbarItem<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),k={class:"custom-container tip"},d=s('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p>',2),v=s(`<h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> navbar <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;指南&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/docs/guide/introduce&#39;</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">&#39;Compass&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    text<span class="token operator">:</span> <span class="token string">&#39;参考&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    icon<span class="token operator">:</span> <span class="token string">&#39;Document&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    children<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        text<span class="token operator">:</span> <span class="token string">&#39;配置&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        children<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;主题配置&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/docs/theme/frontmatter&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;Markdown 扩展&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/docs/theme/custom-container&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;高级&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/docs/theme/custom-catalog-title&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        text<span class="token operator">:</span> <span class="token string">&#39;插件&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        children<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;page&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/docs/plugins/page&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;comments&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/docs/plugins/comments&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;vue-previews&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/docs/plugins/vue-previews&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;bulletin-popover&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/docs/plugins/bulletin-popover&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    text<span class="token operator">:</span> <span class="token string">&#39;版本&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    icon<span class="token operator">:</span> <span class="token string">&#39;SubVolume&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    children<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;2.x(alpha)&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;https://vuepress-theme-reco.recoluan.com/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        text<span class="token operator">:</span> <span class="token string">&#39;1.x&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        link<span class="token operator">:</span> <span class="token string">&#39;https://vuepress-theme-reco.recoluan.com/views/1.x/&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;留言板&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/docs/message-board&#39;</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">&#39;Chat&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function m(b,g){const p=e("RouteLink");return l(),c("div",null,[u,n("div",k,[d,n("p",null,[a("设置图标请参考 "),o(p,{to:"/docs/guide/icon.html"},{default:i(()=>[a("指南 -> 图标")]),_:1})])]),v])}const x=t(r,[["render",m],["__file","navbar.html.vue"]]),_=JSON.parse('{"path":"/docs/theme/navbar.html","title":"导航栏","lang":"zh-CN","frontmatter":{"title":"导航栏","date":"2023-02-12T00:00:00.000Z"},"headers":[{"level":2,"title":"类型","slug":"类型","link":"#类型","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1722792062000,"updatedTime":1722792062000,"contributors":[{"name":"reco_luan","email":"recoluan@qq.com","commits":1}]},"filePathRelative":"docs/theme/navbar.md"}');export{x as comp,_ as data};
