(self["webpackChunkai_prophet_front"]=self["webpackChunkai_prophet_front"]||[]).push([[655],{20278:function(t){t.exports={cardList:"antd-pro-pages-dashboard-aimodels-style-cardList",card:"antd-pro-pages-dashboard-aimodels-style-card",item:"antd-pro-pages-dashboard-aimodels-style-item",extraImg:"antd-pro-pages-dashboard-aimodels-style-extraImg",newButton:"antd-pro-pages-dashboard-aimodels-style-newButton",cardAvatar:"antd-pro-pages-dashboard-aimodels-style-cardAvatar",cardDescription:"antd-pro-pages-dashboard-aimodels-style-cardDescription",pageHeaderContent:"antd-pro-pages-dashboard-aimodels-style-pageHeaderContent",contentLink:"antd-pro-pages-dashboard-aimodels-style-contentLink"}},2591:function(t,a,e){"use strict";e.r(a);e(66518);var s=e(95322),n=(e(12399),e(82404)),d=e(60360),i=e(66646),o=e(65353),r=e(83693),c=(e(11116),e(46049)),l=e(67294),p=e(2824),h=e(87557),u=e(636),m=e(20278),g=e.n(m),x=e(812),f=e(43774),k=e(33016),v=e.n(k),j=e(85893),b=c.Z.Paragraph,Z=c.Z.Link,y=function(t){(0,o.Z)(e,t);var a=(0,r.Z)(e);function e(t){var s;return(0,d.Z)(this,e),s=a.call(this,t),s.state={data:[],creditModalVisible:!1},s}return(0,i.Z)(e,[{key:"componentDidMount",value:function(){var t=this;(0,u.Z)("/tasks/listAIM",{method:"POST"}).then((function(a){a.data&&a.data.list.map((function(a){return(0,u.Z)("/tasks/modelAuthor",{method:"post",data:{ai_id:a.pk}}).then((function(e){if(e.uuid){console.log("exist uuid");var s=new(v())({SecretId:"AKID21jLxxXtspX0FC9ax4h2C51kFoCNhWZg",SecretKey:"HROJDscqncKP9g0zJMJ7Mo20oHTVJsRr"});s.getObjectUrl({Bucket:"prophetsrc-1305001068",Region:"ap-chengdu",Key:"".concat(e.uuid,".jpg")},(function(e,s){var n=a;n.model_url=s.Url;var d=t.state.data.concat(n);t.setState({data:d})}))}else{var n=a,d=t.state.data.concat(n);t.setState({data:d})}})),""}))})).catch((function(t){return console.log(t)}))}},{key:"setcreditModalVisible",value:function(t){this.setState({creditModalVisible:t})}},{key:"render",value:function(){var t=this,a=(0,j.jsxs)("div",{className:g().pageHeaderContent,children:[(0,j.jsx)("p",{children:(0,j.jsx)(h._H,{id:"accountandsettings.headerContent"})}),(0,j.jsx)("div",{className:g().contentLink,children:(0,j.jsxs)(Z,{children:[(0,j.jsx)(x.Z,{})," ",(0,h.wv)({id:"pages.dash.dashboard.list.card-list.contentlink"})]})})]}),e=(0,j.jsx)("div",{className:g().extraImg,children:(0,j.jsx)("img",{alt:"\u8fd9\u662f\u4e00\u4e2a\u6807\u9898",src:"https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"})});return(0,j.jsx)(p.ZP,{content:a,extraContent:e,children:(0,j.jsx)("div",{className:g().cardList,children:(0,j.jsx)(s.ZP,{rowKey:"id",grid:{gutter:16,xs:1,sm:2,md:3,lg:3,xl:4,xxl:4},dataSource:this.state.data,renderItem:function(a){return(0,j.jsx)(s.ZP.Item,{children:(0,j.jsx)(n.Z,{hoverable:!0,className:g().card,actions:[(0,j.jsx)("a",{onClick:function(){(0,u.Z)("/tasks/validate",{method:"POST",data:{ai_id:a.pk}}).then((function(){h.m8.push("/dash/prediction/modelinfo/".concat(a.pk))}))},children:(0,j.jsx)(h._H,{id:"accountandsettings.option1"})},"option1")],children:(0,j.jsx)(n.Z.Meta,{title:(0,j.jsxs)("div",{className:g().cardAvatar,children:[(0,j.jsx)(f.Z,{size:"large",src:a.model_url?a.model_url:"https://prophetsrc-1305001068.cos.ap-chengdu.myqcloud.com/defalutprofile.png"}),(0,j.jsx)(Z,{onClick:function(){(0,u.Z)("/tasks/validate",{method:"POST",data:{ai_id:a.pk}}).then((function(e){200===e.code?h.m8.push("/dash/prediction/modelinfo/".concat(a.pk)):t.setcreditModalVisible(!0)}))},children:a.fields.ai_name})]}),description:(0,j.jsx)(b,{className:g().item,ellipsis:{rows:3},children:a.fields.ai_true_description})})})},a.pk)}})})})}}]),e}(l.Component);a["default"]=(0,h.$j)((function(t){var a=t.listAndcardList;return{listAndcardList:a}}))(y)}}]);