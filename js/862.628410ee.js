"use strict";(globalThis["webpackChunkquasar_bgb_matchmanagement"]=globalThis["webpackChunkquasar_bgb_matchmanagement"]||[]).push([[862],{2417:(e,a,t)=>{t.d(a,{FP:()=>u,I_:()=>i,LE:()=>o,Pi:()=>W,R7:()=>_,RR:()=>f,TT:()=>d,Zg:()=>r,bl:()=>w,d8:()=>p,ej:()=>g,gZ:()=>n,gn:()=>m,hc:()=>C,kY:()=>b,mb:()=>c,ov:()=>v,wX:()=>h});const l=!0,s="HOME",n="service_1z8boq8",i="template_uc9j4dn",r="z6CsuBOLcuYCsxNiZ",o="Auf geht's SCF",u="d1f60978-f743-4b6e-88f1-ac7aa7885d2b",c="8f26f0ad-d9d3-4c33-b1c9-f0560ee3ea11",m="https://planthegame.ch",d="https://script.google.com/macros/s/AKfycbxpYbKFzUC6iSSlE913vWGLuvRZ7TbT8eXVn54Un7rm0KJa9vVGzuvu7d-V-tSuWSDjOw/exec",g=function(e){const a=e+"=",t=decodeURIComponent(document.cookie),n=t.split(";");for(let l=0;l<n.length;l++){let e=n[l];while(" "===e.charAt(0))e=e.substring(1);if(0===e.indexOf(a))return e.substring(a.length,e.length)}return"isAdministrator"===e?l:"applicationCode"===e?s:void 0},p=function(e,a){const t=new Date;t.setTime(t.getTime()+31536e6);const l="expires="+t.toUTCString();document.cookie="isAdministrator="+e+";"+l+'";path=/',document.cookie="applicationCode="+a+";"+l+'";path=/'},b=function(e){let a="";if("HOME"===e)return"3Home2emoH9";if(12===e.length){if(e.indexOf("_")>0){const t=e.split("_");8===t[0].length&&parseInt(t[1])>=329&&(a=t[1].substring(0,1)+t[0].substring(0,4)+t[1].substring(1,2)+t[0].substring(4,8)+t[1].substring(2,t[1].length))}}else 11===e.length&&(a=e);return a},v=function(e){let a="";if(12===e.length){if(e.indexOf("_")>0){const t=e.split("_");8===t[0].length&&parseInt(t[1])>=329&&(a=e)}}else 11===e.length&&(a=e.substring(1,5)+e.substring(6,10)+"_"+e.substring(0,1)+e.substring(5,6)+e.substring(10,e.length));return a},_=function(e){return"statics/images/"+e+"/Logo.png"},h=function(e,a,t){return""===a?"statics/avatars/collection/Placeholder.png":t?"statics/avatars/"+e+"/"+a+".png":"statics/avatars/collection/"+a+".png"},f=function(e){let a=this.teamImages.find((a=>a.value===e))?.image;return"undefined"===typeof a&&(a="statics/teams/QuestionMark.png"),a},W=function(e){return e.toLowerCase().indexOf("test")>=0?"statics/teams/Test.png":"statics/teams/Event.png"},C=[{label:"Arminia",value:"Arminia_Bielefeld",image:"statics/teams/Arminia_Bielefeld.png"},{label:"Augsburg",value:"Augsburg",image:"statics/teams/Augsburg.png"},{label:"Backa Topola",value:"Backa_Topola",image:"statics/teams/Backa_Topola.png"},{label:"Bayern",value:"Bayern_München",image:"statics/teams/Bayern_München.png"},{label:"Bochum",value:"Bochum",image:"statics/teams/Bochum.png"},{label:"Braunschweig",value:"Eintracht_Braunschweig",image:"statics/teams/Eintracht_Braunschweig.png"},{label:"Darmstadt",value:"Darmstadt",image:"statics/teams/Darmstadt.png"},{label:"DFB Pokal",value:"DFB_Pokal",image:"statics/teams/DFB_Pokal.png"},{label:"Dortmund",value:"Borussia_Dortmund",image:"statics/teams/Borussia_Dortmund.png"},{label:"Europa League",value:"Europa_League",image:"statics/teams/Europa_League.png"},{label:"Frankfurt",value:"Eintracht_Frankfurt",image:"statics/teams/Eintracht_Frankfurt.png"},{label:"Fortuna Düsseldorf",value:"Fortuna_Düsseldorf",image:"statics/teams/Fortuna_Düsseldorf.png"},{label:"Freiburg",value:"Freiburg",image:"statics/teams/Freiburg.svg"},{label:"Greuther Fürth",value:"Greuther_Fürth",image:"statics/teams/Greuther_Fürth.png"},{label:"Hamburger SV",value:"Hamburger_SV",image:"statics/teams/Hamburger_SV.png"},{label:"Hannover",value:"Hannover",image:"statics/teams/Hannover.png"},{label:"Hansa Rostock",value:"Hansa_Rostock",image:"statics/teams/Hansa_Rostock.png"},{label:"Heidenheim",value:"Heidenheim",image:"statics/teams/Heidenheim.png"},{label:"Hertha",value:"Hertha",image:"statics/teams/Hertha.png"},{label:"Hoffenheim",value:"Hoffenheim",image:"statics/teams/Hoffenheim.svg"},{label:"Holstein",value:"Holstein",image:"statics/teams/Holstein.png"},{label:"Jahn Regensburg",value:"Jahn_Regensburg",image:"statics/teams/Jahn_Regensburg.png"},{label:"Juventus Turin",value:"Juventus_Turin",image:"statics/teams/Juventus_Turin.png"},{label:"Kaiserslautern",value:"Kaiserslautern",image:"statics/teams/Kaiserslautern.png"},{label:"Karlsruher",value:"Karlsruher",image:"statics/teams/Karlsruher.png"},{label:"Köln",value:"Köln",image:"statics/teams/Köln.svg"},{label:"Leipzig",value:"Leipzig",image:"statics/teams/Leipzig.png"},{label:"RC Lens",value:"Lens",image:"statics/teams/Lens.svg"},{label:"Leverkusen",value:"Bayer_Leverkusen",image:"statics/teams/Bayer_Leverkusen.png"},{label:"Magdeburg",value:"Magdeburg",image:"statics/teams/Magdeburg.png"},{label:"Mainz",value:"Mainz",image:"statics/teams/Mainz.png"},{label:"Mönchengladbach",value:"Borussia_Mönchengladbach",image:"statics/teams/Borussia_Mönchengladbach.png"},{label:"Nürnberg",value:"Nürnberg",image:"statics/teams/Nürnberg.png"},{label:"Oberachern",value:"Oberachern",image:"statics/teams/Oberachern.png"},{label:"Olympiakos Piräus",value:"Olympiakos_Piräus",image:"statics/teams/Olympiakos_Piräus.png"},{label:"Paderborn",value:"Paderborn",image:"statics/teams/Paderborn.png"},{label:"Sandhausen",value:"Sandhausen",image:"statics/teams/Sandhausen.png"},{label:"Schalke",value:"Schalke",image:"statics/teams/Schalke.png"},{label:"St. Pauli",value:"St._Pauli",image:"statics/teams/St._Pauli.png"},{label:"Stuttgart",value:"Stuttgart",image:"statics/teams/Stuttgart.png"},{label:"Union Berlin",value:"Union_Berlin",image:"statics/teams/Union_Berlin.svg"},{label:"Werder Bremen",value:"Werder_Bremen",image:"statics/teams/Werder_Bremen.png"},{label:"West Ham",value:"West_Ham",image:"statics/teams/West_Ham.png"},{label:"Wolfsburg",value:"Wolfsburg",image:"statics/teams/Wolfsburg.png"}],w=[{label:"Abraham Simpson",value:"Abraham_Simpson",avatar:"statics/avatars/collection/Abraham_Simpson.png"},{label:"Alien",value:"Alien",avatar:"statics/avatars/collection/Alien.png"},{label:"Ariel",value:"Ariel",avatar:"statics/avatars/collection/Ariel.png"},{label:"Barney Gumble",value:"Barney_Gumble",avatar:"statics/avatars/collection/Barney_Gumble.png"},{label:"Bart Simpson",value:"Bart_Simpson",avatar:"statics/avatars/collection/Bart_Simpson.png"},{label:"Charlie Brown",value:"Charlie_Brown",avatar:"statics/avatars/collection/Charlie_Brown.png"},{label:"Charlie Chaplin",value:"Charlie_Chaplin",avatar:"statics/avatars/collection/Charlie_Chaplin.png"},{label:"Clancy Wiggum",value:"Clancy_Wiggum",avatar:"statics/avatars/collection/Clancy_Wiggum.png"},{label:"Cupid",value:"Cupid",avatar:"statics/avatars/collection/Cupid.png"},{label:"Doctor Strange",value:"Doctor_Strange",avatar:"statics/avatars/collection/Doctor_Strange.png"},{label:"Ed Sheeran",value:"Ed_Sheeran",avatar:"statics/avatars/collection/Ed_Sheeran.png"},{label:"Eeyore",value:"Eeyore",avatar:"statics/avatars/collection/Eeyore.png"},{label:"Elon Musk",value:"Elon_Musk",avatar:"statics/avatars/collection/Elon_Musk.png"},{label:"Fat Cat",value:"Fat_Cat",avatar:"statics/avatars/collection/Fat_Cat.png"},{label:"Garfield",value:"Garfield",avatar:"statics/avatars/collection/Garfield.png"},{label:"Hello Kitty",value:"Hello_Kitty",avatar:"statics/avatars/collection/Hello_Kitty.png"},{label:"Homer Simpson",value:"Homer_Simpson",avatar:"statics/avatars/collection/Homer_Simpson.png"},{label:"Ironman",value:"Ironman",avatar:"statics/avatars/collection/Ironman.png"},{label:"Jerry",value:"Jerry",avatar:"statics/avatars/collection/Jerry.png"},{label:"John Lennon",value:"John_Lennon",avatar:"statics/avatars/collection/John_Lennon.png"},{label:"Joker",value:"Joker",avatar:"statics/avatars/collection/Joker.png"},{label:"Krusty The Clown",value:"Krusty_The_Clown",avatar:"statics/avatars/collection/Krusty_The_Clown.png"},{label:"Linus",value:"Linus",avatar:"statics/avatars/collection/Linus.png"},{label:"Lisa Simpson",value:"Lisa_Simpson",avatar:"statics/avatars/collection/Lisa_Simpson.png"},{label:"Lucy",value:"Lucy",avatar:"statics/avatars/collection/Lucy.png"},{label:"Maggie Simpson",value:"Maggie_Simpson",avatar:"statics/avatars/collection/Maggie_Simpson.png"},{label:"Marcie",value:"Marcie",avatar:"statics/avatars/collection/Marcie.png"},{label:"Marge Simpson",value:"Marge_Simpson",avatar:"statics/avatars/collection/Marge_Simpson.png"},{label:"Marie",value:"Marie",avatar:"statics/avatars/collection/Marie.png"},{label:"Marilyn Monroe",value:"Marilyn_Monroe",avatar:"statics/avatars/collection/Marilyn_Monroe.png"},{label:"Messi",value:"Messi",avatar:"statics/avatars/collection/Messi.png"},{label:"Michael Jackson",value:"Michael_Jackson",avatar:"statics/avatars/collection/Michael_Jackson.png"},{label:"Mondtor01",value:"Mondtor01",avatar:"statics/avatars/collection/Mondtor01.png"},{label:"Mondtor02",value:"Mondtor02",avatar:"statics/avatars/collection/Mondtor02.png"},{label:"Mr Beans Teddy",value:"Mr_Beans_Teddy",avatar:"statics/avatars/collection/Mr_Beans_Teddy.png"},{label:"Mr Burns",value:"Mr_Burns",avatar:"statics/avatars/collection/Mr_Burns.png"},{label:"Ms Wicket",value:"Ms_Wicket",avatar:"statics/avatars/collection/Ms_Wicket.png"},{label:"Pelé",value:"Pelé",avatar:"statics/avatars/collection/Pelé.png"},{label:"Peppermint Patty",value:"Peppermint_Patty",avatar:"statics/avatars/collection/Peppermint_Patty.png"},{label:"Pile Of Poo",value:"Pile_Of_Poo",avatar:"statics/avatars/collection/Pile_Of_Poo.png"},{label:"Sally",value:"Sally",avatar:"statics/avatars/collection/Sally.png"},{label:"Santa",value:"Santa",avatar:"statics/avatars/collection/Santa.png"},{label:"Sea Calf",value:"Sea_Calf",avatar:"statics/avatars/collection/Sea_Calf.png"},{label:"Snoop Dogg",value:"Snoop_Dogg",avatar:"statics/avatars/collection/Snoop_Dogg.png"},{label:"Stan Marsh",value:"Stan_Marsh",avatar:"statics/avatars/collection/Stan_Marsh.png"},{label:"Sumo",value:"Sumo",avatar:"statics/avatars/collection/Sumo.png"},{label:"Super Mario",value:"Super_Mario",avatar:"statics/avatars/collection/Super_Mario.png"},{label:"Tom",value:"Tom",avatar:"statics/avatars/collection/Tom.png"},{label:"Tom Kid",value:"Tom_Kid",avatar:"statics/avatars/collection/Tom_Kid.png"},{label:"Tweety",value:"Tweety",avatar:"statics/avatars/collection/Tweety.png"},{label:"Woodstock",value:"Woodstock",avatar:"statics/avatars/collection/Woodstock.png"}]},862:(e,a,t)=>{t.r(a),t.d(a,{default:()=>te});var l=t(9835),s=t(6970);const n=e=>((0,l.dD)("data-v-7bbecf4d"),e=e(),(0,l.Cn)(),e),i={class:"q-pa-md q-gutter-sm"},r=n((()=>(0,l._)("div",{class:"text-h6"},"Ich möchte einen Code!",-1))),o=n((()=>(0,l._)("div",{class:"text-subtitle2"},"Sende mir bitte einen kostenlosen Code, um mit meiner Spieltagsplanung zu starten!",-1))),u=n((()=>(0,l._)("div",{class:"text-subtitle3"},'Nachdem du auf den "OK"-Button geklickt hast, solltest du sofort eine E-Mail erhalten. Sollte dies nicht der Fall ist, schreib uns bitte eine E-Mail an aufgehtsscf@gmail.com',-1))),c={class:"q-pa-md q-gutter-sm"},m=n((()=>(0,l._)("div",{class:"text-h6"},"Ich habe einen Code!",-1))),d=n((()=>(0,l._)("div",{class:"text-subtitle3"},"Ich besitze bereits einen Code.",-1))),g=n((()=>(0,l._)("div",{class:"text-subtitle2"},"Wir verwenden Cookies",-1))),p={class:"q-pa-md row items-start q-gutter-md"},b=n((()=>(0,l._)("div",{class:"text-overline"},"Plan the Game",-1))),v=n((()=>(0,l._)("div",{class:"text-h5 q-mt-sm q-mb-xs"},"Die App zur Spieltagsplanung für deinen SCF",-1))),_=n((()=>(0,l._)("div",{class:"text-caption text-grey"}," Spieltag einfach und effizient planen. ",-1))),h={class:"q-pa-md q-gutter-sm"},f={class:"row justify-center"},W={class:"q-pa-md q-gutter-sm"},C={class:"row justify-center"},w={class:"q-pa-md row items-start q-gutter-md"},k=n((()=>(0,l._)("div",{class:"text-overline"},"Plan the Game",-1))),S=n((()=>(0,l._)("div",{class:"text-h5 q-mt-sm q-mb-xs"},"Was kann diese App?",-1))),y=n((()=>(0,l._)("div",{class:"text-caption text-grey"}," Deine Planung immer im Blick. ",-1)));function M(e,a,t,n,M,x){const q=(0,l.up)("q-card-section"),H=(0,l.up)("q-input"),B=(0,l.up)("q-separator"),A=(0,l.up)("q-btn"),F=(0,l.up)("q-card-actions"),P=(0,l.up)("q-card"),T=(0,l.up)("q-dialog"),V=(0,l.up)("q-icon"),D=(0,l.up)("q-img"),I=(0,l.up)("q-video"),z=(0,l.up)("q-carousel-slide"),E=(0,l.up)("q-carousel"),L=(0,l.up)("q-btn-toggle"),U=(0,l.up)("q-item-section"),Z=(0,l.up)("q-item-label"),K=(0,l.up)("q-item"),O=(0,l.up)("q-list"),R=(0,l.up)("q-page"),J=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.j4)(R,null,{default:(0,l.w5)((()=>[(0,l._)("div",i,[(0,l.Wm)(T,{modelValue:n.codeRequest,"onUpdate:modelValue":a[4]||(a[4]=e=>n.codeRequest=e),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(P,{style:{"max-width":"350px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(q,null,{default:(0,l.w5)((()=>[r,o])),_:1}),(0,l.Wm)(q,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(H,{filled:"",dense:"",modelValue:n.txtFanClubName,"onUpdate:modelValue":a[0]||(a[0]=e=>n.txtFanClubName=e),autofocus:"",label:"Fanclub *"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(q,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(H,{filled:"",dense:"",modelValue:n.txtFanClubContactPerson,"onUpdate:modelValue":a[1]||(a[1]=e=>n.txtFanClubContactPerson=e),label:"Kontaktperson *"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(q,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(H,{filled:"",dense:"",modelValue:n.txtFanClubEmailAddress,"onUpdate:modelValue":a[2]||(a[2]=e=>n.txtFanClubEmailAddress=e),label:"E-Mail-Adresse *",rules:[e=>x.validateEmail(e)||"Must be a valid email."]},null,8,["modelValue","rules"])])),_:1}),(0,l.Wm)(q,null,{default:(0,l.w5)((()=>[u])),_:1}),(0,l.Wm)(B),(0,l.Wm)(F,{class:"text-primary",align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(A,{label:"Abbrechen"},null,512),[[J]]),(0,l.wy)((0,l.Wm)(A,{label:"Ok",onClick:a[3]||(a[3]=e=>x.sendCodeRequest(n.txtFanClubName,n.txtFanClubContactPerson,n.txtFanClubEmailAddress)),disable:""===n.txtFanClubName||""===n.txtFanClubContactPerson||!x.validateEmail(n.txtFanClubEmailAddress)},null,8,["disable"]),[[J]])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,l._)("div",c,[(0,l.Wm)(T,{modelValue:n.enterCode,"onUpdate:modelValue":a[7]||(a[7]=e=>n.enterCode=e),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(P,{style:{"max-width":"350px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(q,null,{default:(0,l.w5)((()=>[m,d])),_:1}),(0,l.Wm)(q,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(H,{color:"red","bg-color":"red","label-color":"black",filled:"",modelValue:n.txtApplicationCode,"onUpdate:modelValue":a[5]||(a[5]=e=>n.txtApplicationCode=e),label:"Code hier eingeben"},{append:(0,l.w5)((()=>[(0,l.Wm)(V,{name:"qr_code_2"})])),_:1},8,["modelValue"])])),_:1}),(0,l.Wm)(q,null,{default:(0,l.w5)((()=>[g])),_:1}),(0,l.Wm)(q,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(n.cookieText1),1)])),_:1}),(0,l.Wm)(q,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(n.cookieText2),1)])),_:1}),(0,l.Wm)(q,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(n.cookieText3),1)])),_:1}),(0,l.Wm)(B),(0,l.Wm)(F,{class:"text-primary",align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(A,{label:"Abbrechen"},null,512),[[J]]),(0,l.wy)((0,l.Wm)(A,{label:"Ok",onClick:a[6]||(a[6]=e=>x.getTenant(n.txtApplicationCode,!0)),disable:""===n.txtApplicationCode},null,8,["disable"]),[[J]])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,l._)("div",p,[(0,l.Wm)(P,{class:"my-card",flat:"",bordered:""},{default:(0,l.w5)((()=>[(0,l.Wm)(q,{horizontal:""},{default:(0,l.w5)((()=>[(0,l.Wm)(q,{class:"q-pt-xs"},{default:(0,l.w5)((()=>[b,v,_])),_:1}),(0,l.Wm)(q,{class:"col-5 flex flex-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(D,{class:"rounded-borders",src:"statics/images/Home.png"})])),_:1})])),_:1}),(0,l.Wm)(B),(0,l.Wm)(F,{align:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(A,{class:"glossy",rounded:"",color:"red",label:"Jetzt starten",onClick:a[8]||(a[8]=e=>n.codeRequest=!0)}),(0,l.Wm)(A,{class:"glossy",rounded:"",color:"red",label:"Ich habe einen Code!",onClick:a[9]||(a[9]=e=>n.enterCode=!0)})])),_:1})])),_:1})]),(0,l._)("div",h,[(0,l.Wm)(E,{animated:"",modelValue:n.slide,"onUpdate:modelValue":a[10]||(a[10]=e=>n.slide=e),infinite:""},{default:(0,l.w5)((()=>[(0,l.Wm)(z,{name:"spiel_erfassen"},{default:(0,l.w5)((()=>[(0,l.Wm)(I,{class:"absolute-full",src:"https://youtube.com/embed/NRDy9V7r8SQ"})])),_:1}),(0,l.Wm)(z,{name:"mitglied_erfassen"},{default:(0,l.w5)((()=>[(0,l.Wm)(I,{class:"absolute-full",src:"https://youtube.com/embed/zpF-cfnZM-0"})])),_:1}),(0,l.Wm)(z,{name:"mitglied_updaten"},{default:(0,l.w5)((()=>[(0,l.Wm)(I,{class:"absolute-full",src:"https://youtube.com/embed/6uvxhCYOuCA"})])),_:1}),(0,l.Wm)(z,{name:"teilnahme_erfassen"},{default:(0,l.w5)((()=>[(0,l.Wm)(I,{class:"absolute-full",src:"https://youtube.com/embed/_Dcj6o9XJnA"})])),_:1})])),_:1},8,["modelValue"]),(0,l._)("div",f,[(0,l.Wm)(L,{glossy:"",rounded:"",color:"red",modelValue:n.slide,"onUpdate:modelValue":a[11]||(a[11]=e=>n.slide=e),options:[{label:"Spiel erfassen",value:"spiel_erfassen"},{label:"Mitglied erfassen",value:"mitglied_erfassen"},{label:"Mitglied updaten",value:"mitglied_updaten"},{label:"Teilnahme erfassen",value:"teilnahme_erfassen"}]},null,8,["modelValue"])])]),(0,l._)("div",W,[(0,l.Wm)(E,{animated:"",modelValue:n.slide2,"onUpdate:modelValue":a[12]||(a[12]=e=>n.slide2=e),infinite:""},{default:(0,l.w5)((()=>[(0,l.Wm)(z,{name:"karteninhaber_erfassen"},{default:(0,l.w5)((()=>[(0,l.Wm)(I,{class:"absolute-full",src:"https://youtube.com/embed/YFReZbD2zOo"})])),_:1}),(0,l.Wm)(z,{name:"karte_zuweisen"},{default:(0,l.w5)((()=>[(0,l.Wm)(I,{class:"absolute-full",src:"https://youtube.com/embed/7XcQ7sNXlIA"})])),_:1}),(0,l.Wm)(z,{name:"spielübersicht_teilen"},{default:(0,l.w5)((()=>[(0,l.Wm)(I,{class:"absolute-full",src:"https://youtube.com/embed/khJNCVcUwkQ"})])),_:1}),(0,l.Wm)(z,{name:"besuchte_spiele_anzeigen"},{default:(0,l.w5)((()=>[(0,l.Wm)(I,{class:"absolute-full",src:"https://youtube.com/embed/e1Eui0RN5lg"})])),_:1})])),_:1},8,["modelValue"]),(0,l._)("div",C,[(0,l.Wm)(L,{glossy:"",rounded:"",color:"red",modelValue:n.slide2,"onUpdate:modelValue":a[13]||(a[13]=e=>n.slide2=e),options:[{label:"Karteninhaber erfassen",value:"karteninhaber_erfassen"},{label:"Karte zuweisen",value:"karte_zuweisen"},{label:"Spielübersicht teilen",value:"spielübersicht_teilen"},{label:"Besuchte Spiele pro Teilnehmer anzeigen",value:"besuchte_spiele_anzeigen"}]},null,8,["modelValue"])])]),(0,l._)("div",w,[(0,l.Wm)(P,{class:"my-card",flat:"",bordered:""},{default:(0,l.w5)((()=>[(0,l.Wm)(q,{horizontal:""},{default:(0,l.w5)((()=>[(0,l.Wm)(q,{class:"q-pt-xs"},{default:(0,l.w5)((()=>[k,S,y])),_:1}),(0,l.Wm)(q,{class:"col-5 flex flex-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(D,{class:"rounded-borders",src:"statics/images/AufGehtsSCF2.png"})])),_:1})])),_:1}),(0,l.Wm)(O,null,{default:(0,l.w5)((()=>[(0,l.Wm)(K,null,{default:(0,l.w5)((()=>[(0,l.Wm)(U,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(V,{color:"yellow",name:"emoji_people"})])),_:1}),(0,l.Wm)(U,null,{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{class:"text-subtitle2"},{default:(0,l.w5)((()=>[(0,l.Uk)("Teilnehmer verwalten")])),_:1}),(0,l.Wm)(Z,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Hier kannst du dich für ein bestimmtes Spiel eintragen. Du kannst angeben, ob du dabei bist oder ob du ein Ticket brauchst/freigibst. Du hast stets den Überblick über die aktuellen Spiele.")])),_:1})])),_:1})])),_:1}),(0,l.Wm)(K,null,{default:(0,l.w5)((()=>[(0,l.Wm)(U,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(V,{color:"blue",name:"sports_volleyball"})])),_:1}),(0,l.Wm)(U,null,{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{class:"text-subtitle2"},{default:(0,l.w5)((()=>[(0,l.Uk)("Spiele verwalten")])),_:1}),(0,l.Wm)(Z,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Hier kannst du ein bereits terminierten Spiel erfassen und publizieren. Heim- und Auswärtsspiele können erfasst werden.")])),_:1})])),_:1})])),_:1}),(0,l.Wm)(K,null,{default:(0,l.w5)((()=>[(0,l.Wm)(U,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(V,{color:"red",name:"person"})])),_:1}),(0,l.Wm)(U,null,{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{class:"text-subtitle2"},{default:(0,l.w5)((()=>[(0,l.Uk)("Mitglieder verwalten")])),_:1}),(0,l.Wm)(Z,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Hier kannst du als Mitglied eintragen. Es stehen dir jede Menge coole Avatare zur Verfügung.")])),_:1})])),_:1})])),_:1}),(0,l.Wm)(K,null,{default:(0,l.w5)((()=>[(0,l.Wm)(U,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(V,{color:"green",name:"credit_card"})])),_:1}),(0,l.Wm)(U,null,{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{class:"text-subtitle2"},{default:(0,l.w5)((()=>[(0,l.Uk)("Karten verwalten. Wer hat meine Karte?")])),_:1}),(0,l.Wm)(Z,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Hier kannst du angeben, wer aktuell deine Karte hat. Diese Information fließt in die Spielübersicht ein.")])),_:1})])),_:1})])),_:1}),(0,l.Wm)(K,null,{default:(0,l.w5)((()=>[(0,l.Wm)(U,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(V,{color:"teal",name:"add"})])),_:1}),(0,l.Wm)(U,null,{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{class:"text-subtitle2"},{default:(0,l.w5)((()=>[(0,l.Uk)("... und vieles mehr")])),_:1}),(0,l.Wm)(Z,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Wer ist der Heimspielkönig? Welches Spiel wurde am meisten besucht? Diese und andere Statistiken sind jederzeit sichtbar.")])),_:1})])),_:1})])),_:1})])),_:1}),(0,l.Wm)(B),(0,l.Wm)(F,{align:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(A,{class:"glossy",rounded:"",color:"red",label:"Jetzt starten",onClick:a[14]||(a[14]=e=>n.codeRequest=!0)}),(0,l.Wm)(A,{class:"glossy",rounded:"",color:"red",label:"Ich habe einen Code!",onClick:a[15]||(a[15]=e=>n.enterCode=!0)})])),_:1})])),_:1})]),(0,l.Wm)(D,{src:"statics/images/AufGehtsSCF.png",class:"header-image2 absolute-top"})])),_:1})}t(9665);var x=t(9302),q=t(2417),H=t(570),B=t(499);let A;const F={name:"HomePage",setup(){const e=(0,x.Z)();return{slide:(0,B.iH)("spiel_erfassen"),slide2:(0,B.iH)("karteninhaber_erfassen"),txtFanClubName:(0,B.iH)(""),txtFanClubContactPerson:(0,B.iH)(""),txtFanClubEmailAddress:(0,B.iH)(""),txtApplicationCode:(0,B.iH)(""),cookieText1:"Damit du deinen Zugangscode nicht jedes Mal neu eingeben musst, speichern wir diese und andere von deinem Administrator festgelegte Informationen als Cookies.",cookieText2:"Durch die Nutzung dieser Website erklärst du dich damit einverstanden, dass wir Cookies verwenden.",cookieText3:'Klick auf "OK" klicken, um den Aktivierungscode zu überprüfen.',onCodeIsValid(){e.notify({type:"positive",message:"Der eingegebene Code ist gültig!"})},onCodeIsInvalid(){e.notify({type:"negative",message:"Der eingegebene Code ist ungültig!"})},onCodeNotFound(){e.notify({type:"negative",message:"Der eingegebene Code wurde nicht gefunden!"})},onCodeRequestWasSent(){e.notify({type:"positive",message:"Deine Code-Anfrage wurde gesendet!"})},codeRequest:(0,B.iH)(!1),enterCode:(0,B.iH)(!1)}},data(){return{getCookie:q.ej,getAdminCode:q.kY,URLMatchManagementAPI:q.gn,setCookie:q.d8,serviceID:q.gZ,templateID:q.I_,userID:q.Zg,FromName:q.LE}},computed:{},mounted(){this.setVariables().then((()=>{this.getTenant((0,q.kY)((0,q.ej)("applicationCode")),!1)}))},methods:{setVariables(){return A=q.gn+"/Tenant",Promise.resolve()},validateEmail(e){return/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(e)},sendCodeRequest(e,a,t){try{H.ZP.send(q.gZ,this.templateID,{from_name:this.FromName,to_email:t,contactperson:a,fanclub:e},this.userID)}catch(l){console.log({error:l})}this.onCodeRequestWasSent()},getTenant(e,a){let t="",l="";if(a){if(12===e.length){if(e.indexOf("_")>0){const a=e.split("_");8===a[0].length&&parseInt(a[1])>=329&&(l=e,t=a[1].substring(0,1)+a[0].substring(0,4)+a[1].substring(1,2)+a[0].substring(4,8)+a[1].substring(2,a[1].length))}}else 11===e.length&&(t=e,l=e.substring(1,5)+e.substring(6,10)+"_"+e.substring(0,1)+e.substring(5,6)+e.substring(10,e.length));""===t&&""===l?this.onCodeIsInvalid():this.$axios.get(`${A}/code/${t}`).then((a=>{if(200!==a.status)this.onCodeIsInvalid();else{let s=!1;a.data.adminCode===e&&(s=!0),a.data.adminCode===t||a.data.userCode===l?this.setCookie(s,e):this.onCodeNotFound(),this.onCodeIsValid(),this.refreshPage()}})).catch((e=>{this.onCodeIsInvalid(),console.log(e)}))}else"HOME"!==this.getCookie("applicationCode")&&this.$router.push("/participant")},async refreshPage(){const e=e=>new Promise((a=>setTimeout(a,e)));await e(3e3),this.$router.push("/participant"),await e(5e3)}}};var P=t(1639),T=t(9885),V=t(2074),D=t(4458),I=t(3190),z=t(6611),E=t(926),L=t(1821),U=t(8879),Z=t(2857),K=t(1487),O=t(960),R=t(1694),J=t(1005),Q=t(1389),N=t(3246),G=t(490),j=t(1233),Y=t(3115),X=t(2146),$=t(9984),ee=t.n($);const ae=(0,P.Z)(F,[["render",M],["__scopeId","data-v-7bbecf4d"]]),te=ae;ee()(F,"components",{QPage:T.Z,QDialog:V.Z,QCard:D.Z,QCardSection:I.Z,QInput:z.Z,QSeparator:E.Z,QCardActions:L.Z,QBtn:U.Z,QIcon:Z.Z,QImg:K.Z,QCarousel:O.Z,QCarouselSlide:R.Z,QVideo:J.Z,QBtnToggle:Q.Z,QList:N.Z,QItem:G.Z,QItemSection:j.Z,QItemLabel:Y.Z}),ee()(F,"directives",{ClosePopup:X.Z})}}]);