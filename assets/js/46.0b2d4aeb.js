(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{623:function(t,a,e){"use strict";e.r(a);var r=e(6),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#虚拟-dom"}},[t._v("虚拟 DOM")])]),e("li",[e("a",{attrs:{href:"#diff"}},[t._v("diff")]),e("ul",[e("li",[e("a",{attrs:{href:"#目的"}},[t._v("目的")])]),e("li",[e("a",{attrs:{href:"#策略"}},[t._v("策略")])])])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"虚拟-dom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#虚拟-dom"}},[t._v("#")]),t._v(" 虚拟 DOM")]),t._v(" "),e("p",[t._v("JS 中最消耗性能的操作为 DOM 操作。但是操作 JS 中的对象却很快。\n虚拟 DOM，则是利用 JS 对象模拟 DOM 树")]),t._v(" "),e("h2",{attrs:{id:"diff"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#diff"}},[t._v("#")]),t._v(" diff")]),t._v(" "),e("h3",{attrs:{id:"目的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目的"}},[t._v("#")]),t._v(" 目的")]),t._v(" "),e("p",[t._v("diff 的目的在于调和，也就是在更新时，尽量最少对 DOM 进行操作")]),t._v(" "),e("h3",{attrs:{id:"策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#策略"}},[t._v("#")]),t._v(" 策略")]),t._v(" "),e("h4",{attrs:{id:"tree-diff"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tree-diff"}},[t._v("#")]),t._v(" tree diff")]),t._v(" "),e("p",[t._v("同层比较，一层一层向下递归。\nFacebook 在开发 react，发现我们在日常的开发中，一般不会跨层移动，所以react只会进行同层对比")]),t._v(" "),e("h4",{attrs:{id:"component-diff"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#component-diff"}},[t._v("#")]),t._v(" component diff")]),t._v(" "),e("ol",[e("li",[t._v("同类型的两个组件，比较Virtual DOM树")]),t._v(" "),e("li",[t._v("不同类型的组件，直接删除。或替换为新组建")])]),t._v(" "),e("h4",{attrs:{id:"element-diff"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#element-diff"}},[t._v("#")]),t._v(" element diff")]),t._v(" "),e("ol",[e("li",[t._v("单个 element 比较")]),t._v(" "),e("li",[t._v("列表 element 比较")])])])}),[],!1,null,null,null);a.default=s.exports}}]);