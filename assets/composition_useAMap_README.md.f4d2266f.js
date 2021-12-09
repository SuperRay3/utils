import{_ as n,c as a,o as s,a as t}from"./app.d9765ec6.js";const m='{"title":"useAMap","description":"","frontmatter":{},"relativePath":"composition/useAMap/README.md","lastUpdated":1639036263590}',p={},o=t(`<h1 id="useamap" tabindex="-1">useAMap <a class="header-anchor" href="#useamap" aria-hidden="true">#</a></h1><p>\u786E\u4FDD\u9AD8\u5FB7 JS API \u52A0\u8F7D\u5B8C\u6210\u540E\u518D\u8FDB\u884C\u81EA\u5B9A\u4E49\u64CD\u4F5C\uFF0C\u901A\u8FC7\u63D0\u4F9B <code>onMapLoaded</code> \u5141\u8BB8\u6CE8\u518C\u81EA\u5B9A\u4E49\u64CD\u4F5C\u3002</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> unref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> useAMap <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@rayuse/composition&quot;</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> mapRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span><span class="token keyword">null</span> <span class="token operator">|</span> HTMLDivElement<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> onMapLoaded<span class="token punctuation">,</span> map<span class="token punctuation">,</span> loader <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useAMap</span><span class="token punctuation">(</span>mapRef<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    key<span class="token operator">:</span> <span class="token string">&#39;xxxxxxxxxxxxx&#39;</span><span class="token punctuation">,</span>
    version<span class="token operator">:</span> <span class="token string">&#39;2.0&#39;</span><span class="token punctuation">,</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;AMap.Scale&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;AMap.ToolBar&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">onMapLoaded</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    map<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">addControl</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">loader<span class="token punctuation">.</span>value<span class="token punctuation">.</span>Scale</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    map<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">addControl</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">loader<span class="token punctuation">.</span>value<span class="token punctuation">.</span>ToolBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mapRef<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>map-wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.map-wrapper</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre></div>`,3),e=[o];function c(u,l,k,i,r,d){return s(),a("div",null,e)}var _=n(p,[["render",c]]);export{m as __pageData,_ as default};
