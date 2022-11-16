import{_ as n,f as t,e as a,N as s}from"./plugin-vue_export-helper.147b70e9.js";const g='{"title":"Upload","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Config","slug":"config"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"}],"relativePath":"components/upload.md","lastUpdated":1668603914619}',p={},o=s(`__VP_STATIC_START__<h1 id="upload"><a class="header-anchor" href="#upload" aria-hidden="true">#</a> Upload</h1><p>\u6587\u4EF6\u4E0A\u4F20\u7EC4\u4EF6</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BasicUpload</span> <span class="token attr-name">:maxSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:maxNumber</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:api</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>uploadApi<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> BasicUpload <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Upload&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> uploadApi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/api/sys/upload&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> BasicUpload <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        uploadApi<span class="token punctuation">,</span>
        <span class="token function-variable function">handleChange</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">list</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          createMessage<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u5DF2\u4E0A\u4F20\u6587\u4EF6</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="config"><a class="header-anchor" href="#config" aria-hidden="true">#</a> Config</h2><p><code>.env.development</code> \u548C <code>.env.production</code> \u914D\u7F6E\u5F00\u53D1\u548C\u751F\u4EA7\u7684\u6587\u4EF6\u4E0A\u4F20\u5730\u5740</p><div class="language-bash"><pre><code><span class="token comment"># .env.development</span>

<span class="token assign-left variable">VITE_PROXY</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;/upload&quot;</span>,<span class="token string">&quot;http://localhost:3001/upload&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>

<span class="token comment"># \u5982\u679C\u6CA1\u6709\u8DE8\u57DF\u95EE\u9898\uFF0C\u5219\u76F4\u63A5\u4F7F\u7528\u771F\u5B9E\u4E0A\u4F20\u5730\u5740</span>
<span class="token assign-left variable">VITE_GLOB_UPLOAD_URL</span><span class="token operator">=</span>/upload

<span class="token comment"># .env.production</span>
<span class="token assign-left variable">VITE_GLOB_UPLOAD_URL</span><span class="token operator">=</span>/upload

</code></pre></div><h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>value</td><td><code>string[]</code></td><td>-</td><td>-</td><td>\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868\uFF0C\u652F\u6301v-model</td></tr><tr><td>showPreviewNumber</td><td><code>boolean</code></td><td>true</td><td>-</td><td>\u662F\u5426\u663E\u793A\u9884\u89C8\u6570\u91CF</td></tr><tr><td>emptyHidePreview</td><td><code>boolean</code></td><td>false</td><td>-</td><td>\u6CA1\u6709\u4E0A\u4F20\u6587\u4EF6\u65F6\u662F\u5426\u9690\u85CF\u9884\u89C8</td></tr><tr><td>helpText</td><td><code>string</code></td><td>-</td><td>-</td><td>\u5E2E\u52A9\u6587\u672C</td></tr><tr><td>maxSize</td><td><code>number</code></td><td>2</td><td>-</td><td>\u5355\u4E2A\u6587\u4EF6\u6700\u5927\u4F53\u79EF\uFF0C\u5355\u4F4D M</td></tr><tr><td>maxNumber</td><td><code>number</code></td><td>Infinity</td><td>-</td><td>\u6700\u5927\u4E0A\u4F20\u6570\u91CF\uFF0CInfinity \u5219\u4E0D\u9650\u5236</td></tr><tr><td>accept</td><td><code>string[]</code></td><td>-</td><td>-</td><td>\u9650\u5236\u4E0A\u4F20\u683C\u5F0F\uFF0C\u53EF\u4F7F\u7528\u6587\u4EF6\u540E\u7F00\u540D(\u70B9\u53F7\u53EF\u9009)\u6216MIME\u5B57\u7B26\u4E32\u3002\u4F8B\u5982 <code>[&#39;.doc,&#39;,&#39;docx&#39;,&#39;application/msword&#39;,&#39;image/*&#39;]</code></td></tr><tr><td>multiple</td><td><code>boolean</code></td><td>-</td><td>-</td><td>\u5F00\u542F\u591A\u6587\u4EF6\u4E0A\u4F20</td></tr><tr><td>uploadParams</td><td><code>any</code></td><td>-</td><td>-</td><td>\u4E0A\u4F20\u643A\u5E26\u7684\u53C2\u6570</td></tr><tr><td>api</td><td><code>Fn</code></td><td>-</td><td>-</td><td>\u4E0A\u4F20\u63A5\u53E3\uFF0C\u4E3A\u4E0A\u9762\u914D\u7F6E\u7684\u63A5\u53E3</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th><th>\u8BF4\u660E</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>change</td><td><code>(fileList)=&gt;void</code></td><td></td><td>\u6587\u4EF6\u5217\u8868\u5185\u5BB9\u6539\u53D8\u89E6\u53D1\u4E8B\u4EF6</td><td></td></tr><tr><td>delete</td><td><code>(record)=&gt;void</code></td><td></td><td>\u5728\u4E0A\u4F20\u5217\u8868\u4E2D\u5220\u9664\u6587\u4EF6\u7684\u4E8B\u4EF6</td><td></td></tr><tr><td>preview-delete</td><td><code>(url:string)=&gt;void</code></td><td></td><td>\u5728\u9884\u89C8\u5217\u8868\u4E2D\u5220\u9664\u6587\u4EF6\u7684\u4E8B\u4EF6</td><td>2.5.3</td></tr></tbody></table>__VP_STATIC_END__`,11),e=[o];function c(d,l,u,i,r,k){return a(),t("div",null,e)}var m=n(p,[["render",c]]);export{g as __pageData,m as default};
