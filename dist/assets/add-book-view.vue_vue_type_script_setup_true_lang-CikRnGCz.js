import{d as S,r as o,a as _,v as c,w as t,K as x,o as j,b as l,M as r,P as s,m as d,Z as V,$ as D,a0 as N,j as h,h as p,q as T,k as $,N as U,f as F,a1 as K,i as L,O as M,a2 as q,a3 as C,a4 as z,a5 as G}from"./index-CKF_-5Yi.js";const W=S({__name:"add-book-view",setup(O){const f=o(""),v=o(),b=o(),k=o(),w=o(),g=o(),A=o();o();const i=_(),m=o(!1),y=o(!1);o(!1),o({name:""});const n=o({name:"",surname:""});o({name:""});async function B(){let u=await z(i.user.token);console.log(u);let e=u.data.data;m.value=!1,k.value=e}async function I(u){let e=await q(i.user.token,u);console.log(e)}async function P(){let u=await G(i.user.token);console.log(u);let e=u.data.data;y.value=!1,w.value=e}return(u,e)=>(j(),c(x,null,{default:t(()=>[l(U,{onSubmit:e[10]||(e[10]=M(()=>{},["prevent"]))},{default:t(()=>[l(r,null,{default:t(()=>[l(s,{cols:"12"},{default:t(()=>[l(d,{modelValue:f.value,"onUpdate:modelValue":e[0]||(e[0]=a=>f.value=a),label:"Tytuł książki"},null,8,["modelValue"])]),_:1}),l(s,{cols:"12"},{default:t(()=>[l(d,{modelValue:v.value,"onUpdate:modelValue":e[1]||(e[1]=a=>v.value=a),label:"Kod ISBN"},null,8,["modelValue"])]),_:1}),l(s,{cols:"12"},{default:t(()=>[l(V,{modelValue:b.value,"onUpdate:modelValue":e[2]||(e[2]=a=>b.value=a),items:k.value,label:"Autor","item-title":a=>a.name+" "+a.surname,"item-value":"id",chips:""},{"append-item":t(()=>[D(l(N,null,null,512),[[C,B]])]),_:1},8,["modelValue","items","item-title"]),l(h,{modelValue:m.value,"onUpdate:modelValue":e[6]||(e[6]=a=>m.value=a)},{activator:t(({props:a})=>[l(p,T(a,{text:"Dodaj nowego autora"}),null,16)]),default:t(()=>[l($,{title:"Dodaj autora"},{default:t(()=>[l(U,null,{default:t(()=>[l(x,null,{default:t(()=>[l(r,null,{default:t(()=>[l(s,null,{default:t(()=>[l(d,{modelValue:n.value.name,"onUpdate:modelValue":e[3]||(e[3]=a=>n.value.name=a),label:"Imię"},null,8,["modelValue"])]),_:1})]),_:1}),l(r,null,{default:t(()=>[l(s,null,{default:t(()=>[l(d,{modelValue:n.value.surname,"onUpdate:modelValue":e[4]||(e[4]=a=>n.value.surname=a),label:"Nazwisko"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),l(p,{text:"Dodaj",onClick:e[5]||(e[5]=a=>I(n.value))})]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(s,{cols:"12"},{default:t(()=>[l(V,{label:"Wydawca",modelValue:g.value,"onUpdate:modelValue":e[7]||(e[7]=a=>g.value=a),items:w.value,"item-title":a=>a.name,"item-value":"id"},{"append-item":t(()=>[D(l(N,null,null,512),[[C,P]])]),_:1},8,["modelValue","items","item-title"])]),_:1}),l(s,{cols:"12"},{default:t(()=>[l(V,{chips:"",label:"Gatunek",modelValue:A.value,"onUpdate:modelValue":e[8]||(e[8]=a=>A.value=a)},null,8,["modelValue"])]),_:1})]),_:1}),l(p,{type:"submit",block:"",class:"mx-2 px-2",onClick:e[9]||(e[9]=a=>F(K)())},{default:t(()=>[L(" Dodaj ")]),_:1})]),_:1})]),_:1}))}});export{W as _};
