(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{707:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#vue进阶"}},[t._v("vue进阶")]),a("ul",[a("li",[a("a",{attrs:{href:"#特征一-模板化"}},[t._v("特征一：模板化")])]),a("li",[a("a",{attrs:{href:"#特征二-组件化"}},[t._v("特征二：组件化")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"vue进阶"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue进阶"}},[t._v("#")]),t._v(" vue进阶")]),t._v(" "),a("h3",{attrs:{id:"特征一-模板化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特征一-模板化"}},[t._v("#")]),t._v(" 特征一：模板化")]),t._v(" "),a("h4",{attrs:{id:"插槽-考察点-以对比形式出现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插槽-考察点-以对比形式出现"}},[t._v("#")]),t._v(" 插槽 - 考察点 以对比形式出现")]),t._v(" "),a("h5",{attrs:{id:"默认插槽"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认插槽"}},[t._v("#")]),t._v(" 默认插槽")]),t._v(" "),a("p",[t._v("组件外部维护参数以及结构，内部安排位置")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("面试点 => 默认插槽实现方式 => 整个插槽聚合")])]),t._v(" "),a("li",[a("p",[t._v("问题 => 多个插槽节点希望分开布局 / 多个默认插槽会怎么样 => 多个重复渲染解析\n（不受到父级组件的slot是否拆分影响）")])])]),t._v(" "),a("h5",{attrs:{id:"具名插槽"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具名插槽"}},[t._v("#")]),t._v(" 具名插槽")]),t._v(" "),a("p",[t._v("以name表示插槽的身份，从而在组件内部做到了插槽可区分")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("面试点 => name索引了一段解析上下文")])]),t._v(" "),a("li",[a("p",[t._v("参数传递 => 参数作用域隔离传递")])])]),t._v(" "),a("h5",{attrs:{id:"作用域插槽"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域插槽"}},[t._v("#")]),t._v(" 作用域插槽")]),t._v(" "),a("p",[t._v("外部做结构勾勒和描述，内部做传参")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("< 2.6 vs >2.6 + v3")])]),t._v(" "),a("li",[a("p",[t._v("模板展示和数据显示，动态改变位置？")])])]),t._v(" "),a("h5",{attrs:{id:"jsx-更自由的模板化-all-in-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsx-更自由的模板化-all-in-js"}},[t._v("#")]),t._v(" jsx 更自由的模板化 all in js")]),t._v(" "),a("ul",[a("li",[a("ol",[a("li",[t._v("语法糖实现 => render()")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"2"}},[a("li",[t._v("jsx优点和劣势\n=> 优点：自由组装\n=> 缺点：无法使用vue的template => render()（1. v-指令无法使用 2. 性能优化）")])])])]),t._v(" "),a("p",[t._v("watch、computed、methods => 值自由化计算\nslot、jsx => 模板的自由化计算")]),t._v(" "),a("h3",{attrs:{id:"特征二-组件化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特征二-组件化"}},[t._v("#")]),t._v(" 特征二：组件化")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("    vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'component'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<h1>组件</h1>'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        el"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("ul",[a("li",[t._v("1.抽象复用")]),t._v(" "),a("li",[a("ol",{attrs:{start:"2"}},[a("li",[t._v("精简 & 聚合")])])])]),t._v(" "),a("p",[t._v("slot => ?? => components")]),t._v(" "),a("p",[t._v("v2.x")]),t._v(" "),a("h4",{attrs:{id:"混入mixin-逻辑混入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#混入mixin-逻辑混入"}},[t._v("#")]),t._v(" 混入mixin - 逻辑混入")]),t._v(" "),a("ul",[a("li",[a("ol",[a("li",[t._v("应用 - 抽离公共逻辑（逻辑相同，模板不同，可用mixin）")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"2"}},[a("li",[t._v("合并策略:")]),t._v(" "),a("li",[t._v("变量合并，只做补充，不会覆盖影响原有组件同名变量")]),t._v(" "),a("li",[t._v("生命周期，mixin的生命周期在引入组件之前 => 防止冲突覆盖，以原有组件为准")]),t._v(" "),a("li",[t._v("同样被引用的两个mixin，根据引用顺序安排加载顺序")])])])]),t._v(" "),a("h4",{attrs:{id:"继承拓展extends-逻辑上公用拓展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#继承拓展extends-逻辑上公用拓展"}},[t._v("#")]),t._v(" 继承拓展extends - 逻辑上公用拓展")]),t._v(" "),a("ul",[a("li",[a("ol",[a("li",[t._v("应用- 核心逻辑的功能继承")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"2"}},[a("li",[t._v("合并策略：")]),t._v(" "),a("li",[t._v("变量合并，只做补充，不会覆盖影响原有组件同名变量")]),t._v(" "),a("li",[t._v("不论是业务代码还是mixin都在extends之后")])])])]),t._v(" "),a("p",[t._v("v3 => js化\n忘去所有options => esm => 组合hook")]),t._v(" "),a("h4",{attrs:{id:"补充-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充-指令"}},[t._v("#")]),t._v(" 补充：指令")]),t._v(" "),a("p",[t._v("v-once  只渲染一次\nv-text  渲染字符串\nv-html  渲染html\nv-model => value + @input")]),t._v(" "),a("p",[t._v("v-on  => @click => .stop .prevent .once")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("    directives"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        zhaowa"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ……")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("zhaowa"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);