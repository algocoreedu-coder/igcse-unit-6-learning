'use strict';
const $=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const groups=[...U6.lessons,...U6.extras], routes=groups.flatMap(g=>g.sections.map(s=>({g,s,key:g.id+'/'+s.id})));
const KEY='algocore-unit6-learning-v1';
let saved={answers:{},attempts:{},rubrics:{}},storageOK=true;
try{const raw=JSON.parse(localStorage.getItem(KEY)||'null');if(raw&&typeof raw==='object'&&raw.answers&&raw.attempts&&raw.rubrics)saved=raw;}catch{storageOK=false;}
function persist(){try{localStorage.setItem(KEY,JSON.stringify(saved));}catch{storageOK=false;const el=$('save-status');if(el)el.textContent='Không lưu được trên trình duyệt này; hãy giữ bản trả lời riêng.';}}
let active=routes[0],presenting=false,revealed=1,currentVisual=null,blankImage=false;
const kindNames={retrieval:'Nhớ lại',theory:'Lý thuyết',applications:'Vận dụng',lab:'Thực hành',practice:'Luyện tập',exit:'Exit ticket',homework:'Ôn giữa tuần',exam:'Luyện thi',reference:'Sổ tay'};
function navigate(key){if(location.hash.slice(1)===key)render();else location.hash=key;}
function renderNav(){
 $('navigation').innerHTML=groups.map(g=>`<a class="lesson-link ${g===active.g?'active':''}" href="#${g.id}/${g.sections[0].id}"><strong>${/^\d/.test(g.id)?g.id+' · ':''}${esc(g.title)}</strong></a>${g===active.g?`<div class="section-links">${g.sections.map(s=>`<a href="#${g.id}/${s.id}" ${s===active.s?'aria-current="page"':''}>${esc(s.title)}</a>`).join('')}</div>`:''}`).join('');
}
function visualHTML(id){
 const v=visuals.find(v=>v.id===id);if(!v)return '';
 return `<figure class="visual"><button class="visual-open" data-visual="${id}" aria-label="Phóng to: ${esc(v.title)}"><img src="assets/${v.image}" alt="${esc(v.title)}" loading="lazy"></button><figcaption>${esc(v.title)}<span>Visual ${String(v.id).padStart(2,'0')} · Bấm hình để phóng to</span></figcaption>${v.exercise?`<div class="visual-controls"><button class="visual-blank" data-visual="${id}" aria-pressed="false">Bỏ nhãn để nhớ lại</button></div>`:''}</figure>`;
}
function qHTML(q,n){
 let inputs='';
 if(q.type==='mc')inputs=q.options.map((o,i)=>`<label class="option"><input type="radio" name="${q.id}" value="${i}"><span>${esc(o)}</span></label>`).join('');
 else if(q.type==='written')inputs=`<textarea aria-label="Câu trả lời: ${esc(q.prompt)}" placeholder="Trả lời bằng tiếng Anh; có thể ghi ý bằng tiếng Việt trước khi viết…"></textarea>`;
 else if(q.type==='match')inputs=q.pairs.map((p,i)=>`<div class="match-row"><label for="${q.id}-${i}">${esc(p[0])}</label><select id="${q.id}-${i}" aria-label="${esc(p[0])}"><option value="">Chọn chức năng…</option>${q.options.map((o,j)=>`<option value="${j}">${esc(o)}</option>`).join('')}</select></div>`).join('');
 else inputs=q.items.map((_,i)=>`<div class="match-row"><label for="${q.id}-${i}">Bước ${i+1}</label><select id="${q.id}-${i}"><option value="">Chọn bước…</option>${q.items.map((o,j)=>`<option value="${j}">${esc(o)}</option>`).join('')}</select></div>`).join('');
 return `<article class="question" data-q="${q.id}"><div class="q-meta"><span>CÂU ${n+1} · ${q.type==='written'?'TỰ LUẬN — TỰ ĐỐI CHIẾU':q.type==='order'?'SẮP XẾP':q.type==='match'?'GHÉP CẶP':'TRẮC NGHIỆM'}</span><span>${q.marks} điểm luyện tập</span></div><h3>${esc(q.prompt)}</h3>${q.vi?`<p class="translation">${esc(q.vi)}</p>`:''}<div class="q-inputs">${inputs}</div><p class="q-warning" hidden role="status"></p><div class="q-actions"><button class="check primary">${q.type==='written'?(presenting?'Hiện đáp án để chữa bài':'Đối chiếu bài đã viết'):'Kiểm tra câu trả lời'}</button><button class="retry">Làm lại</button></div><div class="feedback" hidden aria-live="polite"></div><p class="score-line"></p></article>`;
}
function currentAnswer(el,q){
 if(q.type==='written')return el.querySelector('textarea').value;
 if(q.type==='mc')return el.querySelector('input:checked')?.value??'';
 return [...el.querySelectorAll('select')].map(s=>s.value);
}
function setAnswer(el,q,answer){
 if(q.type==='written')el.querySelector('textarea').value=typeof answer==='string'?answer:'';
 else if(q.type==='mc')el.querySelectorAll('input').forEach(i=>i.checked=i.value===String(answer));
 else if(Array.isArray(answer))el.querySelectorAll('select').forEach((s,i)=>s.value=answer[i]??'');
}
function questionHistory(el,q){
 const a=saved.attempts[q.id]||[];
 el.querySelector('.score-line').textContent=q.type==='written'?(a.length?`Đã mở tiêu chí ${a.length} lần · Tự đối chiếu không phải điểm giáo viên.`:'Câu tự luận không chấm bằng từ khóa.'):(a.length?`Lần đầu: ${a[0].score}/${q.marks} · Lần gần nhất: ${a.at(-1).score}/${q.marks} · ${a.length} lần thử`:'Chưa chấm · Hãy tự trả lời trước.');
}
function checkQuestion(el,q){
 const ans=currentAnswer(el,q),warn=el.querySelector('.q-warning');
 const missing=Array.isArray(ans)?ans.some(x=>x===''):String(ans).trim()==='';
 if(missing&&!(presenting&&q.type==='written')){warn.textContent='Hãy hoàn thành câu trả lời trước khi xem phản hồi.';warn.hidden=false;return;}
 if(q.type==='order'&&new Set(ans).size!==ans.length){warn.textContent='Mỗi bước chỉ được dùng một lần. Kiểm tra các lựa chọn bị trùng.';warn.hidden=false;return;}
 warn.hidden=true;const fb=el.querySelector('.feedback');fb.hidden=false;
 saved.answers[q.id]=ans;
 let score=null,answerHTML='';
 if(q.type==='written'){
  const checked=saved.rubrics[q.id]||[];
  fb.className='feedback';
  answerHTML=`<h4>Đáp án tham khảo</h4><p class="answer-model" lang="en">${esc(q.model)}</p><h4>Tự đối chiếu các ý</h4>${q.rubric.map((r,i)=>`<label class="rubric-check"><input type="checkbox" data-rubric="${i}" ${checked.includes(i)?'checked':''}><span>${esc(r)}</span></label>`).join('')}<p class="answer-status">Chỉ đánh dấu ý đã thể hiện trong bài của bạn; sửa hoặc bổ sung ý còn thiếu. Cách diễn đạt khác vẫn có thể đúng.</p>`;
 }else{
  if(q.type==='mc')score=Number(ans)===q.correct?1:0;
  if(q.type==='match')score=ans.filter((v,i)=>Number(v)===q.pairs[i][1]).length;
  if(q.type==='order')score=ans.filter((v,i)=>Number(v)===q.correct[i]).length;
  const expected=q.type==='mc'?q.options[q.correct]:q.type==='match'?q.pairs.map(p=>p[0]+' → '+q.options[p[1]]).join('; '):q.correct.map((v,i)=>(i+1)+'. '+q.items[v]).join(' → ');
  fb.className='feedback '+(score===q.marks?'correct':'incorrect');
  answerHTML=`<h4>${score===q.marks?'Đúng':'Cần sửa'} · ${score}/${q.marks}</h4><p><b>Đáp án:</b> ${esc(expected)}</p><p>${esc(q.explain)}</p>${q.type==='order'?'<p class="answer-status">Điểm luyện tập tính theo số bước đúng vị trí.</p>':''}`;
 }
 fb.innerHTML=answerHTML+`<a href="#${q.ref}">Học lại mục này →</a>`;
 fb.querySelectorAll('[data-rubric]').forEach(i=>i.addEventListener('change',()=>{saved.rubrics[q.id]=[...fb.querySelectorAll('input:checked')].map(x=>Number(x.dataset.rubric));persist();}));
 saved.attempts[q.id]??=[];saved.attempts[q.id].push({score,at:new Date().toISOString()});
 persist();questionHistory(el,q);
}
function bindQuestions(){
 (active.s.questions||[]).forEach(q=>{
  const el=document.querySelector(`[data-q="${q.id}"]`);setAnswer(el,q,saved.answers[q.id]);questionHistory(el,q);
  el.querySelector('.check').addEventListener('click',()=>checkQuestion(el,q));
  el.querySelector('.retry').addEventListener('click',()=>{delete saved.answers[q.id];delete saved.rubrics[q.id];setAnswer(el,q,q.type==='order'||q.type==='match'?q.items?.map(()=> '')||q.pairs.map(()=> ''):'');el.querySelector('.feedback').hidden=true;el.querySelector('.q-warning').hidden=true;persist();el.querySelector('input,select,textarea')?.focus();});
  el.querySelectorAll('.q-inputs input,.q-inputs textarea,.q-inputs select').forEach(i=>i.addEventListener('input',()=>{saved.answers[q.id]=currentAnswer(el,q);el.querySelector('.feedback').hidden=true;el.querySelector('.q-warning').hidden=true;persist();}));
 });
}
function applyReveal(){
 const blocks=[...document.querySelectorAll('#content .reveal-block')];
 blocks.forEach((el,i)=>el.hidden=presenting&&i>=revealed);
 const bar=$('reveal-bar');if(bar)bar.hidden=!presenting||blocks.length<2;
 const btn=$('reveal-next');if(btn){btn.disabled=revealed>=blocks.length;btn.textContent=revealed>=blocks.length?'Đã hiện hết ý':'Hiện ý tiếp';}
 const pos=$('reveal-position');if(pos)pos.textContent=`${Math.min(revealed,blocks.length)} / ${blocks.length} phần`;
}
function revealNext(){revealed++;applyReveal();}
function render(){
 Lab.cleanup?.();
 const hash=decodeURIComponent(location.hash.slice(1)),found=routes.find(r=>r.key===hash);active=found||routes[0];
 if(!found&&hash)window.history.replaceState(null,'','#'+active.key);
 document.title=`${active.s.title} · Unit 6 · AlgoCore`;renderNav();
 $('breadcrumb').textContent=`UNIT 6 / ${/^\d/.test(active.g.id)?'BUỔI '+active.g.id:active.g.title.toUpperCase()}`;
 const s=active.s,g=active.g;
 $('content').innerHTML=`<div class="lesson-head"><p class="eyebrow">${esc(kindNames[s.kind]||s.kind)} · ${esc(g.syllabus)}</p><h1>${esc(s.title)}</h1><p class="lead">${esc(s.lead)}</p><div class="chips"><span class="chip">${esc(g.title)}</span><span class="chip">${esc(s.minutes)}</span>${s.kind==='retrieval'?'<span class="chip">Trả lời trước khi xem tài liệu</span>':''}</div></div>${s.id==='start'&&g.goals?`<details class="teacher-note"><summary>Mục tiêu sau buổi học</summary><ul>${g.goals.map(x=>`<li>${esc(x)}</li>`).join('')}</ul><p>Dành 10 phút chữa lỗi kiểm tra đầu buổi trước khi dạy nội dung mới.</p></details>`:''}<div id="reveal-bar" class="reveal-toolbar" hidden><button id="reveal-next" class="primary">Hiện ý tiếp</button><span id="reveal-position"></span></div>${s.html||''}${s.visuals?.length?`<div class="visual-grid reveal-block">${s.visuals.map(visualHTML).join('')}</div>`:''}${s.lab?'<section id="lab-host" class="lab" aria-label="Mô phỏng tương tác"></section>':''}${s.questions?.length?`<section aria-label="Bài tập" class="question-set"><p class="eyebrow">${s.kind==='theory'||s.kind==='applications'?'DỪNG LẠI & LUYỆN NGAY':'TRẢ LỜI & ĐỐI CHIẾU'}</p>${s.questions.map(qHTML).join('')}<p id="save-status" class="source-note">${storageOK?'Câu trả lời lưu trên trình duyệt này; đáp án vẫn ẩn khi quay lại bài.':'Không lưu được trên trình duyệt này; hãy giữ bản trả lời riêng.'}</p></section>`:''}<p class="source-note">Tham chiếu: ${esc(g.source)}</p>`;
 bindQuestions();if(s.lab)Lab.mount(s.lab,$('lab-host'));
 revealed=1;applyReveal();$('reveal-next').addEventListener('click',revealNext);
 const index=routes.indexOf(active);$('previous').disabled=index===0;$('next').disabled=index===routes.length-1;$('position').textContent=`${g.sections.indexOf(s)+1} / ${g.sections.length} mục`;
 $('previous').onclick=()=>{if(index>0)navigate(routes[index-1].key);};$('next').onclick=()=>{if(index<routes.length-1)navigate(routes[index+1].key);};
 document.querySelectorAll('.visual-open').forEach(el=>el.onclick=()=>openVisual(Number(el.dataset.visual),el.closest('figure').querySelector('.visual-blank')?.getAttribute('aria-pressed')==='true'));
 document.querySelectorAll('.visual-blank').forEach(el=>el.onclick=()=>{const v=visuals.find(v=>v.id===Number(el.dataset.visual)),on=el.getAttribute('aria-pressed')!=='true';el.setAttribute('aria-pressed',String(on));el.textContent=on?'Hiện nhãn để đối chiếu':'Bỏ nhãn để nhớ lại';el.closest('figure').querySelector('img').src='assets/'+(on?v.exercise:v.image);});
 document.body.classList.remove('menu-open');$('menu').setAttribute('aria-expanded','false');
 scrollTo(0,0);$('content').focus({preventScroll:true});
}
function updateVisual(){const v=currentVisual;$('image-title').textContent=v.title;$('large-image').src='assets/'+(blankImage&&v.exercise?v.exercise:v.image);$('large-image').alt=v.title+(blankImage?' — bản bỏ nhãn':'');$('image-question').textContent=v.question;$('image-version').hidden=!v.exercise;$('image-version').textContent=blankImage?'Hiện nhãn':'Bỏ nhãn';}
function openVisual(id,blank=false){currentVisual=visuals.find(v=>v.id===id);blankImage=blank;updateVisual();$('image-dialog').showModal();document.body.classList.add('modal-open');}
$('image-version').onclick=()=>{blankImage=!blankImage;updateVisual();};$('close-image').onclick=()=>$('image-dialog').close();$('image-dialog').addEventListener('close',()=>document.body.classList.remove('modal-open'));
$('present').onclick=()=>{presenting=!presenting;document.body.classList.toggle('presenting',presenting);$('present').textContent=presenting?'Thoát trình chiếu':'Trình chiếu';$('present').setAttribute('aria-pressed',String(presenting));revealed=1;applyReveal();document.querySelectorAll('.question').forEach(el=>{if(el.querySelector('textarea'))el.querySelector('.check').textContent=presenting?'Hiện đáp án để chữa bài':'Đối chiếu bài đã viết';if(presenting)el.querySelector('.feedback').hidden=true;});};
$('print').onclick=()=>window.print();$('menu').onclick=()=>{const open=document.body.classList.toggle('menu-open');$('menu').setAttribute('aria-expanded',String(open));};
document.addEventListener('click',e=>{if(document.body.classList.contains('menu-open')&&!e.target.closest('#sidebar,#menu')){document.body.classList.remove('menu-open');$('menu').setAttribute('aria-expanded','false');}});
document.addEventListener('keydown',e=>{
 if(e.key==='Escape'){document.body.classList.remove('menu-open');$('menu').setAttribute('aria-expanded','false');}
 if(!presenting||$('image-dialog').open||e.target.closest('input,textarea,select,button,a,summary,[contenteditable]'))return;
 if(e.key==='ArrowRight'){e.preventDefault();$('next').click();}
 if(e.key==='ArrowLeft'){e.preventDefault();$('previous').click();}
 if(e.code==='Space'){e.preventDefault();revealNext();}
});
window.addEventListener('hashchange',render);
render();
