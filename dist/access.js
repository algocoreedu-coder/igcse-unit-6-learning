/* Classroom role gate for a static website. This is not secure authentication. */
const Access=(()=>{
 const sessionKey='algocore-unit6-role-v1';
 const codes={student:'1111',teacher:'0710'};
 let current=null,onChange=()=>{};
 try{const v=sessionStorage.getItem(sessionKey);if(v==='student'||v==='teacher')current=v;}catch{}
 function storeRole(){try{if(current)sessionStorage.setItem(sessionKey,current);else sessionStorage.removeItem(sessionKey);}catch{}}
 function sync(){
  const signedIn=!!current;
  document.getElementById('entry-page').hidden=signedIn;
  document.getElementById('learning-shell').hidden=!signedIn;
  document.body.dataset.role=current||'guest';
  document.getElementById('role-badge').textContent=current==='teacher'?'Teacher':'Student';
  document.getElementById('open-script').hidden=current!=='teacher';
 }
 function init(callback){
  onChange=callback;
  const form=document.getElementById('entry-form'),code=document.getElementById('entry-code'),error=document.getElementById('entry-error');
  form.addEventListener('submit',e=>{
   e.preventDefault();
   const role=new FormData(form).get('role');
   if(!Object.hasOwn(codes,role)||code.value.trim()!==codes[role]){
    error.textContent='That code does not match your role. Please try again.';error.hidden=false;
    code.setAttribute('aria-invalid','true');code.focus();return;
   }
   current=role;storeRole();code.value='';error.hidden=true;code.removeAttribute('aria-invalid');
   sync();onChange();
  });
  form.addEventListener('input',()=>{error.hidden=true;code.removeAttribute('aria-invalid');});
  document.getElementById('sign-out').addEventListener('click',()=>{
   current=null;storeRole();sync();onChange();code.value='';code.focus();
  });
  sync();onChange();
 }
 return {init,role:()=>current,isTeacher:()=>current==='teacher'};
})();

