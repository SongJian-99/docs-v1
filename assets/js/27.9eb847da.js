(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{509:function(t,e,a){t.exports=a.p+"assets/img/kanbannaing_1.9d4605aa.png"},510:function(t,e,a){t.exports=a.p+"assets/img/kanbanniang_2.ef1f6e5b.png"},599:function(t,e,a){"use strict";a.r(e);var s=a(5),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction "),e("GitHubLink",{attrs:{repo:"vuepress-reco/vuepress-plugin-kan-ban-niang/"}})],1),t._v(" "),e("p",[e("img",{attrs:{src:a(509),alt:"demo.png"}})]),t._v(" "),e("p",[e("code",[t._v("kan-ban-niang")]),t._v(" plugin for vuepress-theme-reco or other vuepress themes.")]),t._v(" "),e("h3",{attrs:{id:"name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" Name")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("As plugin")]),t._v(": "),e("code",[t._v("@vuepress-reco/vuepress-plugin-kan-ban-niang")])]),t._v(" "),e("li",[e("strong",[t._v("As component")]),t._v(": "),e("code",[t._v("KanBanNiang")]),t._v(" (auto appear in the page, no need for extra code)")])]),t._v(" "),e("h3",{attrs:{id:"buttons"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#buttons"}},[t._v("#")]),t._v(" Buttons")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Button")]),t._v(" "),e("th",[t._v("Use")]),t._v(" "),e("th",[t._v("Default Tip")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("home")]),t._v(" "),e("td",[t._v("Back to home of blog")]),t._v(" "),e("td",[t._v("You are the apple of my eye and I want to bring you home")])]),t._v(" "),e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("Show site title")]),t._v(" "),e("td",[t._v("'Welcome to ' + Your site title ($site.title)")])]),t._v(" "),e("tr",[e("td",[t._v("theme")]),t._v(" "),e("td",[t._v("Modify theme")]),t._v(" "),e("td",[t._v("OK, I hope you love my other friends")])]),t._v(" "),e("tr",[e("td",[t._v("close")]),t._v(" "),e("td",[t._v("Close kanbannaing")]),t._v(" "),e("td",[t._v("I love you most")])]),t._v(" "),e("tr",[e("td",[t._v("info")]),t._v(" "),e("td",[t._v("Jump to plugin's GitHub page")]),t._v(" "),e("td",[t._v("Do you want to know more about me?")])])])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"title"}),e("p",[t._v("This plugin hasn't been translated to English yet and the above "),e("code",[t._v("default tip")]),t._v(" is merely translation of the Chinese version.")])]),e("h2",{attrs:{id:"option-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#option-api"}},[t._v("#")]),t._v(" Option API")]),t._v(" "),e("blockquote",[e("p",[t._v("default parameters when using the plugin")])]),t._v(" "),e("p",[e("strong",[t._v("Attributes")])]),t._v(" "),e("h3",{attrs:{id:"theme"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#theme"}},[t._v("#")]),t._v(" theme")]),t._v(" "),e("ul",[e("li",[t._v("description: default theme")]),t._v(" "),e("li",[t._v("type: "),e("code",[t._v("Array")])]),t._v(" "),e("li",[t._v("default: "),e("code",[t._v("['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16']")])]),t._v(" "),e("li",[t._v("accepted-values:\n"),e("ul",[e("li",[t._v("if theme includes only one value, default to this theme and hide the button to change theme")]),t._v(" "),e("li",[t._v("if theme includes multiple values, default to the first theme and randomly switch to other themes when "),e("code",[t._v("theme")]),t._v(" button is clicked")]),t._v(" "),e("li",[t._v("note the case of theme name")]),t._v(" "),e("li",[t._v("see "),e("a",{attrs:{href:"#available-themes"}},[t._v("available themes")]),t._v(" at the end")])])])]),t._v(" "),e("h3",{attrs:{id:"clean"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clean"}},[t._v("#")]),t._v(" clean")]),t._v(" "),e("ul",[e("li",[t._v("description: if clean mode is on (hide all buttons)")]),t._v(" "),e("li",[t._v("type: "),e("code",[t._v("Boolean")])]),t._v(" "),e("li",[t._v("default: "),e("code",[t._v("false")])]),t._v(" "),e("li",[t._v("accepted-values: "),e("code",[t._v("true | false")])])]),t._v(" "),e("h3",{attrs:{id:"messages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#messages"}},[t._v("#")]),t._v(" messages")]),t._v(" "),e("ul",[e("li",[t._v("description: message tip")]),t._v(" "),e("li",[t._v("type: "),e("code",[t._v("Object")])]),t._v(" "),e("li",[t._v("default:"),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    welcome"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '欢迎来到 ' + 您的站点名称（$site.title）"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    home"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '心里的花，我想要带你回家。'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    theme"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '好吧，希望你能喜欢我的其他小伙伴。'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    close"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '你知道我喜欢吃什么吗？痴痴地望着你。'\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),e("li",[t._v("accepted-values: see the end")])]),t._v(" "),e("h3",{attrs:{id:"messagestyle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#messagestyle"}},[t._v("#")]),t._v(" messageStyle")]),t._v(" "),e("ul",[e("li",[t._v("description: customize message style")]),t._v(" "),e("li",[t._v("type: "),e("code",[t._v("Object")])]),t._v(" "),e("li",[t._v("default:"),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  right"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '68px'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  bottom"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '190px'\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),e("h3",{attrs:{id:"modelstyle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#modelstyle"}},[t._v("#")]),t._v(" modelStyle")]),t._v(" "),e("ul",[e("li",[t._v("description: customize model style")]),t._v(" "),e("li",[t._v("type: "),e("code",[t._v("Object")])]),t._v(" "),e("li",[t._v("default:"),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  right"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '90px'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  bottom"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '-20px'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  opacity"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.9")]),t._v("'\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),e("h3",{attrs:{id:"btnstyle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#btnstyle"}},[t._v("#")]),t._v(" btnStyle")]),t._v(" "),e("ul",[e("li",[t._v("description: customize button style")]),t._v(" "),e("li",[t._v("type: "),e("code",[t._v("Object")])]),t._v(" "),e("li",[t._v("default:"),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  right"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '90px'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  bottom"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '40px'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),e("h3",{attrs:{id:"width"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#width"}},[t._v("#")]),t._v(" width")]),t._v(" "),e("ul",[e("li",[t._v("description: theme width")]),t._v(" "),e("li",[t._v("type: "),e("code",[t._v("Number")])]),t._v(" "),e("li",[t._v("default: "),e("code",[t._v("150")])])]),t._v(" "),e("h3",{attrs:{id:"height"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#height"}},[t._v("#")]),t._v(" height")]),t._v(" "),e("ul",[e("li",[t._v("description: theme height")]),t._v(" "),e("li",[t._v("type: "),e("code",[t._v("Number")])]),t._v(" "),e("li",[t._v("default: "),e("code",[t._v("220")])])]),t._v(" "),e("h2",{attrs:{id:"available-themes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#available-themes"}},[t._v("#")]),t._v(" Available Themes")]),t._v(" "),e("p",[e("img",{attrs:{src:a(510),alt:"themes.png"}})]),t._v(" "),e("h2",{attrs:{id:"about"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#about"}},[t._v("#")]),t._v(" About")]),t._v(" "),e("ul",[e("li",[t._v("reference plugin: "),e("a",{attrs:{href:"https://github.com/QiShaoXuan",target:"_blank",rel:"noopener noreferrer"}},[t._v("@Qi"),e("OutboundLink")],1),t._v(" https://github.com/QiShaoXuan/vuepress-plugin-cat")]),t._v(" "),e("li",[t._v("theme repo： "),e("a",{attrs:{href:"https://github.com/QiShaoXuan",target:"_blank",rel:"noopener noreferrer"}},[t._v("@Qi"),e("OutboundLink")],1),t._v(" https://github.com/QiShaoXuan/live2DModel")]),t._v(" "),e("li",[t._v("theme auto hides if failed to load")]),t._v(" "),e("li",[t._v("speed is unstable when loading static assets")]),t._v(" "),e("li",[t._v("could use other theme by downloading the plugin and change theme url")])]),t._v(" "),e("h2",{attrs:{id:"contributors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contributors"}},[t._v("#")]),t._v(" Contributors")]),t._v(" "),e("Contributors",{attrs:{user:"vuepress-reco",repo:"vuepress-plugin-kan-ban-niang"}})],1)}),[],!1,null,null,null);e.default=n.exports}}]);