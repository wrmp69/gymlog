// ─────────────────────────────────────────
// DONNÉES MACHINES
// Pour ajouter un exercice : copie une ligne existante,
// change nom/groupe/icon/poids. Groupes disponibles :
// "Jambes" "Dos" "Pectoraux" "Épaules" "Bras" "Abdos"
// ─────────────────────────────────────────
var machines=[
  {nom:"Chest Press",                            groupe:"Pectoraux", icon:"🏋",poids:[4.5,11,18,25,32,39,45,52,59,66,73,79,86,93,100,107,113]},
  {nom:"Pec Fly",                                groupe:"Pectoraux", icon:"🏋",poids:[4.5,11,18,25,32,39,45,52,59,66,73,79,86,93,100,107,113,120,127,134]},
  {nom:"Développé couché haltères",              groupe:"Pectoraux", icon:"🏋",poids:[6,7,8,9,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40]},
  {nom:"Développé incliné Smith machine",        groupe:"Pectoraux", icon:"🏋",poids:[10,12.5,15,17.5,20,22.5,25,27.5,30,32.5,35,37.5,40,42.5,45,47.5,50]},
  {nom:"Développé incliné haltères",             groupe:"Pectoraux", icon:"🏋",poids:[5,6,7,8,9,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40]},

  {nom:"Abducteurs machine?",                    groupe:"Jambes",    icon:"🦵",poids:[10,15,20,25,30,35,40,45,50,55,60]},
  {nom:"Adducteurs machine?",                    groupe:"Jambes",    icon:"🦵",poids:[10,15,20,25,30,35,40,45,50]},
  {nom:"Goblet squat?",                          groupe:"Jambes",    icon:"🦵",poids:[10,15,20,25,30,35,40,45,50,55,60]},
  {nom:"Hack squat?",                            groupe:"Jambes",    icon:"🦵",poids:[20,30,40,50,60,70,80,90,100,120]},
  {nom:"Leg curl?",                              groupe:"Jambes",    icon:"🦵",poids:[30,40,50,60,70,80,90,100,110,120]},
  {nom:"Leg curl couché?",                       groupe:"Jambes",    icon:"🦵",poids:[10,15,20,25,30,35,40,45,50,55,60]},
  {nom:"Leg extension?",                         groupe:"Jambes",    icon:"🦵",poids:[30,40,50,60,70,80,90,100,110,120]},
  {nom:"Presse convergente?",                    groupe:"Jambes",    icon:"🦵",poids:[20,25,30,35,40,45,50,55,60,65,70,75,80]},
  {nom:"Squat Smith machine?",                   groupe:"Jambes",    icon:"🦵",poids:[20,30,40,50,60,70,80,90,100,110,120]},

  {nom:"Deltoïde arrière (Rev fly)",             groupe:"Épaules",   icon:"🔝",poids:[4.5,11,18,25,32,39,45,52,59,66,73,79,86,93,100,107,113,120,127,134]},
  {nom:"Développé militaire Smith machine",      groupe:"Épaules",   icon:"🔝",poids:[10,12.5,15,17.5,20,22.5,25,27.5,30,32.5,35,37.5,40,42.5,45,47.5,50]},
  {nom:"Développé militaire haltères",           groupe:"Épaules",   icon:"🔝",poids:[4,5,6,7,8,9,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40]},
  {nom:"Élévation frontale haltères",            groupe:"Épaules",   icon:"🔝",poids:[4,5,6,7,8,9,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40]},
  {nom:"Élévation latérale haltères",            groupe:"Épaules",   icon:"🔝",poids:[4,5,6,7,8,9,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40]},
  {nom:"Élévation latérale poulie",              groupe:"Épaules",   icon:"🔝",poids:[2.3,4.5,6.8,9,11.3,13.5,15.8,18,20.3,22.5,24.8,27,29.3,31.5,33.8,36,38.3,40.5,42.8,45]},

  {nom:"Extension lombaire",                     groupe:"Dos",       icon:"💪",poids:[80]},
  {nom:"Traction",                               groupe:"Dos",       icon:"💪",poids:[80]},
  {nom:"Traction assistée?",                     groupe:"Dos",       icon:"💪",poids:[4.5,9,14,18,23,27,32,36,41,45,52,59,66,73,79,86,93,100,107,113]},
  {nom:"Tirage divergent",                	   	 groupe:"Dos",       icon:"💪",poids:[4.5,9,14,18,23,27,32,36,41,45,52,59,66,73,79,86,93,100,107,113]},
  {nom:"Tirage horizontal prise neutre",         groupe:"Dos",       icon:"💪",poids:[2.3,4.5,6.8,9,11.3,13.5,15.8,18,20.3,22.5,24.8,27,29.3,31.5,33.8,36,38.3,40.5,42.8,45]},
  {nom:"Tirage horizontal prise serrée",         groupe:"Dos",       icon:"💪",poids:[2.3,4.5,6.8,9,11.3,13.5,15.8,18,20.3,22.5,24.8,27,29.3,31.5,33.8,36,38.3,40.5,42.8,45]},
  {nom:"Tirage menton barre EZ?",                groupe:"Dos",       icon:"💪",poids:[4.5,9,14,18,23,27,32,36,41,45,52,59,66,73,79,86,93,100,107,113]},
  {nom:"Tirage vertical machine?",               groupe:"Dos",       icon:"💪",poids:[4.5,11,18,25,32,39,45,52,59,66,73,79,86,93,100,107,113,120,127,134]},
  {nom:"Tirage vertical pronation prise large",  groupe:"Dos",       icon:"💪",poids:[4.5,11,18,25,32,39,45,52,59,66,73,79,86,93,100,107,113,120,127,134]},
  {nom:"Tirage vertical supination prise serrée",groupe:"Dos",       icon:"💪",poids:[4.5,11,18,25,32,39,45,52,59,66,73,79,86,93,100,107,113,120,127,134]},

  {nom:"Curl pupitre",                           groupe:"Biceps",    icon:"💪",poids:[4.5,9,14,18,23,27,32,36,41,45,50,54,59,64,68,73,77,82,86,91]},
  {nom:"Curl haltère banc incliné",              groupe:"Biceps",    icon:"💪",poids:[5,6,7,8,9,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40]},
  {nom:"Curl marteau unilatéral",                groupe:"Biceps",    icon:"💪",poids:[5,6,7,8,9,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40]},
  {nom:"Curl marteau",                           groupe:"Biceps",    icon:"💪",poids:[5,6,7,8,9,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40]},
  {nom:"Curl biceps barre EZ",                   groupe:"Biceps",    icon:"💪",poids:[10,15,20,25,30,35]},
  {nom:"Curl biceps à la poulie",                groupe:"Biceps",    icon:"💪",poids:[2.3,4.5,6.8,9,11.3,13.5,15.8,18,20.3,22.5,24.8,27,29.3,31.5,33.8,36,38.3,40.5,42.8,45]},
  {nom:"Curl marteau corde",                     groupe:"Biceps",    icon:"💪",poids:[2.3,4.5,6.8,9,11.3,13.5,15.8,18,20.3,22.5,24.8,27,29.3,31.5,33.8,36,38.3,40.5,42.8,45]},

  {nom:"Dips lesté?",                            groupe:"Triceps",   icon:"💪",poids:[1,2,3,4,5,6,7,8,9,10,15,20,25,30,35,40,45,50,55,60]},
  {nom:"Dips non lesté PDC",                     groupe:"Triceps",   icon:"💪",poids:[80]},
  {nom:"Dips machine?",                          groupe:"Triceps",   icon:"💪",poids:[1,2,3,4,5,6,7,8,9,10,15,20,25,30,35,40,45,50,55,60]},
  {nom:"Extension triceps barre poulie",         groupe:"Triceps",   icon:"💪",poids:[2.3,4.5,6.8,9,11.3,13.5,15.8,18,20.3,22.5,24.8,27,29.3,31.5,33.8,36,38.3,40.5,42.8,45]},
  {nom:"Extension triceps corde poulie",         groupe:"Triceps",   icon:"💪",poids:[2.3,4.5,6.8,9,11.3,13.5,15.8,18,20.3,22.5,24.8,27,29.3,31.5,33.8,36,38.3,40.5,42.8,45]},
  {nom:"Triceps barre front EZ",                 groupe:"Triceps",   icon:"💪",poids:[10,15,20,25,30,35]},
  {nom:"Triceps barre front poulie",             groupe:"Triceps",   icon:"💪",poids:[2.3,4.5,6.8,9,11.3,13.5,15.8,18,20.3,22.5,24.8,27,29.3,31.5,33.8,36,38.3,40.5,42.8,45]},

  {nom:"Crunch abdos corde poulie",              groupe:"Abdos",     icon:"🔥",poids:[2.3,4.5,6.8,9,11.3,13.5,15.8,18,20.3,22.5,24.8,27,29.3,31.5,33.8,36,38.3,40.5,42.8,45]},
  {nom:"Crunch abdos machine?",                  groupe:"Abdos",     icon:"🔥",poids:[1,2,3,4,5,6,7,8,9,10,15,20,25,30,35,40,45,50,55,60]},
  {nom:"Relevé de jambes PDC",                   groupe:"Abdos",     icon:"🔥",poids:[80]},

  {nom:"Mollet presse?",                         groupe:"Mollets",   icon:"🦵",poids:[1,2,3,4,5,6,7,8,9,10,15,20,25,30,35,40,45,50,55,60]},
  {nom:"Mollet presse Smith machine",            groupe:"Mollets",   icon:"🦵",poids:[10,15,20,25,30,35,40,45,50,55,60]},
];


var session=JSON.parse(localStorage.getItem('gl_session')||'[]');
var chartDays=7;
var chartMode='volume';
var myChart=null;
var TIV=null;
var TTOTAL=parseInt(localStorage.getItem('gl_timer_dur')||'60');
var TLEFT=TTOTAL;
var CIRC=2*Math.PI*85;
var MINI_CIRC=2*Math.PI*15;
var timerMini=false;

document.getElementById('header-date').textContent=new Date().toLocaleDateString('fr-FR',{day:'numeric',month:'short'});

// ─────────────────────────────────────────
// EXO + TIMER MEMO LSIT
// ─────────────────────────────────────────

function renderExoMemoList() {
  var maxW = JSON.parse(localStorage.getItem('gl_max_weights') || '{}');
  var timers = JSON.parse(localStorage.getItem('gl_exo_timers') || '{}');

  var exos = new Set([...Object.keys(maxW), ...Object.keys(timers)]);
  var search = document.getElementById('memo-search').value.toLowerCase();
  var container = document.getElementById('exo-memo-list');
  container.innerHTML = '';

  // Regrouper par groupe musculaire
  var groups = {};

  exos.forEach(function(exo) {
    var m = machines.find(x => x.nom === exo);
    if (!m) return;

    var g = m.groupe || "Autres";
    if (!groups[g]) groups[g] = [];
    groups[g].push({ exo: exo, icon: m.icon });
  });

  var groupIcons = {
    "Pectoraux": "💪",
    "Dos": "🦾",
    "Jambes": "🦵",
    "Épaules": "🏋️",
    "Bras": "💥",
    "Abdos": "🔥",
    "Autres": "📌"
  };

  Object.keys(groups).sort().forEach(function(groupe) {

    // Bloc groupe
    var gBlock = document.createElement('div');
    gBlock.className = "group-accordion";

    gBlock.innerHTML = `
      <div class="group-header">
        <span>${groupIcons[groupe] || "📌"} ${groupe}</span>
        <span>▼</span>
      </div>
      <div class="group-content"></div>
    `;

    var gContent = gBlock.querySelector('.group-content');

    // Toggle manuel
    gBlock.querySelector('.group-header').addEventListener('click', function() {
      gContent.classList.toggle('open');
    });

    let groupHasMatch = false;

    groups[groupe].forEach(function(item) {
      var match = search && item.exo.toLowerCase().includes(search);

      var poids = maxW[item.exo] ? maxW[item.exo] + ' kg' : '—';
      var temps = timers[item.exo] ? timers[item.exo] + ' s' : '—';

      var exo = document.createElement('div');
      exo.className = "exo-item";

      exo.innerHTML = `
        <div class="exo-header">
          <span>${item.icon} ${item.exo}</span>
          <span>▶️</span>
        </div>
        <div class="exo-content">
          <div>• Poids max : <b>${poids}</b></div>
          <div>• Temps repos : <b>${temps}</b></div>
          <button class="accordion-btn-del" onclick="deleteExoMemo('${item.exo}')">Supprimer</button>
        </div>
      `;

      var exoContent = exo.querySelector('.exo-content');

      exo.querySelector('.exo-header').addEventListener('click', function() {
        exoContent.classList.toggle('open');
      });

      // Si recherche active → n'afficher que les exercices correspondants
      if (search) {
        if (match) {
          exo.style.display = "block";
          groupHasMatch = true;
        } else {
          exo.style.display = "none";
        }
      }

      gContent.appendChild(exo);
    });

    // Si recherche active
    if (search) {
      if (groupHasMatch) {
        // Montrer uniquement le groupe concerné
        gBlock.style.display = "block";
        gContent.classList.add("open"); // ouvrir automatiquement
      } else {
        // Cacher les groupes sans résultat
        gBlock.style.display = "none";
      }
    } else {
      // Pas de recherche → tout visible, tout fermé
      gBlock.style.display = "block";
      gContent.classList.remove("open");
    }

    container.appendChild(gBlock);
  });
}


function deleteExoMemo(exo) {
  var maxW = JSON.parse(localStorage.getItem('gl_max_weights') || '{}');
  var timers = JSON.parse(localStorage.getItem('gl_exo_timers') || '{}');

  delete maxW[exo];
  delete timers[exo];

  localStorage.setItem('gl_max_weights', JSON.stringify(maxW));
  localStorage.setItem('gl_exo_timers', JSON.stringify(timers));

  renderExoMemoList();
}

document.getElementById('memo-search').addEventListener('input', renderExoMemoList);

function deleteExoMemo(exo) {
  const maxW = JSON.parse(localStorage.getItem('gl_max_weights') || '{}');
  const timers = JSON.parse(localStorage.getItem('gl_exo_timers') || '{}');
  
  delete maxW[exo];
  delete timers[exo];

  localStorage.setItem('gl_max_weights', JSON.stringify(maxW));
  localStorage.setItem('gl_exo_timers', JSON.stringify(timers));

  renderExoMemoList();
}
document.addEventListener("DOMContentLoaded", function() {renderExoMemoList();});


// ─────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────
function vol(e){return parseInt(e.poids)*parseInt(e.series)*parseInt(e.reps);}

// Formule Epley : 1RM estimé = poids × (1 + reps/30)
function calc1RM(poids,reps){
  var r=parseInt(reps);
  if(r<=1) return parseInt(poids);
  return Math.round(parseInt(poids)*(1+r/30));
}

// 1RM estimé max pour un exercice (meilleure série)
function best1RM(entry){return calc1RM(entry.poids,entry.reps);}

function todayKey(){
  var d=new Date();
  return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
}
function fmtDate(k){return new Date(k+'T00:00:00').toLocaleDateString('fr-FR',{weekday:'short',day:'numeric',month:'short'});}
function fmtDateLong(k){return new Date(k+'T00:00:00').toLocaleDateString('fr-FR',{weekday:'long',day:'numeric',month:'long'});}

// ─────────────────────────────────────────
// FILTRES MACHINES
// ─────────────────────────────────────────
function filterMachines(){
  var groupe=document.getElementById('sel-groupe').value;
  var sel=document.getElementById('sel-machine');
  sel.innerHTML='<option value="">— Choisir —</option>';
  machines.forEach(function(m,i){
    if(groupe===''||m.groupe===groupe){
      var o=document.createElement('option');
      o.value=i; o.textContent=m.icon+' '+m.nom; sel.appendChild(o);
    }
  });
  document.getElementById('sel-series').value='1';
  updatePoids();
}

// Retourne le PLUS HAUT poids jamais utilisé pour cet exercice (pas le dernier)
// Poids max : d'abord dans gl_max_weights (persistant), sinon dans l'historique
function getLastWeight(nomExo){
  var maxW = JSON.parse(localStorage.getItem('gl_max_weights')||'{}');
  if(maxW[nomExo]) return maxW[nomExo];
  var h=JSON.parse(localStorage.getItem('gl_history')||'{}');
  var keys=Object.keys(h).sort().reverse();
  var best=null;
  for(var i=0;i<keys.length;i++){
    var entries=Array.isArray(h[keys[i]])?h[keys[i]]:(h[keys[i]].entries||[]);
    for(var j=0;j<entries.length;j++){
      if(entries[j].nom===nomExo){
        var p=parseFloat(entries[j].poids);
        if(best===null||p>best) best=p;
      }
    }
  }
  return best;
}

function updatePoids(){
  var idx=parseInt(document.getElementById('sel-machine').value);
  var sel=document.getElementById('sel-poids');
  var hint=document.getElementById('last-weight-hint');
  sel.innerHTML='';
  hint.textContent='';
  if(isNaN(idx))return;
  var m=machines[idx];
  var lastW=getLastWeight(m.nom);
  m.poids.forEach(function(p){
    var o=document.createElement('option');
    o.value=p; o.textContent=p+' kg'; sel.appendChild(o);
  });
  if(lastW!==null){
    hint.textContent='(Poids max : '+lastW+' kg)';
    var best=0, bestDiff=Infinity;
    for(var i=0;i<sel.options.length;i++){
      var diff=Math.abs(parseFloat(sel.options[i].value)-lastW);
      if(diff<bestDiff){bestDiff=diff;best=i;}
    }
    sel.selectedIndex=best;
  }
  document.getElementById('sel-series').value='1';
  updateRMPreview();
}

function updateRMPreview(){
  var idx=parseInt(document.getElementById('sel-machine').value);
  var poids=document.getElementById('sel-poids').value;
  var reps=document.getElementById('sel-reps').value;
  var prev=document.getElementById('rm-preview');
  if(isNaN(idx)||!poids){prev.textContent='';return;}
  var rm=calc1RM(poids,reps);
  prev.innerHTML='1RM estimé pour cette série : <span style="color:#38bdf8;font-weight:500;">'+rm+' kg</span>';
}

document.getElementById('sel-poids').addEventListener('change',updateRMPreview);
document.getElementById('sel-reps').addEventListener('change',updateRMPreview);

filterMachines();

// ─────────────────────────────────────────
// SESSION
// ─────────────────────────────────────────
function addEntry(){
  var idx=parseInt(document.getElementById('sel-machine').value);
  if(isNaN(idx)){document.getElementById('sel-machine').focus();return;}
  var m=machines[idx];
  var poids=document.getElementById('sel-poids').value;
  var series=document.getElementById('sel-series').value;
  var reps=document.getElementById('sel-reps').value;
  var rm1reel=document.getElementById('inp-1rm').value;
  var entry={
    nom:m.nom, groupe:m.groupe, icon:m.icon,
    poids:poids, series:series, reps:reps,
    rm1est:calc1RM(poids,reps),
    rm1reel:rm1reel?parseInt(rm1reel):null,
    id:Date.now()
  };
  session.push(entry);
  localStorage.setItem('gl_session',JSON.stringify(session));
  document.getElementById('inp-1rm').value='';
  document.getElementById('save-btn').className='btn-ghost';
  document.getElementById('save-btn').textContent='💾 Sauvegarder';
  // Auto-incrément séries : passe à la série suivante (max 6)
  var selS=document.getElementById('sel-series');
  var nextS=Math.min(parseInt(entry.series)+1,6);
  selS.value=String(nextS);
  renderSession();
  startTimer(entry);
}

function attachSwipe(){
  document.querySelectorAll('.entry-wrap').forEach(function(wrap){
    var entry=wrap.querySelector('.entry');
    var bg=wrap.querySelector('.entry-del-bg');
    if(!entry||!bg) return;
    var startX=0,curX=0,active=false;
    var THRESHOLD=90;

    function start(x){ startX=x; curX=0; active=true; entry.classList.add('swiping'); }
    function move(x){
      if(!active) return;
      curX=Math.min(0, x-startX); // left only
      entry.style.transform='translateX('+curX+'px)';
      bg.style.opacity=Math.min(Math.abs(curX)/THRESHOLD, 1);
    }
    function end(){
      if(!active) return;
      active=false;
      entry.classList.remove('swiping');
      if(Math.abs(curX)>=THRESHOLD){
        entry.style.transition='transform .2s ease';
        entry.style.transform='translateX(-110%)';
        setTimeout(function(){
          removeEntry(parseInt(wrap.id.replace('ew-','')));
        },200);
      } else {
        entry.style.transform='translateX(0)';
        bg.style.opacity=0;
      }
    }

    entry.addEventListener('touchstart',function(e){ start(e.touches[0].clientX); },{passive:true});
    entry.addEventListener('touchmove', function(e){ move(e.touches[0].clientX); },{passive:true});
    entry.addEventListener('touchend', end);
    entry.addEventListener('mousedown', function(e){ start(e.clientX); });
    document.addEventListener('mousemove', function(e){ move(e.clientX); });
    document.addEventListener('mouseup', end);
  });
}

function attachDragDrop(){
  var list=document.getElementById('entry-list');
  var wraps=list.querySelectorAll('.entry-wrap');
  var dragSrc=null;

  wraps.forEach(function(wrap){
    // ── DESKTOP drag ──
    wrap.addEventListener('dragstart',function(e){
      dragSrc=wrap;
      wrap.classList.add('dragging');
      e.dataTransfer.effectAllowed='move';
      e.dataTransfer.setData('text/plain',wrap.id);
    });
    wrap.addEventListener('dragend',function(){
      wrap.classList.remove('dragging');
      list.querySelectorAll('.entry-wrap').forEach(function(w){w.classList.remove('drag-over');});
      syncSessionFromDOM();
    });
    wrap.addEventListener('dragover',function(e){
      e.preventDefault();
      e.dataTransfer.dropEffect='move';
      if(wrap!==dragSrc){
        list.querySelectorAll('.entry-wrap').forEach(function(w){w.classList.remove('drag-over');});
        wrap.classList.add('drag-over');
      }
    });
    wrap.addEventListener('drop',function(e){
      e.preventDefault();
      if(dragSrc && dragSrc!==wrap){
        var allWraps=Array.from(list.querySelectorAll('.entry-wrap'));
        var srcIdx=allWraps.indexOf(dragSrc);
        var dstIdx=allWraps.indexOf(wrap);
        if(srcIdx<dstIdx) list.insertBefore(dragSrc,wrap.nextSibling);
        else list.insertBefore(dragSrc,wrap);
      }
      wrap.classList.remove('drag-over');
    });

    // ── TOUCH drag (mobile/tablet) ──
    var handle=wrap.querySelector('.drag-handle');
    if(!handle) return;
    var touchY=0, clone=null, origRect=null;

    handle.addEventListener('touchstart',function(e){
      e.stopPropagation();
      var t=e.touches[0];
      touchY=t.clientY;
      origRect=wrap.getBoundingClientRect();
      dragSrc=wrap;
      wrap.classList.add('dragging');
      // visual ghost
      clone=wrap.cloneNode(true);
      clone.style.cssText='position:fixed;left:'+origRect.left+'px;top:'+origRect.top+'px;width:'+origRect.width+'px;opacity:.85;z-index:9997;pointer-events:none;border-radius:12px;';
      document.body.appendChild(clone);
    },{passive:true});

    handle.addEventListener('touchmove',function(e){
      if(!dragSrc||!clone) return;
      e.preventDefault();
      var t=e.touches[0];
      var dy=t.clientY-touchY;
      clone.style.top=(origRect.top+dy)+'px';
      // find element under finger
      clone.style.display='none';
      var el=document.elementFromPoint(t.clientX,t.clientY);
      clone.style.display='';
      var target=el?el.closest('.entry-wrap'):null;
      list.querySelectorAll('.entry-wrap').forEach(function(w){w.classList.remove('drag-over');});
      if(target && target!==dragSrc) target.classList.add('drag-over');
    },{passive:false});

    handle.addEventListener('touchend',function(e){
      if(!dragSrc) return;
      if(clone){clone.remove();clone=null;}
      dragSrc.classList.remove('dragging');
      var overEl=list.querySelector('.entry-wrap.drag-over');
      if(overEl && overEl!==dragSrc){
        var allWraps=Array.from(list.querySelectorAll('.entry-wrap'));
        var srcIdx=allWraps.indexOf(dragSrc);
        var dstIdx=allWraps.indexOf(overEl);
        if(srcIdx<dstIdx) list.insertBefore(dragSrc,overEl.nextSibling);
        else list.insertBefore(dragSrc,overEl);
        overEl.classList.remove('drag-over');
      }
      syncSessionFromDOM();
      dragSrc=null;
    });
  });
}

function syncSessionFromDOM(){
  var list=document.getElementById('entry-list');
  var wraps=list.querySelectorAll('.entry-wrap');
  var ids=Array.from(wraps).map(function(w){return parseInt(w.id.replace('ew-',''));});
  session.sort(function(a,b){return ids.indexOf(a.id)-ids.indexOf(b.id);});
  localStorage.setItem('gl_session',JSON.stringify(session));
  renderVolume();
}

function removeEntry(id){
  session=session.filter(function(e){return e.id!==id;});
  localStorage.setItem('gl_session',JSON.stringify(session));
  renderSession();
}

function clearSession(){
  if(!session.length)return;
  if(!confirm('Effacer la séance ?'))return;
  session=[];localStorage.removeItem('gl_session');renderSession();
}

function renderSession(){
  var list=document.getElementById('entry-list');
  document.getElementById('entry-count').textContent=session.length+' exo';
  if(!session.length){
    list.innerHTML='<div class="empty"><span class="eico-lg">🏋️</span>Aucun exercice.<br>Lance-toi !</div>';
    document.getElementById('vol-block').style.display='none';return;
  }
  list.innerHTML=session.map(function(e){
    var rmTag='<span class="tag rm">1RM est. '+e.rm1est+' kg</span>';
    var rmReel=e.rm1reel?'<span class="tag" style="border-color:#f59e0b;color:#f59e0b;">1RM réel '+e.rm1reel+' kg</span>':'';
    return '<div class="entry-wrap" id="ew-'+e.id+'" draggable="true">'+
      '<div class="entry-del-bg"><span>🗑 SUPPRIMER</span></div>'+
      '<div class="entry" id="en-'+e.id+'">'+
        '<div class="drag-handle" title="Réorganiser">⠿</div>'+
        '<div class="eico">'+e.icon+'</div>'+
        '<div class="einfo">'+
          '<div class="ename">'+e.nom+'</div>'+
          '<div class="etags">'+
            '<span class="tag ac">'+e.poids+' kg</span>'+
            '<span class="tag">'+e.series+' s · '+e.reps+' r</span>'+
            '<span class="tag vol">'+vol(e).toLocaleString('fr-FR')+' kg vol.</span>'+
            rmTag+rmReel+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>';
  }).join('');
  renderVolume();
  document.getElementById('vol-block').style.display='block';
  attachSwipe();
  attachDragDrop();
}

function renderVolume(){
  var byName={};
  session.forEach(function(e){
    if(!byName[e.nom])byName[e.nom]={vol:0,rm1est:0,rm1reel:null};
    byName[e.nom].vol+=vol(e);
    byName[e.nom].rm1est=Math.max(byName[e.nom].rm1est,e.rm1est);
    if(e.rm1reel)byName[e.nom].rm1reel=Math.max(byName[e.nom].rm1reel||0,e.rm1reel);
  });
  var tv=session.reduce(function(a,e){return a+vol(e);},0);
  document.getElementById('vol-list').innerHTML=Object.entries(byName).map(function(kv){
    var n=kv[0],d=kv[1];
    var rmStr='<span class="vol-rm">1RM est. '+d.rm1est+' kg'+(d.rm1reel?' | réel '+d.rm1reel+' kg':'')+'</span>';
    return '<div class="vol-row"><span class="vol-name">'+n+'</span><span class="vol-val">'+d.vol.toLocaleString('fr-FR')+' kg</span>'+rmStr+'</div>';
  }).join('');
  document.getElementById('vol-total').innerHTML='<span>Volume total séance</span><span>'+tv.toLocaleString('fr-FR')+' kg</span>';
}

function saveSession(){
  if(!session.length){alert('Ajoute au moins un exercice.');return;}
  var h=JSON.parse(localStorage.getItem('gl_history')||'{}');
  var key=todayKey();
  var cardio = JSON.parse(localStorage.getItem('gl_cardio') || 'null');
if (cardio && cardio.date !== todayKey()) {
  cardio = null; // marche expirée
}
  var existing=h[key]||{entries:[],cardio:null};
  if(Array.isArray(existing)) existing={entries:existing,cardio:null};
  existing.entries=[...session];
  if(cardio) existing.cardio=cardio;
  h[key]=existing;
  // Met à jour les poids max persistants à chaque sauvegarde
var mw=JSON.parse(localStorage.getItem('gl_max_weights')||'{}');
session.forEach(function(e){
  var p=parseFloat(e.poids);
  if(!mw[e.nom]||p>mw[e.nom]) mw[e.nom]=p;
});
localStorage.setItem('gl_max_weights',JSON.stringify(mw));
  localStorage.setItem('gl_history',JSON.stringify(h));
  var btn=document.getElementById('save-btn');
  btn.className='btn-ghost ok'; btn.textContent='✓ Sauvegardé !';
}

// ─────────────────────────────────────────
// HISTORIQUE
// ─────────────────────────────────────────
function deleteDay(key){
  if(!confirm('Supprimer la séance du '+fmtDateLong(key)+' ?'))return;
  var h=JSON.parse(localStorage.getItem('gl_history')||'{}');
  delete h[key];localStorage.setItem('gl_history',JSON.stringify(h));
  renderHistory();renderStats();
}

function renderHistory(){
  var h=JSON.parse(localStorage.getItem('gl_history')||'{}');
  var keys=Object.keys(h).sort().reverse();
  var c=document.getElementById('history-list');
  if(!keys.length){c.innerHTML='<div class="empty"><span class="eico-lg">📋</span>Pas encore d\'historique.<br>Sauvegarde ta première séance !</div>';return;}
  c.innerHTML=keys.map(function(key){
    var raw=h[key];
    var entries=Array.isArray(raw)?raw:(raw.entries||[]);
    var cardio=Array.isArray(raw)?null:(raw.cardio||null);
    var tv=entries.reduce(function(a,e){return a+vol(e);},0);
    var cardioStr = cardio
  ? '<div style="display:flex;flex-direction:column;gap:8px;padding:9px 13px;border-top:1px solid var(--bd);">'+
      '<div style="display:flex;gap:8px;align-items:center;">'+
        '<span style="font-size:16px">🚶</span>'+
        '<span style="font-size:12px;color:var(--mu);">'+cardio.duree+' min · '+cardio.pente+'% pente · '+cardio.vitesse+' km/h</span>'+
      '</div>'+
      '<button onclick="clearCardio()" style="padding:6px 10px;font-size:12px;border:1px solid #f55;color:#f55;background:none;border-radius:6px;align-self:flex-start;">❌ Supprimer la marche</button>'+
    '</div>'
  : '';

    return '<div class="day-label">'+fmtDateLong(key)+'</div><div class="day-card">'+
      '<div class="day-head"><span style="font-size:13px;font-weight:500;">'+entries.length+' exercice(s) · <span style="color:var(--pu)">'+tv.toLocaleString('fr-FR')+' kg vol.</span></span>'+
      '<button class="delbtn" onclick="deleteDay(\''+key+'\')">Supprimer</button></div>'+
      entries.map(function(e){
        var rm=e.rm1est?'<span class="dtag drm">est. '+e.rm1est+'kg</span>':'';
        var rmr=e.rm1reel?'<span class="dtag" style="color:#f59e0b;border:1px solid rgba(245,158,11,.2);">réel '+e.rm1reel+'kg</span>':'';
        return '<div class="day-exo"><span style="font-size:17px">'+e.icon+'</span><span class="dexo-name">'+e.nom+'</span>'+
          '<div class="dtags"><span class="dtag">'+e.poids+' kg</span><span class="dtag">'+e.series+'s·'+e.reps+'r</span>'+
          '<span class="dtag dv">'+vol(e).toLocaleString('fr-FR')+'kg</span>'+rm+rmr+'</div></div>';
      }).join('')+cardioStr+'</div>';
  }).join('');
}

// ─────────────────────────────────────────
// STATS + GRAPHIQUES
// ─────────────────────────────────────────
function renderStats(){
  var h=JSON.parse(localStorage.getItem('gl_history')||'{}');
  var keys=Object.keys(h).sort();
  document.getElementById('st-seances').textContent=keys.length;
  var getEntries=function(k){return Array.isArray(h[k])?h[k]:(h[k].entries||[]);};
  document.getElementById('st-exos').textContent=keys.reduce(function(a,k){return a+getEntries(k).length;},0);
  var tv=keys.reduce(function(a,k){return a+getEntries(k).reduce(function(b,e){return b+vol(e);},0);},0);
  document.getElementById('st-vol').textContent=(tv/1000).toFixed(1)+'t';
  var exoSet=new Set();
  Object.keys(h).forEach(function(k){var arr=Array.isArray(h[k])?h[k]:(h[k].entries||[]);arr.forEach(function(e){exoSet.add(e.nom);});});
  var sel=document.getElementById('sel-chart-exo');
  var cur=sel.value;
  sel.innerHTML='<option value="">— Choisir un exercice —</option>';
  Array.from(exoSet).sort().forEach(function(n){
    var o=document.createElement('option');o.value=n;o.textContent=n;if(n===cur)o.selected=true;sel.appendChild(o);
  });
  renderChart();
}

function renderChart(){
  var h=JSON.parse(localStorage.getItem('gl_history')||'{}');
  var keys=Object.keys(h).sort();
  var selExo=document.getElementById('sel-chart-exo').value;
  var emp=document.getElementById('chart-empty');
  var cw=document.querySelector('.chart-wrap');
  var leg=document.getElementById('rm-legend');
  if(myChart){myChart.destroy();myChart=null;}
  leg.style.display='none';
  if(!selExo){cw.style.display='none';emp.style.display='block';emp.textContent='Choisis un exercice pour voir son évolution.';return;}
  var now=new Date();
  var getEntriesC=function(k){return Array.isArray(h[k])?h[k]:(h[k].entries||[]);};
  var filtered=keys.filter(function(k){
    if(!getEntriesC(k).some(function(e){return e.nom===selExo;}))return false;
    if(chartDays===0)return true;
    return (now-new Date(k+'T00:00:00'))/86400000<=chartDays;
  });
  if(!filtered.length){cw.style.display='none';emp.style.display='block';emp.textContent='Pas de données sur cette période.';return;}
  cw.style.display='block';emp.style.display='none';
  var ctx=document.getElementById('myChart').getContext('2d');
  var labels=filtered.map(fmtDate);

  if(chartMode==='volume'){
    var dataVol=filtered.map(function(k){return getEntriesC(k).filter(function(e){return e.nom===selExo;}).reduce(function(a,e){return a+vol(e);},0);});
    var dataPoids=filtered.map(function(k){var ex=getEntriesC(k).filter(function(e){return e.nom===selExo;});return ex.length?Math.max.apply(null,ex.map(function(e){return parseInt(e.poids);})):0;});
    myChart=new Chart(ctx,{type:'bar',data:{labels:labels,datasets:[
      {label:'Volume (kg)',data:dataVol,backgroundColor:'rgba(200,255,0,0.15)',borderColor:'#c8ff00',borderWidth:1.5,borderRadius:5,yAxisID:'y'},
      {label:'Poids max (kg)',data:dataPoids,type:'line',borderColor:'#a78bfa',backgroundColor:'transparent',borderWidth:2,pointBackgroundColor:'#a78bfa',pointRadius:4,tension:0.3,yAxisID:'y2'}
    ]},options:chartOpts('Volume','Poids max','#c8ff00','#a78bfa')});
  } else {
    leg.style.display='block';
    var dataEst=filtered.map(function(k){
      var ex=getEntriesC(k).filter(function(e){return e.nom===selExo;});
      return ex.length?Math.max.apply(null,ex.map(function(e){return e.rm1est||best1RM(e);})):null;
    });
    var dataReel=filtered.map(function(k){
      var ex=getEntriesC(k).filter(function(e){return e.nom===selExo&&e.rm1reel;});
      return ex.length?Math.max.apply(null,ex.map(function(e){return e.rm1reel;})):null;
    });
    myChart=new Chart(ctx,{type:'line',data:{labels:labels,datasets:[
      {label:'1RM estimé (kg)',data:dataEst,borderColor:'#38bdf8',backgroundColor:'rgba(56,189,248,0.1)',borderWidth:2,pointBackgroundColor:'#38bdf8',pointRadius:4,tension:0.3,spanGaps:true},
      {label:'1RM réel (kg)',data:dataReel,borderColor:'#f59e0b',backgroundColor:'rgba(245,158,11,0.1)',borderWidth:2,pointBackgroundColor:'#f59e0b',pointRadius:5,tension:0.3,spanGaps:true,borderDash:[4,3]}
    ]},options:chartOpts('1RM (kg)',null,'#38bdf8',null)});
  }
}

function chartOpts(yLabel,y2Label,c1,c2){
  var scales={
    x:{ticks:{color:'#888',font:{size:10}},grid:{color:'#1e1e1e'}},
    y:{ticks:{color:c1,font:{size:10},callback:function(v){return v>=1000?(v/1000).toFixed(1)+'k':v;}},grid:{color:'#1e1e1e'},title:{display:true,text:yLabel,color:c1,font:{size:10}}}
  };
  if(y2Label)scales.y2={position:'right',ticks:{color:c2,font:{size:10}},grid:{display:false},title:{display:true,text:y2Label,color:c2,font:{size:10}}};
  return{responsive:true,maintainAspectRatio:false,
    plugins:{legend:{display:true,labels:{color:'#888',font:{size:11},boxWidth:12}},tooltip:{callbacks:{label:function(c){return c.dataset.label+': '+(c.parsed.y!==null?c.parsed.y.toLocaleString('fr-FR')+' kg':'—');}}}},
    scales:scales};
}

function setChartMode(mode,btn){
  chartMode=mode;
  document.querySelectorAll('.ctab').forEach(function(b){b.classList.remove('active');});
  btn.classList.add('active');
  renderChart();
}

function setFilter(days,btn){
  chartDays=days;
  document.querySelectorAll('.cf-btn').forEach(function(b){b.classList.remove('active');});
  btn.classList.add('active');renderChart();
}

// ─────────────────────────────────────────
// GOOGLE SHEETS
// ─────────────────────────────────────────
function saveSheetConfig(){
  var su=document.getElementById('inp-script').value.trim();
  var shu=document.getElementById('inp-sheet').value.trim();
  if(!su||!su.startsWith('https://script.google.com')){alert('URL Apps Script invalide.');return;}
  localStorage.setItem('gl_script_url',su);
  if(shu)localStorage.setItem('gl_sheet_url',shu);
  renderSheetsConfig();
}
function resetSheetConfig(){
  if(!confirm('Supprimer ta configuration ?'))return;
  localStorage.removeItem('gl_script_url');localStorage.removeItem('gl_sheet_url');renderSheetsConfig();
}
function renderSheetsConfig(){
  var su=localStorage.getItem('gl_script_url')||'';
  document.getElementById('sheets-nc').style.display=su?'none':'block';
  document.getElementById('sheets-c').style.display=su?'block':'none';
  if(su)document.getElementById('open-sheet-btn').style.display=localStorage.getItem('gl_sheet_url')?'block':'none';
}
function openMySheet(){var u=localStorage.getItem('gl_sheet_url');if(u)window.open(u,'_blank');}
function buildRows(data){
  var rows=[];
  Object.entries(data).sort().forEach(function(kv){
    var day=Array.isArray(kv[1])?{entries:kv[1],cardio:null}:kv[1];
    var entries=day.entries||[];
    var cardio=day.cardio;
    var dateStr=fmtDateLong(kv[0]);
    entries.forEach(function(e){
      rows.push([dateStr,e.groupe||'',e.nom,parseInt(e.poids),parseInt(e.series),parseInt(e.reps),vol(e),e.rm1est||'',e.rm1reel||'','','']);
    });
    if(cardio){
      rows.push([dateStr,'Cardio','Marche tapis','','','','','','',cardio.duree,cardio.pente,cardio.vitesse]);
    }
  });
  return rows;
}
function rowKey(row){
  // Clé unique par ligne : Date + Groupe + Exercice + Poids + Séries + Reps
  return [row[0],row[1],row[2],row[3],row[4],row[5]].join('|');
}

function getSentKeys(){
  return new Set(JSON.parse(localStorage.getItem('gl_sent_keys')||'[]'));
}

function saveSentKeys(keys){
  localStorage.setItem('gl_sent_keys', JSON.stringify(Array.from(keys)));
}

function sendToSheets(rows,statusEl,btn,lbl){
  var su=localStorage.getItem('gl_script_url')||'';
  if(!su){alert('Configure ton Google Sheets dans Stats.');return;}
  if(!rows.length){alert('Aucune donnée.');return;}

  // Filtre uniquement les lignes pas encore envoyées
  var sentKeys=getSentKeys();
  var newRows=rows.filter(function(row){return !sentKeys.has(rowKey(row));});

  if(!newRows.length){
    statusEl.style.display='block';
    statusEl.style.color='#f59e0b';
    statusEl.textContent='Tout est déjà à jour dans Sheets ENCULER.';
    setTimeout(function(){statusEl.style.display='none';},3000);
    return;
  }

  statusEl.style.display='block';
  statusEl.style.color='var(--mu)';
  statusEl.textContent='Envoi de '+newRows.length+' ligne(s)...';
  btn.disabled=true;

  fetch(su,{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/json'},body:JSON.stringify({rows:newRows})})
  .then(function(){
    // Mémorise les clés envoyées
    newRows.forEach(function(row){sentKeys.add(rowKey(row));});
    saveSentKeys(sentKeys);
    statusEl.style.color='var(--ac)';
    statusEl.textContent=newRows.length+' ligne(s) ajoutée(s) !';
    btn.textContent=lbl+' ok';
    setTimeout(function(){statusEl.style.display='none';btn.textContent=lbl;btn.disabled=false;},3000);
  })
  .catch(function(){
    statusEl.style.color='var(--rd)';
    statusEl.textContent='Erreur réseau.';
    btn.disabled=false;
  });
}
function sendAllToSheets(){
  if(!confirm('Envoyer tout l\'historique vers Google Sheets ?'))return;
  var h=JSON.parse(localStorage.getItem('gl_history')||'{}');
  var cardio = JSON.parse(localStorage.getItem('gl_cardio') || 'null');
if (cardio && cardio.date !== todayKey()) {
  cardio = null; // marche expirée
}
  var key=todayKey();
  if(cardio && !h[key]){
    h[key]={entries:session,cardio:cardio};
  }
  if(!Object.keys(h).length){alert('Aucune séance sauvegardée.');return;}
  sendToSheets(buildRows(h),document.getElementById('export-status'),document.getElementById('export-all-btn'),'Envoyer tout');
}
function sendTodayToSheets(){
  var cardio = JSON.parse(localStorage.getItem('gl_cardio') || 'null');
if (cardio && cardio.date !== todayKey()) {
  cardio = null; // marche expirée
}
  if(!session.length && !cardio){alert('Aucune donnée à envoyer.');return;}
  var d={};
  d[todayKey()]={entries:session,cardio:cardio};
  sendToSheets(buildRows(d),document.getElementById('send-today-status'),document.getElementById('send-today-btn'),'Sheets');
}

// ─────────────────────────────────────────
// TIMER
// ─────────────────────────────────────────
function startTimer(entry){
  // Charger le temps mémorisé pour cet exercice si existant
  var mt=JSON.parse(localStorage.getItem('gl_exo_timers')||'{}');
  if(mt[entry.nom]){
    TTOTAL=mt[entry.nom];
    localStorage.setItem('gl_timer_dur',TTOTAL);
    syncTpre();
  }
  TLEFT=TTOTAL;
  // Pré-cocher la case si un temps est déjà mémorisé
  var mc=document.getElementById('memo-check');
  if(mc) mc.checked=!!mt[entry.nom];
  document.getElementById('tov-name').textContent=entry.nom;
  document.getElementById('tov-sub').textContent=entry.series+' séries · '+entry.reps+' reps · '+entry.poids+' kg';
  document.getElementById('tov-rm').textContent='1RM estimé : '+entry.rm1est+' kg'+(entry.rm1reel?' | réel : '+entry.rm1reel+' kg':'');
  var pr=document.getElementById('tpr');
  pr.style.transition='none';pr.style.strokeDasharray=CIRC;pr.style.strokeDashoffset='0';pr.classList.remove('red');
  document.getElementById('tnum').textContent=TLEFT;
    // Reset mini ring
  var mpr=document.getElementById('tov-mini-tpr');
  mpr.style.transition='none';
  mpr.style.strokeDasharray=MINI_CIRC;
  mpr.style.strokeDashoffset='0';
  mpr.classList.remove('red');
  document.getElementById('tov-mini-num').textContent=TLEFT;
  document.getElementById('tov-mini-label').textContent=entry.nom;
  timerMini=false;
  document.getElementById('tov-mini').classList.remove('show');
  document.getElementById('tov').classList.add('show');
  if(TIV)clearInterval(TIV);
  setTimeout(function(){
    pr.style.transition='stroke-dashoffset 1s linear';
    mpr.style.transition='stroke-dashoffset 1s linear';
    TIV=setInterval(tickTimer,1000);
  },60);
}
function tickTimer(){
  TLEFT--;
  // Update full timer
  document.getElementById('tnum').textContent=TLEFT;
  var pr=document.getElementById('tpr');
  pr.style.strokeDashoffset=String(((TTOTAL-TLEFT)/TTOTAL)*CIRC);
  if(TLEFT<=10)pr.classList.add('red');
  // Update mini timer
  document.getElementById('tov-mini-num').textContent=TLEFT;
  var mpr=document.getElementById('tov-mini-tpr');
  mpr.style.strokeDashoffset=String(((TTOTAL-TLEFT)/TTOTAL)*MINI_CIRC);
  if(TLEFT<=10)mpr.classList.add('red');
  else mpr.classList.remove('red');
  if(TLEFT<=0){
    clearInterval(TIV);TIV=null;
    timerMini=false;
    document.getElementById('tov').classList.remove('show');
    document.getElementById('tov-mini').classList.remove('show');
    playBeep();
  }
}
function changeTimer(secs,btn){
  TTOTAL=secs;TLEFT=secs;localStorage.setItem('gl_timer_dur',secs);syncTpre();
  document.getElementById('tnum').textContent=secs;
  document.getElementById('tov-mini-num').textContent=secs;
  var pr=document.getElementById('tpr');
  var mpr=document.getElementById('tov-mini-tpr');
  pr.style.transition='none';pr.style.strokeDashoffset='0';pr.classList.remove('red');
  mpr.style.transition='none';mpr.style.strokeDashoffset='0';mpr.classList.remove('red');
  if(TIV){clearInterval(TIV);TIV=null;}
  setTimeout(function(){
    pr.style.transition='stroke-dashoffset 1s linear';
    mpr.style.transition='stroke-dashoffset 1s linear';
    TIV=setInterval(tickTimer,1000);
  },60);
}
function syncTpre(){
  var vals=[30,60,90,120];
  document.querySelectorAll('.tpre').forEach(function(b,i){b.classList.toggle('on',vals[i]===TTOTAL);});
}
function closeTimerNoMemo(){
  // Ferme le timer SANS sauvegarder le temps
  if(TIV){clearInterval(TIV);TIV=null;}
  timerMini=false;
  document.getElementById('tov').classList.remove('show');
  document.getElementById('tov-mini').classList.remove('show');
}

function closeTimer(){
  // Alias pour compatibilité (timer terminé automatiquement)
  closeTimerNoMemo();
}

function saveMemoTimer(){
  // Appelé quand la case est cochée — sauvegarde immédiatement
  var mc=document.getElementById('memo-check');
  var exoName=document.getElementById('tov-name').textContent;
  if(!exoName||exoName==='—') return;
  var mt=JSON.parse(localStorage.getItem('gl_exo_timers')||'{}');
  if(mc && mc.checked){
    mt[exoName]=TTOTAL;
    localStorage.setItem('gl_exo_timers',JSON.stringify(mt));
  } else {
    // Décochée = supprime la mémorisation
    delete mt[exoName];
    localStorage.setItem('gl_exo_timers',JSON.stringify(mt));
  }
}

function minimizeTimer(){
  timerMini=true;
  document.getElementById('tov').classList.remove('show');
  document.getElementById('tov-mini').classList.add('show');
}

function expandTimer(e){
  if(e) e.stopPropagation();
  timerMini=false;
  document.getElementById('tov-mini').classList.remove('show');
  document.getElementById('tov').classList.add('show');
}
function playBeep(){
  try{var ctx=new(window.AudioContext||window.webkitAudioContext)();
    [0,220,440].forEach(function(delay){
      var o=ctx.createOscillator(),g=ctx.createGain();o.connect(g);g.connect(ctx.destination);
      o.frequency.value=880;o.type='sine';var t=ctx.currentTime+delay/1000;
      g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(0.4,t+0.01);g.gain.linearRampToValueAtTime(0,t+0.2);
      o.start(t);o.stop(t+0.22);
    });
  }catch(ex){}
}

// ─────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────

// ─────────────────────────────────────────
// CARDIO
// ─────────────────────────────────────────
function clearCardio() {
  // 1. Supprimer la marche temporaire
  localStorage.removeItem('gl_cardio');

  // 2. Supprimer la marche du jour dans l'historique
  var h = JSON.parse(localStorage.getItem('gl_history') || '{}');
  var key = todayKey();

  if (h[key] && h[key].cardio) {
    delete h[key].cardio;
    localStorage.setItem('gl_history', JSON.stringify(h));
  }

  alert("Marche supprimée.");
  location.reload();
}


function addCardio(){
  var duree=parseInt(document.getElementById('c-duree').value);
  var pente=parseFloat(document.getElementById('c-pente').value);
  var vitesse=parseFloat(document.getElementById('c-vitesse').value);
  var cardio={duree:duree,pente:pente,vitesse:vitesse};
  localStorage.setItem('gl_cardio', JSON.stringify({
  date: todayKey(),
  duree: cardio.duree,
  pente: cardio.pente,
  vitesse: cardio.vitesse
}));
  // Persist in today's history
  var h=JSON.parse(localStorage.getItem('gl_history')||'{}');
  var key=todayKey();
  var existing=h[key]||{entries:[],cardio:null};
  if(Array.isArray(existing)) existing={entries:existing,cardio:null};
  existing.cardio=cardio;
  h[key]=existing;
  localStorage.setItem('gl_history',JSON.stringify(h));
  renderCardio();
}

function editCardio(){
  // Go back to form, pre-fill current values
  var c=JSON.parse(localStorage.getItem('gl_cardio')||'null');
  if(c){
    var ds=document.getElementById('c-duree');
    var ps=document.getElementById('c-pente');
    var vs=document.getElementById('c-vitesse');
    for(var i=0;i<ds.options.length;i++) if(parseInt(ds.options[i].value)===c.duree) ds.selectedIndex=i;
    for(var i=0;i<ps.options.length;i++) if(parseFloat(ps.options[i].value)===c.pente) ps.selectedIndex=i;
    for(var i=0;i<vs.options.length;i++) if(parseFloat(vs.options[i].value)===c.vitesse) vs.selectedIndex=i;
  }
  document.getElementById('cardio-done').style.display='none';
  document.getElementById('cardio-form').style.display='block';
  document.getElementById('cardio-card').classList.remove('done');
}

function removeCardio(){
  localStorage.removeItem('gl_cardio');
  var h=JSON.parse(localStorage.getItem('gl_history')||'{}');
  var key=todayKey();
  if(h[key]){
    if(Array.isArray(h[key])) h[key]={entries:h[key],cardio:null};
    else h[key].cardio=null;
    localStorage.setItem('gl_history',JSON.stringify(h));
  }
  renderCardio();
}

function renderCardio(){
  var c=JSON.parse(localStorage.getItem('gl_cardio')||'null');
  var form=document.getElementById('cardio-form');
  var done=document.getElementById('cardio-done');
  var card=document.getElementById('cardio-card');
  if(!form||!done) return;
  if(!c){
    form.style.display='block';
    done.style.display='none';
    card.classList.remove('done');
    return;
  }
  // Show done state
  document.getElementById('cardio-done-summary').textContent=c.duree+' min · '+c.pente+'% pente · '+c.vitesse+' km/h';
  form.style.display='none';
  done.style.display='block';
  card.classList.add('done');
}

// ── NAVIGATION ──────────────────────────
var PAGE_TITLES={accueil:'Accueil',seance:'Séance',historique:'Historique',stats:'Stats',params:'Paramètres'};

function navTo(name){
  ['accueil','seance','historique','stats','params'].forEach(function(n){
    var p=document.getElementById('page-'+n); if(p) p.classList.toggle('active',n===name);
    var b=document.getElementById('bn-'+n);   if(b) b.classList.toggle('active',n===name);
  });
  var tt=document.getElementById('topbar-title'); if(tt) tt.textContent=PAGE_TITLES[name]||'';
  var bar=document.getElementById('bar-seance');   if(bar) bar.style.display=name==='seance'?'block':'none';
  if(name==='historique') renderHistory();
  if(name==='stats'){renderStats();renderSheetsConfig();}
  if(name==='params') renderParamsPage();
  if(name==='accueil') renderAccueil();
  var pw=document.getElementById('pages-wrapper'); if(pw) pw.scrollTop=0;
}

function showTab(name){navTo(name);}
function renderParamsPage(){
  renderSheetsConfig();
  // Temps mémorisés
  var mt=JSON.parse(localStorage.getItem('gl_exo_timers')||'{}');
  var tEl=document.getElementById('list-exo-timers');
  if(tEl){
    var te=Object.entries(mt);
    tEl.innerHTML=!te.length
      ?'<p style="font-size:13px;color:var(--mu);">Aucun temps mémorisé.</p>'
      :te.map(function(kv){
        return '<div style="display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid var(--bd);font-size:13px;">'+
          '<span>'+kv[0]+'</span>'+
          '<div style="display:flex;gap:8px;align-items:center;">'+
            '<span style="color:var(--ac);">'+kv[1]+'s</span>'+
			`<button onclick="delExoTimer('${kv[0]}')" style="font-size:14px;color:var(--rd);background:none;border:none;cursor:pointer;">×</button>`+
          '</div></div>';
      }).join('');
  }
  // Poids max mémorisés
  var mw=JSON.parse(localStorage.getItem('gl_max_weights')||'{}');
  var wEl=document.getElementById('list-max-weights');
  if(wEl){
    var we=Object.entries(mw).sort(function(a,b){return b[1]-a[1];});
    wEl.innerHTML=!we.length
      ?'<p style="font-size:13px;color:var(--mu);">Aucun poids mémorisé.</p>'
      :we.map(function(kv){
        return '<div style="display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid var(--bd);font-size:13px;">'+
          '<span>'+kv[0]+'</span>'+
          '<div style="display:flex;gap:8px;align-items:center;">'+
            '<span style="color:var(--ac);">'+kv[1]+' kg</span>'+
           `<button onclick="delMaxWeight('${kv[0]}')" style="font-size:14px;color:var(--rd);background:none;border:none;cursor:pointer;">×</button>`+
          '</div></div>';
      }).join('');
  }
}

// ── ACCUEIL DASHBOARD ────────────────────
function renderAccueil(){
  var h=JSON.parse(localStorage.getItem('gl_history')||'{}');
  var keys=Object.keys(h).sort().reverse();
  function getEntries(k){return Array.isArray(h[k])?h[k]:(h[k].entries||[]);}
  var totalVol=keys.reduce(function(a,k){return a+getEntries(k).reduce(function(b,e){return b+vol(e);},0);},0);
  var best1rm=keys.reduce(function(a,k){return Math.max(a,getEntries(k).reduce(function(b,e){return Math.max(b,e.rm1est||0);},0));},0);
  var now=new Date();
  var thisMonth=keys.filter(function(k){var d=new Date(k+'T00:00:00');return d.getMonth()===now.getMonth()&&d.getFullYear()===now.getFullYear();}).length;
  var hk=document.getElementById('hk-seances'); if(hk) hk.textContent=keys.length;
  var hv=document.getElementById('hk-vol'); if(hv) hv.textContent=totalVol>=1000?(totalVol/1000).toFixed(1)+'t':totalVol+'kg';
  var hm=document.getElementById('hk-month'); if(hm) hm.textContent=thisMonth;
  var hr=document.getElementById('hk-1rm'); if(hr) hr.textContent=best1rm?best1rm+'kg':'—';
  var hg=document.getElementById('home-greeting');
  if(hg){var h2=new Date().getHours();hg.textContent=h2<12?'Bonjour ☀️':h2<18?'Bon après-midi 💪':'Bonsoir 🌙';}
  var lc=document.getElementById('home-last-content');
  if(lc){
    if(!keys.length){lc.innerHTML='<div style="font-size:13px;color:var(--mu);">Aucune séance enregistrée.</div>';}
    else{
      var lk=keys[0]; var le=getEntries(lk);
      var d=new Date(lk+'T00:00:00');
      var ds=d.toLocaleDateString('fr-FR',{weekday:'long',day:'numeric',month:'long'});
      lc.innerHTML='<div style="font-size:12px;color:var(--mu);margin-bottom:8px;">'+ds+'</div>'+
        le.slice(0,4).map(function(e){
          return '<div class="home-exo-row"><span>'+e.icon+' '+e.nom+'</span>'+
            '<span style="color:var(--ac);font-weight:500;">'+e.poids+' kg × '+e.reps+'r</span></div>';
        }).join('')+
        (le.length>4?'<div style="font-size:12px;color:var(--mu);margin-top:6px;">+'+(le.length-4)+' exercice(s)...</div>':'');
    }
  }
}

// ─────────────────────────────────────────
// THÈME
// ─────────────────────────────────────────
function initTheme(){
  var saved=localStorage.getItem('gl_theme');
  var root=document.documentElement;
  var btn=document.getElementById('theme-btn');
  if(saved==='light'){
    root.classList.remove('dark'); root.classList.add('light');
    if(btn) btn.textContent='☀️';
  } else if(saved==='dark'){
    root.classList.remove('light'); root.classList.add('dark');
    if(btn) btn.textContent='🌙';
  } else {
    var prefersDark=window.matchMedia('(prefers-color-scheme:dark)').matches;
    if(btn) btn.textContent=prefersDark?'🌙':'☀️';
  }
}

function toggleTheme(){
  var root=document.documentElement;
  var btn=document.getElementById('theme-btn');
  var meta=document.querySelector('meta[name=theme-color]');
  if(root.classList.contains('light')){
    root.classList.remove('light'); root.classList.add('dark');
    localStorage.setItem('gl_theme','dark');
    if(btn) btn.textContent='🌙';
    if(meta) meta.content='#0f0f0f';
  } else {
    root.classList.remove('dark'); root.classList.add('light');
    localStorage.setItem('gl_theme','light');
    if(btn) btn.textContent='☀️';
    if(meta) meta.content='#f4f4f0';
  }
}

window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change',function(e){
  if(!localStorage.getItem('gl_theme')){
    var btn=document.getElementById('theme-btn');
    if(btn) btn.textContent=e.matches?'🌙':'☀️';
  }
});

// ─────────────────────────────────────────
// BOOT
// ─────────────────────────────────────────
initTheme();
syncTpre();
renderSheetsConfig();
renderCardio();
renderSession();
renderAccueil();
navTo('seance');