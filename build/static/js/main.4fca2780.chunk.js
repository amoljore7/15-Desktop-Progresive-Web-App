(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){},19:function(e){e.exports={configUrl:{PWAData:"https://demo2625342.mockable.io"}}},20:function(e,t,n){e.exports=n(31)},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(11),r=n.n(l),c=n(3),i={data:{}};var s=Object(c.b)({InsertReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PwaPageData":return Object.assign({},e,{data:t.PwaPageData});default:return e}}}),u=n(4),d=n(5),m=n(7),p=n(6),h=n(8),f=n(1),v=n(10);function b(e){return{type:"PwaPageData",PwaPageData:e}}var w=n(19),E=(n(29),n(12),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).empData=n.empData.bind(Object(f.a)(n)),n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"empData",value:function(e){var t=50*e/100,n=50;return e<0&&(n=50-(t*=-1)),o.a.createElement("div",{className:"box-a",style:{width:"100px"}},e>0?o.a.createElement("div",{className:"box-b",style:{width:t+"px",marginLeft:n+"px",backgroundColor:"green"}}):o.a.createElement("div",{className:"box-b",style:{width:t+"px",marginLeft:n+"px",backgroundColor:"red"}}))}},{key:"render",value:function(){return o.a.createElement("span",null,this.empData(this.props.value))}}]),t}(a.Component)),g=function(e){function t(e){return Object(u.a)(this,t),Object(m.a)(this,Object(p.a)(t).call(this,e))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,this.props.Domain?o.a.createElement("div",null,o.a.createElement("div",{className:"name"}," ",this.props.Domain.name," "),o.a.createElement(E,{value:this.props.Domain.inputValue}),o.a.createElement("div",{className:"percent"}," ",this.props.Domain.percent," ")):o.a.createElement("div",null,o.a.createElement("div",{className:"name"}," ",this.props.Channel.name," "),o.a.createElement(E,{value:this.props.Channel.inputValue}),o.a.createElement("div",{className:"percent"}," ",this.props.Channel.percent," ")))}}]),t}(a.Component),O=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).componentDidMount=function(){e.getMyData(),window.matchMedia("(display-mode: standalone)").matches?(console.log("App is already installed and running in standalone"),e.setState({successfullyInstalled:!0})):(window.addEventListener("beforeinstallprompt",function(t){console.log("beforeinstallprompt has fired",t),t.preventDefault(),window.deferredPrompt=t,e.setState({readyToAdd:!0})}),window.addEventListener("appinstalled",function(t){console.log("App was successfully installed"),e.setState({successfullyInstalled:!0})}))},e.state={readyToAdd:!1,successfullyInstalled:!1,acceptedInstall:!1,declinedInstall:!1},e.addToHome=e.addToHome.bind(Object(f.a)(e)),e.shouldShowAddButton=e.shouldShowAddButton.bind(Object(f.a)(e)),e.openWindowOrTab=e.openWindowOrTab.bind(Object(f.a)(e)),e.getMyData=e.getMyData.bind(Object(f.a)(e)),e}return Object(h.a)(t,e),Object(d.a)(t,[{key:"getMyData",value:function(){var e=this;fetch(w.configUrl.PWAData).then(function(e){return e.json()}).then(function(t){e.props.PwaPageDataInReduxStore(t)}).catch(function(e){return console.log(e)})}},{key:"addToHome",value:function(){var e=this,t=window.deferredPrompt;t&&(t.prompt(),t.userChoice.then(function(n){"accepted"===n.outcome?(console.log("User accepted the A2HS prompt"),e.setState({acceptedInstall:!0})):(console.log("User dismissed the A2HS prompt"),e.setState({declinedInstall:!0})),t=null}))}},{key:"shouldShowAddButton",value:function(){var e=this.state.readyToAdd&&!this.state.successfullyInstalled&&!this.state.acceptedInstall&&!this.state.declinedInstall;return console.log("Should show add button",e),e}},{key:"openWindowOrTab",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.href;window.open(e,"_blank")}},{key:"render",value:function(){var e=this.props.PwaPageData,t=e.Domain,n=e.Channel;return o.a.createElement("body",null,o.a.createElement("div",{className:"container"},this.shouldShowAddButton()?o.a.createElement("button",{onClick:this.addToHome},o.a.createElement("h3",{className:"Install-App"},"Install App")):null,o.a.createElement("div",{className:"heading"},o.a.createElement("h1",null,"TITLE GOES HERE")),o.a.createElement("div",{className:"Announcement"},o.a.createElement("h1",null,"ANNOUNCEMENTS GO HERE")),o.a.createElement("div",{className:"Title"},o.a.createElement("h1",null,"AVEDA TOTAL GLOBAL SALES ",o.a.createElement("span",null,"+15%")," "),"   "),o.a.createElement("div",{className:"model-box1"},o.a.createElement("h3",{className:"title-box1"},"BY DOMAIN (-/+)"),o.a.createElement("hr",null),o.a.createElement("div",null,t&&t.length>0?o.a.createElement("div",null,t.map(function(e){return o.a.createElement("span",null,o.a.createElement(g,{Domain:e}))})):null)),o.a.createElement("div",{className:"model-box2"},o.a.createElement("h3",{className:"title-box2"},"BY CHANNEL (-/+)"),o.a.createElement("hr",null),o.a.createElement("div",null,n&&n.length>0?o.a.createElement("div",null,n.map(function(e){return o.a.createElement("span",null,o.a.createElement(g,{Channel:e}))})):null))))}}]),t}(a.Component);var y=Object(v.b)(function(e){return{PwaPageData:e.InsertReducer.data}},function(e){return Object(c.a)({PwaPageDataInReduxStore:b},e)})(O),j=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(y,null))}}]),t}(a.Component),D=Object(v.b)(function(e){return{storeState:e}},function(e){return{dispatch:e}})(j),A=(n(30),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function N(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var S=Object(c.c)(s,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(o.a.createElement(function(){return o.a.createElement(v.a,{store:S}," ",o.a.createElement(D,null)," ")},null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/PWA-DemoFinal-1",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/PWA-DemoFinal-1","/service-worker.js");A?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):N(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):N(t,e)})}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.4fca2780.chunk.js.map