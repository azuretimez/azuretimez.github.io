(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{717:function(t,a,s){"use strict";s.r(a);var n=s(6),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#状态为什么要管理"}},[t._v("状态为什么要管理")])]),s("li",[s("a",{attrs:{href:"#状态如何管理"}},[t._v("状态如何管理")])]),s("li",[s("a",{attrs:{href:"#一个状态管理的库-应该具备哪些能力"}},[t._v("一个状态管理的库，应该具备哪些能力？")])])])]),s("p"),t._v(" "),s("p",[t._v("redux -- flux (java flux)\nmobx")]),t._v(" "),s("p",[t._v("zustand\nrecoil")]),t._v(" "),s("h3",{attrs:{id:"状态为什么要管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#状态为什么要管理"}},[t._v("#")]),t._v(" 状态为什么要管理")]),t._v(" "),s("h3",{attrs:{id:"状态如何管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#状态如何管理"}},[t._v("#")]),t._v(" 状态如何管理")]),t._v(" "),s("h3",{attrs:{id:"一个状态管理的库-应该具备哪些能力"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一个状态管理的库-应该具备哪些能力"}},[t._v("#")]),t._v(" 一个状态管理的库，应该具备哪些能力？")]),t._v(" "),s("h2",{attrs:{id:"什么是状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是状态"}},[t._v("#")]),t._v(" 什么是状态？")]),t._v(" "),s("ul",[s("li",[t._v("web 是一个状态机。\n"),s("ul",[s("li",[t._v("[  ]")]),t._v(" "),s("li",[t._v("fetch.then()  -> [ data ]  1 - 10")]),t._v(" "),s("li",[t._v('fetch("del").then() -> [ newData ] 2 - 11')])])])]),t._v(" "),s("p",[t._v("update placement delete 做了这些操作以后，状态发生了什么变化")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("我们不关系流程，我们关心的永远是，界面处于哪个状态。")])]),t._v(" "),s("li",[s("p",[t._v("状态管理，他是一种在 web 的生命周期变化时，数据 model 所呈现出来的 view.")]),t._v(" "),s("ul",[s("li",[t._v("生命周期")]),t._v(" "),s("li",[t._v("状态变化")]),t._v(" "),s("li",[t._v("状态 model ，怎么样来触发 view 变化。\n"),s("ul",[s("li",[t._v("Provider 、 Consumer")])])])])])]),t._v(" "),s("p",[t._v("全局状态管理")]),t._v(" "),s("ul",[s("li",[t._v('生命周期，是不是"你打开浏览器，输入地址，访问页面，一直到，到下一次界面刷新的时候"。')]),t._v(" "),s("li",[t._v("闭包。")])]),t._v(" "),s("h3",{attrs:{id:"我们在设计一个数据的时候-要考虑哪些事情"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#我们在设计一个数据的时候-要考虑哪些事情"}},[t._v("#")]),t._v(" 我们在设计一个数据的时候，要考虑哪些事情？")]),t._v(" "),s("p",[t._v("软件的本质，其实就是数据的管理。\n我们在设计一个状态的时候，实际上就是设计一个数据。设计它的生命周期和作用范围。\n数据的生命周期")]),t._v(" "),s("ul",[s("li",[t._v("DB，用户在，人就在。")]),t._v(" "),s("li",[t._v("local / session")]),t._v(" "),s("li",[t._v("project runtime")]),t._v(" "),s("li",[t._v("page")]),t._v(" "),s("li",[t._v("component [state, props, data]")])]),t._v(" "),s("h3",{attrs:{id:"和-redux-生命周期一致的数据-还有哪些"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#和-redux-生命周期一致的数据-还有哪些"}},[t._v("#")]),t._v(" 和 redux 生命周期一致的数据，还有哪些？")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" deps "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    deps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    create"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("h3",{attrs:{id:"器-术-道。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#器-术-道。"}},[t._v("#")]),t._v(" 器，术，道。")]),t._v(" "),s("p",[t._v("器：工具。\n术：你用 redux 进行状态管理。\n道：状态管理是啥？")]),t._v(" "),s("p",[t._v("以道驭术。")]),t._v(" "),s("h2",{attrs:{id:"redux-核心"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redux-核心"}},[t._v("#")]),t._v(" redux 核心")])])}),[],!1,null,null,null);a.default=e.exports}}]);