_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"4v9j":function(e,n,t){n._link=t("YFqc").default},"97Is":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return t("uNx/")}])},O3xn:function(e,n,t){"use strict";var r=t("FdF9");n.unsafeCreateDOMComponent_=function(e){return function(n){return function(){var t=r.forwardRef((function(t,r){return e(n)(function(e,n){var t=null;null!=e._data&&(t={_data:void 0},Object.entries(e._data).forEach((function(e){t["data-"+e[0]]=e[1]})));var r=null;return null!=e._aria&&(r={_aria:void 0},Object.entries(e._aria).forEach((function(e){r["aria-"+e[0]]=e[1]}))),Object.assign({ref:n},e,t,r)}(t,r))}));return t.displayName=n,t}}}},"W+VZ":function(e,n,t){"use strict";var r=t("kCQW"),o=t("jwlp"),f=t("NL7e"),a=t("jPEo"),u=t("a08Y"),i=t("+rx9"),c=t("a0EN"),s=t("2+07"),l=t("7HZk"),p=t("sfHK"),d=t("h+YZ"),m=t("bgH5"),h=t("xxbb"),v=a.bind(u.bindReaderT(c.bindEffect))(s.liftEffect(u.monadEffectReader(s.monadEffectEffect))(o.mkNavigation))((function(e){return r.component("NotFound")((function(n){return function(n){return f.pure(m.applicativeRender(h.refl))((t={navigation:e},l.fragment([t.navigation(i.unit),d.div()({className:"max-w-5xl flex mx-auto my-12",children:[d.div()({className:"mr-1 text-gray-100 w-3/5 shadow-2xl bg-gray-800 p-12 text-left",children:[d.h1()({className:"text-3xl font-bold",children:[p.text("404: Not found")]}),d.div()({className:"w-4/5 pt-3 border-b-2 border-teal-500"}),d.p()({className:"pt-4 text-sm",children:[p.text("Looks like you took a wrong turn somewhere.")]})]}),d.div()({className:"w-2/5",children:[d.img()({className:"shadow-2xl",src:"https://source.unsplash.com/O35rT6OytRo"})]})]})])));var t}}))}));e.exports={mkNotFound:v}},YFqc:function(e,n,t){e.exports=t("cTJO")},bwVA:function(e,n,t){"use strict";var r=t("4v9j"),o=t("7HZk");e.exports={link:function(e){return function(e){return o.element(r._link)(e)}},_link:r._link}},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var f,a=o(t("FdF9")),u=t("elyg"),i=t("nOHt"),c=new Map,s=window.IntersectionObserver,l={};var p=function(e,n){var t=f||(s?f=new s((function(e){e.forEach((function(e){if(c.has(e.target)){var n=c.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),c.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0);return t?(t.observe(e),c.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}c.delete(e)}):function(){}};function d(e,n,t,r){(0,u.isLocalURL)(n)&&(e.prefetch(n,t,r).catch((function(e){0})),l[n+"%"+t]=!0)}var m=function(e){var n=!1!==e.prefetch,t=a.default.useState(),o=r(t,2),f=o[0],c=o[1],m=(0,i.useRouter)(),h=m&&m.pathname||"/",v=a.default.useMemo((function(){var n=(0,u.resolveHref)(h,e.href);return{href:n,as:e.as?(0,u.resolveHref)(h,e.as):n}}),[h,e.href,e.as]),x=v.href,E=v.as;a.default.useEffect((function(){if(n&&s&&f&&f.tagName&&(0,u.isLocalURL)(x)&&!l[x+"%"+E])return p(f,(function(){d(m,x,E)}))}),[n,f,x,E,m]);var b=e.children,C=e.replace,_=e.shallow,N=e.scroll;"string"===typeof b&&(b=a.default.createElement("a",null,b));var w=a.Children.only(b),g={ref:function(e){e&&c(e),w&&"object"===typeof w&&w.ref&&("function"===typeof w.ref?w.ref(e):"object"===typeof w.ref&&(w.ref.current=e))},onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,f,a){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(t))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:f}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,m,x,E,C,_,N)}};return n&&(g.onMouseEnter=function(e){(0,u.isLocalURL)(x)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),d(m,x,E,{priority:!0}))}),(e.passHref||"a"===w.type&&!("href"in w.props))&&(g.href=(0,u.addBasePath)(E)),a.default.cloneElement(w,g)};n.default=m},"h+YZ":function(e,n,t){"use strict";var r=t("nEj/"),o=t("7HZk"),f=t("z85V"),a=r.unsafePerformEffect(f.unsafeCreateDOMComponent("ul")),u=function(e){return a},i=r.unsafePerformEffect(f.unsafeCreateDOMComponent("title")),c=function(e){return i},s=r.unsafePerformEffect(f.unsafeCreateDOMComponent("span")),l=function(e){return s},p=r.unsafePerformEffect(f.unsafeCreateDOMComponent("p")),d=function(e){return p},m=r.unsafePerformEffect(f.unsafeCreateDOMComponent("nav")),h=function(e){return m},v=r.unsafePerformEffect(f.unsafeCreateDOMComponent("li")),x=function(e){return v},E=r.unsafePerformEffect(f.unsafeCreateDOMComponent("img")),b=function(e){return E},C=r.unsafePerformEffect(f.unsafeCreateDOMComponent("h2")),_=function(e){return C},N=r.unsafePerformEffect(f.unsafeCreateDOMComponent("h1")),w=function(e){return N},g=r.unsafePerformEffect(f.unsafeCreateDOMComponent("div")),y=function(e){return g},k=r.unsafePerformEffect(f.unsafeCreateDOMComponent("body")),O=function(e){return k},M=r.unsafePerformEffect(f.unsafeCreateDOMComponent("a")),P=function(e){return M};e.exports={a:function(e){return o.element(P())},"a'":P,"_a'":M,body:function(e){return o.element(O())},"body'":O,"_body'":k,div:function(e){return o.element(y())},"div'":y,"_div'":g,h1:function(e){return o.element(w())},"h1'":w,"_h1'":N,h2:function(e){return o.element(_())},"h2'":_,"_h2'":C,img:function(e){return o.element(b())},"img'":b,"_img'":E,li:function(e){return o.element(x())},"li'":x,"_li'":v,nav:function(e){return o.element(h())},"nav'":h,"_nav'":m,p:function(e){return o.element(d())},"p'":d,"_p'":p,span:function(e){return o.element(l())},"span'":l,"_span'":s,title:function(e){return o.element(c())},"title'":c,"_title'":i,ul:function(e){return o.element(u())},"ul'":u,"_ul'":a}},jnLF:function(e,n,t){"use strict";n.unsafePerformEffect=function(e){return e()}},jwlp:function(e,n,t){"use strict";var r=t("NL7e"),o=t("bwVA"),f=t("sfHK"),a=t("h+YZ"),u=t("C9r8"),i=t("bgH5"),c=t("xxbb"),s=function(){var e=a.nav()({className:"text-gray-800 w-full flex items-center justify-between py-3 px-4",children:[a.div()({className:"font-extrabold text-xl",children:[f.text("Next.js with Purescript Example")]}),a.ul()({className:"flex-grow flex justify-end items-center",children:[a.li()({children:[o.link()({href:"/",passHref:!0,children:a.a()({className:"inline-block py-2 px-4 font-bold",children:[f.text("Home")]})})]}),a.li()({children:[o.link()({href:"/about",passHref:!0,children:a.a()({className:"inline-block py-2 px-4 font-bold",children:[f.text("About")]})})]}),a.li()({children:[o.link()({href:"/profile",passHref:!0,children:a.a()({className:"inline-block py-2 px-4 font-bold",children:[f.text("Profile")]})})]})]})]});return u.component("Navigation")((function(n){return r.pure(i.applicativeRender(c.refl))(e)}))}();e.exports={mkNavigation:s}},kCQW:function(e,n,t){"use strict";var r=t("jPEo"),o=t("SQdI"),f=t("a08Y"),a=t("a0EN"),u=t("2+07"),i=t("C9r8");e.exports={component:function(e){return function(n){return r.bind(f.bindReaderT(a.bindEffect))(o.ask(f.monadAskReaderT(a.monadEffect)))((function(t){return u.liftEffect(f.monadEffectReader(u.monadEffectEffect))(i.component(e)((function(e){return n(t)(e)})))}))}}}},"nEj/":function(e,n,t){"use strict";var r=t("jnLF");e.exports={unsafePerformEffect:r.unsafePerformEffect}},sfHK:function(e,n,t){"use strict";var r=t("S5KN").unsafeCoerce;e.exports={text:r}},"uNx/":function(e,n,t){"use strict";t.r(n);var r=t("W+VZ");n.default=r.mkNotFound},z85V:function(e,n,t){"use strict";var r=t("O3xn"),o=t("7HZk"),f=t("S5KN"),a=r.unsafeCreateDOMComponent_(o.element),u=f.unsafeCoerce;e.exports={css:u,unsafeCreateDOMComponent:a,unsafeCreateDOMComponent_:r.unsafeCreateDOMComponent_}}},[["97Is",0,2,1,3]]]);