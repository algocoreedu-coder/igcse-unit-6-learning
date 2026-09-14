/* Optional browser capability; learning functions also work without WebMCP. */
(()=>{
 const context=document.modelContext;if(!context?.registerTool)return;
 const life=new AbortController();
 const tool={name:'run_greenhouse_example',title:'Run greenhouse control example',description:'On the greenhouse lesson, set the three sensor readings and run the same four control steps as the visible interface. Returns the displayed output; does not change answers or navigate.',inputSchema:{type:'object',properties:{temperature:{type:'number',minimum:0,maximum:50},moisture:{type:'number',minimum:0,maximum:100},light:{type:'number',minimum:0,maximum:100},sensorFault:{type:'boolean'}},required:['temperature','moisture','light'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(input){
  if(!input||typeof input!=='object')throw new Error('Expected sensor readings.');
  const allowed=['temperature','moisture','light','sensorFault'];if(Object.keys(input).some(k=>!allowed.includes(k)))throw new Error('Unknown input field.');
  for(const [key,max]of [['temperature',50],['moisture',100],['light',100]])if(typeof input[key]!=='number'||!Number.isFinite(input[key])||input[key]<0||input[key]>max)throw new Error('Invalid '+key);
  if(input.sensorFault!==undefined&&typeof input.sensorFault!=='boolean')throw new Error('Invalid sensorFault.');
  if(active.key!=='49/lab')throw new Error('Open the greenhouse activity in lesson 49 first.');
  for(const [key,id]of [['temperature','temp'],['moisture','moisture'],['light','light']]){const el=document.getElementById(id);el.value=input[key];el.dispatchEvent(new Event('input',{bubbles:true}));}
  const fault=document.getElementById('sensor-fault');fault.checked=input.sensorFault??false;fault.dispatchEvent(new Event('input',{bubbles:true}));
  for(let i=0;i<4;i++)document.getElementById('green-step').click();
  return {reading:{temperature:Number(document.getElementById('temp').value),moisture:Number(document.getElementById('moisture').value),light:Number(document.getElementById('light').value)},outputs:[...document.querySelectorAll('#green-result .status-row')].map(row=>({actuator:row.querySelector('span').textContent,state:row.querySelector('strong').textContent})),sensorFault:fault.checked};
 }};
 try{Promise.resolve(context.registerTool(tool,{signal:life.signal})).catch(()=>{});}catch{}
 window.addEventListener('pagehide',()=>life.abort(),{once:true});
})();
