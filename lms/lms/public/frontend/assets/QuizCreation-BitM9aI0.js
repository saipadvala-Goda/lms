var se=Object.defineProperty;var K=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var J=(p,m,o)=>m in p?se(p,m,{enumerable:!0,configurable:!0,writable:!0,value:o}):p[m]=o,z=(p,m)=>{for(var o in m||(m={}))te.call(m,o)&&J(p,o,m[o]);if(K)for(var o of K(m))ae.call(m,o)&&J(p,o,m[o]);return p};var G=(p,m,o)=>new Promise((b,q)=>{var _=u=>{try{V(o.next(u))}catch(w){q(w)}},t=u=>{try{V(o.throw(u))}catch(w){q(w)}},V=u=>u.done?b(u.value):Promise.resolve(u.value).then(_,t);V((o=o.apply(p,m)).next())});import{ae as le,af as W,r as B,a as C,k as h,w as ee,j as H,x as c,A as U,B as y,I as l,C as r,y as k,O as X,a_ as Y,J as v,M as E,H as i,aJ as oe,R as f,K as $,L,D as ne,d as ie,aa as ue,s as re,az as de,b as me,av as _e,a9 as Z,N as R,aC as ce,aD as pe,aE as fe,aG as be,aF as ke,aH as ye,T as qe}from"./frappe-ui-CfOnYHud.js";import{j as ve,k as g,P as Ve,T as we}from"./index-5_0ocoxz.js";const he={class:"space-y-4"},ge={key:0,class:"flex items-center text-xs text-gray-700 space-x-5"},ze={class:"flex items-center space-x-2"},Qe={for:"existing"},$e={class:"flex items-center space-x-2"},xe={for:"new"},Se={key:1,class:"space-y-2"},Me={class:"block text-xs text-gray-600 mb-1"},De={key:0,class:"divide-y border-t"},Ue={class:"space-y-4 py-2"},Ce={class:"space-y-2"},Ee={key:2,class:"space-y-2"},Le={__name:"Question",props:le({title:{type:String,default:__("Add a new question")},questionDetail:{type:[Object,null],required:!0}},{modelValue:{},modelModifiers:{},quiz:{},quizModifiers:{}}),emits:["update:modelValue","update:quiz"],setup(p){const m=W(p,"modelValue"),o=W(p,"quiz"),b=B(null),q=B(!1),_=C({question:"",marks:0}),t=C({question:"",type:"Choices",marks:0}),V=()=>{let a=["option","is_correct","explanation","possibility"],e=1;a.forEach(s=>{for(;e<=4;)t[`${s}_${e}`]=s==="is_correct"?!1:"",e++})};V();const u=p,w=h({url:"frappe.client.get",makeParams(){return{doctype:"LMS Question",name:u.questionDetail.question}},auto:!1,onSuccess(a){let e=1;for(q.value=!0,Object.keys(a).forEach(s=>{Object.hasOwn(t,s)&&(t[s]=a[s])});e<=4;)t[`is_correct_${e}`]=!!a[`is_correct_${e}`],e++;t.marks=u.questionDetail.marks}});ee(m,()=>{m.value&&(q.value=!1,u.questionDetail.question?w.fetch():(t.question="",t.marks=0,t.type="Choices",_.question="",_.marks=0,b.value=null,V()),u.questionDetail.marks&&(t.marks=u.questionDetail.marks))});const T=h({url:"frappe.client.insert",makeParams(a){return{doc:z({doctype:"LMS Quiz Question",parent:o.value.data.name,parentfield:"questions",parenttype:"LMS Quiz"},a)}}}),x=h({url:"frappe.client.insert",makeParams(a){return{doc:z({doctype:"LMS Question"},t)}}}),P=a=>{var e;(e=w.data)!=null&&e.name?j(a):I(a)},I=a=>{b.value=="existing"?S({question:_.question,marks:_.marks},a):x.submit({},{onSuccess(e){S({question:e.name,marks:t.marks},a)},onError(e){var s;g(__("Error"),__(((s=e.message)==null?void 0:s[0])||e),"x")}})},S=(a,e)=>{T.submit(z({},a),{onSuccess(){m.value=!1,g(__("Success"),__("Question added successfully"),"check"),o.value.reload(),e()},onError(s){var d;g(__("Error"),__(((d=s.message)==null?void 0:d[0])||s),"x"),e()}})},M=h({url:"frappe.client.set_value",auto:!1,makeParams(a){var e;return{doctype:"LMS Question",name:(e=w.data)==null?void 0:e.name,fieldname:z({},t)}}}),D=h({url:"frappe.client.set_value",auto:!1,makeParams(a){return{doctype:"LMS Quiz Question",name:u.questionDetail.name,fieldname:{marks:t.marks}}}}),j=a=>{M.submit({},{onSuccess(){D.submit({},{onSuccess(){m.value=!1,g(__("Success"),__("Question updated successfully"),"check"),o.value.reload(),a()},onError(e){var s;g(__("Error"),__(((s=e.message)==null?void 0:s[0])||e),"x"),a()}})}})},O=H(()=>({title:__(u.title),size:"xl",actions:[{label:__("Submit"),variant:"solid",onClick:a=>{P(a)}}]}));return(a,e)=>(c(),U(l(ne),{modelValue:m.value,"onUpdate:modelValue":e[7]||(e[7]=s=>m.value=s),options:O.value},{"body-content":y(()=>[r("div",he,[q.value?E("",!0):(c(),k("div",ge,[r("div",ze,[X(r("input",{type:"radio",id:"existing",value:"existing","onUpdate:modelValue":e[0]||(e[0]=s=>b.value=s),class:"w-3 h-3 accent-gray-900"},null,512),[[Y,b.value]]),r("label",Qe,v(a.__("Add an existing question")),1)]),r("div",$e,[X(r("input",{type:"radio",id:"new",value:"new","onUpdate:modelValue":e[1]||(e[1]=s=>b.value=s),class:"w-3 h-3"},null,512),[[Y,b.value]]),r("label",xe,v(a.__("Create a new question")),1)])])),b.value=="new"||q.value?(c(),k("div",Se,[r("div",null,[r("label",Me,v(a.__("Question")),1),i(l(oe),{content:t.question,onChange:e[2]||(e[2]=s=>t.question=s),editable:!0,fixedMenu:!0,editorClass:"prose-sm max-w-none border-b border-x bg-gray-100 rounded-b-md py-1 px-2 min-h-[7rem]"},null,8,["content"])]),i(l(f),{modelValue:t.marks,"onUpdate:modelValue":e[3]||(e[3]=s=>t.marks=s),label:a.__("Marks"),type:"number"},null,8,["modelValue","label"]),i(l(f),{label:a.__("Type"),modelValue:t.type,"onUpdate:modelValue":e[4]||(e[4]=s=>t.type=s),type:"select",options:["Choices","User Input"],class:"pb-2"},null,8,["label","modelValue"]),t.type=="Choices"?(c(),k("div",De,[(c(),k($,null,L(4,s=>r("div",Ue,[i(l(f),{label:a.__("Option")+" "+s,modelValue:t[`option_${s}`],"onUpdate:modelValue":d=>t[`option_${s}`]=d},null,8,["label","modelValue","onUpdate:modelValue"]),i(l(f),{label:a.__("Explanation"),modelValue:t[`explanation_${s}`],"onUpdate:modelValue":d=>t[`explanation_${s}`]=d},null,8,["label","modelValue","onUpdate:modelValue"]),i(l(f),{label:a.__("Correct Answer"),modelValue:t[`is_correct_${s}`],"onUpdate:modelValue":d=>t[`is_correct_${s}`]=d,type:"checkbox"},null,8,["label","modelValue","onUpdate:modelValue"])])),64))])):(c(),k($,{key:1},L(4,s=>r("div",Ce,[i(l(f),{label:a.__("Possibility")+" "+s,modelValue:t[`possibility_${s}`],"onUpdate:modelValue":d=>t[`possibility_${s}`]=d},null,8,["label","modelValue","onUpdate:modelValue"])])),64))])):b.value=="existing"?(c(),k("div",Ee,[i(ve,{modelValue:_.question,"onUpdate:modelValue":e[5]||(e[5]=s=>_.question=s),label:a.__("Select a question"),doctype:"LMS Question"},null,8,["modelValue","label"]),i(l(f),{modelValue:_.marks,"onUpdate:modelValue":e[6]||(e[6]=s=>_.marks=s),label:a.__("Marks"),type:"number"},null,8,["modelValue","label"])])):E("",!0)])]),_:1},8,["modelValue","options"]))}},Te={class:"sticky top-0 z-10 flex items-center justify-between border-b bg-white px-3 py-2.5 sm:px-5"},Pe={class:"w-3/4 mx-auto py-5"},Ie={class:"mb-8"},je={class:"text-sm font-semibold mb-4"},Oe={key:0},Ae={class:"grid grid-cols-3 gap-5 mt-2 mb-8"},Ne={class:"mb-8"},Re={class:"text-sm font-semibold mb-4"},Be={class:"grid grid-cols-3 gap-5 my-4"},He={class:"mb-8"},Fe={class:"text-sm font-semibold mb-4"},Ke={class:"grid grid-cols-3"},Je={class:"flex items-center justify-between mb-4"},Ge={class:"text-sm font-semibold"},We=["innerHTML"],Xe={key:1,class:"text-xs"},Ye={class:"flex gap-2"},ts={__name:"QuizCreation",props:{quizID:{type:String,required:!0}},setup(p){const m=B(!1),o=C({question:"",marks:0,name:""}),b=ie("$user"),q=ue(),_=p,t=C({title:"",total_marks:0,passing_percentage:0,max_attempts:0,limit_questions_to:0,show_answers:!0,show_submission_history:!1,shuffle_questions:!1,questions:[]});re(()=>{var e,s;_.quizID=="new"&&!((e=b.data)!=null&&e.is_moderator)&&!((s=b.data)!=null&&s.is_instructor)&&q.push({name:"Courses"}),_.quizID!=="new"&&u.reload(),window.addEventListener("keydown",V)});const V=e=>{e.key==="s"&&(e.ctrlKey||e.metaKey)&&!e.target.classList.contains("ProseMirror")&&(x(),e.preventDefault())};de(()=>{window.removeEventListener("keydown",V)}),ee(()=>_.quizID!=="new",e=>{e&&u.reload()});const u=h({url:"frappe.client.get",makeParams(e){return{doctype:"LMS Quiz",name:_.quizID}},auto:!1,onSuccess(e){Object.keys(e).forEach(d=>{Object.hasOwn(t,d)&&(t[d]=e[d])});let s=["show_answers","show_submission_history","shuffle_questions"];for(let d in s){let Q=s[d];t[Q]=!!t[Q]}}}),w=h({url:"frappe.client.insert",auto:!1,makeParams(e){return{doc:z({doctype:"LMS Quiz"},t)}}}),T=h({url:"frappe.client.set_value",auto:!1,makeParams(e){return{doctype:"LMS Quiz",name:e.quizID,fieldname:z({total_marks:S()},t)}}}),x=()=>{var e;(e=u.data)!=null&&e.name?I():P()},P=()=>{w.submit({},{onSuccess(e){g(__("Success"),__("Quiz created successfully"),"check"),q.push({name:"QuizCreation",params:{quizID:e.name}})},onError(e){var s;g(__("Error"),__(((s=e.messages)==null?void 0:s[0])||e),"x")}})},I=()=>{var e;T.submit({quizID:(e=u.data)==null?void 0:e.name},{onSuccess(s){t.total_marks=s.total_marks,g(__("Success"),__("Quiz updated successfully"),"check")},onError(s){var d;g(__("Error"),__(((d=s.messages)==null?void 0:d[0])||s),"x")}})},S=()=>{let e=0;return t.limit_questions_to&&t.questions.length>0?t.questions[0].marks*t.limit_questions_to:(t.questions.forEach(s=>{e+=s.marks}),e)},M=H(()=>[{label:__("ID"),key:"question",width:"25%"},{label:__("Question"),key:__("question_detail"),width:"60%"},{label:__("Marks"),key:"marks",width:"10%"}]),D=(e=null)=>{e?(o.question=e.question,o.marks=e.marks,o.name=e.name):(o.question="",o.marks=0,o.name=""),m.value=!0},j=h({url:"frappe.client.delete",makeParams(e){return{doctype:"LMS Quiz Question",name:e.quiz}}}),O=(e,s)=>{e.forEach(d=>G(this,null,function*(){j.submit({quiz:d})})),setTimeout(()=>{u.reload(),s()},500)},a=H(()=>{var s;let e=[{label:__("Quizzes"),route:{name:"Quizzes"}}];return e.push({label:_.quizID=="new"?"New Quiz":(s=u.data)==null?void 0:s.title,route:{name:"QuizCreation",params:{quizID:_.quizID}}}),e});return(e,s)=>{var d,Q;return c(),k($,null,[r("header",Te,[i(l(_e),{items:a.value},null,8,["items"]),i(l(R),{variant:"solid",onClick:s[0]||(s[0]=n=>x())},{default:y(()=>[Z(v(e.__("Save")),1)]),_:1})]),r("div",Pe,[r("div",Ie,[r("div",je,v(e.__("Details")),1),i(l(f),{modelValue:t.title,"onUpdate:modelValue":s[1]||(s[1]=n=>t.title=n),label:(d=l(u).data)!=null&&d.name?e.__("Title"):e.__("Enter a title and save the quiz to proceed")},null,8,["modelValue","label"]),(Q=l(u).data)!=null&&Q.name?(c(),k("div",Oe,[r("div",Ae,[i(l(f),{modelValue:t.max_attempts,"onUpdate:modelValue":s[2]||(s[2]=n=>t.max_attempts=n),label:e.__("Maximun Attempts")},null,8,["modelValue","label"]),i(l(f),{modelValue:t.total_marks,"onUpdate:modelValue":s[3]||(s[3]=n=>t.total_marks=n),label:e.__("Total Marks"),disabled:""},null,8,["modelValue","label"]),i(l(f),{modelValue:t.passing_percentage,"onUpdate:modelValue":s[4]||(s[4]=n=>t.passing_percentage=n),label:e.__("Passing Percentage")},null,8,["modelValue","label"])]),r("div",Ne,[r("div",Re,v(e.__("Settings")),1),r("div",Be,[i(l(f),{modelValue:t.show_answers,"onUpdate:modelValue":s[5]||(s[5]=n=>t.show_answers=n),type:"checkbox",label:e.__("Show Answers")},null,8,["modelValue","label"]),i(l(f),{modelValue:t.show_submission_history,"onUpdate:modelValue":s[6]||(s[6]=n=>t.show_submission_history=n),type:"checkbox",label:e.__("Show Submission History")},null,8,["modelValue","label"])])]),r("div",He,[r("div",Fe,v(e.__("Shuffle Settings")),1),r("div",Ke,[i(l(f),{modelValue:t.shuffle_questions,"onUpdate:modelValue":s[7]||(s[7]=n=>t.shuffle_questions=n),type:"checkbox",label:e.__("Shuffle Questions")},null,8,["modelValue","label"]),t.shuffle_questions?(c(),U(l(f),{key:0,modelValue:t.limit_questions_to,"onUpdate:modelValue":s[8]||(s[8]=n=>t.limit_questions_to=n),label:e.__("Limit Questions To")},null,8,["modelValue","label"])):E("",!0)])]),r("div",null,[r("div",Je,[r("div",Ge,v(e.__("Questions")),1),i(l(R),{onClick:s[9]||(s[9]=n=>D())},{prefix:y(()=>[i(l(Ve),{class:"w-4 h-4"})]),default:y(()=>[Z(" "+v(e.__("New Question")),1)]),_:1})]),i(l(qe),{columns:M.value,rows:t.questions,"row-key":"name",options:{showTooltip:!1}},{default:y(()=>[i(l(ce),{class:"mb-2 grid items-center space-x-4 rounded bg-gray-100 p-2"},{default:y(()=>[(c(!0),k($,null,L(M.value,n=>(c(),U(l(pe),{item:n},null,8,["item"]))),256))]),_:1}),i(l(fe),null,{default:y(()=>[(c(!0),k($,null,L(t.questions,n=>(c(),U(l(ke),{row:n,onClick:A=>D(n)},{default:y(({idx:A,column:F,item:N})=>[i(l(be),{item:N},{default:y(()=>[F.key=="question_detail"?(c(),k("div",{key:0,class:"text-xs truncate h-4",innerHTML:N},null,8,We)):(c(),k("div",Xe,v(N),1))]),_:2},1032,["item"])]),_:2},1032,["row","onClick"]))),256))]),_:1}),i(l(ye),null,{actions:y(({unselectAll:n,selections:A})=>[r("div",Ye,[i(l(R),{variant:"ghost",onClick:F=>O(A,n)},{default:y(()=>[i(l(we),{class:"h-4 w-4 stroke-1.5"})]),_:2},1032,["onClick"])])]),_:1})]),_:1},8,["columns","rows"])])])):E("",!0)])]),i(Le,{modelValue:m.value,"onUpdate:modelValue":s[10]||(s[10]=n=>m.value=n),questionDetail:o,quiz:l(u),"onUpdate:quiz":s[11]||(s[11]=n=>me(u)?u.value=n:null),title:o.question?e.__("Edit the question"):e.__("Add a new question")},null,8,["modelValue","questionDetail","quiz","title"])],64)}}};export{ts as default};
//# sourceMappingURL=QuizCreation-BitM9aI0.js.map
