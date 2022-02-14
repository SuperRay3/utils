import{_ as n,c as s,o as a,a as t}from"./app.74b9dfed.js";const m='{"title":"useStore","description":"","frontmatter":{},"relativePath":"composition/useStore/README.md","lastUpdated":1644809506617}',o={},p=t(`<h1 id="usestore" tabindex="-1">useStore <a class="header-anchor" href="#usestore" aria-hidden="true">#</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>vue 2 composition \u4E13\u7528</p></div><p>\u4F7F vue 2 \u73AF\u5883\u4E2D\u80FD\u50CF vue 3 \u4E2D\u4E00\u6837\u4F7F\u7528 <code>useStore</code> \u83B7\u53D6 vuex \u72B6\u6001</p><div class="language-js"><pre><code><span class="token comment">// main.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> provideStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@rayuse/composition&#39;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> &#39;@<span class="token operator">/</span>store


<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">provideStore</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>
import { useStore } from &#39;@rayuse/composition&#39;

export default {
	setup() {
		const $store = useStore()
	}
}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,5),e=[p];function c(u,r,i,l,k,d){return a(),s("div",null,e)}var f=n(o,[["render",c]]);export{m as __pageData,f as default};
