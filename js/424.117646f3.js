"use strict";(globalThis["webpackChunkquasar_bgb_matchmanagement"]=globalThis["webpackChunkquasar_bgb_matchmanagement"]||[]).push([[424],{4127:(a,e,t)=>{t.d(e,{CW:()=>u,Fd:()=>C,Gt:()=>H,Jf:()=>b,NI:()=>h,Ri:()=>m,TV:()=>v,UE:()=>i,UG:()=>f,W8:()=>d,Y0:()=>_,a8:()=>p,bR:()=>c,fr:()=>r,gj:()=>g,iR:()=>k,qt:()=>o,vm:()=>n});const l=!1,s="HOME",r="service_1z8boq8",i="template_uc9j4dn",n="z6CsuBOLcuYCsxNiZ",o="Auf geht's SCF",c="d1f60978-f743-4b6e-88f1-ac7aa7885d2b",d="8f26f0ad-d9d3-4c33-b1c9-f0560ee3ea11",u="https://planthegame.ch",g="https://script.google.com/macros/s/AKfycbxpYbKFzUC6iSSlE913vWGLuvRZ7TbT8eXVn54Un7rm0KJa9vVGzuvu7d-V-tSuWSDjOw/exec",m=function(a){const e=a+"=",t=decodeURIComponent(document.cookie),r=t.split(";");for(let l=0;l<r.length;l++){let a=r[l];while(" "===a.charAt(0))a=a.substring(1);if(0===a.indexOf(e))return a.substring(e.length,a.length)}return"isAdministrator"===a?l:"applicationCode"===a?s:void 0},v=function(a,e){const t=new Date;t.setTime(t.getTime()+31536e6);const l="expires="+t.toUTCString();document.cookie="isAdministrator="+a+";"+l+'";path=/',document.cookie="applicationCode="+e+";"+l+'";path=/'},b=function(a){let e="";if("HOME"===a)return"3Home2emoH9";if(12===a.length){if(a.indexOf("_")>0){const t=a.split("_");8===t[0].length&&parseInt(t[1])>=329&&(e=t[1].substring(0,1)+t[0].substring(0,4)+t[1].substring(1,2)+t[0].substring(4,8)+t[1].substring(2,t[1].length))}}else 11===a.length&&(e=a);return e},h=function(a){let e="";if(12===a.length){if(a.indexOf("_")>0){const t=a.split("_");8===t[0].length&&parseInt(t[1])>=329&&(e=a)}}else 11===a.length&&(e=a.substring(1,5)+a.substring(6,10)+"_"+a.substring(0,1)+a.substring(5,6)+a.substring(10,a.length));return e},p=function(a){return"statics/images/"+a+"/Logo.png"},_=function(a,e,t){return""===e?"statics/avatars/collection/Placeholder.png":t?"statics/avatars/"+a+"/"+e+".png":"statics/avatars/collection/"+e+".png"},C=function(a){let e=this.teamImages.find((e=>e.value===a))?.image;return"undefined"===typeof e&&(e="statics/teams/QuestionMark.svg"),e},f=function(a){return a.toLowerCase().indexOf("test")>=0?"statics/teams/Test.svg":"statics/teams/Event.webp"},y="3NGdo3Lbyd0"===s||"NGdoLbyd_330"===s,k=[{label:"Arminia",value:"Arminia_Bielefeld",image:"statics/teams/Arminia_Bielefeld.svg"},{label:"Augsburg",value:"Augsburg",image:"statics/teams/Augsburg.svg"},{label:"Backa Topola",value:"Backa_Topola",image:"statics/teams/Backa_Topola.svg"},{label:"Bahlinger SC",value:"Bahlinger_SC",image:"statics/teams/Bahlinger_SC.jpg"},{label:"Bayer Leverkusen",value:"Bayer_Leverkusen",image:"statics/teams/Bayer_Leverkusen.svg"},{label:"Bayer Leverkusen Frauen",value:"Bayer_Leverkusen_Frauen",image:"statics/teams/Bayer_Leverkusen.svg"},{label:"Bayern",value:"Bayern_München",image:"statics/teams/Bayern_München.svg"},{label:"Bayern Frauen ",value:"Bayern_München_Frauen",image:"statics/teams/Bayern_München.svg"},{label:"Bochum",value:"Bochum",image:"statics/teams/Bochum.svg"},{label:"Borussia Dortmund",value:"Borussia_Dortmund",image:"statics/teams/Borussia_Dortmund.svg"},{label:"Borussia Mönchengladbach",value:"Borussia_Mönchengladbach",image:"statics/teams/Borussia_Mönchengladbach.svg"},{label:"Carl Zeiss Jena Frauen",value:"Carl_Zeiss_Jena_Frauen",image:"statics/teams/Carl_Zeiss_Jena.svg"},{label:"Champions League",value:"Champions_League",image:"statics/teams/Champions_League.svg"},{label:"Conference League",value:"Conference_League",image:"statics/teams/Conference_League.svg"},{label:"Darmstadt",value:"Darmstadt",image:"statics/teams/Darmstadt.svg"},{label:"DFB Pokal",value:"DFB_Pokal",image:"statics/teams/DFB_Pokal.png"},{label:"Eintracht Braunschweig",value:"Eintracht_Braunschweig",image:"statics/teams/Eintracht_Braunschweig.svg"},{label:"Eintracht Frankfurt",value:"Eintracht_Frankfurt",image:"statics/teams/Eintracht_Frankfurt.svg"},{label:"Eintracht Frankfurt Frauen",value:"Eintracht_Frankfurt_Frauen",image:"statics/teams/Eintracht_Frankfurt.svg"},{label:"Eintracht Frankfurt II",value:"Eintracht_Frankfurt_II",image:"statics/teams/Eintracht_Frankfurt.svg"},{label:"Eintracht Trier",value:"Eintracht_Trier",image:"statics/teams/Eintracht_Trier.svg"},{label:"Europa League",value:"Europa_League",image:"statics/teams/Europa_League.svg"},{label:"FCA Walldorf",value:"FCA_Walldorf",image:"statics/teams/FCA_Walldorf.svg"},{label:"FC Homburg",value:"FC_Homburg",image:"statics/teams/FC_Homburg.svg"},{label:"FC 08 Villingen",value:"FC_08_Villingen",image:"statics/teams/FC_08_Villingen.svg"},{label:"Fortuna Düsseldorf",value:"Fortuna_Düsseldorf",image:"statics/teams/Fortuna_Düsseldorf.svg"},{label:"Freiburg",value:"Freiburg",image:"statics/teams/Freiburg.svg"},{label:"Freiburg Frauen",value:"Freiburg_Frauen",image:"statics/teams/Freiburg.svg"},{label:"Freiburg II",value:"Freiburg_II",image:"statics/teams/Freiburg.svg"},{label:"FSV Frankfurt",value:"FSV_Frankfurt",image:"statics/teams/FSV_Frankfurt.svg"},{label:"Giessen",value:"Giessen",image:"statics/teams/Giessen.svg"},{label:"Göppinger",value:"Göppinger",image:"statics/teams/Göppinger.svg"},{label:"Greuther Fürth",value:"Greuther_Fürth",image:"statics/teams/Greuther_Fürth.svg"},{label:"Hamburger SV",value:"Hamburger_SV",image:"statics/teams/Hamburger_SV.svg"},{label:"Hannover",value:"Hannover",image:"statics/teams/Hannover.svg"},{label:"Hansa Rostock",value:"Hansa_Rostock",image:"statics/teams/Hansa_Rostock.svg"},{label:"Heidenheim",value:"Heidenheim",image:"statics/teams/Heidenheim.svg"},{label:"Hertha",value:"Hertha",image:"statics/teams/Hertha.svg"},{label:"Hoffenheim",value:"Hoffenheim",image:"statics/teams/Hoffenheim.svg"},{label:"Hoffenheim Frauen",value:"Hoffenheim_Frauen",image:"statics/teams/Hoffenheim.svg"},{label:"Hoffenheim II",value:"Hoffenheim_II",image:"statics/teams/Hoffenheim.svg"},{label:"Holstein",value:"Holstein",image:"statics/teams/Holstein.svg"},{label:"Jahn Regensburg",value:"Jahn_Regensburg",image:"statics/teams/Jahn_Regensburg.svg"},{label:"Juventus Turin",value:"Juventus_Turin",image:"statics/teams/Juventus_Turin.svg"},{label:"Kaiserslautern",value:"Kaiserslautern",image:"statics/teams/Kaiserslautern.svg"},{label:"Karlsruher",value:"Karlsruher",image:"statics/teams/Karlsruher.svg"},{label:"Köln",value:"Köln",image:"statics/teams/Köln.svg"},{label:"Köln Frauen",value:"Köln_Frauen",image:"statics/teams/Köln.svg"},{label:"KSV Hessen",value:"KSV_Hessen",image:"statics/teams/KSV_Hessen.svg"},{label:"Leipzig",value:"Leipzig",image:"statics/teams/Leipzig.svg"},{label:"Leipzig Frauen",value:"Leipzig_Frauen",image:"statics/teams/Leipzig.svg"},{label:"RC Lens",value:"Lens",image:"statics/teams/Lens.svg"},{label:"Magdeburg",value:"Magdeburg",image:"statics/teams/Magdeburg.svg"},{label:"Mainz",value:"Mainz",image:"statics/teams/Mainz.svg"},{label:"Mainz II",value:"Mainz_II",image:"statics/teams/Mainz.svg"},{label:"Nürnberg",value:"Nürnberg",image:"statics/teams/Nürnberg.svg"},{label:"Oberachern",value:"Oberachern",image:"statics/teams/Oberachern.svg"},{label:"Offenbach",value:"Offenbach",image:"statics/teams/Offenbach.svg"},{label:"Olympiakos Piräus",value:"Olympiakos_Piräus",image:"statics/teams/Olympiakos_Piräus.svg"},{label:"Paderborn",value:"Paderborn",image:"statics/teams/Paderborn.svg"},{label:"Potsdam Frauen",value:"Potsdam_Frauen",image:"statics/teams/Potsdam.svg"},{label:"Sandhausen",value:"Sandhausen",image:"statics/teams/Sandhausen.svg"},{label:"Schalke",value:"Schalke",image:"statics/teams/Schalke.svg"},{label:"SGS Essen Frauen",value:"SGS_Essen_Frauen",image:"statics/teams/SGS_Essen.svg"},{label:"SGV Freiberg",value:"SGV_Freiberg",image:"statics/teams/SGV_Freiberg.svg"},{label:"St. Pauli",value:"St._Pauli",image:"statics/teams/St._Pauli.svg"},{label:"Stuttgart",value:"Stuttgart",image:y?"statics/teams/Stuttgart_Shit.png":"statics/teams/Stuttgart.svg"},{label:"Stuttgarter Kickers",value:"Stuttgarter_Kickers",image:"statics/teams/Stuttgarter_Kickers.svg"},{label:"TSV Lehnerz",value:"TSV_Lehnerz",image:"statics/teams/TSV_Lehnerz.gif"},{label:"TSV Steinbach",value:"TSV_Steinbach",image:"statics/teams/TSV_Steinbach.svg"},{label:"Union Berlin",value:"Union_Berlin",image:"statics/teams/Union_Berlin.svg"},{label:"VfL Osnabrück",value:"VfL_Osnabrück",image:"statics/teams/VfL_Osnabrück.svg"},{label:"Werder Bremen",value:"Werder_Bremen",image:"statics/teams/Werder_Bremen.svg"},{label:"Werder Bremen Frauen",value:"Werder_Bremen_Frauen",image:"statics/teams/Werder_Bremen.svg"},{label:"West Ham",value:"West_Ham",image:"statics/teams/West_Ham.svg"},{label:"Wolfsburg",value:"Wolfsburg",image:"statics/teams/Wolfsburg.svg"},{label:"Wolfsburg Frauen",value:"Wolfsburg_Frauen",image:"statics/teams/Wolfsburg.svg"}],H=[{label:"Abraham Simpson",value:"Abraham_Simpson",avatar:"statics/avatars/collection/Abraham_Simpson.png"},{label:"Alien",value:"Alien",avatar:"statics/avatars/collection/Alien.png"},{label:"Ariel",value:"Ariel",avatar:"statics/avatars/collection/Ariel.png"},{label:"Barney Gumble",value:"Barney_Gumble",avatar:"statics/avatars/collection/Barney_Gumble.png"},{label:"Bart Simpson",value:"Bart_Simpson",avatar:"statics/avatars/collection/Bart_Simpson.png"},{label:"Charlie Brown",value:"Charlie_Brown",avatar:"statics/avatars/collection/Charlie_Brown.png"},{label:"Charlie Chaplin",value:"Charlie_Chaplin",avatar:"statics/avatars/collection/Charlie_Chaplin.png"},{label:"Clancy Wiggum",value:"Clancy_Wiggum",avatar:"statics/avatars/collection/Clancy_Wiggum.png"},{label:"Cupid",value:"Cupid",avatar:"statics/avatars/collection/Cupid.png"},{label:"Doctor Strange",value:"Doctor_Strange",avatar:"statics/avatars/collection/Doctor_Strange.png"},{label:"Ed Sheeran",value:"Ed_Sheeran",avatar:"statics/avatars/collection/Ed_Sheeran.png"},{label:"Eeyore",value:"Eeyore",avatar:"statics/avatars/collection/Eeyore.png"},{label:"Elon Musk",value:"Elon_Musk",avatar:"statics/avatars/collection/Elon_Musk.png"},{label:"Fat Cat",value:"Fat_Cat",avatar:"statics/avatars/collection/Fat_Cat.png"},{label:"Garfield",value:"Garfield",avatar:"statics/avatars/collection/Garfield.png"},{label:"Hello Kitty",value:"Hello_Kitty",avatar:"statics/avatars/collection/Hello_Kitty.png"},{label:"Homer Simpson",value:"Homer_Simpson",avatar:"statics/avatars/collection/Homer_Simpson.png"},{label:"Ironman",value:"Ironman",avatar:"statics/avatars/collection/Ironman.png"},{label:"Jerry",value:"Jerry",avatar:"statics/avatars/collection/Jerry.png"},{label:"John Lennon",value:"John_Lennon",avatar:"statics/avatars/collection/John_Lennon.png"},{label:"Joker",value:"Joker",avatar:"statics/avatars/collection/Joker.png"},{label:"Krusty The Clown",value:"Krusty_The_Clown",avatar:"statics/avatars/collection/Krusty_The_Clown.png"},{label:"Linus",value:"Linus",avatar:"statics/avatars/collection/Linus.png"},{label:"Lisa Simpson",value:"Lisa_Simpson",avatar:"statics/avatars/collection/Lisa_Simpson.png"},{label:"Lucy",value:"Lucy",avatar:"statics/avatars/collection/Lucy.png"},{label:"Maggie Simpson",value:"Maggie_Simpson",avatar:"statics/avatars/collection/Maggie_Simpson.png"},{label:"Marcie",value:"Marcie",avatar:"statics/avatars/collection/Marcie.png"},{label:"Marge Simpson",value:"Marge_Simpson",avatar:"statics/avatars/collection/Marge_Simpson.png"},{label:"Marie",value:"Marie",avatar:"statics/avatars/collection/Marie.png"},{label:"Marilyn Monroe",value:"Marilyn_Monroe",avatar:"statics/avatars/collection/Marilyn_Monroe.png"},{label:"Messi",value:"Messi",avatar:"statics/avatars/collection/Messi.png"},{label:"Michael Jackson",value:"Michael_Jackson",avatar:"statics/avatars/collection/Michael_Jackson.png"},{label:"Mondtor01",value:"Mondtor01",avatar:"statics/avatars/collection/Mondtor01.png"},{label:"Mondtor02",value:"Mondtor02",avatar:"statics/avatars/collection/Mondtor02.png"},{label:"Mr Beans Teddy",value:"Mr_Beans_Teddy",avatar:"statics/avatars/collection/Mr_Beans_Teddy.png"},{label:"Mr Burns",value:"Mr_Burns",avatar:"statics/avatars/collection/Mr_Burns.png"},{label:"Ms Wicket",value:"Ms_Wicket",avatar:"statics/avatars/collection/Ms_Wicket.png"},{label:"Pelé",value:"Pelé",avatar:"statics/avatars/collection/Pelé.png"},{label:"Peppermint Patty",value:"Peppermint_Patty",avatar:"statics/avatars/collection/Peppermint_Patty.png"},{label:"Pile Of Poo",value:"Pile_Of_Poo",avatar:"statics/avatars/collection/Pile_Of_Poo.png"},{label:"Sally",value:"Sally",avatar:"statics/avatars/collection/Sally.png"},{label:"Santa",value:"Santa",avatar:"statics/avatars/collection/Santa.png"},{label:"Sea Calf",value:"Sea_Calf",avatar:"statics/avatars/collection/Sea_Calf.png"},{label:"Snoop Dogg",value:"Snoop_Dogg",avatar:"statics/avatars/collection/Snoop_Dogg.png"},{label:"Stan Marsh",value:"Stan_Marsh",avatar:"statics/avatars/collection/Stan_Marsh.png"},{label:"Sumo",value:"Sumo",avatar:"statics/avatars/collection/Sumo.png"},{label:"Super Mario",value:"Super_Mario",avatar:"statics/avatars/collection/Super_Mario.png"},{label:"Tom",value:"Tom",avatar:"statics/avatars/collection/Tom.png"},{label:"Tom Kid",value:"Tom_Kid",avatar:"statics/avatars/collection/Tom_Kid.png"},{label:"Tweety",value:"Tweety",avatar:"statics/avatars/collection/Tweety.png"},{label:"Woodstock",value:"Woodstock",avatar:"statics/avatars/collection/Woodstock.png"}]},9424:(a,e,t)=>{t.r(e),t.d(e,{default:()=>na});var l=t(1758),s=t(8790);const r={class:"q-pa-md",style:{"max-width":"500px"}},i={class:"q-pa-md bg-grey-10 text-white",style:{"max-width":"500px"}},n=["src"],o=["src"],c={class:"q-pa-md q-gutter-sm"},d=(0,l.Lk)("div",{class:"text-h6"},"Karte erfassen",-1),u={class:"q-pt-md",style:{"max-width":"350px"}},g={class:"q-pt-md",style:{"max-width":"350px"}},m={class:"q-pt-md",style:{"max-width":"350px"}},v={class:"q-pt-md",style:{"max-width":"350px"}},b=(0,l.Lk)("div",{class:"text-h6"},"Karte ändern",-1),h={class:"q-pt-md",style:{"max-width":"350px"}},p={class:"q-pt-md",style:{"max-width":"350px"}},_={class:"q-pt-md",style:{"max-width":"350px"}},C={class:"q-pt-md",style:{"max-width":"350px"}},f=(0,l.Lk)("span",{class:"q-ml-sm"},"Datensatz löschen?",-1);function y(a,e,t,y,k,H){const F=(0,l.g2)("q-toolbar-title"),M=(0,l.g2)("q-btn"),S=(0,l.g2)("q-toolbar"),W=(0,l.g2)("q-avatar"),w=(0,l.g2)("q-item-section"),x=(0,l.g2)("q-item-label"),I=(0,l.g2)("q-item"),T=(0,l.g2)("q-list"),A=(0,l.g2)("q-card-section"),L=(0,l.g2)("q-input"),K=(0,l.g2)("q-toggle"),V=(0,l.g2)("q-separator"),B=(0,l.g2)("q-card-actions"),D=(0,l.g2)("q-card"),O=(0,l.g2)("q-dialog"),E=(0,l.g2)("q-img"),P=(0,l.g2)("q-page"),R=(0,l.gN)("ripple"),q=(0,l.gN)("close-popup");return(0,l.uX)(),(0,l.Wv)(P,null,{default:(0,l.k6)((()=>[(0,l.Lk)("div",r,[(0,l.bF)(S,{class:"bg-primary text-white"},{default:(0,l.k6)((()=>[(0,l.bF)(F,{class:"text-overline"},{default:(0,l.k6)((()=>[(0,l.eW)("Wer hat meine Karte ("+(0,s.v_)(k.whereIsMyCardObject.length)+")",1)])),_:1}),(0,l.bF)(M,{class:"bg-white text-primary",icon:"add",label:"Neu",onClick:e[0]||(e[0]=a=>y.addWhereIsMyCard=!0)})])),_:1})]),(0,l.Lk)("div",i,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(k.whereIsMyCardObject,((a,e)=>(0,l.bo)(((0,l.uX)(),(0,l.Wv)(T,{dark:"",bordered:"",separator:"",style:{"max-width":"470px"},key:e},{default:(0,l.k6)((()=>[(0,l.bo)(((0,l.uX)(),(0,l.Wv)(I,{clickable:"",onClick:e=>H.onWhereIsMyCardClick(a.cardHolderId,a.cardHolder,a.discounted,a.whoHasTheCard,a.digital)},{default:(0,l.k6)((()=>[(0,l.bF)(w,{avatar:""},{default:(0,l.k6)((()=>[""===a.cardHolderAvatar?((0,l.uX)(),(0,l.Wv)(W,{key:0,size:"50px",color:"lime-10","text-color":"white"},{default:(0,l.k6)((()=>[(0,l.eW)((0,s.v_)(a.cardHolder.substring(0,1)),1)])),_:2},1024)):(0,l.Q3)("",!0),""!==a.cardHolderAvatar?((0,l.uX)(),(0,l.Wv)(W,{key:1,size:"50px"},{default:(0,l.k6)((()=>[(0,l.Lk)("img",{src:k.getAvatar(y.varAdminCode,a.cardHolderAvatar,a.cardHolderAvatarIsCustomized)},null,8,n)])),_:2},1024)):(0,l.Q3)("",!0)])),_:2},1024),(0,l.bF)(w,{avatar:""},{default:(0,l.k6)((()=>[""===a.whoHasTheCardAvatar?((0,l.uX)(),(0,l.Wv)(W,{key:0,size:"50px",color:"green-10","text-color":"white"},{default:(0,l.k6)((()=>[(0,l.eW)((0,s.v_)(a.whoHasTheCard.substring(0,1)),1)])),_:2},1024)):(0,l.Q3)("",!0),""!==a.whoHasTheCardAvatar?((0,l.uX)(),(0,l.Wv)(W,{key:1,size:"50px"},{default:(0,l.k6)((()=>[(0,l.Lk)("img",{src:k.getAvatar(y.varAdminCode,a.whoHasTheCardAvatar,a.whoHasTheCardAvatarIsCustomized)},null,8,o)])),_:2},1024)):(0,l.Q3)("",!0)])),_:2},1024),(0,l.bF)(w,null,{default:(0,l.k6)((()=>[(0,l.bF)(x,{overline:""},{default:(0,l.k6)((()=>[(0,l.eW)("Inhaber: "+(0,s.v_)(a.cardHolder),1)])),_:2},1024),a.discounted?((0,l.uX)(),(0,l.Wv)(x,{key:0,caption:""},{default:(0,l.k6)((()=>[(0,l.eW)("Kind: Ja")])),_:1})):(0,l.Q3)("",!0),a.discounted?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.Wv)(x,{key:1,caption:""},{default:(0,l.k6)((()=>[(0,l.eW)("Kind: Nein")])),_:1})),(0,l.bF)(x,{caption:""},{default:(0,l.k6)((()=>[(0,l.eW)("Wer hat die Karte: "+(0,s.v_)(a.whoHasTheCard),1)])),_:2},1024),a.digital?((0,l.uX)(),(0,l.Wv)(x,{key:2,caption:""},{default:(0,l.k6)((()=>[(0,l.eW)("Digital: Ja")])),_:1})):(0,l.Q3)("",!0),a.digital?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.Wv)(x,{key:3,caption:""},{default:(0,l.k6)((()=>[(0,l.eW)("Digital: Nein")])),_:1}))])),_:2},1024)])),_:2},1032,["onClick"])),[[R]])])),_:2},1024)),[[R]]))),128))]),(0,l.Lk)("div",c,[(0,l.bF)(O,{modelValue:y.addWhereIsMyCard,"onUpdate:modelValue":e[6]||(e[6]=a=>y.addWhereIsMyCard=a),persistent:""},{default:(0,l.k6)((()=>[(0,l.bF)(D,{style:{"min-width":"350px"}},{default:(0,l.k6)((()=>[(0,l.bF)(A,null,{default:(0,l.k6)((()=>[d])),_:1}),(0,l.bF)(A,{class:"q-pt-none"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",u,[(0,l.bF)(L,{filled:"",dense:"",modelValue:y.txtCardHolderNew,"onUpdate:modelValue":e[1]||(e[1]=a=>y.txtCardHolderNew=a),autofocus:"",label:"Inhaber *"},null,8,["modelValue"])]),(0,l.Lk)("div",g,[(0,l.bF)(K,{modelValue:y.tglDiscountedNew,"onUpdate:modelValue":e[2]||(e[2]=a=>y.tglDiscountedNew=a),color:"red",label:"Kind","left-label":""},null,8,["modelValue"])]),(0,l.Lk)("div",m,[(0,l.bF)(L,{filled:"",dense:"",modelValue:y.txtWhoHasTheCardNew,"onUpdate:modelValue":e[3]||(e[3]=a=>y.txtWhoHasTheCardNew=a),label:"Wer hat die Karte *"},null,8,["modelValue"])]),(0,l.Lk)("div",v,[(0,l.bF)(K,{modelValue:y.tglDigitalNew,"onUpdate:modelValue":e[4]||(e[4]=a=>y.tglDigitalNew=a),color:"red",label:"Digital","left-label":""},null,8,["modelValue"])])])),_:1}),(0,l.bF)(V),(0,l.bF)(B,{class:"text-primary",align:"right"},{default:(0,l.k6)((()=>[(0,l.bo)((0,l.bF)(M,{flat:"",label:"Abbrechen"},null,512),[[q]]),(0,l.bo)((0,l.bF)(M,{icon:"save",label:"Speichern",onClick:e[5]||(e[5]=a=>H.addWhereIsMyCardSave(y.txtCardHolderNew,y.tglDiscountedNew,y.txtWhoHasTheCardNew,y.tglDigitalNew)),disable:""===y.txtCardHolderNew||""===y.txtWhoHasTheCardNew},null,8,["disable"]),[[q]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.bF)(O,{modelValue:y.editWhereIsMyCard,"onUpdate:modelValue":e[13]||(e[13]=a=>y.editWhereIsMyCard=a),persistent:""},{default:(0,l.k6)((()=>[(0,l.bF)(D,{style:{"min-width":"350px"}},{default:(0,l.k6)((()=>[(0,l.bF)(A,null,{default:(0,l.k6)((()=>[b])),_:1}),(0,l.bF)(A,{class:"q-pt-none"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",h,[(0,l.bF)(L,{filled:"",dense:"",modelValue:y.txtCardHolder,"onUpdate:modelValue":e[7]||(e[7]=a=>y.txtCardHolder=a),label:"Inhaber *"},null,8,["modelValue"])]),(0,l.Lk)("div",p,[(0,l.bF)(K,{modelValue:y.tglDiscounted,"onUpdate:modelValue":e[8]||(e[8]=a=>y.tglDiscounted=a),color:"red",label:"Kind","left-label":""},null,8,["modelValue"])]),(0,l.Lk)("div",_,[(0,l.bF)(L,{filled:"",dense:"",modelValue:y.txtWhoHasTheCard,"onUpdate:modelValue":e[9]||(e[9]=a=>y.txtWhoHasTheCard=a),autofocus:"",label:"Wer hat die Karte *"},null,8,["modelValue"])]),(0,l.Lk)("div",C,[(0,l.bF)(K,{modelValue:y.tglDigital,"onUpdate:modelValue":e[10]||(e[10]=a=>y.tglDigital=a),color:"red",label:"Digital","left-label":""},null,8,["modelValue"])])])),_:1}),(0,l.bF)(V),(0,l.bF)(B,{class:"text-primary",align:"right"},{default:(0,l.k6)((()=>[k.getCookie("isAdministrator")?((0,l.uX)(),(0,l.Wv)(M,{key:0,icon:"delete",color:"primary",onClick:e[11]||(e[11]=a=>y.delWhereIsMyCard=!0)})):(0,l.Q3)("",!0),(0,l.bo)((0,l.bF)(M,{flat:"",label:"Abbrechen"},null,512),[[q]]),(0,l.bo)((0,l.bF)(M,{icon:"save",label:"Speichern",onClick:e[12]||(e[12]=a=>H.editWhereIsMyCardSave(y.txtCardHolderId,y.txtCardHolder,y.txtCardHolderOld,y.tglDiscounted,y.txtWhoHasTheCard,y.tglDigital)),disable:""===y.txtCardHolder||""===y.txtWhoHasTheCard},null,8,["disable"]),[[q]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.bF)(O,{modelValue:y.delWhereIsMyCard,"onUpdate:modelValue":e[15]||(e[15]=a=>y.delWhereIsMyCard=a),persistent:""},{default:(0,l.k6)((()=>[(0,l.bF)(D,null,{default:(0,l.k6)((()=>[(0,l.bF)(A,{class:"row items-center"},{default:(0,l.k6)((()=>[(0,l.bF)(W,{icon:"delete",color:"primary","text-color":"white"}),f])),_:1}),(0,l.bF)(B,{align:"right"},{default:(0,l.k6)((()=>[(0,l.bo)((0,l.bF)(M,{flat:"",label:"Nein",color:"primary"},null,512),[[q]]),(0,l.bo)((0,l.bF)(M,{flat:"",label:"Ja",color:"primary",onClick:e[14]||(e[14]=a=>H.deleteWhereIsMyCard(y.txtCardHolderId))},null,512),[[q]])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,l.bF)(E,{src:"statics/images/AufGehtsSCF.png",class:"header-image absolute-top"})])),_:1})}t(4748);var k=t(4907),H=t(4127),F=t(8734),M=t(3090);const S=(0,F.KR)(""),W=(0,F.KR)(""),w=(0,F.KR)(""),x=(0,F.KR)(""),I=(0,F.KR)(""),T=(0,F.KR)(""),A=(0,F.KR)("");let L,K,V,B;const D={name:"ListWhoHasTheCard",setup(){const a=(0,k.A)();return{varAdminCode:(0,F.KR)(A),txtCardHolderId:(0,F.KR)(S),txtCardHolder:(0,F.KR)(W),txtCardHolderOld:(0,F.KR)(w),tglDiscounted:(0,F.KR)(x),txtWhoHasTheCard:(0,F.KR)(I),tglDigital:(0,F.KR)(T),txtCardHolderNew:(0,F.KR)(""),tglDiscountedNew:(0,F.KR)(!1),txtWhoHasTheCardNew:(0,F.KR)(""),tglDigitalNew:(0,F.KR)(!1),onCardHolderCreated(){a.notify({type:"positive",message:"Karteninhaber wurde erfolgreich erfasst!"})},onCardHolderUpdated(){a.notify({type:"positive",message:"Karteninhaber wurde erfolgreich aktualisiert!"})},onCardHolderDeleted(){a.notify({message:"Karteninhaber wurde erfolgreich gelöscht!",color:"orange"})},onCardHolderAlreadyExists(){a.notify({type:"negative",message:"Dieser Karteninhaber besteht bereits!"})},addWhereIsMyCard:(0,F.KR)(!1),editWhereIsMyCard:(0,F.KR)(!1),delWhereIsMyCard:(0,F.KR)(!1)}},data(){return{getCookie:H.Ri,getAdminCode:H.Jf,getAvatar:H.Y0,URLMatchManagementAPI:H.CW,whereIsMyCardObject:[{cardHolderId:"",cardHolder:"",cardHolderAvatar:"",cardHolderAvatarIsCustomized:"",discounted:"",whoHasTheCard:"",whoHasTheCardAvatar:"",whoHasTheCardAvatarIsCustomized:"",digital:""}],memberObject:[{member:"",avatar:"",customized:""}]}},computed:{},mounted(){this.setVariables().then((()=>{this.getTenantId().then((()=>{this.getTableMember().then((()=>{this.getTableWhereIsMyCard()}))}))}))},methods:{setVariables(){return A.value=(0,H.Jf)((0,H.Ri)("applicationCode")),K=H.CW+"/Tenant",B=H.CW+"/CardHolder",V=H.CW+"/Member",this.whereIsMyCardObject=[],Promise.resolve()},getTenantId(){return new Promise(((a,e)=>{this.$axios.get(`${K}/code/${A.value}`).then((t=>{200===t.status?(L=t.data.id,a()):(console.log("Unexpected status code:",t.status),e(new Error("Unexpected status code")))})).catch((a=>{console.log(a),e(a)}))}))},getTableMember(){return new Promise(((a,e)=>{this.memberObject=[],this.$axios.get(`${V}/${L}`).then((t=>{if(200===t.status){for(let a=0;a<t.data.length;a++)this.setMemberObject(t.data[a].name.trim(),t.data[a].avatar.trim(),t.data[a].isCustomized);a()}else console.log("Unexpected status code:",t.status),e(new Error("Unexpected status code"))})).catch((a=>{console.log(a),e(a)}))}))},setMemberObject(a,e,t){this.memberObject.push({member:a,avatar:e,customized:t})},getTableWhereIsMyCard(){this.whereIsMyCardObject=[],this.$axios.get(`${B}/${L}`).then((a=>{if(200===a.status)for(let e=0;e<a.data.length;e++){let t=this.memberObject.find((t=>t.member===a.data[e].name.trim()))?.avatar;"undefined"===typeof t&&(t="");let l=this.memberObject.find((t=>t.member===a.data[e].name.trim()))?.customized;"undefined"===typeof l&&(l=!1);let s=this.memberObject.find((t=>t.member===a.data[e].whoHasTheCard))?.avatar;"undefined"===typeof s&&(s="");let r=this.memberObject.find((t=>t.member===a.data[e].whoHasTheCard))?.customized;"undefined"===typeof r&&(r=!1),this.setWhereIsMyCardObject(a.data[e].id,a.data[e].name.trim(),t,l,a.data[e].isDiscounted,a.data[e].whoHasTheCard.trim(),s,r,a.data[e].isDigital)}else console.log("Unexpected status code:",a.status)})).catch((a=>console.log(a)))},setWhereIsMyCardObject(a,e,t,l,s,r,i,n,o){this.whereIsMyCardObject.push({cardHolderId:a,cardHolder:e,cardHolderAvatar:t,cardHolderAvatarIsCustomized:l,discounted:s,whoHasTheCard:r,whoHasTheCardAvatar:i,whoHasTheCardAvatarIsCustomized:n,digital:o})},onWhereIsMyCardClick(a,e,t,l,s){S.value=a,W.value=e,w.value=e,x.value=t,I.value=l,T.value=s,this.editWhereIsMyCard=!0},addWhereIsMyCardSave(a,e,t,l){const s=this.whereIsMyCardObject.map((a=>a.cardHolder)),r=s.includes(a);if(r)this.onCardHolderAlreadyExists();else{const s=(0,M.A)(),r=new Date,i={id:s,creationTime:r,lastModificationTime:null,tenantId:L,name:a.trim(),isDiscounted:e,whoHasTheCard:t.trim(),isDigital:l};this.$axios.post(`${B}/${L}`,i).then((a=>{201===a.status?(this.onCardHolderCreated(),this.getTableWhereIsMyCard()):console.log("Unexpected status code:",a.status)})).catch((a=>console.log(a)))}},editWhereIsMyCardSave(a,e,t,l,s,r){const i=this.whereIsMyCardObject.map((a=>a.cardHolder)),n=i.includes(e)&&e!==t;if(n)this.onCardHolderAlreadyExists();else{const t={id:a,creationTime:null,lastModificationTime:null,tenantId:L,name:e.trim(),isDiscounted:l,whoHasTheCard:s.trim(),isDigital:r};this.$axios.put(`${B}/${L}/${a}`,t).then((a=>{200===a.status?(this.onCardHolderUpdated(),this.getTableWhereIsMyCard()):console.log("Unexpected status code:",a.status)})).catch((a=>console.log(a)))}},deleteWhereIsMyCard(a){this.$axios.delete(`${B}/${L}/${a}`).then((a=>{200===a.status?(this.editWhereIsMyCard=!1,this.onCardHolderDeleted(),this.getTableWhereIsMyCard()):console.log("Unexpected status code:",a.status)})).catch((a=>console.log(a)))}}};var O=t(2807),E=t(7716),P=t(6914),R=t(9150),q=t(6384),z=t(3999),N=t(124),U=t(5173),G=t(3952),J=t(3796),Q=t(2156),j=t(3316),$=t(4189),X=t(9270),Z=t(5087),Y=t(386),aa=t(2669),ea=t(330),ta=t(9626),la=t(8672),sa=t(8582),ra=t.n(sa);const ia=(0,O.A)(D,[["render",y]]),na=ia;ra()(D,"components",{QPage:E.A,QToolbar:P.A,QToolbarTitle:R.A,QBtn:q.A,QList:z.A,QItem:N.A,QItemSection:U.A,QAvatar:G.A,QItemLabel:J.A,QDialog:Q.A,QCard:j.A,QCardSection:$.A,QInput:X.A,QToggle:Z.A,QSeparator:Y.A,QCardActions:aa.A,QImg:ea.A}),ra()(D,"directives",{Ripple:ta.A,ClosePopup:la.A})}}]);