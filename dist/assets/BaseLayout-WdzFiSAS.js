import{d as v,r as k,u as P,a as L,s as S,o as n,c as h,b as a,w as e,V as q,e as B,f as d,g as z,h as u,i as s,j as N,k as W,l as D,m as E,n as F,p as M,q as U,t as I,v as i,x as f,y as m,z as R,A as H,F as J,_ as Q,B as X,C as Z,D as G}from"./index-CKF_-5Yi.js";const K="/BibliothecaClient/assets/logo_edited-B_5J5BqX.png",O={class:"d-flex justify-space-around"},Y=v({__name:"AppBar",setup(_){var y;const p=k(""),l=P(),V=k(!1),r=L();S(r),(y=r.user)==null||y.user.id;const g=k(!1);function w(C){V.value=!1,l.push({path:"/search",query:{q:C}})}function $(){l.push("/")}function T(){l.push("/employee")}function A(){l.push("/admin")}function b(){l.push("/profile")}function j(){r.logout(),g.value=!0}return(C,t)=>(n(),h(J,null,[a(R,{color:"primary"},{default:e(()=>[a(q,{class:"mx-auto"},{default:e(()=>[B("a",{onClick:t[0]||(t[0]=o=>d(l).push("/"))},[a(z,{src:K,width:"130"})])]),_:1}),a(u,{class:"bg-red-lighten-5 me-6",onClick:t[1]||(t[1]=o=>$())},{default:e(()=>[s(" Strona główna ")]),_:1}),a(u,{"prepend-icon":"mdi-magnify",class:"bg-red-lighten-5 me-6"},{default:e(()=>[s("Szukaj "),a(N,{modelValue:V.value,"onUpdate:modelValue":t[4]||(t[4]=o=>V.value=o),activator:"parent",width:"500px"},{default:e(()=>[a(W,null,{default:e(()=>[a(D,{"align-center":""},{default:e(()=>[s(" Wyszukiwarka ")]),_:1}),a(E,{modelValue:p.value,"onUpdate:modelValue":t[2]||(t[2]=o=>p.value=o)},null,8,["modelValue"]),a(F,null,{default:e(()=>[a(u,{color:"primary",block:"",onClick:t[3]||(t[3]=o=>w(p.value))},{default:e(()=>[s("Wyszukaj")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),B("div",O,[a(M,null,{activator:e(({props:o})=>[a(u,U({class:"me-6",color:"gray",icon:"mdi-account-circle"},o),null,16)]),default:e(()=>[a(I,null,{default:e(()=>{var o,x;return[d(r).user?m("",!0):(n(),i(f,{key:0},{default:e(()=>[a(u,{onClick:t[5]||(t[5]=c=>d(l).push("/login"))},{default:e(()=>[s(" Zaloguj się ")]),_:1})]),_:1})),d(r).user?(n(),i(f,{key:1},{default:e(()=>[a(u,{onClick:t[6]||(t[6]=c=>b())},{default:e(()=>[s("Mój profil")]),_:1})]),_:1})):m("",!0),(o=d(r).user)!=null&&o.user.roles.includes("Employee")?(n(),i(f,{key:2},{default:e(()=>[a(u,{onClick:t[7]||(t[7]=c=>T())},{default:e(()=>[s("Panel pracownika")]),_:1})]),_:1})):m("",!0),(x=d(r).user)!=null&&x.user.roles.includes("Administrator")?(n(),i(f,{key:3},{default:e(()=>[a(u,{onClick:t[8]||(t[8]=c=>A())},{default:e(()=>[s(" Panel administratora ")]),_:1})]),_:1})):m("",!0),d(r).user?(n(),i(f,{key:4},{default:e(()=>[a(u,{block:"",onClick:t[9]||(t[9]=c=>j())},{default:e(()=>[s(" Wyloguj się ")]),_:1})]),_:1})):m("",!0)]}),_:1})]),_:1})])]),_:1}),a(H,{timeout:2e3,modelValue:g.value,"onUpdate:modelValue":t[10]||(t[10]=o=>g.value=o),color:"success"},{default:e(()=>[s(" Wylogowano pomyślnie ")]),_:1},8,["modelValue"])],64))}}),ee=v({__name:"BaseLayout-app",setup(_){return(p,l)=>(n(),i(Y))}}),ae={};function te(_,p){const l=X("router-view");return n(),i(Z,{class:"mx-auto"},{default:e(()=>[a(l)]),_:1})}const oe=Q(ae,[["render",te]]),se=v({__name:"BaseLayout",setup(_){return(p,l)=>(n(),i(G,null,{default:e(()=>[a(ee),a(oe)]),_:1}))}});export{se as default};