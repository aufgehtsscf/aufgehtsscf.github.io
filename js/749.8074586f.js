"use strict";(globalThis["webpackChunkquasar_bgb_matchmanagement"]=globalThis["webpackChunkquasar_bgb_matchmanagement"]||[]).push([[749],{4127:(e,a,t)=>{t.d(a,{CW:()=>g,Fd:()=>f,Gt:()=>S,Jf:()=>v,NI:()=>_,Ri:()=>d,TV:()=>m,UE:()=>i,UG:()=>k,W8:()=>c,Y0:()=>h,a8:()=>p,bR:()=>u,fr:()=>n,gj:()=>b,iR:()=>C,qt:()=>o,vm:()=>r});const l=!1,s="HOME",n="service_1z8boq8",i="template_uc9j4dn",r="z6CsuBOLcuYCsxNiZ",o="Auf geht's SCF",u="d1f60978-f743-4b6e-88f1-ac7aa7885d2b",c="8f26f0ad-d9d3-4c33-b1c9-f0560ee3ea11",g="https://planthegame.ch",b="https://script.google.com/macros/s/AKfycbxpYbKFzUC6iSSlE913vWGLuvRZ7TbT8eXVn54Un7rm0KJa9vVGzuvu7d-V-tSuWSDjOw/exec",d=function(e){const a=e+"=",t=decodeURIComponent(document.cookie),n=t.split(";");for(let l=0;l<n.length;l++){let e=n[l];while(" "===e.charAt(0))e=e.substring(1);if(0===e.indexOf(a))return e.substring(a.length,e.length)}return"isAdministrator"===e?l:"applicationCode"===e?s:void 0},m=function(e,a){const t=new Date;t.setTime(t.getTime()+31536e6);const l="expires="+t.toUTCString();document.cookie="isAdministrator="+e+";"+l+'";path=/',document.cookie="applicationCode="+a+";"+l+'";path=/'},v=function(e){let a="";if("HOME"===e)return"3Home2emoH9";if(12===e.length){if(e.indexOf("_")>0){const t=e.split("_");8===t[0].length&&parseInt(t[1])>=329&&(a=t[1].substring(0,1)+t[0].substring(0,4)+t[1].substring(1,2)+t[0].substring(4,8)+t[1].substring(2,t[1].length))}}else 11===e.length&&(a=e);return a},_=function(e){let a="";if(12===e.length){if(e.indexOf("_")>0){const t=e.split("_");8===t[0].length&&parseInt(t[1])>=329&&(a=e)}}else 11===e.length&&(a=e.substring(1,5)+e.substring(6,10)+"_"+e.substring(0,1)+e.substring(5,6)+e.substring(10,e.length));return a},p=function(e){return"statics/images/"+e+"/Logo.png"},h=function(e,a,t){return""===a?"statics/avatars/collection/Placeholder.png":t?"statics/avatars/"+e+"/"+a+".png":"statics/avatars/collection/"+a+".png"},f=function(e){let a=this.teamImages.find((a=>a.value===e))?.image;return"undefined"===typeof a&&(a="statics/teams/QuestionMark.svg"),a},k=function(e){return e.toLowerCase().indexOf("test")>=0?"statics/teams/Test.svg":"statics/teams/Event.webp"},F="3NGdo3Lbyd0"===s||"NGdoLbyd_330"===s,C=[{label:"Arminia",value:"Arminia_Bielefeld",image:"statics/teams/Arminia_Bielefeld.svg"},{label:"Augsburg",value:"Augsburg",image:"statics/teams/Augsburg.svg"},{label:"Backa Topola",value:"Backa_Topola",image:"statics/teams/Backa_Topola.svg"},{label:"Bahlinger SC",value:"Bahlinger_SC",image:"statics/teams/Bahlinger_SC.jpg"},{label:"Bayer Leverkusen",value:"Bayer_Leverkusen",image:"statics/teams/Bayer_Leverkusen.svg"},{label:"Bayer Leverkusen Frauen",value:"Bayer_Leverkusen_Frauen",image:"statics/teams/Bayer_Leverkusen.svg"},{label:"Bayern",value:"Bayern_München",image:"statics/teams/Bayern_München.svg"},{label:"Bayern Frauen ",value:"Bayern_München_Frauen",image:"statics/teams/Bayern_München.svg"},{label:"Bochum",value:"Bochum",image:"statics/teams/Bochum.svg"},{label:"Borussia Dortmund",value:"Borussia_Dortmund",image:"statics/teams/Borussia_Dortmund.svg"},{label:"Borussia Mönchengladbach",value:"Borussia_Mönchengladbach",image:"statics/teams/Borussia_Mönchengladbach.svg"},{label:"Carl Zeiss Jena Frauen",value:"Carl_Zeiss_Jena_Frauen",image:"statics/teams/Carl_Zeiss_Jena.svg"},{label:"Champions League",value:"Champions_League",image:"statics/teams/Champions_League.svg"},{label:"Conference League",value:"Conference_League",image:"statics/teams/Conference_League.svg"},{label:"Darmstadt",value:"Darmstadt",image:"statics/teams/Darmstadt.svg"},{label:"DFB Pokal",value:"DFB_Pokal",image:"statics/teams/DFB_Pokal.png"},{label:"Eintracht Braunschweig",value:"Eintracht_Braunschweig",image:"statics/teams/Eintracht_Braunschweig.svg"},{label:"Eintracht Frankfurt",value:"Eintracht_Frankfurt",image:"statics/teams/Eintracht_Frankfurt.svg"},{label:"Eintracht Frankfurt Frauen",value:"Eintracht_Frankfurt_Frauen",image:"statics/teams/Eintracht_Frankfurt.svg"},{label:"Eintracht Frankfurt II",value:"Eintracht_Frankfurt_II",image:"statics/teams/Eintracht_Frankfurt.svg"},{label:"Eintracht Trier",value:"Eintracht_Trier",image:"statics/teams/Eintracht_Trier.svg"},{label:"Europa League",value:"Europa_League",image:"statics/teams/Europa_League.svg"},{label:"FCA Walldorf",value:"FCA_Walldorf",image:"statics/teams/FCA_Walldorf.svg"},{label:"FC Homburg",value:"FC_Homburg",image:"statics/teams/FC_Homburg.svg"},{label:"FC 08 Villingen",value:"FC_08_Villingen",image:"statics/teams/FC_08_Villingen.svg"},{label:"Fortuna Düsseldorf",value:"Fortuna_Düsseldorf",image:"statics/teams/Fortuna_Düsseldorf.svg"},{label:"Freiburg",value:"Freiburg",image:"statics/teams/Freiburg.svg"},{label:"Freiburg Frauen",value:"Freiburg_Frauen",image:"statics/teams/Freiburg.svg"},{label:"Freiburg II",value:"Freiburg_II",image:"statics/teams/Freiburg.svg"},{label:"FSV Frankfurt",value:"FSV_Frankfurt",image:"statics/teams/FSV_Frankfurt.svg"},{label:"Giessen",value:"Giessen",image:"statics/teams/Giessen.svg"},{label:"Göppinger",value:"Göppinger",image:"statics/teams/Göppinger.svg"},{label:"Greuther Fürth",value:"Greuther_Fürth",image:"statics/teams/Greuther_Fürth.svg"},{label:"Hamburger SV",value:"Hamburger_SV",image:"statics/teams/Hamburger_SV.svg"},{label:"Hannover",value:"Hannover",image:"statics/teams/Hannover.svg"},{label:"Hansa Rostock",value:"Hansa_Rostock",image:"statics/teams/Hansa_Rostock.svg"},{label:"Heidenheim",value:"Heidenheim",image:"statics/teams/Heidenheim.svg"},{label:"Hertha",value:"Hertha",image:"statics/teams/Hertha.svg"},{label:"Hoffenheim",value:"Hoffenheim",image:"statics/teams/Hoffenheim.svg"},{label:"Hoffenheim Frauen",value:"Hoffenheim_Frauen",image:"statics/teams/Hoffenheim.svg"},{label:"Hoffenheim II",value:"Hoffenheim_II",image:"statics/teams/Hoffenheim.svg"},{label:"Holstein",value:"Holstein",image:"statics/teams/Holstein.svg"},{label:"Jahn Regensburg",value:"Jahn_Regensburg",image:"statics/teams/Jahn_Regensburg.svg"},{label:"Juventus Turin",value:"Juventus_Turin",image:"statics/teams/Juventus_Turin.svg"},{label:"Kaiserslautern",value:"Kaiserslautern",image:"statics/teams/Kaiserslautern.svg"},{label:"Karlsruher",value:"Karlsruher",image:"statics/teams/Karlsruher.svg"},{label:"Köln",value:"Köln",image:"statics/teams/Köln.svg"},{label:"Köln Frauen",value:"Köln_Frauen",image:"statics/teams/Köln.svg"},{label:"KSV Hessen",value:"KSV_Hessen",image:"statics/teams/KSV_Hessen.svg"},{label:"Leipzig",value:"Leipzig",image:"statics/teams/Leipzig.svg"},{label:"Leipzig Frauen",value:"Leipzig_Frauen",image:"statics/teams/Leipzig.svg"},{label:"RC Lens",value:"Lens",image:"statics/teams/Lens.svg"},{label:"Magdeburg",value:"Magdeburg",image:"statics/teams/Magdeburg.svg"},{label:"Mainz",value:"Mainz",image:"statics/teams/Mainz.svg"},{label:"Mainz II",value:"Mainz_II",image:"statics/teams/Mainz.svg"},{label:"Nürnberg",value:"Nürnberg",image:"statics/teams/Nürnberg.svg"},{label:"Oberachern",value:"Oberachern",image:"statics/teams/Oberachern.svg"},{label:"Offenbach",value:"Offenbach",image:"statics/teams/Offenbach.svg"},{label:"Olympiakos Piräus",value:"Olympiakos_Piräus",image:"statics/teams/Olympiakos_Piräus.svg"},{label:"Paderborn",value:"Paderborn",image:"statics/teams/Paderborn.svg"},{label:"Potsdam Frauen",value:"Potsdam_Frauen",image:"statics/teams/Potsdam.svg"},{label:"Sandhausen",value:"Sandhausen",image:"statics/teams/Sandhausen.svg"},{label:"Schalke",value:"Schalke",image:"statics/teams/Schalke.svg"},{label:"SGS Essen Frauen",value:"SGS_Essen_Frauen",image:"statics/teams/SGS_Essen.svg"},{label:"SGV Freiberg",value:"SGV_Freiberg",image:"statics/teams/SGV_Freiberg.svg"},{label:"St. Pauli",value:"St._Pauli",image:"statics/teams/St._Pauli.svg"},{label:"Stuttgart",value:"Stuttgart",image:F?"statics/teams/Stuttgart_Shit.png":"statics/teams/Stuttgart.svg"},{label:"Stuttgarter Kickers",value:"Stuttgarter_Kickers",image:"statics/teams/Stuttgarter_Kickers.svg"},{label:"TSV Lehnerz",value:"TSV_Lehnerz",image:"statics/teams/TSV_Lehnerz.gif"},{label:"TSV Steinbach",value:"TSV_Steinbach",image:"statics/teams/TSV_Steinbach.svg"},{label:"Union Berlin",value:"Union_Berlin",image:"statics/teams/Union_Berlin.svg"},{label:"VfL Osnabrück",value:"VfL_Osnabrück",image:"statics/teams/VfL_Osnabrück.svg"},{label:"Werder Bremen",value:"Werder_Bremen",image:"statics/teams/Werder_Bremen.svg"},{label:"Werder Bremen Frauen",value:"Werder_Bremen_Frauen",image:"statics/teams/Werder_Bremen.svg"},{label:"West Ham",value:"West_Ham",image:"statics/teams/West_Ham.svg"},{label:"Wolfsburg",value:"Wolfsburg",image:"statics/teams/Wolfsburg.svg"},{label:"Wolfsburg Frauen",value:"Wolfsburg_Frauen",image:"statics/teams/Wolfsburg.svg"}],S=[{label:"Abraham Simpson",value:"Abraham_Simpson",avatar:"statics/avatars/collection/Abraham_Simpson.png"},{label:"Alien",value:"Alien",avatar:"statics/avatars/collection/Alien.png"},{label:"Ariel",value:"Ariel",avatar:"statics/avatars/collection/Ariel.png"},{label:"Barney Gumble",value:"Barney_Gumble",avatar:"statics/avatars/collection/Barney_Gumble.png"},{label:"Bart Simpson",value:"Bart_Simpson",avatar:"statics/avatars/collection/Bart_Simpson.png"},{label:"Charlie Brown",value:"Charlie_Brown",avatar:"statics/avatars/collection/Charlie_Brown.png"},{label:"Charlie Chaplin",value:"Charlie_Chaplin",avatar:"statics/avatars/collection/Charlie_Chaplin.png"},{label:"Clancy Wiggum",value:"Clancy_Wiggum",avatar:"statics/avatars/collection/Clancy_Wiggum.png"},{label:"Cupid",value:"Cupid",avatar:"statics/avatars/collection/Cupid.png"},{label:"Doctor Strange",value:"Doctor_Strange",avatar:"statics/avatars/collection/Doctor_Strange.png"},{label:"Ed Sheeran",value:"Ed_Sheeran",avatar:"statics/avatars/collection/Ed_Sheeran.png"},{label:"Eeyore",value:"Eeyore",avatar:"statics/avatars/collection/Eeyore.png"},{label:"Elon Musk",value:"Elon_Musk",avatar:"statics/avatars/collection/Elon_Musk.png"},{label:"Fat Cat",value:"Fat_Cat",avatar:"statics/avatars/collection/Fat_Cat.png"},{label:"Garfield",value:"Garfield",avatar:"statics/avatars/collection/Garfield.png"},{label:"Hello Kitty",value:"Hello_Kitty",avatar:"statics/avatars/collection/Hello_Kitty.png"},{label:"Homer Simpson",value:"Homer_Simpson",avatar:"statics/avatars/collection/Homer_Simpson.png"},{label:"Ironman",value:"Ironman",avatar:"statics/avatars/collection/Ironman.png"},{label:"Jerry",value:"Jerry",avatar:"statics/avatars/collection/Jerry.png"},{label:"John Lennon",value:"John_Lennon",avatar:"statics/avatars/collection/John_Lennon.png"},{label:"Joker",value:"Joker",avatar:"statics/avatars/collection/Joker.png"},{label:"Krusty The Clown",value:"Krusty_The_Clown",avatar:"statics/avatars/collection/Krusty_The_Clown.png"},{label:"Linus",value:"Linus",avatar:"statics/avatars/collection/Linus.png"},{label:"Lisa Simpson",value:"Lisa_Simpson",avatar:"statics/avatars/collection/Lisa_Simpson.png"},{label:"Lucy",value:"Lucy",avatar:"statics/avatars/collection/Lucy.png"},{label:"Maggie Simpson",value:"Maggie_Simpson",avatar:"statics/avatars/collection/Maggie_Simpson.png"},{label:"Marcie",value:"Marcie",avatar:"statics/avatars/collection/Marcie.png"},{label:"Marge Simpson",value:"Marge_Simpson",avatar:"statics/avatars/collection/Marge_Simpson.png"},{label:"Marie",value:"Marie",avatar:"statics/avatars/collection/Marie.png"},{label:"Marilyn Monroe",value:"Marilyn_Monroe",avatar:"statics/avatars/collection/Marilyn_Monroe.png"},{label:"Messi",value:"Messi",avatar:"statics/avatars/collection/Messi.png"},{label:"Michael Jackson",value:"Michael_Jackson",avatar:"statics/avatars/collection/Michael_Jackson.png"},{label:"Mondtor01",value:"Mondtor01",avatar:"statics/avatars/collection/Mondtor01.png"},{label:"Mondtor02",value:"Mondtor02",avatar:"statics/avatars/collection/Mondtor02.png"},{label:"Mr Beans Teddy",value:"Mr_Beans_Teddy",avatar:"statics/avatars/collection/Mr_Beans_Teddy.png"},{label:"Mr Burns",value:"Mr_Burns",avatar:"statics/avatars/collection/Mr_Burns.png"},{label:"Ms Wicket",value:"Ms_Wicket",avatar:"statics/avatars/collection/Ms_Wicket.png"},{label:"Pelé",value:"Pelé",avatar:"statics/avatars/collection/Pelé.png"},{label:"Peppermint Patty",value:"Peppermint_Patty",avatar:"statics/avatars/collection/Peppermint_Patty.png"},{label:"Pile Of Poo",value:"Pile_Of_Poo",avatar:"statics/avatars/collection/Pile_Of_Poo.png"},{label:"Sally",value:"Sally",avatar:"statics/avatars/collection/Sally.png"},{label:"Santa",value:"Santa",avatar:"statics/avatars/collection/Santa.png"},{label:"Sea Calf",value:"Sea_Calf",avatar:"statics/avatars/collection/Sea_Calf.png"},{label:"Snoop Dogg",value:"Snoop_Dogg",avatar:"statics/avatars/collection/Snoop_Dogg.png"},{label:"Stan Marsh",value:"Stan_Marsh",avatar:"statics/avatars/collection/Stan_Marsh.png"},{label:"Sumo",value:"Sumo",avatar:"statics/avatars/collection/Sumo.png"},{label:"Super Mario",value:"Super_Mario",avatar:"statics/avatars/collection/Super_Mario.png"},{label:"Tom",value:"Tom",avatar:"statics/avatars/collection/Tom.png"},{label:"Tom Kid",value:"Tom_Kid",avatar:"statics/avatars/collection/Tom_Kid.png"},{label:"Tweety",value:"Tweety",avatar:"statics/avatars/collection/Tweety.png"},{label:"Woodstock",value:"Woodstock",avatar:"statics/avatars/collection/Woodstock.png"}]},4749:(e,a,t)=>{t.r(a),t.d(a,{default:()=>le});var l=t(1758),s=t(8790);const n=e=>((0,l.Qi)("data-v-1b7af015"),e=e(),(0,l.jt)(),e),i={class:"q-pa-md q-gutter-sm"},r=n((()=>(0,l.Lk)("div",{class:"text-h6"},"Ich möchte einen Code!",-1))),o=n((()=>(0,l.Lk)("div",{class:"text-subtitle2"},"Sende mir bitte einen kostenlosen Code, um mit meiner Spieltagsplanung zu starten!",-1))),u=n((()=>(0,l.Lk)("div",{class:"text-subtitle3"},'Nachdem du auf den "OK"-Button geklickt hast, solltest du sofort eine E-Mail erhalten. Sollte dies nicht der Fall ist, schreib uns bitte eine E-Mail an aufgehtsscf@gmail.com',-1))),c={class:"q-pa-md q-gutter-sm"},g=n((()=>(0,l.Lk)("div",{class:"text-h6"},"Ich habe einen Code!",-1))),b=n((()=>(0,l.Lk)("div",{class:"text-subtitle3"},"Ich besitze bereits einen Code.",-1))),d=n((()=>(0,l.Lk)("div",{class:"text-subtitle2"},"Wir verwenden Cookies",-1))),m={class:"q-pa-md row items-start q-gutter-md"},v=n((()=>(0,l.Lk)("div",{class:"text-overline"},"Plan the Game",-1))),_=n((()=>(0,l.Lk)("div",{class:"text-h5 q-mt-sm q-mb-xs"},"Die App zur Spieltagsplanung für deinen SCF",-1))),p=n((()=>(0,l.Lk)("div",{class:"text-caption text-grey"}," Spieltag einfach und effizient planen. ",-1))),h={class:"q-pa-md q-gutter-sm"},f={class:"row justify-center"},k={class:"q-pa-md q-gutter-sm"},F={class:"row justify-center"},C={class:"q-pa-md row items-start q-gutter-md"},S=n((()=>(0,l.Lk)("div",{class:"text-overline"},"Plan the Game",-1))),y=n((()=>(0,l.Lk)("div",{class:"text-h5 q-mt-sm q-mb-xs"},"Was kann diese App?",-1))),M=n((()=>(0,l.Lk)("div",{class:"text-caption text-grey"}," Deine Planung immer im Blick. ",-1)));function A(e,a,t,n,A,L){const x=(0,l.g2)("q-card-section"),V=(0,l.g2)("q-input"),B=(0,l.g2)("q-separator"),q=(0,l.g2)("q-btn"),I=(0,l.g2)("q-card-actions"),T=(0,l.g2)("q-card"),H=(0,l.g2)("q-dialog"),W=(0,l.g2)("q-icon"),E=(0,l.g2)("q-img"),K=(0,l.g2)("q-video"),w=(0,l.g2)("q-carousel-slide"),P=(0,l.g2)("q-carousel"),z=(0,l.g2)("q-btn-toggle"),D=(0,l.g2)("q-item-section"),R=(0,l.g2)("q-item-label"),G=(0,l.g2)("q-item"),O=(0,l.g2)("q-list"),J=(0,l.g2)("q-page"),N=(0,l.gN)("close-popup");return(0,l.uX)(),(0,l.Wv)(J,null,{default:(0,l.k6)((()=>[(0,l.Lk)("div",i,[(0,l.bF)(H,{modelValue:n.codeRequest,"onUpdate:modelValue":a[4]||(a[4]=e=>n.codeRequest=e),persistent:""},{default:(0,l.k6)((()=>[(0,l.bF)(T,{style:{"max-width":"350px"}},{default:(0,l.k6)((()=>[(0,l.bF)(x,null,{default:(0,l.k6)((()=>[r,o])),_:1}),(0,l.bF)(x,{class:"q-pt-none"},{default:(0,l.k6)((()=>[(0,l.bF)(V,{filled:"",dense:"",modelValue:n.txtFanClubName,"onUpdate:modelValue":a[0]||(a[0]=e=>n.txtFanClubName=e),autofocus:"",label:"Fanclub *"},null,8,["modelValue"])])),_:1}),(0,l.bF)(x,{class:"q-pt-none"},{default:(0,l.k6)((()=>[(0,l.bF)(V,{filled:"",dense:"",modelValue:n.txtFanClubContactPerson,"onUpdate:modelValue":a[1]||(a[1]=e=>n.txtFanClubContactPerson=e),label:"Kontaktperson *"},null,8,["modelValue"])])),_:1}),(0,l.bF)(x,{class:"q-pt-none"},{default:(0,l.k6)((()=>[(0,l.bF)(V,{filled:"",dense:"",modelValue:n.txtFanClubEmailAddress,"onUpdate:modelValue":a[2]||(a[2]=e=>n.txtFanClubEmailAddress=e),label:"E-Mail-Adresse *",rules:[e=>L.validateEmail(e)||"Must be a valid email."]},null,8,["modelValue","rules"])])),_:1}),(0,l.bF)(x,null,{default:(0,l.k6)((()=>[u])),_:1}),(0,l.bF)(B),(0,l.bF)(I,{class:"text-primary",align:"right"},{default:(0,l.k6)((()=>[(0,l.bo)((0,l.bF)(q,{label:"Abbrechen"},null,512),[[N]]),(0,l.bo)((0,l.bF)(q,{label:"Ok",onClick:a[3]||(a[3]=e=>L.sendCodeRequest(n.txtFanClubName,n.txtFanClubContactPerson,n.txtFanClubEmailAddress)),disable:""===n.txtFanClubName||""===n.txtFanClubContactPerson||!L.validateEmail(n.txtFanClubEmailAddress)},null,8,["disable"]),[[N]])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,l.Lk)("div",c,[(0,l.bF)(H,{modelValue:n.enterCode,"onUpdate:modelValue":a[7]||(a[7]=e=>n.enterCode=e),persistent:""},{default:(0,l.k6)((()=>[(0,l.bF)(T,{style:{"max-width":"350px"}},{default:(0,l.k6)((()=>[(0,l.bF)(x,null,{default:(0,l.k6)((()=>[g,b])),_:1}),(0,l.bF)(x,{class:"q-pt-none"},{default:(0,l.k6)((()=>[(0,l.bF)(V,{color:"red","bg-color":"red","label-color":"black",filled:"",modelValue:n.txtApplicationCode,"onUpdate:modelValue":a[5]||(a[5]=e=>n.txtApplicationCode=e),label:"Code hier eingeben"},{append:(0,l.k6)((()=>[(0,l.bF)(W,{name:"qr_code_2"})])),_:1},8,["modelValue"])])),_:1}),(0,l.bF)(x,null,{default:(0,l.k6)((()=>[d])),_:1}),(0,l.bF)(x,{class:"q-pt-none"},{default:(0,l.k6)((()=>[(0,l.eW)((0,s.v_)(n.cookieText1),1)])),_:1}),(0,l.bF)(x,{class:"q-pt-none"},{default:(0,l.k6)((()=>[(0,l.eW)((0,s.v_)(n.cookieText2),1)])),_:1}),(0,l.bF)(x,{class:"q-pt-none"},{default:(0,l.k6)((()=>[(0,l.eW)((0,s.v_)(n.cookieText3),1)])),_:1}),(0,l.bF)(B),(0,l.bF)(I,{class:"text-primary",align:"right"},{default:(0,l.k6)((()=>[(0,l.bo)((0,l.bF)(q,{label:"Abbrechen"},null,512),[[N]]),(0,l.bo)((0,l.bF)(q,{label:"Ok",onClick:a[6]||(a[6]=e=>L.getTenant(n.txtApplicationCode,!0)),disable:""===n.txtApplicationCode},null,8,["disable"]),[[N]])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,l.Lk)("div",m,[(0,l.bF)(T,{class:"my-card",flat:"",bordered:""},{default:(0,l.k6)((()=>[(0,l.bF)(x,{horizontal:""},{default:(0,l.k6)((()=>[(0,l.bF)(x,{class:"q-pt-xs"},{default:(0,l.k6)((()=>[v,_,p])),_:1}),(0,l.bF)(x,{class:"col-5 flex flex-center"},{default:(0,l.k6)((()=>[(0,l.bF)(E,{class:"rounded-borders",src:"statics/images/Home.png"})])),_:1})])),_:1}),(0,l.bF)(B),(0,l.bF)(I,{align:"center"},{default:(0,l.k6)((()=>[(0,l.bF)(q,{class:"glossy",rounded:"",color:"red",label:"Jetzt starten",onClick:a[8]||(a[8]=e=>n.codeRequest=!0)}),(0,l.bF)(q,{class:"glossy",rounded:"",color:"red",label:"Ich habe einen Code!",onClick:a[9]||(a[9]=e=>n.enterCode=!0)})])),_:1})])),_:1})]),(0,l.Lk)("div",h,[(0,l.bF)(P,{animated:"",modelValue:n.slide,"onUpdate:modelValue":a[10]||(a[10]=e=>n.slide=e),infinite:""},{default:(0,l.k6)((()=>[(0,l.bF)(w,{name:"spiel_erfassen"},{default:(0,l.k6)((()=>[(0,l.bF)(K,{class:"absolute-full",src:"https://youtube.com/embed/NRDy9V7r8SQ"})])),_:1}),(0,l.bF)(w,{name:"mitglied_erfassen"},{default:(0,l.k6)((()=>[(0,l.bF)(K,{class:"absolute-full",src:"https://youtube.com/embed/zpF-cfnZM-0"})])),_:1}),(0,l.bF)(w,{name:"mitglied_updaten"},{default:(0,l.k6)((()=>[(0,l.bF)(K,{class:"absolute-full",src:"https://youtube.com/embed/6uvxhCYOuCA"})])),_:1}),(0,l.bF)(w,{name:"teilnahme_erfassen"},{default:(0,l.k6)((()=>[(0,l.bF)(K,{class:"absolute-full",src:"https://youtube.com/embed/_Dcj6o9XJnA"})])),_:1})])),_:1},8,["modelValue"]),(0,l.Lk)("div",f,[(0,l.bF)(z,{glossy:"",rounded:"",color:"red",modelValue:n.slide,"onUpdate:modelValue":a[11]||(a[11]=e=>n.slide=e),options:[{label:"Spiel erfassen",value:"spiel_erfassen"},{label:"Mitglied erfassen",value:"mitglied_erfassen"},{label:"Mitglied updaten",value:"mitglied_updaten"},{label:"Teilnahme erfassen",value:"teilnahme_erfassen"}]},null,8,["modelValue"])])]),(0,l.Lk)("div",k,[(0,l.bF)(P,{animated:"",modelValue:n.slide2,"onUpdate:modelValue":a[12]||(a[12]=e=>n.slide2=e),infinite:""},{default:(0,l.k6)((()=>[(0,l.bF)(w,{name:"karteninhaber_erfassen"},{default:(0,l.k6)((()=>[(0,l.bF)(K,{class:"absolute-full",src:"https://youtube.com/embed/YFReZbD2zOo"})])),_:1}),(0,l.bF)(w,{name:"karte_zuweisen"},{default:(0,l.k6)((()=>[(0,l.bF)(K,{class:"absolute-full",src:"https://youtube.com/embed/7XcQ7sNXlIA"})])),_:1}),(0,l.bF)(w,{name:"spielübersicht_teilen"},{default:(0,l.k6)((()=>[(0,l.bF)(K,{class:"absolute-full",src:"https://youtube.com/embed/khJNCVcUwkQ"})])),_:1}),(0,l.bF)(w,{name:"besuchte_spiele_anzeigen"},{default:(0,l.k6)((()=>[(0,l.bF)(K,{class:"absolute-full",src:"https://youtube.com/embed/e1Eui0RN5lg"})])),_:1})])),_:1},8,["modelValue"]),(0,l.Lk)("div",F,[(0,l.bF)(z,{glossy:"",rounded:"",color:"red",modelValue:n.slide2,"onUpdate:modelValue":a[13]||(a[13]=e=>n.slide2=e),options:[{label:"Karteninhaber erfassen",value:"karteninhaber_erfassen"},{label:"Karte zuweisen",value:"karte_zuweisen"},{label:"Spielübersicht teilen",value:"spielübersicht_teilen"},{label:"Besuchte Spiele pro Teilnehmer anzeigen",value:"besuchte_spiele_anzeigen"}]},null,8,["modelValue"])])]),(0,l.Lk)("div",C,[(0,l.bF)(T,{class:"my-card",flat:"",bordered:""},{default:(0,l.k6)((()=>[(0,l.bF)(x,{horizontal:""},{default:(0,l.k6)((()=>[(0,l.bF)(x,{class:"q-pt-xs"},{default:(0,l.k6)((()=>[S,y,M])),_:1}),(0,l.bF)(x,{class:"col-5 flex flex-center"},{default:(0,l.k6)((()=>[(0,l.bF)(E,{class:"rounded-borders",src:"statics/images/AufGehtsSCF2.png"})])),_:1})])),_:1}),(0,l.bF)(O,null,{default:(0,l.k6)((()=>[(0,l.bF)(G,null,{default:(0,l.k6)((()=>[(0,l.bF)(D,{avatar:""},{default:(0,l.k6)((()=>[(0,l.bF)(W,{color:"yellow",name:"emoji_people"})])),_:1}),(0,l.bF)(D,null,{default:(0,l.k6)((()=>[(0,l.bF)(R,{class:"text-subtitle2"},{default:(0,l.k6)((()=>[(0,l.eW)("Teilnehmer verwalten")])),_:1}),(0,l.bF)(R,null,{default:(0,l.k6)((()=>[(0,l.eW)("Hier kannst du dich für ein bestimmtes Spiel eintragen. Du kannst angeben, ob du dabei bist oder ob du ein Ticket brauchst/freigibst. Du hast stets den Überblick über die aktuellen Spiele.")])),_:1})])),_:1})])),_:1}),(0,l.bF)(G,null,{default:(0,l.k6)((()=>[(0,l.bF)(D,{avatar:""},{default:(0,l.k6)((()=>[(0,l.bF)(W,{color:"blue",name:"sports_volleyball"})])),_:1}),(0,l.bF)(D,null,{default:(0,l.k6)((()=>[(0,l.bF)(R,{class:"text-subtitle2"},{default:(0,l.k6)((()=>[(0,l.eW)("Spiele verwalten")])),_:1}),(0,l.bF)(R,null,{default:(0,l.k6)((()=>[(0,l.eW)("Hier kannst du ein bereits terminierten Spiel erfassen und publizieren. Heim- und Auswärtsspiele können erfasst werden.")])),_:1})])),_:1})])),_:1}),(0,l.bF)(G,null,{default:(0,l.k6)((()=>[(0,l.bF)(D,{avatar:""},{default:(0,l.k6)((()=>[(0,l.bF)(W,{color:"red",name:"person"})])),_:1}),(0,l.bF)(D,null,{default:(0,l.k6)((()=>[(0,l.bF)(R,{class:"text-subtitle2"},{default:(0,l.k6)((()=>[(0,l.eW)("Mitglieder verwalten")])),_:1}),(0,l.bF)(R,null,{default:(0,l.k6)((()=>[(0,l.eW)("Hier kannst du als Mitglied eintragen. Es stehen dir jede Menge coole Avatare zur Verfügung.")])),_:1})])),_:1})])),_:1}),(0,l.bF)(G,null,{default:(0,l.k6)((()=>[(0,l.bF)(D,{avatar:""},{default:(0,l.k6)((()=>[(0,l.bF)(W,{color:"green",name:"credit_card"})])),_:1}),(0,l.bF)(D,null,{default:(0,l.k6)((()=>[(0,l.bF)(R,{class:"text-subtitle2"},{default:(0,l.k6)((()=>[(0,l.eW)("Karten verwalten. Wer hat meine Karte?")])),_:1}),(0,l.bF)(R,null,{default:(0,l.k6)((()=>[(0,l.eW)("Hier kannst du angeben, wer aktuell deine Karte hat. Diese Information fließt in die Spielübersicht ein.")])),_:1})])),_:1})])),_:1}),(0,l.bF)(G,null,{default:(0,l.k6)((()=>[(0,l.bF)(D,{avatar:""},{default:(0,l.k6)((()=>[(0,l.bF)(W,{color:"teal",name:"add"})])),_:1}),(0,l.bF)(D,null,{default:(0,l.k6)((()=>[(0,l.bF)(R,{class:"text-subtitle2"},{default:(0,l.k6)((()=>[(0,l.eW)("... und vieles mehr")])),_:1}),(0,l.bF)(R,null,{default:(0,l.k6)((()=>[(0,l.eW)("Wer ist der Heimspielkönig? Welches Spiel wurde am meisten besucht? Diese und andere Statistiken sind jederzeit sichtbar.")])),_:1})])),_:1})])),_:1})])),_:1}),(0,l.bF)(B),(0,l.bF)(I,{align:"center"},{default:(0,l.k6)((()=>[(0,l.bF)(q,{class:"glossy",rounded:"",color:"red",label:"Jetzt starten",onClick:a[14]||(a[14]=e=>n.codeRequest=!0)}),(0,l.bF)(q,{class:"glossy",rounded:"",color:"red",label:"Ich habe einen Code!",onClick:a[15]||(a[15]=e=>n.enterCode=!0)})])),_:1})])),_:1})]),(0,l.bF)(E,{src:"statics/images/AufGehtsSCF.png",class:"header-image2 absolute-top"})])),_:1})}t(4748);var L=t(4907),x=t(4127),V=t(586),B=t(8734);const q=(0,B.KR)("");let I;const T={name:"HomePage",setup(){const e=(0,L.A)();return{slide:(0,B.KR)("spiel_erfassen"),slide2:(0,B.KR)("karteninhaber_erfassen"),txtFanClubName:(0,B.KR)(""),txtFanClubContactPerson:(0,B.KR)(""),txtFanClubEmailAddress:(0,B.KR)(""),txtApplicationCode:(0,B.KR)(""),cookieText1:"Damit du deinen Zugangscode nicht jedes Mal neu eingeben musst, speichern wir diese und andere von deinem Administrator festgelegte Informationen als Cookies.",cookieText2:"Durch die Nutzung dieser Website erklärst du dich damit einverstanden, dass wir Cookies verwenden.",cookieText3:'Klick auf "OK" klicken, um den Aktivierungscode zu überprüfen.',onCodeIsValid(){e.notify({type:"positive",message:"Der eingegebene Code ist gültig!"})},onCodeIsInvalid(){e.notify({type:"negative",message:"Der eingegebene Code ist ungültig!"})},onCodeNotFound(){e.notify({type:"negative",message:"Der eingegebene Code wurde nicht gefunden!"})},onCodeRequestWasSent(){e.notify({type:"positive",message:"Deine Code-Anfrage wurde gesendet!"})},codeRequest:(0,B.KR)(!1),enterCode:(0,B.KR)(!1)}},data(){return{getCookie:x.Ri,getAdminCode:x.Jf,URLMatchManagementAPI:x.CW,setCookie:x.TV,serviceID:x.fr,templateID:x.UE,userID:x.vm,FromName:x.qt}},computed:{},mounted(){this.setVariables().then((()=>{this.getTenant(q.value,!1)}))},methods:{setVariables(){return q.value=(0,x.Jf)((0,x.Ri)("applicationCode")),I=x.CW+"/Tenant",Promise.resolve()},validateEmail(e){return/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(e)},sendCodeRequest(e,a,t){try{V.Ay.send(x.fr,this.templateID,{from_name:this.FromName,to_email:t,contactperson:a,fanclub:e},this.userID)}catch(l){console.log({error:l})}this.onCodeRequestWasSent()},getTenant(e,a){let t="",l="";if(a){if(12===e.length){if(e.indexOf("_")>0){const a=e.split("_");8===a[0].length&&parseInt(a[1])>=329&&(l=e,t=a[1].substring(0,1)+a[0].substring(0,4)+a[1].substring(1,2)+a[0].substring(4,8)+a[1].substring(2,a[1].length))}}else 11===e.length&&(t=e,l=e.substring(1,5)+e.substring(6,10)+"_"+e.substring(0,1)+e.substring(5,6)+e.substring(10,e.length));""===t&&""===l?this.onCodeIsInvalid():this.$axios.get(`${I}/code/${t}`).then((a=>{if(200!==a.status)this.onCodeIsInvalid();else{let s=!1;a.data.adminCode===e&&(s=!0),a.data.adminCode===t||a.data.userCode===l?this.setCookie(s,e):this.onCodeNotFound(),this.onCodeIsValid(),this.refreshPage()}})).catch((e=>{this.onCodeIsInvalid(),console.log(e)}))}else"HOME"!==this.getCookie("applicationCode")&&this.$router.push("/participant")},async refreshPage(){const e=e=>new Promise((a=>setTimeout(a,e)));await e(3e3),this.$router.push("/participant"),await e(5e3)}}};var H=t(2807),W=t(7716),E=t(2156),K=t(3316),w=t(4189),P=t(9270),z=t(386),D=t(2669),R=t(6384),G=t(492),O=t(330),J=t(3454),N=t(8951),Q=t(5382),U=t(8975),j=t(3999),Z=t(124),X=t(5173),Y=t(3796),$=t(8672),ee=t(8582),ae=t.n(ee);const te=(0,H.A)(T,[["render",A],["__scopeId","data-v-1b7af015"]]),le=te;ae()(T,"components",{QPage:W.A,QDialog:E.A,QCard:K.A,QCardSection:w.A,QInput:P.A,QSeparator:z.A,QCardActions:D.A,QBtn:R.A,QIcon:G.A,QImg:O.A,QCarousel:J.A,QCarouselSlide:N.A,QVideo:Q.A,QBtnToggle:U.A,QList:j.A,QItem:Z.A,QItemSection:X.A,QItemLabel:Y.A}),ae()(T,"directives",{ClosePopup:$.A})}}]);