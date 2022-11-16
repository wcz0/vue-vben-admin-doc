import{_ as n,f as a,e as s,N as t}from"./plugin-vue_export-helper.147b70e9.js";const h='{"title":"\u5F15\u5165\u5916\u90E8\u6A21\u5757","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":3,"title":"\u5168\u5C40\u4F7F\u7528","slug":"\u5168\u5C40\u4F7F\u7528"},{"level":3,"title":"\u5C40\u90E8\u4F7F\u7528","slug":"\u5C40\u90E8\u4F7F\u7528"},{"level":2,"title":"\u6CE8\u610F","slug":"\u6CE8\u610F"}],"relativePath":"guide/lib.md","lastUpdated":1668603914619}',p={},e=t(`__VP_STATIC_START__<h1 id="\u5F15\u5165\u5916\u90E8\u6A21\u5757"><a class="header-anchor" href="#\u5F15\u5165\u5916\u90E8\u6A21\u5757" aria-hidden="true">#</a> \u5F15\u5165\u5916\u90E8\u6A21\u5757</h1><p>\u9664\u4E86\u81EA\u5E26\u7EC4\u4EF6\u4EE5\u5916\uFF0C\u6709\u65F6\u6211\u4EEC\u8FD8\u9700\u8981\u5F15\u5165\u5176\u4ED6\u5916\u90E8\u6A21\u5757\u3002\u6211\u4EEC\u4EE5 <code>ant-design-vue</code> \u4E3A\u4F8B\uFF1A</p><h2 id="\u5B89\u88C5"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p>\u5B89\u88C5 <code>ant-design-vue</code></p><div class="language-bash"><pre><code><span class="token comment"># \u5728\u7EC8\u7AEF\u8F93\u5165\u4E0B\u9762\u7684\u547D\u4EE4\u5B8C\u6210\u5B89\u88C5</span>
<span class="token function">yarn</span> <span class="token function">add</span> ant-design-vue
</code></pre></div><h2 id="\u4F7F\u7528"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><h3 id="\u5168\u5C40\u4F7F\u7528"><a class="header-anchor" href="#\u5168\u5C40\u4F7F\u7528" aria-hidden="true">#</a> \u5168\u5C40\u4F7F\u7528</h3><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Antd <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Antd<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u5C40\u90E8\u4F7F\u7528"><a class="header-anchor" href="#\u5C40\u90E8\u4F7F\u7528" aria-hidden="true">#</a> \u5C40\u90E8\u4F7F\u7528</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      Button<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u6CE8\u610F"><a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a> \u6CE8\u610F</h2><ul><li>\u5982\u679C\u7EC4\u4EF6\u6709\u4F9D\u8D56\u6837\u5F0F\uFF0C\u5219\u9700\u8981\u518D\u5F15\u5165\u6837\u5F0F\u6587\u4EF6</li></ul>__VP_STATIC_END__`,12),o=[e];function c(l,u,i,k,r,d){return s(),a("div",null,o)}var f=n(p,[["render",c]]);export{h as __pageData,f as default};
