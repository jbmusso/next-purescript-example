_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"0kIq":function(e,n,t){"use strict";var r=t("SLMK"),o=t("ar+X"),f=t("K7WC"),a=r.unsafeCreateDOMComponent_(o.element),u=f.unsafeCoerce;e.exports={css:u,unsafeCreateDOMComponent:a,unsafeCreateDOMComponent_:r.unsafeCreateDOMComponent_}},"97Is":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return t("uNx/")}])},ClML:function(e,n,t){"use strict";var r=t("w1Ud"),o=t("Ehla"),f=t("Djpe"),a=t("Lw/E"),u=t("Fwka"),i=t("RHdQ");e.exports={component:function(e){return function(n){return r.bind(f.bindReaderT(a.bindEffect))(o.ask(f.monadAskReaderT(a.monadEffect)))((function(t){return u.liftEffect(f.monadEffectReader(u.monadEffectEffect))(i.component(e)((function(e){return n(t)(e)})))}))}}}},Ju7t:function(e,n,t){"use strict";var r=t("M0Ec"),o=t("b7UC"),f=t("apA8"),a=t("fpRI"),u=t("RHdQ"),i=t("HAue"),c=t("vKih"),s=function(){var e=a.nav()({className:"text-gray-800 w-full flex items-center justify-between py-3 px-4",children:[a.div()({className:"font-extrabold text-xl",children:[f.text("Next.js with Purescript Example")]}),a.ul()({className:"flex-grow flex justify-end items-center",children:[a.li()({children:[o.link()({href:"/",children:a.a()({className:"inline-block py-2 px-4 font-bold",children:[f.text("Home")]})})]}),a.li()({children:[o.link()({href:"/about",children:a.a()({className:"inline-block py-2 px-4 font-bold",children:[f.text("About")]})})]}),a.li()({children:[o.link()({href:"/profile",children:a.a()({className:"inline-block py-2 px-4 font-bold",children:[f.text("Profile")]})})]})]})]});return u.component("Navigation")((function(n){return r.pure(i.applicativeRender(c.refl))(e)}))}();e.exports={mkNavigation:s}},SLMK:function(e,n,t){"use strict";var r=t("FdF9");n.unsafeCreateDOMComponent_=function(e){return function(n){return function(){var t=r.forwardRef((function(t,r){return e(n)(function(e,n){var t=null;null!=e._data&&(t={_data:void 0},Object.entries(e._data).forEach((function(e){t["data-"+e[0]]=e[1]})));var r=null;return null!=e._aria&&(r={_aria:void 0},Object.entries(e._aria).forEach((function(e){r["aria-"+e[0]]=e[1]}))),Object.assign({ref:n},e,t,r)}(t,r))}));return t.displayName=n,t}}}},YFqc:function(e,n,t){e.exports=t("cTJO")},"aO0+":function(e,n,t){"use strict";var r=t("jVXn");e.exports={unsafePerformEffect:r.unsafePerformEffect}},apA8:function(e,n,t){"use strict";var r=t("K7WC").unsafeCoerce;e.exports={text:r}},b7UC:function(e,n,t){"use strict";var r=t("nCcs"),o=t("ar+X");e.exports={link:function(e){return function(e){return o.element(r.linkComponent)(e)}},linkComponent:r.linkComponent}},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var f,a=o(t("FdF9")),u=t("elyg"),i=t("nOHt"),c=new Map,s=window.IntersectionObserver,l={};var p=function(e,n){var t=f||(s?f=new s((function(e){e.forEach((function(e){if(c.has(e.target)){var n=c.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),c.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0);return t?(t.observe(e),c.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}c.delete(e)}):function(){}};function d(e,n,t,r){(0,u.isLocalURL)(n)&&(e.prefetch(n,t,r).catch((function(e){0})),l[n+"%"+t]=!0)}var m=function(e){var n=!1!==e.prefetch,t=a.default.useState(),o=r(t,2),f=o[0],c=o[1],m=(0,i.useRouter)(),h=m&&m.pathname||"/",v=a.default.useMemo((function(){var n=(0,u.resolveHref)(h,e.href);return{href:n,as:e.as?(0,u.resolveHref)(h,e.as):n}}),[h,e.href,e.as]),C=v.href,E=v.as;a.default.useEffect((function(){if(n&&s&&f&&f.tagName&&(0,u.isLocalURL)(C)&&!l[C+"%"+E])return p(f,(function(){d(m,C,E)}))}),[n,f,C,E,m]);var x=e.children,b=e.replace,w=e.shallow,_=e.scroll;"string"===typeof x&&(x=a.default.createElement("a",null,x));var y=a.Children.only(x),g={ref:function(e){e&&c(e),y&&"object"===typeof y&&y.ref&&("function"===typeof y.ref?y.ref(e):"object"===typeof y.ref&&(y.ref.current=e))},onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,f,a){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(t))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:f}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,m,C,E,b,w,_)}};return n&&(g.onMouseEnter=function(e){(0,u.isLocalURL)(C)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),d(m,C,E,{priority:!0}))}),(e.passHref||"a"===y.type&&!("href"in y.props))&&(g.href=(0,u.addBasePath)(E)),a.default.cloneElement(y,g)};n.default=m},fpRI:function(e,n,t){"use strict";var r=t("aO0+"),o=t("ar+X"),f=t("0kIq"),a=r.unsafePerformEffect(f.unsafeCreateDOMComponent("ul")),u=function(e){return a},i=r.unsafePerformEffect(f.unsafeCreateDOMComponent("title")),c=function(e){return i},s=r.unsafePerformEffect(f.unsafeCreateDOMComponent("span")),l=function(e){return s},p=r.unsafePerformEffect(f.unsafeCreateDOMComponent("p")),d=function(e){return p},m=r.unsafePerformEffect(f.unsafeCreateDOMComponent("nav")),h=function(e){return m},v=r.unsafePerformEffect(f.unsafeCreateDOMComponent("li")),C=function(e){return v},E=r.unsafePerformEffect(f.unsafeCreateDOMComponent("img")),x=function(e){return E},b=r.unsafePerformEffect(f.unsafeCreateDOMComponent("h2")),w=function(e){return b},_=r.unsafePerformEffect(f.unsafeCreateDOMComponent("h1")),y=function(e){return _},g=r.unsafePerformEffect(f.unsafeCreateDOMComponent("div")),N=function(e){return g},M=r.unsafePerformEffect(f.unsafeCreateDOMComponent("body")),k=function(e){return M},O=r.unsafePerformEffect(f.unsafeCreateDOMComponent("a")),P=function(e){return O};e.exports={a:function(e){return o.element(P())},"a'":P,"_a'":O,body:function(e){return o.element(k())},"body'":k,"_body'":M,div:function(e){return o.element(N())},"div'":N,"_div'":g,h1:function(e){return o.element(y())},"h1'":y,"_h1'":_,h2:function(e){return o.element(w())},"h2'":w,"_h2'":b,img:function(e){return o.element(x())},"img'":x,"_img'":E,li:function(e){return o.element(C())},"li'":C,"_li'":v,nav:function(e){return o.element(h())},"nav'":h,"_nav'":m,p:function(e){return o.element(d())},"p'":d,"_p'":p,span:function(e){return o.element(l())},"span'":l,"_span'":s,title:function(e){return o.element(c())},"title'":c,"_title'":i,ul:function(e){return o.element(u())},"ul'":u,"_ul'":a}},jVXn:function(e,n,t){"use strict";n.unsafePerformEffect=function(e){return e()}},nCcs:function(e,n,t){"use strict";n.linkComponent=t("YFqc").default},"uNx/":function(e,n,t){var r=t("uWW/").mkNotFound;n.default=r},"uWW/":function(e,n,t){"use strict";var r=t("ClML"),o=t("Ju7t"),f=t("M0Ec"),a=t("w1Ud"),u=t("Djpe"),i=t("Z581"),c=t("Lw/E"),s=t("Fwka"),l=t("ar+X"),p=t("apA8"),d=t("fpRI"),m=t("HAue"),h=t("vKih"),v=a.bind(u.bindReaderT(c.bindEffect))(s.liftEffect(u.monadEffectReader(s.monadEffectEffect))(o.mkNavigation))((function(e){return r.component("NotFound")((function(n){return function(n){return f.pure(m.applicativeRender(h.refl))((t={navigation:e},l.fragment([t.navigation(i.unit),d.div()({className:"max-w-5xl flex mx-auto my-12",children:[d.div()({className:"mr-1 text-gray-100 w-3/5 shadow-2xl bg-gray-800 p-12 text-left",children:[d.h1()({className:"text-3xl font-bold",children:[p.text("404: Not found")]}),d.div()({className:"w-4/5 pt-3 border-b-2 border-teal-500"}),d.p()({className:"pt-4 text-sm",children:[p.text("Looks like you took a wrong turn somewhere.")]})]}),d.div()({className:"w-2/5",children:[d.img()({className:"shadow-2xl",src:"https://source.unsplash.com/O35rT6OytRo"})]})]})])));var t}}))}));e.exports={mkNotFound:v}}},[["97Is",0,2,1,3]]]);