"use strict";(self["webpackChunkreal_estate"]=self["webpackChunkreal_estate"]||[]).push([[758],{758:function(e,t,s){s.r(t),s.d(t,{default:function(){return I}});var r=s(641),a=s(33),l=s(646),n=s(60);const i=(0,r.Fv)('<div class="w-full bg-center bg-cover mb-20" style="background-image:url(https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/real-estate-blogs.jpg?width=595&amp;height=400&amp;name=real-estate-blogs.jpg);"><div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12"><div class="text-center"><div class="container px-4 mx-auto"><div class="max-w-4xl mx-auto text-center"><h2 class="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">Blog</h2></div></div></div></div></div>',1),o={class:"flex flex-wrap justify-center container mx-auto"},u=["data"],c={class:"content-center mx-auto rounded"},g={class:"mx-5 border rounded-lg w-96 h-3/4 hover:shadow-gray"},d=["src"],m={class:"h-48 px-4 pt-1"},x={class:"flex justify-between"},v={class:"text-md font-semibold"},f={class:"flex justify-between items-center"},b={class:"flex text-xs items-center"},h=["src"],p={class:"text-xs"},k={class:"block pt-2"},y=(0,r.Lk)("hr",{class:"h-px bg-gray-300 border-0 dark:bg-gray-700"},null,-1),L={class:"flex justify-between items-center"},P={class:"flex text-xs items-center"},w=(0,r.Lk)("img",{src:l,class:"w-8 px-2",alt:"#"},null,-1),_=(0,r.Lk)("img",{src:n,class:"w-8 px-2",alt:"#"},null,-1),j={class:"flex justify-end text-end"},W={class:"my-4 flex items-center justify-center"},B={class:"flex flex-wrap justify-center"},X={type:"button",class:"py-1 px-2 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"};function C(e,t,s,l,n,C){const F=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)(r.FK,null,[i,(0,r.Lk)("div",o,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(C.paginatedBlogs,(t=>((0,r.uX)(),(0,r.CE)("div",{key:t.id,data:e.property,class:"w-full sm:w-1/2 lg:w-1/3 p-4 mb-7 flex justify-center"},[(0,r.bF)(F,{to:"/blog/"+t.id,style:{"text-decoration":"none"}},{default:(0,r.k6)((()=>[(0,r.Lk)("div",c,[(0,r.Lk)("div",g,[(0,r.Lk)("img",{src:t.image,class:"object-cover h-48 w-96 rounded-t-lg",alt:""},null,8,d),(0,r.Lk)("div",m,[(0,r.Lk)("div",x,[(0,r.Lk)("h3",v,(0,a.v_)(t.title),1),(0,r.Lk)("small",null,(0,a.v_)(C.paginatedBlogs.excerpt),1)]),(0,r.Lk)("div",f,[(0,r.Lk)("div",b,[(0,r.Lk)("img",{src:t.author.profile_image,class:"w-8 h-8 rounded-full mr-0.5",alt:"#"},null,8,h),(0,r.eW)(" "+(0,a.v_)(t.author.name),1)]),(0,r.Lk)("div",p," Published: "+(0,a.v_)(t.date_published),1)]),(0,r.Lk)("div",k,[y,(0,r.Lk)("p",null,(0,a.v_)(t.excerpt),1)]),(0,r.Lk)("div",L,[(0,r.Lk)("div",P,[w,(0,r.eW)(" "+(0,a.v_)(t.like)+" ",1),_,(0,r.eW)(" "+(0,a.v_)(t.share),1)]),(0,r.Lk)("div",j,[(0,r.Lk)("small",null,(0,a.v_)(t.category),1)])])])])])])),_:2},1032,["to"])],8,u)))),128))]),(0,r.Lk)("div",W,[C.previousPage?((0,r.uX)(),(0,r.Wv)(F,{key:0,to:{name:"Blog",query:{page:C.previousPage}},class:"mx-3 text-sm font-semibold"},{default:(0,r.k6)((()=>[(0,r.eW)(" Previous ")])),_:1},8,["to"])):(0,r.Q3)("",!0),(0,r.Lk)("div",B,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(C.pageNumbers,(e=>((0,r.uX)(),(0,r.Wv)(F,{key:e,to:{name:"Blog",query:{page:e}},class:"text-sm font-semibold"},{default:(0,r.k6)((()=>[(0,r.Lk)("button",X,(0,a.v_)(e),1)])),_:2},1032,["to"])))),128))]),C.nextPage?((0,r.uX)(),(0,r.Wv)(F,{key:1,to:{name:"Blog",query:{page:C.nextPage}},class:"ml-3"},{default:(0,r.k6)((()=>[(0,r.eW)(" Next ")])),_:1},8,["to"])):(0,r.Q3)("",!0)])],64)}var F=s(823),q={data(){return{blogs:[],itemsPerPage:6}},computed:{currentPage(){const e=this.$route.query.page||"1";return Number.parseInt(e)},previousPage(){const e=this.currentPage-1,t=1;return e>=t?e:void 0},nextPage(){const e=this.currentPage+1,t=Math.ceil(this.blogs.length/this.itemsPerPage);return e<=t?e:void 0},pageNumbers(){return Array.from({length:this.totalPages},((e,t)=>t+1))},totalPages(){return Math.ceil(this.blogs.length/this.itemsPerPage)},paginatedBlogs(){const e=(this.currentPage-1)*this.itemsPerPage,t=e+this.itemsPerPage;return this.blogs.slice(e,t)}},created(){this.blogs=F.blog}},E=s(262);const N=(0,E.A)(q,[["render",C]]);var I=N},646:function(e,t,s){e.exports=s.p+"img/like.1564c972.svg"},60:function(e,t,s){e.exports=s.p+"img/share.dd55498f.svg"}}]);