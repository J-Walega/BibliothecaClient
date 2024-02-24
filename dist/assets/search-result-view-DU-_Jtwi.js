import{d as f,r as p,a7 as m,v as c,w as a,E as y,a4 as k,a8 as w,o as t,b as s,l as h,i as V,I as v,k as _,c as x,a9 as C,f as d,F as g,X as q,Y as S}from"./index-DvqUJNAK.js";const T=f({__name:"search-result-view",async setup(B){let e,r;const i=q(()=>S(()=>import("./book-search-view-CF7CKkKq.js"),__vite__mapDeps([0,1,2]))),n=k(),o=p();o.value=n.query.q;const l=([e,r]=m(()=>w(n.query.q.toString())),e=await e,r(),e);return console.log(l.data.data),(E,A)=>(t(),c(y,null,{default:a(()=>[s(_,null,{default:a(()=>[s(h,null,{default:a(()=>[V("Wynik wyszukiwania dla: "+v(o.value),1)]),_:1})]),_:1}),(t(!0),x(g,null,C(d(l).data.data,u=>(t(),c(_,{key:u.id},{default:a(()=>[s(d(i),{book:u},null,8,["book"])]),_:2},1024))),128))]),_:1}))}});export{T as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/book-search-view-CF7CKkKq.js","assets/index-DvqUJNAK.js","assets/index-BTNsCk_s.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
