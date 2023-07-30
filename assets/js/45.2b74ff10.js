(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{622:function(s,n,a){"use strict";a.r(n);var t=a(6),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#基于-hooks-的异步请求"}},[s._v("基于 Hooks 的异步请求")])]),a("li",[a("a",{attrs:{href:"#渲染属性-render-props"}},[s._v("渲染属性(Render Props)")])]),a("li",[a("a",{attrs:{href:"#高阶组件"}},[s._v("高阶组件")])]),a("li",[a("a",{attrs:{href:"#路由守卫-navigation-guards"}},[s._v("路由守卫 navigation-guards")])]),a("li",[a("a",{attrs:{href:"#路由按需加载处理"}},[s._v("路由按需加载处理")])])])]),a("p"),s._v(" "),a("h1",{attrs:{id:"高级技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高级技巧"}},[s._v("#")]),s._v(" 高级技巧")]),s._v(" "),a("h3",{attrs:{id:"基于-hooks-的异步请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于-hooks-的异步请求"}},[s._v("#")]),s._v(" 基于 Hooks 的异步请求")]),s._v(" "),a("h3",{attrs:{id:"渲染属性-render-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染属性-render-props"}},[s._v("#")]),s._v(" 渲染属性(Render Props)")]),s._v(" "),a("p",[s._v("http://react.caibaojian.com.cn/docs/render-props.html\n术语 “render prop” 是指一种简单的技术，用于使用一个值为函数的 prop 在 React 组件之间的代码共享。\n带有渲染属性(Render Props)的组件需要一个返回 React 元素并调用它的函数，而不是实现自己的渲染逻辑。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('function Popup(props) {\n    const {render,afterClose=()=>{}} = props;\n    const [showPopup,setShowPopup] = useState(true);\n    const close = ()=>{\n      setShowPopup(false);\n    };\n    const mask = useRef();\n    const popup = useRef();\n    useEffect(()=>{\n      if(showPopup){\n        mask.current.style.opacity = 1; \n        popup.current.style.transform = "translateY(0)";\n      } else {\n        mask.current.style.opacity = 0; \n        popup.current.style.transform = "translateY(-1000px)";\n        setTimeout(() => {\n          afterClose();\n        }, 500);\n      }\n    },[showPopup]);\n    return <>\n        <div className="mask" ref={mask}></div>\n        <div className="popup" ref={popup}>\n            {render(close)}\n        </div>\n    </>\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("h3",{attrs:{id:"高阶组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高阶组件"}},[s._v("#")]),s._v(" 高阶组件")]),s._v(" "),a("p",[s._v("如果一个函数操作其他函数，即将其他函数作为参数或将函数作为返回值，将其称为高阶函数。高阶组件(high-order component)类似于高阶函数，接收 React 组件作为输入，输出一个新的 React 组件。高阶组件让代码更具有复用性、逻辑性与抽象特征。\nhttps://react.docschina.org/docs/higher-order-components.html")]),s._v(" "),a("h3",{attrs:{id:"路由守卫-navigation-guards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由守卫-navigation-guards"}},[s._v("#")]),s._v(" 路由守卫 navigation-guards")]),s._v(" "),a("p",[s._v("路由跳转前做一些验证，比如登录验证，是网站中的普遍需求。")]),s._v(" "),a("ul",[a("li",[s._v("高阶组件版")])]),s._v(" "),a("div",{staticClass:"language-React line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('function Guards(props) { \n    const {isLogin} = useSelector(state=>state);\n    const {Cmp,parentProps} = props;\n    const {pathname} = useLocation();\n    const dispatch = useDispatch();\n    useEffect(\n    \t()=>{\n            if(!isLogin){\n               dispatch({\n                  type: "setPrevPath",\n                  path:pathname\n                })\n            }\n        },[isLogin]\n    )\n    if(isLogin){\n        return <Cmp {...parentProps}/> \n    }    \n    return <Redirect to="/login" />\n}\nfunction guards(Cmp) {\n  return (props)=>{\n    return <Guards Cmp={Cmp} parentProps={props} />\n  }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("ul",[a("li",[s._v("hooks 版")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('function useGuards() {\n  const isLogin = useSelector(state=>state.isLogin);\n  const {replace} = useHistory();\n  const dispatch = useDispatch();\n  const {pathname} = useLocation();\n   useEffect(()=>{\n            if(!isLogin){\n                dispatch({\n                  type: "setPrevPath",\n                  path:pathname\n                });\n                replace("/login");\n              }\n        },[isLogin]\n    )\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h3",{attrs:{id:"路由按需加载处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由按需加载处理"}},[s._v("#")]),s._v(" 路由按需加载处理")]),s._v(" "),a("ul",[a("li",[s._v("suspense 和 lazy 进行懒加载设置")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    const Child = lazy(()=>import("./child"));\n    <Suspense fallback={<div>视图请求中</div>} >\n        <Child />\n    </Suspense>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);