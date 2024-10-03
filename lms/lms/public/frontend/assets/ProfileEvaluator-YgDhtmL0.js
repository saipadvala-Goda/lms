var R=Object.defineProperty;var P=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var M=(r,u,o)=>u in r?R(r,u,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[u]=o,B=(r,u)=>{for(var o in u||(u={}))G.call(u,o)&&M(r,o,u[o]);if(P)for(var o of P(u))L.call(u,o)&&M(r,o,u[o]);return r};import{d as W,s as q,r as E,a as H,k as _,j as J,x as V,y as S,C as n,J as c,I as l,K,L as Q,M as z,O as X,Q as Y,H as d,G as f,B as C,a9 as F,R as v,N}from"./frappe-ui-CfOnYHud.js";import{k as y,X as Z,P as ee,O as ae,I as te}from"./index-5_0ocoxz.js";const le={class:"mt-7 mb-20"},oe={class:"mb-4 text-lg font-semibold text-gray-900"},se={class:""},de={class:"grid grid-cols-3 md:grid-cols-4 gap-4 text-sm text-gray-700 mb-4"},ue={class:"grid grid-cols-3 md:grid-cols-4 gap-4 mb-4 group"},ne={class:"grid grid-cols-3 md:grid-cols-4 gap-4 mb-4"},re={class:"my-10"},ie={class:"mb-4 text-lg font-semibold text-gray-900"},me={class:"grid grid-cols-2 md:grid-cols-4 gap-4"},ce={class:"mb-4 text-lg font-semibold text-gray-900"},pe={key:0,class:"flex items-center bg-green-100 text-green-900 text-sm p-1 rounded-md mb-4 w-fit"},fe={__name:"ProfileEvaluator",props:{profile:{type:Object,required:!0}},setup(r){var x;const u=W("$user"),o=r;q(()=>{var e,a,p;((e=u.data)==null?void 0:e.name)!==((a=o.profile.data)==null?void 0:a.name)&&(window.location.href=`/user/${(p=o.profile.data)==null?void 0:p.username}`)});const k=E(0),g=E(null),b=E(null),s=H({day:"",start_time:"",end_time:""}),i=_({url:"lms.lms.api.get_evaluator_details",params:{evaluator:(x=o.profile.data)==null?void 0:x.name},auto:!0,onSuccess(e){e.slots.unavailable_from&&(g.value=e.slots.unavailable_from),e.slots.unavailable_to&&(b.value=e.slots.unavailable_to)}}),A=_({url:"frappe.client.insert",makeParams(e){var a;return{doc:B({doctype:"Evaluator Schedule",parent:(a=i.data)==null?void 0:a.slots.name,parentfield:"schedule",parenttype:"Course Evaluator"},s)}},onSuccess(){y("Success","Slot added successfully","check"),i.reload(),k.value=0,s.day="",s.start_time="",s.end_time=""},onError(e){var a;y("Error",((a=e.messages)==null?void 0:a[0])||e,"x")}}),j=_({url:"frappe.client.set_value",makeParams(e){return{doctype:"Evaluator Schedule",name:e.name,fieldname:e.field,value:e.value}},onSuccess(){y("Success","Availability updated successfully","check")},onError(e){var a;y("Error",((a=e.messages)==null?void 0:a[0])||e,"x")}}),D=_({url:"frappe.client.delete",makeParams(e){return{doctype:"Evaluator Schedule",name:e.name}},onSuccess(){y("Success","Slot deleted successfully","check"),i.reload()},onError(e){var a;y("Error",((a=e.messages)==null?void 0:a[0])||e,"x")}}),U=_({url:"frappe.client.set_value",makeParams(e){var a;return{doctype:"Course Evaluator",name:(a=i.data)==null?void 0:a.slots.name,fieldname:e.field,value:e.value}},onSuccess(){y("Success","Unavailability updated successfully","check")},onError(e){var a;y("Error",((a=e.messages)==null?void 0:a[0])||e,"x")}}),h=(e,a,p)=>{j.submit({name:e,field:a,value:p},{validate(){if(!p)return`Please enter a value for ${te(a)}`}})},w=()=>{!s.day||!s.start_time||!s.end_time||A.submit()},I=e=>{D.submit({name:e})},O=_({url:"frappe.integrations.doctype.google_calendar.google_calendar.authorize_access",makeParams(){var e;return{g_calendar:(e=i.data)==null?void 0:e.calendar,reauthorize:1}},onSuccess(e){window.open(e.url)}}),$=J(()=>[{label:"Monday",value:"Monday"},{label:"Tuesday",value:"Tuesday"},{label:"Wednesday",value:"Wednesday"},{label:"Thursday",value:"Thursday"},{label:"Friday",value:"Friday"},{label:"Saturday",value:"Saturday"},{label:"Sunday",value:"Sunday"}]);return(e,a)=>{var p,T;return V(),S("div",le,[n("h2",oe,c(e.__("My availability")),1),n("div",se,[n("div",de,[n("div",null,c(e.__("Day")),1),n("div",null,c(e.__("Start Time")),1),n("div",null,c(e.__("End Time")),1)]),l(i).data?(V(!0),S(K,{key:0},Q(l(i).data.slots.schedule,t=>(V(),S("div",ue,[d(l(v),{type:"select",options:$.value,modelValue:t.day,"onUpdate:modelValue":m=>t.day=m,onFocusout:f(m=>h(t.name,"day",t.day),["stop"])},null,8,["options","modelValue","onUpdate:modelValue","onFocusout"]),d(l(v),{type:"time",modelValue:t.start_time,"onUpdate:modelValue":m=>t.start_time=m,onFocusout:f(m=>h(t.name,"start_time",t.start_time),["stop"])},null,8,["modelValue","onUpdate:modelValue","onFocusout"]),d(l(v),{type:"time",modelValue:t.end_time,"onUpdate:modelValue":m=>t.end_time=m,onFocusout:f(m=>h(t.name,"end_time",t.end_time),["stop"])},null,8,["modelValue","onUpdate:modelValue","onFocusout"]),d(l(Z),{onClick:m=>I(t.name),class:"w-6 h-auto stroke-1.5 text-red-900 rounded-md cursor-pointer p-1 bg-red-100 hidden group-hover:block"},null,8,["onClick"])]))),256)):z("",!0),X(n("div",ne,[d(l(v),{type:"select",options:$.value,modelValue:s.day,"onUpdate:modelValue":a[0]||(a[0]=t=>s.day=t),onFocusout:a[1]||(a[1]=f(t=>w(),["stop"]))},null,8,["options","modelValue"]),d(l(v),{type:"time",modelValue:s.start_time,"onUpdate:modelValue":a[2]||(a[2]=t=>s.start_time=t),onFocusout:a[3]||(a[3]=f(t=>w(),["stop"]))},null,8,["modelValue"]),d(l(v),{type:"time",modelValue:s.end_time,"onUpdate:modelValue":a[4]||(a[4]=t=>s.end_time=t),onFocusout:a[5]||(a[5]=f(t=>w(),["stop"]))},null,8,["modelValue"])],512),[[Y,k.value]]),d(l(N),{onClick:a[6]||(a[6]=t=>k.value=1)},{prefix:C(()=>[d(l(ee),{class:"w-4 h-4 stroke-1.5 text-gray-700"})]),default:C(()=>[F(" "+c(e.__("Add Slot")),1)]),_:1})]),n("div",re,[n("h2",ie,c(e.__("I am unavailable")),1),n("div",me,[d(l(v),{type:"date",label:e.__("From"),modelValue:g.value,"onUpdate:modelValue":a[7]||(a[7]=t=>g.value=t),onBlur:a[8]||(a[8]=()=>{l(U).submit({field:"unavailable_from",value:g.value})})},null,8,["label","modelValue"]),d(l(v),{type:"date",label:e.__("To"),modelValue:b.value,"onUpdate:modelValue":a[9]||(a[9]=t=>b.value=t),onBlur:a[10]||(a[10]=()=>{l(U).submit({field:"unavailable_to",value:b.value})})},null,8,["label","modelValue"])])]),n("div",null,[n("h2",ce,c(e.__("My calendar")),1),(p=l(i).data)!=null&&p.calendar&&((T=l(i).data)!=null&&T.is_authorized)?(V(),S("div",pe,[d(l(ae),{class:"h-4 w-4 stroke-1.5 mr-2"}),F(" "+c(e.__("Your calendar is set.")),1)])):z("",!0),d(l(N),{onClick:a[11]||(a[11]=()=>l(O).submit())},{default:C(()=>[F(c(e.__("Authorize Google Calendar Access")),1)]),_:1})])])}}};export{fe as default};
//# sourceMappingURL=ProfileEvaluator-YgDhtmL0.js.map