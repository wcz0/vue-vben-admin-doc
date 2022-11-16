import{_ as n,f as a,e as s,N as t}from"./plugin-vue_export-helper.147b70e9.js";const g='{"title":"Markdown","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Props","slug":"props"},{"level":3,"title":"Methods","slug":"methods"}],"relativePath":"components/markdown.md","lastUpdated":1668603914619}',p={},o=t(`__VP_STATIC_START__<h1 id="markdown"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> Markdown</h1><p>\u57FA\u4E8E <a href="https://github.com/Vanessa219/vditor" target="_blank" rel="noopener noreferrer">Vditor</a> \u7684 MarkDown \u7F16\u8F91\u5668</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p-4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toggleTheme<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mb-2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u9ED1\u6697\u4E3B\u9898<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MarkDown</span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>markDownRef<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> unref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> MarkDown<span class="token punctuation">,</span> MarkDownActionType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Markdown&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> MarkDown <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> markDownRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>Nullable<span class="token operator">&lt;</span>MarkDownActionType<span class="token operator">&gt;&gt;</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> valueRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
# title

# content
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">function</span> <span class="token function">toggleTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> markDown <span class="token operator">=</span> <span class="token function">unref</span><span class="token punctuation">(</span>markDownRef<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>markDown<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> vditor <span class="token operator">=</span> markDown<span class="token punctuation">.</span><span class="token function">getVditor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        vditor<span class="token punctuation">.</span><span class="token function">setTheme</span><span class="token punctuation">(</span><span class="token string">&#39;dark&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> valueRef<span class="token punctuation">,</span>
        toggleTheme<span class="token punctuation">,</span>
        markDownRef<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u9664\u4EE5\u4E0B\u4E24\u4E2A\u5916\uFF0Cprops \u8FD8\u53EF\u4EE5\u4F20\u5165 vidtor \u7684\u6240\u6709\u5C5E\u6027\u3002\u53EF\u7528 v-bind \u7EDF\u4E00\u7ED1\u5B9A</p></div><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model</td><td><code>string</code></td><td>-</td><td>-</td><td>\u53CC\u5411\u7ED1\u5B9A\u6587\u672C\u503C</td></tr><tr><td>height</td><td><code>number</code></td><td>-</td><td>-</td><td>\u9AD8\u5EA6</td></tr></tbody></table><h3 id="methods"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>getVditor</td><td><code>Function</code></td><td>\u83B7\u53D6 vditor \u5B9E\u4F8B</td></tr></tbody></table>__VP_STATIC_END__`,9),e=[o];function c(l,u,k,r,i,d){return s(),a("div",null,e)}var m=n(p,[["render",c]]);export{g as __pageData,m as default};
