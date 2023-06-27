(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{658:function(t,a,s){"use strict";s.r(a);var r=s(6),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#声明式代码的更新性能消耗-找出差异的性能消耗-直接修改的性能消耗"}},[t._v("声明式代码的更新性能消耗 = 找出差异的性能消耗 + 直接修改的性能消耗")]),s("ul",[s("li",[s("a",{attrs:{href:"#而所谓的虚拟dom-就是为了最小化找出差异这一步的性能消耗而出现的。"}},[t._v("而所谓的虚拟DOM，就是为了最小化找出差异这一步的性能消耗而出现的。")])]),s("li",[s("a",{attrs:{href:"#比较innerhtml和虚拟dom的性能"}},[t._v("比较innerHTML和虚拟DOM的性能")])]),s("li",[s("a",{attrs:{href:"#innerhtml创建页面的性能-html字符串拼接的计算量-innerhtml的dom计算量"}},[t._v("innerHTML创建页面的性能：HTML字符串拼接的计算量+innerHTML的DOM计算量")])]),s("li",[s("a",{attrs:{href:"#虚拟dom创建页面的性能-创建javascript对象的计算量-创建真实dom的计算量"}},[t._v("虚拟DOM创建页面的性能：创建Javascript对象的计算量+创建真实DOM的计算量")])]),s("li",[s("a",{attrs:{href:"#对比维度"}},[t._v("对比维度")])])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"声明式代码的更新性能消耗-找出差异的性能消耗-直接修改的性能消耗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#声明式代码的更新性能消耗-找出差异的性能消耗-直接修改的性能消耗"}},[t._v("#")]),t._v(" 声明式代码的更新性能消耗 = 找出差异的性能消耗 + 直接修改的性能消耗")]),t._v(" "),s("h3",{attrs:{id:"而所谓的虚拟dom-就是为了最小化找出差异这一步的性能消耗而出现的。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#而所谓的虚拟dom-就是为了最小化找出差异这一步的性能消耗而出现的。"}},[t._v("#")]),t._v(" 而所谓的虚拟DOM，就是为了最小化找出差异这一步的性能消耗而出现的。")]),t._v(" "),s("p",[t._v("采用虚拟DOM的更新技术的性能理论上不可能比原生JavaScript操作DOM更高，这里强调了“理论上”。\n因为：我们很难写出绝对优化的命令式代码，尤其是当应用程序的规模很大的时候。")]),t._v(" "),s("h3",{attrs:{id:"比较innerhtml和虚拟dom的性能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#比较innerhtml和虚拟dom的性能"}},[t._v("#")]),t._v(" 比较innerHTML和虚拟DOM的性能")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" html "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\n<div><span>...<span></div>\n")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("接着将该字符串赋值给DOM元素的innerHTML属性：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("div"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" html\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"innerhtml创建页面的性能-html字符串拼接的计算量-innerhtml的dom计算量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#innerhtml创建页面的性能-html字符串拼接的计算量-innerhtml的dom计算量"}},[t._v("#")]),t._v(" innerHTML创建页面的性能：HTML字符串拼接的计算量+innerHTML的DOM计算量")]),t._v(" "),s("h3",{attrs:{id:"虚拟dom创建页面的性能-创建javascript对象的计算量-创建真实dom的计算量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#虚拟dom创建页面的性能-创建javascript对象的计算量-创建真实dom的计算量"}},[t._v("#")]),t._v(" 虚拟DOM创建页面的性能：创建Javascript对象的计算量+创建真实DOM的计算量")]),t._v(" "),s("h3",{attrs:{id:"对比维度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对比维度"}},[t._v("#")]),t._v(" 对比维度")]),t._v(" "),s("p",[t._v("性能差")]),t._v(" "),s("ul",[s("li",[t._v("innerHTML（模板） 【心智负担中等，性能差】")]),t._v(" "),s("li",[t._v("虚拟DOM 【心智负担小，可维护性强，性能不错】")]),t._v(" "),s("li",[t._v("原生Javascript 【心智负担大，可维护性差，性能高】\n性能高")])])])}),[],!1,null,null,null);a.default=n.exports}}]);