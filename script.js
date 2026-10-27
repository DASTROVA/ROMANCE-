const modal=document.getElementById('surprise');
document.getElementById('surpriseBtn').addEventListener('click',()=>{modal.classList.add('show');burstHearts(18)});
document.getElementById('closeModal').addEventListener('click',()=>modal.classList.remove('show'));
modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('show')});
document.addEventListener('keydown',e=>{if(e.key==='Escape')modal.classList.remove('show')});
function burstHearts(count=1){for(let i=0;i<count;i++){const h=document.createElement('span');h.className='heart-particle';h.textContent=['♥','♡','✦'][Math.floor(Math.random()*3)];h.style.left=Math.random()*100+'vw';h.style.fontSize=(14+Math.random()*22)+'px';h.style.animationDuration=(3+Math.random()*3)+'s';document.body.appendChild(h);setTimeout(()=>h.remove(),6500)}}
setInterval(()=>{if(Math.random()>.45)burstHearts(1)},1800);
// Gentle, generated ambient tones; no music file or paid service is required.
let audioCtx=null,oscillators=[],playing=false;
const musicBtn=document.getElementById('musicBtn');
musicBtn.addEventListener('click',()=>{
 if(!playing){
  try{audioCtx=new (window.AudioContext||window.webkitAudioContext)();const notes=[261.63,329.63,392,329.63,293.66,349.23,440,349.23];let i=0;
   const playNote=()=>{if(!playing)return;const osc=audioCtx.createOscillator(),gain=audioCtx.createGain();osc.type='sine';osc.frequency.value=notes[i++%notes.length];gain.gain.setValueAtTime(.0001,audioCtx.currentTime);gain.gain.exponentialRampToValueAtTime(.035,audioCtx.currentTime+.08);gain.gain.exponentialRampToValueAtTime(.0001,audioCtx.currentTime+.7);osc.connect(gain);gain.connect(audioCtx.destination);osc.start();osc.stop(audioCtx.currentTime+.75);setTimeout(playNote,650)};playing=true;playNote();musicBtn.textContent='Ⅱ Выключить мелодию';
  }catch(e){musicBtn.textContent='Музыка недоступна';}
 }else{playing=false;if(audioCtx){audioCtx.close();audioCtx=null}musicBtn.textContent='♫ Включить настроение'}
});
