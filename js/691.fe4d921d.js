"use strict";(globalThis["webpackChunkquasar_bgb_matchmanagement"]=globalThis["webpackChunkquasar_bgb_matchmanagement"]||[]).push([[691],{2417:(a,e,t)=>{t.d(e,{FP:()=>c,I_:()=>i,LE:()=>o,Pi:()=>k,R7:()=>_,RR:()=>f,TT:()=>m,Zg:()=>r,bl:()=>y,d8:()=>p,ej:()=>v,gZ:()=>n,gn:()=>g,hc:()=>w,kY:()=>b,mb:()=>u,ov:()=>d,wX:()=>h});const l=!1,s="HOME",n="service_1z8boq8",i="template_uc9j4dn",r="z6CsuBOLcuYCsxNiZ",o="Auf geht's SCF",c="d1f60978-f743-4b6e-88f1-ac7aa7885d2b",u="8f26f0ad-d9d3-4c33-b1c9-f0560ee3ea11",g="https://planthegame.ch",m="https://script.google.com/macros/s/AKfycbxpYbKFzUC6iSSlE913vWGLuvRZ7TbT8eXVn54Un7rm0KJa9vVGzuvu7d-V-tSuWSDjOw/exec",v=function(a){const e=a+"=",t=decodeURIComponent(document.cookie),n=t.split(";");for(let l=0;l<n.length;l++){let a=n[l];while(" "===a.charAt(0))a=a.substring(1);if(0===a.indexOf(e))return a.substring(e.length,a.length)}return"isAdministrator"===a?l:"applicationCode"===a?s:void 0},p=function(a,e){const t=new Date;t.setTime(t.getTime()+31536e6);const l="expires="+t.toUTCString();document.cookie="isAdministrator="+a+";"+l+'";path=/',document.cookie="applicationCode="+e+";"+l+'";path=/'},b=function(a){let e="";if("HOME"===a)return"3Home2emoH9";if(12===a.length){if(a.indexOf("_")>0){const t=a.split("_");8===t[0].length&&parseInt(t[1])>=329&&(e=t[1].substring(0,1)+t[0].substring(0,4)+t[1].substring(1,2)+t[0].substring(4,8)+t[1].substring(2,t[1].length))}}else 11===a.length&&(e=a);return e},d=function(a){let e="";if(12===a.length){if(a.indexOf("_")>0){const t=a.split("_");8===t[0].length&&parseInt(t[1])>=329&&(e=a)}}else 11===a.length&&(e=a.substring(1,5)+a.substring(6,10)+"_"+a.substring(0,1)+a.substring(5,6)+a.substring(10,a.length));return e},_=function(a){return"statics/images/"+a+"/Logo.png"},h=function(a,e,t){return""===e?"statics/avatars/collection/Placeholder.png":t?"statics/avatars/"+a+"/"+e+".png":"statics/avatars/collection/"+e+".png"},f=function(a){let e=this.teamImages.find((e=>e.value===a))?.image;return"undefined"===typeof e&&(e="statics/teams/QuestionMark.svg"),e},k=function(a){return a.toLowerCase().indexOf("test")>=0?"statics/teams/Test.svg":"statics/teams/Event.webp"},w=[{label:"Arminia",value:"Arminia_Bielefeld",image:"statics/teams/Arminia_Bielefeld.svg"},{label:"Augsburg",value:"Augsburg",image:"statics/teams/Augsburg.svg"},{label:"Backa Topola",value:"Backa_Topola",image:"statics/teams/Backa_Topola.svg"},{label:"Bayer Leverkusen",value:"Bayer_Leverkusen",image:"statics/teams/Bayer_Leverkusen.svg"},{label:"Bayern",value:"Bayern_München",image:"statics/teams/Bayern_München.svg"},{label:"Bochum",value:"Bochum",image:"statics/teams/Bochum.svg"},{label:"Borussia Dortmund",value:"Borussia_Dortmund",image:"statics/teams/Borussia_Dortmund.svg"},{label:"Borussia Mönchengladbach",value:"Borussia_Mönchengladbach",image:"statics/teams/Borussia_Mönchengladbach.svg"},{label:"Champions League",value:"Champions_League",image:"statics/teams/Champions_League.svg"},{label:"Conference League",value:"Conference_League",image:"statics/teams/Conference_League.svg"},{label:"Darmstadt",value:"Darmstadt",image:"statics/teams/Darmstadt.svg"},{label:"DFB Pokal",value:"DFB_Pokal",image:"statics/teams/DFB_Pokal.png"},{label:"Eintracht Braunschweig",value:"Eintracht_Braunschweig",image:"statics/teams/Eintracht_Braunschweig.svg"},{label:"Eintracht Frankfurt",value:"Eintracht_Frankfurt",image:"statics/teams/Eintracht_Frankfurt.svg"},{label:"Europa League",value:"Europa_League",image:"statics/teams/Europa_League.svg"},{label:"Fortuna Düsseldorf",value:"Fortuna_Düsseldorf",image:"statics/teams/Fortuna_Düsseldorf.svg"},{label:"Freiburg",value:"Freiburg",image:"statics/teams/Freiburg.svg"},{label:"Greuther Fürth",value:"Greuther_Fürth",image:"statics/teams/Greuther_Fürth.svg"},{label:"Hamburger SV",value:"Hamburger_SV",image:"statics/teams/Hamburger_SV.svg"},{label:"Hannover",value:"Hannover",image:"statics/teams/Hannover.svg"},{label:"Hansa Rostock",value:"Hansa_Rostock",image:"statics/teams/Hansa_Rostock.svg"},{label:"Heidenheim",value:"Heidenheim",image:"statics/teams/Heidenheim.svg"},{label:"Hertha",value:"Hertha",image:"statics/teams/Hertha.svg"},{label:"Hoffenheim",value:"Hoffenheim",image:"statics/teams/Hoffenheim.svg"},{label:"Holstein",value:"Holstein",image:"statics/teams/Holstein.svg"},{label:"Jahn Regensburg",value:"Jahn_Regensburg",image:"statics/teams/Jahn_Regensburg.svg"},{label:"Juventus Turin",value:"Juventus_Turin",image:"statics/teams/Juventus_Turin.svg"},{label:"Kaiserslautern",value:"Kaiserslautern",image:"statics/teams/Kaiserslautern.svg"},{label:"Karlsruher",value:"Karlsruher",image:"statics/teams/Karlsruher.svg"},{label:"Köln",value:"Köln",image:"statics/teams/Köln.svg"},{label:"Leipzig",value:"Leipzig",image:"statics/teams/Leipzig.svg"},{label:"RC Lens",value:"Lens",image:"statics/teams/Lens.svg"},{label:"Magdeburg",value:"Magdeburg",image:"statics/teams/Magdeburg.svg"},{label:"Mainz",value:"Mainz",image:"statics/teams/Mainz.svg"},{label:"Nürnberg",value:"Nürnberg",image:"statics/teams/Nürnberg.svg"},{label:"Oberachern",value:"Oberachern",image:"statics/teams/Oberachern.svg"},{label:"Olympiakos Piräus",value:"Olympiakos_Piräus",image:"statics/teams/Olympiakos_Piräus.svg"},{label:"Paderborn",value:"Paderborn",image:"statics/teams/Paderborn.svg"},{label:"Sandhausen",value:"Sandhausen",image:"statics/teams/Sandhausen.svg"},{label:"Schalke",value:"Schalke",image:"statics/teams/Schalke.svg"},{label:"St. Pauli",value:"St._Pauli",image:"statics/teams/St._Pauli.svg"},{label:"Stuttgart",value:"Stuttgart",image:"statics/teams/Stuttgart.svg"},{label:"Union Berlin",value:"Union_Berlin",image:"statics/teams/Union_Berlin.svg"},{label:"VfL Osnabrück",value:"VfL_Osnabrück",image:"statics/teams/VfL_Osnabrück.svg"},{label:"Werder Bremen",value:"Werder_Bremen",image:"statics/teams/Werder_Bremen.svg"},{label:"West Ham",value:"West_Ham",image:"statics/teams/West_Ham.svg"},{label:"Wolfsburg",value:"Wolfsburg",image:"statics/teams/Wolfsburg.svg"}],y=[{label:"Abraham Simpson",value:"Abraham_Simpson",avatar:"statics/avatars/collection/Abraham_Simpson.png"},{label:"Alien",value:"Alien",avatar:"statics/avatars/collection/Alien.png"},{label:"Ariel",value:"Ariel",avatar:"statics/avatars/collection/Ariel.png"},{label:"Barney Gumble",value:"Barney_Gumble",avatar:"statics/avatars/collection/Barney_Gumble.png"},{label:"Bart Simpson",value:"Bart_Simpson",avatar:"statics/avatars/collection/Bart_Simpson.png"},{label:"Charlie Brown",value:"Charlie_Brown",avatar:"statics/avatars/collection/Charlie_Brown.png"},{label:"Charlie Chaplin",value:"Charlie_Chaplin",avatar:"statics/avatars/collection/Charlie_Chaplin.png"},{label:"Clancy Wiggum",value:"Clancy_Wiggum",avatar:"statics/avatars/collection/Clancy_Wiggum.png"},{label:"Cupid",value:"Cupid",avatar:"statics/avatars/collection/Cupid.png"},{label:"Doctor Strange",value:"Doctor_Strange",avatar:"statics/avatars/collection/Doctor_Strange.png"},{label:"Ed Sheeran",value:"Ed_Sheeran",avatar:"statics/avatars/collection/Ed_Sheeran.png"},{label:"Eeyore",value:"Eeyore",avatar:"statics/avatars/collection/Eeyore.png"},{label:"Elon Musk",value:"Elon_Musk",avatar:"statics/avatars/collection/Elon_Musk.png"},{label:"Fat Cat",value:"Fat_Cat",avatar:"statics/avatars/collection/Fat_Cat.png"},{label:"Garfield",value:"Garfield",avatar:"statics/avatars/collection/Garfield.png"},{label:"Hello Kitty",value:"Hello_Kitty",avatar:"statics/avatars/collection/Hello_Kitty.png"},{label:"Homer Simpson",value:"Homer_Simpson",avatar:"statics/avatars/collection/Homer_Simpson.png"},{label:"Ironman",value:"Ironman",avatar:"statics/avatars/collection/Ironman.png"},{label:"Jerry",value:"Jerry",avatar:"statics/avatars/collection/Jerry.png"},{label:"John Lennon",value:"John_Lennon",avatar:"statics/avatars/collection/John_Lennon.png"},{label:"Joker",value:"Joker",avatar:"statics/avatars/collection/Joker.png"},{label:"Krusty The Clown",value:"Krusty_The_Clown",avatar:"statics/avatars/collection/Krusty_The_Clown.png"},{label:"Linus",value:"Linus",avatar:"statics/avatars/collection/Linus.png"},{label:"Lisa Simpson",value:"Lisa_Simpson",avatar:"statics/avatars/collection/Lisa_Simpson.png"},{label:"Lucy",value:"Lucy",avatar:"statics/avatars/collection/Lucy.png"},{label:"Maggie Simpson",value:"Maggie_Simpson",avatar:"statics/avatars/collection/Maggie_Simpson.png"},{label:"Marcie",value:"Marcie",avatar:"statics/avatars/collection/Marcie.png"},{label:"Marge Simpson",value:"Marge_Simpson",avatar:"statics/avatars/collection/Marge_Simpson.png"},{label:"Marie",value:"Marie",avatar:"statics/avatars/collection/Marie.png"},{label:"Marilyn Monroe",value:"Marilyn_Monroe",avatar:"statics/avatars/collection/Marilyn_Monroe.png"},{label:"Messi",value:"Messi",avatar:"statics/avatars/collection/Messi.png"},{label:"Michael Jackson",value:"Michael_Jackson",avatar:"statics/avatars/collection/Michael_Jackson.png"},{label:"Mondtor01",value:"Mondtor01",avatar:"statics/avatars/collection/Mondtor01.png"},{label:"Mondtor02",value:"Mondtor02",avatar:"statics/avatars/collection/Mondtor02.png"},{label:"Mr Beans Teddy",value:"Mr_Beans_Teddy",avatar:"statics/avatars/collection/Mr_Beans_Teddy.png"},{label:"Mr Burns",value:"Mr_Burns",avatar:"statics/avatars/collection/Mr_Burns.png"},{label:"Ms Wicket",value:"Ms_Wicket",avatar:"statics/avatars/collection/Ms_Wicket.png"},{label:"Pelé",value:"Pelé",avatar:"statics/avatars/collection/Pelé.png"},{label:"Peppermint Patty",value:"Peppermint_Patty",avatar:"statics/avatars/collection/Peppermint_Patty.png"},{label:"Pile Of Poo",value:"Pile_Of_Poo",avatar:"statics/avatars/collection/Pile_Of_Poo.png"},{label:"Sally",value:"Sally",avatar:"statics/avatars/collection/Sally.png"},{label:"Santa",value:"Santa",avatar:"statics/avatars/collection/Santa.png"},{label:"Sea Calf",value:"Sea_Calf",avatar:"statics/avatars/collection/Sea_Calf.png"},{label:"Snoop Dogg",value:"Snoop_Dogg",avatar:"statics/avatars/collection/Snoop_Dogg.png"},{label:"Stan Marsh",value:"Stan_Marsh",avatar:"statics/avatars/collection/Stan_Marsh.png"},{label:"Sumo",value:"Sumo",avatar:"statics/avatars/collection/Sumo.png"},{label:"Super Mario",value:"Super_Mario",avatar:"statics/avatars/collection/Super_Mario.png"},{label:"Tom",value:"Tom",avatar:"statics/avatars/collection/Tom.png"},{label:"Tom Kid",value:"Tom_Kid",avatar:"statics/avatars/collection/Tom_Kid.png"},{label:"Tweety",value:"Tweety",avatar:"statics/avatars/collection/Tweety.png"},{label:"Woodstock",value:"Woodstock",avatar:"statics/avatars/collection/Woodstock.png"}]},1691:(a,e,t)=>{t.r(e),t.d(e,{default:()=>U});var l=t(9835),s=t(6970);const n={class:"q-px-lg q-pt-xl q-mb-md"},i={key:0,class:"text-h4"},r={key:1,class:"text-h4"},o={class:"text-subtitle1"};function c(a,e,t,c,u,g){const m=(0,l.up)("q-btn"),v=(0,l.up)("q-toolbar"),p=(0,l.up)("q-img"),b=(0,l.up)("q-header"),d=(0,l.up)("q-icon"),_=(0,l.up)("q-item-section"),h=(0,l.up)("q-item"),f=(0,l.up)("q-list"),k=(0,l.up)("EssentialLink"),w=(0,l.up)("q-scroll-area"),y=(0,l.up)("q-item-label"),S=(0,l.up)("q-drawer"),M=(0,l.up)("router-view"),L=(0,l.up)("q-page-container"),W=(0,l.up)("q-layout"),C=(0,l.Q2)("ripple");return(0,l.wg)(),(0,l.j4)(W,{view:"lHh Lpr lFf"},{default:(0,l.w5)((()=>[(0,l.Wm)(b,null,{default:(0,l.w5)((()=>[(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:a.toggleLeftDrawer},null,8,["onClick"])])),_:1}),(0,l._)("div",n,["HOME"!==a.clientNameFromTenant?((0,l.wg)(),(0,l.iD)("div",i,(0,s.zw)(a.clientNameFromTenant)+" Spieltagsplanung",1)):(0,l.kq)("",!0),"HOME"===a.clientNameFromTenant?((0,l.wg)(),(0,l.iD)("div",r,"Auf geht's Spieltagsplanung")):(0,l.kq)("",!0),(0,l._)("div",o,(0,s.zw)(a.todaysDate),1)]),(0,l.Wm)(p,{src:"statics/images/AufGehtsSCF.png",class:"header-image absolute-top"})])),_:1}),(0,l.Wm)(S,{modelValue:a.leftDrawerOpen,"onUpdate:modelValue":e[0]||(e[0]=e=>a.leftDrawerOpen=e),"show-if-above":"",width:350,breakpoint:600},{default:(0,l.w5)((()=>["HOME"===a.clientNameFromTenant?((0,l.wg)(),(0,l.j4)(w,{key:0,style:{height:"calc(100% - 192px)","margin-top":"192px","border-right":"1px solid #ddd"}},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{padding:""},{default:(0,l.w5)((()=>[(0,l.wy)(((0,l.wg)(),(0,l.j4)(h,{to:"/",exact:"",clickable:""},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{name:"home"})])),_:1}),(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Home ")])),_:1})])),_:1})),[[C]])])),_:1}),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.essentialLinks,(a=>((0,l.wg)(),(0,l.j4)(k,(0,l.dG)({key:a.title},a),null,16)))),128))])),_:1})):(0,l.kq)("",!0),"HOME"!==a.clientNameFromTenant?((0,l.wg)(),(0,l.j4)(w,{key:1,style:{height:"calc(100% - 192px)","margin-top":"192px","border-right":"1px solid #ddd"}},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{padding:""},{default:(0,l.w5)((()=>[(0,l.wy)(((0,l.wg)(),(0,l.j4)(h,{to:"/participant",exact:"",clickable:""},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{name:"emoji_people"})])),_:1}),(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Teilnehmer ")])),_:1})])),_:1})),[[C]]),(0,l.wy)(((0,l.wg)(),(0,l.j4)(h,{to:"/match",exact:"",clickable:""},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{name:"sports_volleyball"})])),_:1}),(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Spiele ")])),_:1})])),_:1})),[[C]]),(0,l.wy)(((0,l.wg)(),(0,l.j4)(h,{to:"/member",exact:"",clickable:""},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{name:"person"})])),_:1}),(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Mitglieder ")])),_:1})])),_:1})),[[C]]),(0,l.wy)(((0,l.wg)(),(0,l.j4)(h,{to:"/whereismycard",exact:"",clickable:""},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{name:"credit_card"})])),_:1}),(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Wer hat meine Karte? ")])),_:1})])),_:1})),[[C]]),"NONE"===a.clientNameFromTenant?(0,l.wy)(((0,l.wg)(),(0,l.j4)(h,{key:0,to:"/order",exact:"",clickable:""},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{name:"shopping_cart"})])),_:1}),(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Bestellungen ")])),_:1})])),_:1})),[[C]]):(0,l.kq)("",!0),a.getCookie("isAdministrator")?(0,l.wy)(((0,l.wg)(),(0,l.j4)(h,{key:1,to:"/link",exact:"",clickable:""},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{name:"link"})])),_:1}),(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Links ")])),_:1})])),_:1})),[[C]]):(0,l.kq)("",!0),a.getCookie("isAdministrator")?(0,l.wy)(((0,l.wg)(),(0,l.j4)(h,{key:2,to:"/setting",exact:"",clickable:""},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{name:"settings"})])),_:1}),(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Settings ")])),_:1})])),_:1})),[[C]]):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(y,{header:""}),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.essentialLinks,(a=>((0,l.wg)(),(0,l.j4)(k,(0,l.dG)({key:a.title},a),null,16)))),128))])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(p,{class:"absolute-top",src:a.getLogo(a.getAdminCode(a.getCookie("applicationCode"))),style:{height:"182px"}},null,8,["src"])])),_:1},8,["modelValue"]),(0,l.Wm)(L,null,{default:(0,l.w5)((()=>[((0,l.wg)(),(0,l.j4)(l.Ob,null,[(0,l.Wm)(M)],1024))])),_:1})])),_:1})}var u=t(499);function g(a,e,t,n,i,r){const o=(0,l.up)("q-icon"),c=(0,l.up)("q-item-section"),u=(0,l.up)("q-item-label"),g=(0,l.up)("q-item");return(0,l.wg)(),(0,l.j4)(g,{clickable:"",tag:"a",target:"_blank",href:a.link},{default:(0,l.w5)((()=>[a.icon?((0,l.wg)(),(0,l.j4)(c,{key:0,avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{name:a.icon},null,8,["name"])])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(a.title),1)])),_:1}),(0,l.Wm)(u,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(a.caption),1)])),_:1})])),_:1})])),_:1},8,["href"])}const m=(0,l.aZ)({name:"EssentialLink",props:{title:{type:String,default:""},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});var v=t(1639),p=t(490),b=t(1233),d=t(2857),_=t(3115),h=t(9984),f=t.n(h);const k=(0,v.Z)(m,[["render",g]]),w=k;f()(m,"components",{QItem:p.Z,QItemSection:b.Z,QIcon:d.Z,QItemLabel:_.Z});var y=t(2417),S=t(4170);const M=(0,u.iH)(""),L=(0,u.iH)("");let W="",C="",B="";const H=[{title:"Wichtige Links",caption:"",icon:"",url:"",href:""}],T=(0,l.aZ)({name:"MainLayout",components:{EssentialLink:w},setup(){const a=(0,u.iH)(!1);return{essentialLinks:H,getAdminCode:y.kY,getCookie:y.ej,getLogo:y.R7,URLMatchManagementAPI:y.gn,leftDrawerOpen:a,toggleLeftDrawer(){a.value=!a.value},clientNameFromTenant:(0,u.iH)(L)}},computed:{todaysDate(){const a=Date.now();return S.ZP.formatDate(a,"dddd D MMMM")}},mounted(){this.setVariables().then((()=>{this.getTenantId().then((()=>{this.getTableLink()}))}))},methods:{setVariables(){return M.value=(0,y.kY)((0,y.ej)("applicationCode")),C=y.gn+"/Tenant",B=y.gn+"/Link",Promise.resolve()},getTenantId(){return new Promise(((a,e)=>{this.$axios.get(`${C}/code/${M.value}`).then((t=>{200===t.status?(W=t.data.id,L.value=t.data.name,a()):(console.log("Unexpected status code:",t.status),e(new Error("Unexpected status code")))})).catch((a=>{console.log(a),e(a)}))}))},getTableLink(){this.$axios.get(`${B}/${W}`).then((a=>{if(200===a.status)for(let e=0;e<a.data.length;e++){let t="";switch(a.data[e].title){case"E-Mail":t="drafts";break;case"Facebook":t="public";break;case"Z":t="rss_feed";break;case"Instagram":t="record_voice_over";break;default:t="favorite";break}this.setLinkList(a.data[e].title,a.data[e].caption,t,a.data[e].url)}else console.log("Unexpected status code:",a.status)})).catch((a=>{console.log(a)}))},setLinkList(a,e,t,l){H.push({title:a,caption:e,icon:t,url:l,href:l})}}});var D=t(249),P=t(6602),x=t(1663),E=t(8879),q=t(1487),F=t(906),O=t(6663),A=t(3246),Z=t(2133),K=t(1136);const j=(0,v.Z)(T,[["render",c]]),U=j;f()(T,"components",{QLayout:D.Z,QHeader:P.Z,QToolbar:x.Z,QBtn:E.Z,QImg:q.Z,QDrawer:F.Z,QScrollArea:O.Z,QList:A.Z,QItem:p.Z,QItemSection:b.Z,QIcon:d.Z,QItemLabel:_.Z,QPageContainer:Z.Z}),f()(T,"directives",{Ripple:K.Z})}}]);