"use strict";(globalThis["webpackChunkquasar_bgb_matchmanagement"]=globalThis["webpackChunkquasar_bgb_matchmanagement"]||[]).push([[524],{2417:(e,a,t)=>{t.d(a,{FP:()=>c,I_:()=>r,LE:()=>o,Pi:()=>f,R7:()=>h,RR:()=>w,TT:()=>m,Zg:()=>n,bl:()=>O,d8:()=>g,ej:()=>p,gZ:()=>i,gn:()=>d,hc:()=>x,kY:()=>v,mb:()=>u,ov:()=>b,wX:()=>_});const l=!1,s="HOME",i="service_1z8boq8",r="template_uc9j4dn",n="z6CsuBOLcuYCsxNiZ",o="Auf geht's SCF",c="d1f60978-f743-4b6e-88f1-ac7aa7885d2b",u="8f26f0ad-d9d3-4c33-b1c9-f0560ee3ea11",d="https://planthegame.ch",m="https://script.google.com/macros/s/AKfycbxpYbKFzUC6iSSlE913vWGLuvRZ7TbT8eXVn54Un7rm0KJa9vVGzuvu7d-V-tSuWSDjOw/exec",p=function(e){const a=e+"=",t=decodeURIComponent(document.cookie),i=t.split(";");for(let l=0;l<i.length;l++){let e=i[l];while(" "===e.charAt(0))e=e.substring(1);if(0===e.indexOf(a))return e.substring(a.length,e.length)}return"isAdministrator"===e?l:"applicationCode"===e?s:void 0},g=function(e,a){const t=new Date;t.setTime(t.getTime()+31536e6);const l="expires="+t.toUTCString();document.cookie="isAdministrator="+e+";"+l+'";path=/',document.cookie="applicationCode="+a+";"+l+'";path=/'},v=function(e){let a="";if("HOME"===e)return"3Home2emoH9";if(12===e.length){if(e.indexOf("_")>0){const t=e.split("_");8===t[0].length&&parseInt(t[1])>=329&&(a=t[1].substring(0,1)+t[0].substring(0,4)+t[1].substring(1,2)+t[0].substring(4,8)+t[1].substring(2,t[1].length))}}else 11===e.length&&(a=e);return a},b=function(e){let a="";if(12===e.length){if(e.indexOf("_")>0){const t=e.split("_");8===t[0].length&&parseInt(t[1])>=329&&(a=e)}}else 11===e.length&&(a=e.substring(1,5)+e.substring(6,10)+"_"+e.substring(0,1)+e.substring(5,6)+e.substring(10,e.length));return a},h=function(e){return"statics/images/"+e+"/Logo.png"},_=function(e,a,t){return""===a?"statics/avatars/collection/Placeholder.png":t?"statics/avatars/"+e+"/"+a+".png":"statics/avatars/collection/"+a+".png"},w=function(e){let a=this.teamImages.find((a=>a.value===e))?.image;return"undefined"===typeof a&&(a="statics/teams/QuestionMark.png"),a},f=function(e){return e.toLowerCase().indexOf("test")>=0?"statics/teams/Test.png":"statics/teams/Event.png"},x=[{label:"Arminia",value:"Arminia_Bielefeld",image:"statics/teams/Arminia_Bielefeld.png"},{label:"Augsburg",value:"Augsburg",image:"statics/teams/Augsburg.png"},{label:"Backa Topola",value:"Backa_Topola",image:"statics/teams/Backa_Topola.png"},{label:"Bayern",value:"Bayern_München",image:"statics/teams/Bayern_München.png"},{label:"Bochum",value:"Bochum",image:"statics/teams/Bochum.png"},{label:"Braunschweig",value:"Eintracht_Braunschweig",image:"statics/teams/Eintracht_Braunschweig.png"},{label:"Darmstadt",value:"Darmstadt",image:"statics/teams/Darmstadt.png"},{label:"DFB Pokal",value:"DFB_Pokal",image:"statics/teams/DFB_Pokal.png"},{label:"Dortmund",value:"Borussia_Dortmund",image:"statics/teams/Borussia_Dortmund.png"},{label:"Europa League",value:"Europa_League",image:"statics/teams/Europa_League.png"},{label:"Frankfurt",value:"Eintracht_Frankfurt",image:"statics/teams/Eintracht_Frankfurt.png"},{label:"Fortuna Düsseldorf",value:"Fortuna_Düsseldorf",image:"statics/teams/Fortuna_Düsseldorf.png"},{label:"Freiburg",value:"Freiburg",image:"statics/teams/Freiburg.svg"},{label:"Greuther Fürth",value:"Greuther_Fürth",image:"statics/teams/Greuther_Fürth.png"},{label:"Hamburger SV",value:"Hamburger_SV",image:"statics/teams/Hamburger_SV.png"},{label:"Hannover",value:"Hannover",image:"statics/teams/Hannover.png"},{label:"Hansa Rostock",value:"Hansa_Rostock",image:"statics/teams/Hansa_Rostock.png"},{label:"Heidenheim",value:"Heidenheim",image:"statics/teams/Heidenheim.png"},{label:"Hertha",value:"Hertha",image:"statics/teams/Hertha.png"},{label:"Hoffenheim",value:"Hoffenheim",image:"statics/teams/Hoffenheim.svg"},{label:"Holstein",value:"Holstein",image:"statics/teams/Holstein.png"},{label:"Jahn Regensburg",value:"Jahn_Regensburg",image:"statics/teams/Jahn_Regensburg.png"},{label:"Juventus Turin",value:"Juventus_Turin",image:"statics/teams/Juventus_Turin.png"},{label:"Kaiserslautern",value:"Kaiserslautern",image:"statics/teams/Kaiserslautern.png"},{label:"Karlsruher",value:"Karlsruher",image:"statics/teams/Karlsruher.png"},{label:"Köln",value:"Köln",image:"statics/teams/Köln.svg"},{label:"Leipzig",value:"Leipzig",image:"statics/teams/Leipzig.png"},{label:"RC Lens",value:"Lens",image:"statics/teams/Lens.svg"},{label:"Leverkusen",value:"Bayer_Leverkusen",image:"statics/teams/Bayer_Leverkusen.png"},{label:"Magdeburg",value:"Magdeburg",image:"statics/teams/Magdeburg.png"},{label:"Mainz",value:"Mainz",image:"statics/teams/Mainz.png"},{label:"Mönchengladbach",value:"Borussia_Mönchengladbach",image:"statics/teams/Borussia_Mönchengladbach.png"},{label:"Nürnberg",value:"Nürnberg",image:"statics/teams/Nürnberg.png"},{label:"Oberachern",value:"Oberachern",image:"statics/teams/Oberachern.png"},{label:"Olympiakos Piräus",value:"Olympiakos_Piräus",image:"statics/teams/Olympiakos_Piräus.png"},{label:"Paderborn",value:"Paderborn",image:"statics/teams/Paderborn.png"},{label:"Sandhausen",value:"Sandhausen",image:"statics/teams/Sandhausen.png"},{label:"Schalke",value:"Schalke",image:"statics/teams/Schalke.png"},{label:"St. Pauli",value:"St._Pauli",image:"statics/teams/St._Pauli.png"},{label:"Stuttgart",value:"Stuttgart",image:"statics/teams/Stuttgart.png"},{label:"Union Berlin",value:"Union_Berlin",image:"statics/teams/Union_Berlin.svg"},{label:"Werder Bremen",value:"Werder_Bremen",image:"statics/teams/Werder_Bremen.png"},{label:"West Ham",value:"West_Ham",image:"statics/teams/West_Ham.png"},{label:"Wolfsburg",value:"Wolfsburg",image:"statics/teams/Wolfsburg.png"}],O=[{label:"Abraham Simpson",value:"Abraham_Simpson",avatar:"statics/avatars/collection/Abraham_Simpson.png"},{label:"Alien",value:"Alien",avatar:"statics/avatars/collection/Alien.png"},{label:"Ariel",value:"Ariel",avatar:"statics/avatars/collection/Ariel.png"},{label:"Barney Gumble",value:"Barney_Gumble",avatar:"statics/avatars/collection/Barney_Gumble.png"},{label:"Bart Simpson",value:"Bart_Simpson",avatar:"statics/avatars/collection/Bart_Simpson.png"},{label:"Charlie Brown",value:"Charlie_Brown",avatar:"statics/avatars/collection/Charlie_Brown.png"},{label:"Charlie Chaplin",value:"Charlie_Chaplin",avatar:"statics/avatars/collection/Charlie_Chaplin.png"},{label:"Clancy Wiggum",value:"Clancy_Wiggum",avatar:"statics/avatars/collection/Clancy_Wiggum.png"},{label:"Cupid",value:"Cupid",avatar:"statics/avatars/collection/Cupid.png"},{label:"Doctor Strange",value:"Doctor_Strange",avatar:"statics/avatars/collection/Doctor_Strange.png"},{label:"Ed Sheeran",value:"Ed_Sheeran",avatar:"statics/avatars/collection/Ed_Sheeran.png"},{label:"Eeyore",value:"Eeyore",avatar:"statics/avatars/collection/Eeyore.png"},{label:"Elon Musk",value:"Elon_Musk",avatar:"statics/avatars/collection/Elon_Musk.png"},{label:"Fat Cat",value:"Fat_Cat",avatar:"statics/avatars/collection/Fat_Cat.png"},{label:"Garfield",value:"Garfield",avatar:"statics/avatars/collection/Garfield.png"},{label:"Hello Kitty",value:"Hello_Kitty",avatar:"statics/avatars/collection/Hello_Kitty.png"},{label:"Homer Simpson",value:"Homer_Simpson",avatar:"statics/avatars/collection/Homer_Simpson.png"},{label:"Ironman",value:"Ironman",avatar:"statics/avatars/collection/Ironman.png"},{label:"Jerry",value:"Jerry",avatar:"statics/avatars/collection/Jerry.png"},{label:"John Lennon",value:"John_Lennon",avatar:"statics/avatars/collection/John_Lennon.png"},{label:"Joker",value:"Joker",avatar:"statics/avatars/collection/Joker.png"},{label:"Krusty The Clown",value:"Krusty_The_Clown",avatar:"statics/avatars/collection/Krusty_The_Clown.png"},{label:"Linus",value:"Linus",avatar:"statics/avatars/collection/Linus.png"},{label:"Lisa Simpson",value:"Lisa_Simpson",avatar:"statics/avatars/collection/Lisa_Simpson.png"},{label:"Lucy",value:"Lucy",avatar:"statics/avatars/collection/Lucy.png"},{label:"Maggie Simpson",value:"Maggie_Simpson",avatar:"statics/avatars/collection/Maggie_Simpson.png"},{label:"Marcie",value:"Marcie",avatar:"statics/avatars/collection/Marcie.png"},{label:"Marge Simpson",value:"Marge_Simpson",avatar:"statics/avatars/collection/Marge_Simpson.png"},{label:"Marie",value:"Marie",avatar:"statics/avatars/collection/Marie.png"},{label:"Marilyn Monroe",value:"Marilyn_Monroe",avatar:"statics/avatars/collection/Marilyn_Monroe.png"},{label:"Messi",value:"Messi",avatar:"statics/avatars/collection/Messi.png"},{label:"Michael Jackson",value:"Michael_Jackson",avatar:"statics/avatars/collection/Michael_Jackson.png"},{label:"Mondtor01",value:"Mondtor01",avatar:"statics/avatars/collection/Mondtor01.png"},{label:"Mondtor02",value:"Mondtor02",avatar:"statics/avatars/collection/Mondtor02.png"},{label:"Mr Beans Teddy",value:"Mr_Beans_Teddy",avatar:"statics/avatars/collection/Mr_Beans_Teddy.png"},{label:"Mr Burns",value:"Mr_Burns",avatar:"statics/avatars/collection/Mr_Burns.png"},{label:"Ms Wicket",value:"Ms_Wicket",avatar:"statics/avatars/collection/Ms_Wicket.png"},{label:"Pelé",value:"Pelé",avatar:"statics/avatars/collection/Pelé.png"},{label:"Peppermint Patty",value:"Peppermint_Patty",avatar:"statics/avatars/collection/Peppermint_Patty.png"},{label:"Pile Of Poo",value:"Pile_Of_Poo",avatar:"statics/avatars/collection/Pile_Of_Poo.png"},{label:"Sally",value:"Sally",avatar:"statics/avatars/collection/Sally.png"},{label:"Santa",value:"Santa",avatar:"statics/avatars/collection/Santa.png"},{label:"Sea Calf",value:"Sea_Calf",avatar:"statics/avatars/collection/Sea_Calf.png"},{label:"Snoop Dogg",value:"Snoop_Dogg",avatar:"statics/avatars/collection/Snoop_Dogg.png"},{label:"Stan Marsh",value:"Stan_Marsh",avatar:"statics/avatars/collection/Stan_Marsh.png"},{label:"Sumo",value:"Sumo",avatar:"statics/avatars/collection/Sumo.png"},{label:"Super Mario",value:"Super_Mario",avatar:"statics/avatars/collection/Super_Mario.png"},{label:"Tom",value:"Tom",avatar:"statics/avatars/collection/Tom.png"},{label:"Tom Kid",value:"Tom_Kid",avatar:"statics/avatars/collection/Tom_Kid.png"},{label:"Tweety",value:"Tweety",avatar:"statics/avatars/collection/Tweety.png"},{label:"Woodstock",value:"Woodstock",avatar:"statics/avatars/collection/Woodstock.png"}]},3524:(e,a,t)=>{t.r(a),t.d(a,{default:()=>Q});var l=t(9835),s=t(6970);const i={class:"q-pa-md",style:{"max-width":"500px"}},r={class:"q-pa-md bg-grey-10 text-white",style:{"max-width":"500px"}},n={class:"q-pa-md",style:{"max-width":"500px"}},o={class:"q-pa-md bg-grey-10 text-white",style:{"max-width":"500px"}},c={class:"q-pa-md q-gutter-sm"},u=(0,l._)("div",{class:"text-h6"},"Bestellung erfassen",-1),d=(0,l._)("div",{class:"text-h6"},"Bestellung ändern",-1),m=(0,l._)("span",{class:"q-ml-sm"},"Datensatz löschen?",-1);function p(e,a,t,p,g,v){const b=(0,l.up)("q-toolbar-title"),h=(0,l.up)("q-btn"),_=(0,l.up)("q-toolbar"),w=(0,l.up)("q-item-label"),f=(0,l.up)("q-item-section"),x=(0,l.up)("q-item"),O=(0,l.up)("q-list"),S=(0,l.up)("q-card-section"),k=(0,l.up)("q-input"),y=(0,l.up)("q-select"),W=(0,l.up)("q-separator"),C=(0,l.up)("q-card-actions"),M=(0,l.up)("q-card"),H=(0,l.up)("q-dialog"),B=(0,l.up)("q-avatar"),I=(0,l.up)("q-img"),P=(0,l.up)("q-page"),T=(0,l.Q2)("ripple"),V=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.j4)(P,null,{default:(0,l.w5)((()=>[(0,l._)("div",i,[(0,l.Wm)(_,{class:"bg-primary text-white"},{default:(0,l.w5)((()=>[(0,l.Wm)(b,{class:"text-overline"},{default:(0,l.w5)((()=>[(0,l.Uk)("Aktuelle Bestellung ("+(0,s.zw)(g.order2Object.length)+")",1)])),_:1}),(0,l.Wm)(h,{class:"bg-white text-primary",icon:"add",label:"Neu",onClick:a[0]||(a[0]=e=>p.addOrder=!0)})])),_:1})]),(0,l._)("div",r,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(g.order2Object,((e,a)=>(0,l.wy)(((0,l.wg)(),(0,l.j4)(O,{dark:"",bordered:"",separator:"",style:{"max-width":"470px"},key:a},{default:(0,l.w5)((()=>[(0,l.wy)(((0,l.wg)(),(0,l.j4)(x,{clickable:"",onClick:a=>v.onOrder2Click(e.row,e.name,e.product,e.size,e.color,e.initials,e.positionId,e.orderId)},{default:(0,l.w5)((()=>[(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Wm)(w,{overline:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Name: "+(0,s.zw)(e.name),1)])),_:2},1024),(0,l.Wm)(w,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Artikel: "+(0,s.zw)(e.product),1)])),_:2},1024),(0,l.Wm)(w,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Größe: "+(0,s.zw)(e.size),1)])),_:2},1024),(0,l.Wm)(w,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Farbe: "+(0,s.zw)(e.color),1)])),_:2},1024),(0,l.Wm)(w,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Initialen: "+(0,s.zw)(e.initials),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])),[[T]])])),_:2},1024)),[[T]]))),128))]),(0,l._)("div",n,[(0,l.Wm)(_,{class:"bg-primary text-white"},{default:(0,l.w5)((()=>[(0,l.Wm)(b,{class:"text-overline"},{default:(0,l.w5)((()=>[(0,l.Uk)("Frühere Bestellung ("+(0,s.zw)(g.order1Object.length)+")",1)])),_:1})])),_:1})]),(0,l._)("div",o,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(g.order1Object,((e,a)=>(0,l.wy)(((0,l.wg)(),(0,l.j4)(O,{dark:"",bordered:"",separator:"",style:{"max-width":"470px"},key:a},{default:(0,l.w5)((()=>[(0,l.Wm)(x,null,{default:(0,l.w5)((()=>[(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Wm)(w,{overline:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Name: "+(0,s.zw)(e.name),1)])),_:2},1024),(0,l.Wm)(w,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Artikel: "+(0,s.zw)(e.product),1)])),_:2},1024),(0,l.Wm)(w,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Größe: "+(0,s.zw)(e.size),1)])),_:2},1024),(0,l.Wm)(w,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Farbe: "+(0,s.zw)(e.color),1)])),_:2},1024),(0,l.Wm)(w,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Initialen: "+(0,s.zw)(e.initials),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)),[[T]]))),128))]),(0,l._)("div",c,[(0,l.Wm)(H,{modelValue:p.addOrder,"onUpdate:modelValue":a[7]||(a[7]=e=>p.addOrder=e),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(M,{style:{"min-width":"350px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(S,null,{default:(0,l.w5)((()=>[u])),_:1}),(0,l.Wm)(S,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{filled:"",dense:"",modelValue:p.txtNameNew,"onUpdate:modelValue":a[1]||(a[1]=e=>p.txtNameNew=e),autofocus:"",label:"Name *"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(S,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(y,{filled:"",dense:"",modelValue:p.txtProductNew,"onUpdate:modelValue":a[2]||(a[2]=e=>p.txtProductNew=e),options:p.cbxProductOptions,label:"Artikel *","options-selected-class":"text-deep-orange"},null,8,["modelValue","options"])])),_:1}),(0,l.Wm)(S,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(y,{filled:"",dense:"",modelValue:p.txtSizeNew,"onUpdate:modelValue":a[3]||(a[3]=e=>p.txtSizeNew=e),options:p.cbxSizeOptions,label:"Größe *","options-selected-class":"text-deep-orange"},null,8,["modelValue","options"])])),_:1}),(0,l.Wm)(S,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(y,{filled:"",dense:"",modelValue:p.txtColorNew,"onUpdate:modelValue":a[4]||(a[4]=e=>p.txtColorNew=e),options:p.cbxColorOptions,label:"Farbe *","options-selected-class":"text-deep-orange"},null,8,["modelValue","options"])])),_:1}),(0,l.Wm)(S,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{filled:"",dense:"",modelValue:p.txtInitialsNew,"onUpdate:modelValue":a[5]||(a[5]=e=>p.txtInitialsNew=e),label:"Initialen"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(W),(0,l.Wm)(C,{class:"text-primary",align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(h,{flat:"",label:"Abbrechen"},null,512),[[V]]),(0,l.wy)((0,l.Wm)(h,{icon:"save",label:"Speichern",onClick:a[6]||(a[6]=e=>v.addOrderSave(g.OrderId2,p.txtNameNew,p.txtProductNew,p.txtSizeNew,p.txtColorNew,p.txtInitialsNew)),disable:""===p.txtNameNew||""===p.txtProductNew||""===p.txtSizeNew||""===p.txtColorNew},null,8,["disable"]),[[V]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(H,{modelValue:p.editOrder,"onUpdate:modelValue":a[15]||(a[15]=e=>p.editOrder=e),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(M,{style:{"min-width":"350px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(S,null,{default:(0,l.w5)((()=>[d])),_:1}),(0,l.Wm)(S,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{filled:"",dense:"",modelValue:p.txtName,"onUpdate:modelValue":a[8]||(a[8]=e=>p.txtName=e),autofocus:"",label:"Name *"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(S,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(y,{filled:"",dense:"",modelValue:p.txtProduct,"onUpdate:modelValue":a[9]||(a[9]=e=>p.txtProduct=e),options:p.cbxProductOptions,label:"Artikel *","options-selected-class":"text-deep-orange"},null,8,["modelValue","options"])])),_:1}),(0,l.Wm)(S,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(y,{filled:"",dense:"",modelValue:p.txtSize,"onUpdate:modelValue":a[10]||(a[10]=e=>p.txtSize=e),options:p.cbxSizeOptions,label:"Größe *","options-selected-class":"text-deep-orange"},null,8,["modelValue","options"])])),_:1}),(0,l.Wm)(S,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(y,{filled:"",dense:"",modelValue:p.txtColor,"onUpdate:modelValue":a[11]||(a[11]=e=>p.txtColor=e),options:p.cbxColorOptions,label:"Farbe *","options-selected-class":"text-deep-orange"},null,8,["modelValue","options"])])),_:1}),(0,l.Wm)(S,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{filled:"",dense:"",modelValue:p.txtInitials,"onUpdate:modelValue":a[12]||(a[12]=e=>p.txtInitials=e),label:"Initialen"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(W),(0,l.Wm)(C,{class:"text-primary",align:"right"},{default:(0,l.w5)((()=>[g.getCookie("isAdministrator")?((0,l.wg)(),(0,l.j4)(h,{key:0,icon:"delete",color:"primary",onClick:a[13]||(a[13]=e=>p.delOrder=!0)})):(0,l.kq)("",!0),(0,l.wy)((0,l.Wm)(h,{flat:"",label:"Abbrechen"},null,512),[[V]]),(0,l.wy)((0,l.Wm)(h,{icon:"save",label:"Speichern",onClick:a[14]||(a[14]=e=>v.editOrderSave(p.intOrderRow,p.txtPositionId,p.txtOrderId,p.txtName,p.txtProduct,p.txtSize,p.txtColor,p.txtInitials)),disable:""===p.txtName||""===p.txtProduct||""===p.txtSize||""===p.txtColor},null,8,["disable"]),[[V]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(H,{modelValue:p.delOrder,"onUpdate:modelValue":a[17]||(a[17]=e=>p.delOrder=e),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(M,null,{default:(0,l.w5)((()=>[(0,l.Wm)(S,{class:"row items-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(B,{icon:"delete",color:"primary","text-color":"white"}),m])),_:1}),(0,l.Wm)(C,{align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(h,{flat:"",label:"Nein",color:"primary"},null,512),[[V]]),(0,l.wy)((0,l.Wm)(h,{flat:"",label:"Ja",color:"primary",onClick:a[16]||(a[16]=e=>v.deleteOrder(p.intOrderRow,p.txtPositionId,p.txtOrderId))},null,512),[[V]])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,l.Wm)(I,{src:"statics/images/AufGehtsSCF.png",class:"header-image absolute-top"})])),_:1})}t(9665);var g=t(9302),v=t(2417),b=t(499);const h=(0,b.iH)(""),_=(0,b.iH)(""),w=(0,b.iH)(""),f=(0,b.iH)(""),x=(0,b.iH)(""),O=(0,b.iH)(""),S=(0,b.iH)(""),k=(0,b.iH)("");let y;const W={name:"ListOrder",setup(){const e=(0,g.Z)();return{txtNameNew:(0,b.iH)(""),txtProductNew:(0,b.iH)(""),txtSizeNew:(0,b.iH)(""),txtColorNew:(0,b.iH)(""),txtInitialsNew:(0,b.iH)(""),intOrderRow:(0,b.iH)(h),txtPositionId:(0,b.iH)(S),txtOrderId:(0,b.iH)(k),txtName:(0,b.iH)(_),txtProduct:(0,b.iH)(w),txtSize:(0,b.iH)(f),txtColor:(0,b.iH)(x),txtInitials:(0,b.iH)(O),cbxProductOptions:["Hoodie","Zipjacke Damen","Zipjacke Herren"],cbxSizeOptions:["XS","S","M","L","XL","2XL","3XL"],cbxColorOptions:["Rot","Schwarz"],onOrderCreated(){e.notify({type:"positive",message:"Bestellung wurde erfolgreich erfasst!"})},onOrderUpdated(){e.notify({type:"positive",message:"Bestellung wurde erfolgreich aktualisiert!"})},onOrderDeleted(){e.notify({message:"Bestellung wurde erfolgreich gelöscht!",color:"orange"})},addOrder:(0,b.iH)(!1),editOrder:(0,b.iH)(!1),delOrder:(0,b.iH)(!1)}},data(){return{getCookie:v.ej,getAdminCode:v.kY,URLOrderBasis:v.TT,OrderId1:v.FP,OrderId2:v.mb,order2Object:[{row:"",name:"",product:"",size:"",color:"",initials:"",positionId:"",orderId:""}],order1Object:[{name:"",product:"",size:"",color:"",initials:""}]}},computed:{},mounted(){this.setVariables(),this.getTableOrder2(),this.getTableOrder1()},methods:{setVariables(){y=v.TT+"?sh="+(0,v.kY)((0,v.ej)("applicationCode"))},getTableOrder2(){this.order2Object=[],this.$axios(`${y}&func=Read&orderId=${v.mb}`).then((e=>{this.tableOrder2=e.data.split("\n");for(let a=0;a<this.tableOrder2.length-1;a++){const e=this.tableOrder2[a].split(",");this.setOrder2Object(e[0],e[2],e[3],e[4],e[5],e[6],e[7],e[8])}})).catch((e=>{console.log(e)}))},setOrder2Object(e,a,t,l,s,i,r,n){this.order2Object.push({row:parseInt(e),name:a,product:t,size:l,color:s,initials:i,positionId:r,orderId:n})},getTableOrder1(){this.order1Object=[],this.$axios(`${y}&func=Read&orderId=${v.FP}`).then((e=>{this.tableOrder1=e.data.split("\n");for(let a=0;a<this.tableOrder1.length-1;a++){const e=this.tableOrder1[a].split(",");this.setOrder1Object(e[2],e[3],e[4],e[5],e[6])}})).catch((e=>{console.log(e)}))},setOrder1Object(e,a,t,l,s){this.order1Object.push({name:e,product:a,size:t,color:l,initials:s})},onOrder2Click(e,a,t,l,s,i,r,n){h.value=e,_.value=a,w.value=t,f.value=l,x.value=s,O.value=i,S.value=r,k.value=n,(0,v.ej)("isAdministrator")&&(this.editOrder=!0)},addOrderSave(e,a,t,l,s,i){this.$axios(`${y}&func=Add&orderId=${e}&name=${encodeURI(a.replace(","," "))}&product=${t}&size=${l}&color=${s}&initials=${encodeURI(i.replace(","," "))}`).then((e=>{"Success, requested action completed"===e.data&&(this.onOrderCreated(),this.getTableOrder2(),this.getTableOrder1())})).catch((e=>{console.log(e)}))},editOrderSave(e,a,t,l,s,i,r,n){this.$axios(`${y}&func=Update&row=${e}&positionId=${a}&orderId=${t}&name=${encodeURI(l.replace(","," "))}&product=${s}&size=${i}&color=${r}&initials=${encodeURI(n.replace(","," "))}`).then((e=>{"Success, requested action completed"===e.data&&(this.onOrderUpdated(),this.getTableOrder2(),this.getTableOrder1())})).catch((e=>{console.log(e)}))},deleteOrder(e,a,t){this.$axios(`${y}&func=Delete&row=${e}&positionId=${a}&orderId=${t}`).then((e=>{"Success, requested action completed"===e.data&&(this.onOrderDeleted(),this.getTableOrder2(),this.getTableOrder1(),this.editOrder=!1)})).catch((e=>{console.log(e)}))}}};var C=t(1639),M=t(9885),H=t(1663),B=t(1973),I=t(8879),P=t(3246),T=t(490),V=t(1233),z=t(3115),N=t(2074),q=t(4458),U=t(3190),L=t(6611),A=t(4363),F=t(926),$=t(1821),D=t(1357),j=t(1487),Z=t(1136),R=t(2146),K=t(9984),E=t.n(K);const J=(0,C.Z)(W,[["render",p]]),Q=J;E()(W,"components",{QPage:M.Z,QToolbar:H.Z,QToolbarTitle:B.Z,QBtn:I.Z,QList:P.Z,QItem:T.Z,QItemSection:V.Z,QItemLabel:z.Z,QDialog:N.Z,QCard:q.Z,QCardSection:U.Z,QInput:L.Z,QSelect:A.Z,QSeparator:F.Z,QCardActions:$.Z,QAvatar:D.Z,QImg:j.Z}),E()(W,"directives",{Ripple:Z.Z,ClosePopup:R.Z})}}]);