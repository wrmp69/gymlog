// ─────────────────────────────────────────
// MODULE : MACHINES (BLOC 1)
// ─────────────────────────────────────────

// Liste complète des machines et exercices disponibles.

const MACHINES = Object.freeze ([
  {nom:"Chest Press",                            groupe:"Pectoraux", icon:"🏋️‍♂️",poids:[4.5,11,18,25,32,39,45,52,59,66,73,79,86,93,100,107,113]},
  {nom:"Pec Fly",                                groupe:"Pectoraux", icon:"🏋️‍♂️",poids:[4.5,11,18,25,32,39,45,52,59,66,73,79,86,93,100,107,113,120,127,134]},
  {nom:"Développé couché haltères",              groupe:"Pectoraux", icon:"🏋️‍♂️",poids:[6,7,8,9,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40]},
  {nom:"Développé incliné Smith machine",        groupe:"Pectoraux", icon:"🏋️‍♂️",poids:[10,12.5,15,17.5,20,22.5,25,27.5,30,32.5,35,37.5,40,42.5,45,47.5,50]},
  {nom:"Développé incliné haltères",             groupe:"Pectoraux", icon:"🏋️‍♂️",poids:[5,6,7,8,9,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40]},

  {nom:"Abducteurs machine",                     groupe:"Jambes",    icon:"🦵",poids:[4.3,11,18,25,32,39,45,52,59,66,73,79,86,93,100]},
  {nom:"Adducteurs machine",                     groupe:"Jambes",    icon:"🦵",poids:[4.3,11,18,25,32,39,45,52,59,66,73,79,86,93,100]},
  {nom:"Goblet squat?",                          groupe:"Jambes",    icon:"🦵",poids:[10,15,20,25,30,35,40,45,50,55,60]},
  {nom:"Hack squat?",                            groupe:"Jambes",    icon:"🦵",poids:[20,30,40,50,60,70,80,90,100,120]},
  {nom:"Leg curl",                               groupe:"Jambes",    icon:"🦵",poids:[4.3,11,18,25,32,39,45,52,59,66,73,79,86,93,100,107,113]},
  {nom:"Leg curl couché?",                       groupe:"Jambes",    icon:"🦵",poids:[10,15,20,25,30,35,40,45,50,55,60]},
  {nom:"Leg extension",                          groupe:"Jambes",    icon:"🦵",poids:[4.3,11,18,25,32,39,45,52,59,66,73,79,86,93,100,107,113]},
  {nom:"Presse convergente?",                    groupe:"Jambes",    icon:"🦵",poids:[20,25,30,35,40,45,50,55,60,65,70,75,80]},
  {nom:"Squat Smith machine?",                   groupe:"Jambes",    icon:"🦵",poids:[20,30,40,50,60,70,80,90,100,110,120]},

  {nom:"Deltoïde arrière (Rev fly)",             groupe:"Épaules",   icon:"🛡️",poids:[4.5,11,18,25,32,39,45,52,59,66,73,79,86,93,100,107,113,120,127,134]},
  {nom:"Développé militaire Smith machine",      groupe:"Épaules",   icon:"🛡️",poids:[10,12.5,15,17.5,20,22.5,25,27.5,30,32.5,35,37.5,40,42.5,45,47.5,50]},
  {nom:"Développé militaire haltères",           groupe:"Épaules",   icon:"🛡️",poids:[4,5,6,7,8,9,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40]},
  {nom:"Élévation frontale haltères",            groupe:"Épaules",   icon:"🛡️",poids:[4,5,6,7,8,9,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40]},
  {nom:"Élévation latérale haltères",            groupe:"Épaules",   icon:"🛡️",poids:[4,5,6,7,8,9,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40]},
  {nom:"Élévation latérale poulie",              groupe:"Épaules",   icon:"🛡️",poids:[2.3,4.5,6.8,9,11.3,13.5,15.8,18,20.3,22.5,24.8,27,29.3,31.5,33.8,36,38.3,40.5,42.8,45]},

  {nom:"Extension lombaire",                     groupe:"Dos",       icon:"🧗‍♂️",poids:[80]},
  {nom:"Traction",                               groupe:"Dos",       icon:"🧗‍♂️",poids:[80]},
  {nom:"Traction assistée?",                     groupe:"Dos",       icon:"🧗‍♂️",poids:[4.5,9,14,18,23,27,32,36,41,45,52,59,66,73,79,86,93,100,107,113]},
  {nom:"Tirage divergent",                	   	 groupe:"Dos",       icon:"🧗‍♂️",poids:[4.5,9,14,18,23,27,32,36,41,45,52,59,66,73,79,86,93,100,107,113]},
  {nom:"Tirage horizontal prise neutre",         groupe:"Dos",       icon:"🧗‍♂️",poids:[2.3,4.5,6.8,9,11.3,13.5,15.8,18,20.3,22.5,24.8,27,29.3,31.5,33.8,36,38.3,40.5,42.8,45]},
  {nom:"Tirage horizontal prise serrée",         groupe:"Dos",       icon:"🧗‍♂️",poids:[2.3,4.5,6.8,9,11.3,13.5,15.8,18,20.3,22.5,24.8,27,29.3,31.5,33.8,36,38.3,40.5,42.8,45]},
  {nom:"Tirage horizontal machine",              groupe:"Dos",       icon:"🧗‍♂️",poids:[4.5,11,18,25,32,39,45,52,59,66,73,79,86,93,100,107,113,120,127,134]},
  {nom:"Tirage menton barre EZ?",                groupe:"Dos",       icon:"🧗‍♂️",poids:[4.5,9,14,18,23,27,32,36,41,45,52,59,66,73,79,86,93,100,107,113]},
  {nom:"Tirage vertical machine?",               groupe:"Dos",       icon:"🧗‍♂️",poids:[4.5,11,18,25,32,39,45,52,59,66,73,79,86,93,100,107,113,120,127,134]},
  {nom:"Tirage vertical pronation prise large",  groupe:"Dos",       icon:"🧗‍♂️",poids:[4.5,11,18,25,32,39,45,52,59,66,73,79,86,93,100,107,113,120,127,134]},
  {nom:"Tirage vertical supination prise serrée",groupe:"Dos",       icon:"🧗‍♂️",poids:[4.5,11,18,25,32,39,45,52,59,66,73,79,86,93,100,107,113,120,127,134]},

  {nom:"Curl pupitre",                           groupe:"Biceps",    icon:"🦾",poids:[4.5,9,14,18,23,27,32,36,41,45,50,54,59,64,68,73,77,82,86,91]},
  {nom:"Curl haltère banc incliné",              groupe:"Biceps",    icon:"🦾",poids:[5,6,7,8,9,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40]},
  {nom:"Curl marteau unilatéral",                groupe:"Biceps",    icon:"🦾",poids:[5,6,7,8,9,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40]},
  {nom:"Curl marteau",                           groupe:"Biceps",    icon:"🦾",poids:[5,6,7,8,9,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40]},
  {nom:"Curl biceps barre EZ",                   groupe:"Biceps",    icon:"🦾",poids:[10,15,20,25,30,35]},
  {nom:"Curl biceps à la poulie",                groupe:"Biceps",    icon:"🦾",poids:[2.3,4.5,6.8,9,11.3,13.5,15.8,18,20.3,22.5,24.8,27,29.3,31.5,33.8,36,38.3,40.5,42.8,45]},
  {nom:"Curl marteau corde",                     groupe:"Biceps",    icon:"🦾",poids:[2.3,4.5,6.8,9,11.3,13.5,15.8,18,20.3,22.5,24.8,27,29.3,31.5,33.8,36,38.3,40.5,42.8,45]},

  {nom:"Dips lesté?",                            groupe:"Triceps",   icon:"🔱",poids:[1,2,3,4,5,6,7,8,9,10,15,20,25,30,35,40,45,50,55,60]},
  {nom:"Dips non lesté PDC",                     groupe:"Triceps",   icon:"🔱",poids:[80]},
  {nom:"Dips Press",                             groupe:"Triceps",   icon:"🔱",poids:[4.5,9,14,18,23,27,32,36,41,45,50,54,59,64,68,73,77,82,86,91]},
  {nom:"Extension triceps barre poulie",         groupe:"Triceps",   icon:"🔱",poids:[2.3,4.5,6.8,9,11.3,13.5,15.8,18,20.3,22.5,24.8,27,29.3,31.5,33.8,36,38.3,40.5,42.8,45]},
  {nom:"Extension triceps corde poulie",         groupe:"Triceps",   icon:"🔱",poids:[2.3,4.5,6.8,9,11.3,13.5,15.8,18,20.3,22.5,24.8,27,29.3,31.5,33.8,36,38.3,40.5,42.8,45]},
  {nom:"Triceps barre front EZ",                 groupe:"Triceps",   icon:"🔱",poids:[10,15,20,25,30,35]},
  {nom:"Triceps barre front poulie",             groupe:"Triceps",   icon:"🔱",poids:[2.3,4.5,6.8,9,11.3,13.5,15.8,18,20.3,22.5,24.8,27,29.3,31.5,33.8,36,38.3,40.5,42.8,45]},

  {nom:"Crunch abdos corde poulie",              groupe:"Abdos",     icon:"🔥",poids:[2.3,4.5,6.8,9,11.3,13.5,15.8,18,20.3,22.5,24.8,27,29.3,31.5,33.8,36,38.3,40.5,42.8,45]},
  {nom:"Crunch abdos machine?",                  groupe:"Abdos",     icon:"🔥",poids:[1,2,3,4,5,6,7,8,9,10,15,20,25,30,35,40,45,50,55,60]},
  {nom:"Relevé de jambes PDC",                   groupe:"Abdos",     icon:"🔥",poids:[80]},

  {nom:"Mollet presse?",                         groupe:"Mollets",   icon:"🐐",poids:[1,2,3,4,5,6,7,8,9,10,15,20,25,30,35,40,45,50,55,60]},
  {nom:"Mollet presse Smith machine",            groupe:"Mollets",   icon:"🐐",poids:[10,15,20,25,30,35,40,45,50,55,60]},
]);


// ─────────────────────────────────────────
// BLOC 2 — HELPERS GÉNÉRAUX (VERSION PROPRE)
// ─────────────────────────────────────────

// Format mm:ss
function fmtTime(sec) {
  sec = Math.max(0, parseInt(sec) || 0);
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

// Date du jour (clé YYYY-MM-DD)
function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

// Lecture JSON sécurisée
function loadJSON(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

// Écriture JSON
function saveJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// ─── CACHE HISTORIQUE ───
let _historyCache = null;

function getHistory() {
  if (!_historyCache) _historyCache = loadJSON('gl_history', {});
  return _historyCache;
}

function saveHistory(h) {
  _historyCache = h;
  saveJSON('gl_history', h);
}

function invalidateHistory() {
  _historyCache = null;
}

let _machinesCache = null;

function invalidateMachines() {
  _machinesCache = null;
}

// Volume (poids × reps × séries)
function vol(e) {
  return parseInt(e.poids) * parseInt(e.series) * parseInt(e.reps);
}

// Formule Epley : 1RM estimé
function calc1RM(poids, reps) {
  poids = parseInt(poids) || 0;
  reps = parseInt(reps) || 0;
  return reps <= 1 ? poids : Math.round(poids * (1 + reps / 30));
}

// 1RM estimé max d’une entrée
function best1RM(entry) {
  return calc1RM(entry.poids, entry.reps);
}

// Format date courte pour les graphiques
function fmtDate(k) {
  return new Date(k + 'T00:00:00').toLocaleDateString('fr-FR', {
    weekday: 'short',
    day: 'numeric',
    month: 'short'
  });
}

// Format date longue (historique)
function fmtDateLong(k) {
  return new Date(k + 'T00:00:00').toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });
}

// Lecture des entrées d'une journée (compat. ancien et nouveau format)
function getEntries(dayData) {
  return Array.isArray(dayData) ? dayData : (dayData?.entries || []);
}

const GROUPE_ICONS = {
  'Abdos': '🔥', 'Biceps': '🦾', 'Dos': '🧗‍♂️', 'Épaules': '🛡️',
  'Jambes': '🦵', 'Mollets': '🐐', 'Pectoraux': '🏋️‍♂️', 'Triceps': '🔱'
};

// ─── TOASTS ───
let _toastContainer = null;

function getToastContainer() {
  if (!_toastContainer) {
    _toastContainer = document.createElement('div');
    _toastContainer.className = 'toast-container';
    document.body.appendChild(_toastContainer);
  }
  return _toastContainer;
}

function toast(msg, type = 'info', duration = 2500) {
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.textContent = msg;
  getToastContainer().appendChild(el);
  setTimeout(() => el.remove(), duration);
}

function confirm2(msg, confirmLabel = 'Confirmer', danger = true) {
  return new Promise(resolve => {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
      <div class="modal-box">
        <div class="modal-title">Confirmation</div>
        <div class="modal-msg">${msg}</div>
        <div class="modal-actions">
          <button class="modal-btn cancel">Annuler</button>
          <button class="modal-btn confirm ${danger ? '' : 'green'}">${confirmLabel}</button>
        </div>
      </div>`;

    overlay.querySelector('.cancel').addEventListener('click', () => {
      overlay.remove();
      resolve(false);
    });

    overlay.querySelector('.confirm').addEventListener('click', () => {
      overlay.remove();
      resolve(true);
    });

    document.body.appendChild(overlay);
  });
}

function parsePoids(raw) {
  return raw.split(',')
    .map(p => parseFloat(p.trim()))
    .filter(p => !isNaN(p) && p > 0)
    .sort((a, b) => a - b);
}

function groupOptions(selected = '') {
  return Object.entries(GROUPE_ICONS).map(([g, ico]) =>
    `<option value="${g}" ${selected === g ? 'selected' : ''}>${ico} ${g}</option>`
  ).join('');
}


// ─────────────────────────────────────────
// BLOC 3 — ÉTAT GLOBAL DE L’APPLICATION
// ─────────────────────────────────────────

// Séance du jour (nouveau système)
let session = loadJSON('gl_session', []);

// Paramètres des graphiques
let chartDays = 7;          // 7j par défaut
let chartMode = 'volume';   // 'volume' ou '1RM'
let myChart = null;

// Timer
let TIV = null;                                     // interval ID
let TTOTAL = parseInt(localStorage.getItem('gl_timer_dur') || '60'); // durée par défaut
let TLEFT = TTOTAL;                                 // temps restant
const CIRC = 2 * Math.PI * 85;                      // cercle principal
const MINI_CIRC = 2 * Math.PI * 15;                 // mini cercle
let timerMini = false;                              // mini-timer actif ?

// Date dans le header
document.getElementById('header-date').textContent =
  new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });


// ─────────────────────────────────────────
// TEMPLATES
// ─────────────────────────────────────────

function loadTemplates() {
  return loadJSON('gl_templates', []);
}

function saveTemplates(list) {
  saveJSON('gl_templates', list);
}

function renderTemplateList() {
  const list = loadTemplates();
  const el = document.getElementById('template-list');
  if (!el) return;

  if (!list.length) {
    el.innerHTML = `<p class="memo-empty">Aucun template créé.</p>`;
    return;
  }

  el.innerHTML = list.map((t, i) => `
    <div class="template-row">
      <div class="template-info">
        <div class="template-name">${t.nom}</div>
        <div class="template-meta">${t.exercices.length} exercice(s) · Tap ▶ pour commencer</div>
      </div>
      <div class="template-actions">
        <button class="template-btn load" data-action="load-template" data-param="${i}">▶ Charger</button>
        <button class="template-btn del" data-action="delete-template" data-param="${i}">✕</button>
      </div>
    </div>
  `).join('');
}

async function loadTemplate(index) {
  const list = loadTemplates();
  const t = list[index];
  if (!t) return;

  if (session.length) {
    const ok = await confirm2(`Charger "${t.nom}" ? La séance en cours sera effacée.`);
    if (!ok) return;
    session = [];
    saveJSON('gl_session', session);
  }

  startFollowFromTemplate(t);
}

async function deleteTemplate(index) {
  if (!await confirm2('Supprimer ce template ?')) return;
  const list = loadTemplates();
  list.splice(index, 1);
  saveTemplates(list);
  renderTemplateList();
  toast('Template supprimé.', 'ok');
}

function openCreateTemplateModal() {
  let exercices = [];

  const overlay = document.createElement('div');
  overlay.className = 'machine-modal-overlay';

  function renderExoList() {
    const listEl = overlay.querySelector('#tpl-exo-list');
    if (!exercices.length) {
      listEl.innerHTML = `<p class="memo-empty">Aucun exercice ajouté.</p>`;
      return;
    }
    listEl.innerHTML = exercices.map((e, i) => `
      <div class="tpl-exo-item">
        <span>${e.icon} ${e.nom}</span>
        <button class="tpl-exo-remove" data-remove="${i}">✕</button>
      </div>
    `).join('');

    listEl.querySelectorAll('[data-remove]').forEach(btn => {
      btn.addEventListener('click', () => {
        exercices.splice(parseInt(btn.dataset.remove), 1);
        renderExoList();
      });
    });
  }

  overlay.innerHTML = `
    <div class="machine-modal-box">
      <div class="machine-modal-title">+ Nouveau template</div>

      <div class="machine-modal-field">
        <label>Nom du template</label>
        <input type="text" id="tpl-nom" placeholder="Ex: Push day">
      </div>

      <div class="machine-modal-field">
        <label>Groupe musculaire</label>
        <select id="tpl-groupe">
          ${groupOptions()}
        </select>
      </div>

      <div class="machine-modal-field">
        <label>Exercice</label>
        <select id="tpl-machine"></select>
      </div>

      <button class="btn-ghost w100 mb8" id="tpl-add-exo">+ Ajouter cet exercice</button>

      <div class="tpl-exo-list" id="tpl-exo-list"></div>

      <div class="machine-modal-actions">
        <button class="modal-btn cancel" id="tpl-cancel">Annuler</button>
        <button class="modal-btn confirm green" id="tpl-save">Sauvegarder</button>
      </div>
    </div>`;

  document.body.appendChild(overlay);
  renderExoList();

  function updateMachines() {
    const g = overlay.querySelector('#tpl-groupe').value;
    const all = getAllMachines();
    const filtered = g ? all.filter(m => m.groupe === g) : all;
    overlay.querySelector('#tpl-machine').innerHTML = filtered.map(m =>
      `<option value="${all.indexOf(m)}">${m.icon} ${m.nom}</option>`
    ).join('');
  }

  overlay.querySelector('#tpl-groupe').addEventListener('change', updateMachines);
  updateMachines();

  overlay.querySelector('#tpl-add-exo').addEventListener('click', () => {
    const idx = parseInt(overlay.querySelector('#tpl-machine').value);
    const m = getAllMachines()[idx];
    if (!m) return;
    if (exercices.find(e => e.nom === m.nom)) {
      toast(`${m.nom} déjà ajouté.`, 'warn');
      return;
    }
    exercices.push({ nom: m.nom, icon: m.icon, groupe: m.groupe });
    renderExoList();
    toast(`${m.nom} ajouté.`, 'ok');
  });

  overlay.querySelector('#tpl-cancel').addEventListener('click', () => overlay.remove());

  overlay.querySelector('#tpl-save').addEventListener('click', () => {
    const nom = overlay.querySelector('#tpl-nom').value.trim();
    if (!nom) { toast('Donne un nom au template.', 'warn'); return; }
    if (!exercices.length) { toast('Ajoute au moins un exercice.', 'warn'); return; }
    const list = loadTemplates();
    list.push({ nom, exercices });
    saveTemplates(list);
    overlay.remove();
    renderTemplateList();
    toast(`Template "${nom}" sauvegardé.`, 'ok');
  });
}
  
// ─────────────────────────────────────────
// BLOC 4 — UI / DOM (VERSION PROPRE)
// ─────────────────────────────────────────

// Met à jour la liste des exercices mémorisés (poids max + timers)
document.getElementById('memo-search').addEventListener('input', renderExoMemoList);

function renderExoMemoList() {
  const maxW = loadJSON('gl_max_weights', {});
  const timers = loadJSON('gl_exo_timers', {});

  const exos = new Set([...Object.keys(maxW), ...Object.keys(timers)]);
  const search = document.getElementById('memo-search').value.toLowerCase();
  const container = document.getElementById('exo-memo-list');

  // Mémoriser les groupes et exos ouverts avant de reconstruire
  const openGroups = new Set();
  const openExos = new Set();
  container.querySelectorAll('.group-content.open').forEach(el => {
    openGroups.add(el.closest('.group-accordion')?.querySelector('.group-header span')?.textContent?.trim());
  });
  container.querySelectorAll('.exo-content.open').forEach(el => {
    openExos.add(el.closest('.exo-item')?.querySelector('.exo-header span')?.textContent?.trim());
  });

  container.innerHTML = '';

  const groups = {};
  exos.forEach(exo => {
    const m = getAllMachines().find(x => x.nom === exo);
    if (!m) return;
    const g = m.groupe || 'Autres';
    if (!groups[g]) groups[g] = [];
    groups[g].push({ exo, icon: m.icon });
  });

  Object.keys(groups).sort().forEach(groupe => {
    const gBlock = document.createElement('div');
    gBlock.className = 'group-accordion';

    const groupLabel = `${GROUPE_ICONS[groupe] || '📌'} ${groupe}`;

    gBlock.innerHTML = `
      <div class="group-header">
        <span>${groupLabel}</span>
        <span>▼</span>
      </div>
      <div class="group-content"></div>
    `;

    const gContent = gBlock.querySelector('.group-content');

    // Rouvrir si était ouvert
    if (openGroups.has(groupLabel)) gContent.classList.add('open');

    gBlock.querySelector('.group-header').addEventListener('click', () => {
      gContent.classList.toggle('open');
    });

    let groupHasMatch = false;

    groups[groupe].forEach(item => {
      const match = search && item.exo.toLowerCase().includes(search);
      const poids = maxW[item.exo] ? maxW[item.exo] + ' kg' : '—';
      const temps = timers[item.exo] ? timers[item.exo] + ' s' : '—';
      const exoLabel = `${item.icon} ${item.exo}`;

      const exo = document.createElement('div');
      exo.className = 'exo-item';

      exo.innerHTML = `
        <div class="exo-header">
          <span>${exoLabel}</span>
          <span>▶️</span>
        </div>
        <div class="exo-content">
          <div class="exo-memo-row">
            <span>• Poids max : <b>${poids}</b></span>
            ${maxW[item.exo] ? `<button class="memo-del-small" data-action="delete-exo-poids" data-param="${item.exo}">✕</button>` : ''}
          </div>
          <div class="exo-memo-row">
            <span>• Temps repos : <b>${temps}</b></span>
            ${timers[item.exo] ? `<button class="memo-del-small" data-action="delete-exo-timer" data-param="${item.exo}">✕</button>` : ''}
          </div>
          <button class="accordion-btn-del" data-action="delete-exo-memo" data-param="${item.exo}">Tout supprimer</button>
        </div>
      `;

      const exoContent = exo.querySelector('.exo-content');

      // Rouvrir si était ouvert
      if (openExos.has(exoLabel)) exoContent.classList.add('open');

      exo.querySelector('.exo-header').addEventListener('click', () => {
        exoContent.classList.toggle('open');
      });

      if (search) {
        if (match) { exo.style.display = 'block'; groupHasMatch = true; }
        else exo.style.display = 'none';
      }

      gContent.appendChild(exo);
    });

    if (search) {
      gBlock.style.display = groupHasMatch ? 'block' : 'none';
      if (groupHasMatch) gContent.classList.add('open');
    } else {
      gBlock.style.display = 'block';
    }

    container.appendChild(gBlock);
  });
}

async function deleteExoTimer(exo) {
  if (!await confirm2(`Supprimer le timer mémorisé pour "${exo}" ?`)) return;
  const timers = loadJSON('gl_exo_timers', {});
  delete timers[exo];
  saveJSON('gl_exo_timers', timers);
  renderExoMemoList();
  toast('Timer supprimé.', 'ok');
}

async function deleteExoPoids(exo) {
  if (!await confirm2(`Supprimer le poids max mémorisé pour "${exo}" ?`)) return;
  const maxW = loadJSON('gl_max_weights', {});
  delete maxW[exo];
  saveJSON('gl_max_weights', maxW);
  renderExoMemoList();
  toast('Poids supprimé.', 'ok');
}

async function deleteExoMemo(exo) {
  if (!await confirm2(`Supprimer timer ET poids max pour "${exo}" ?`)) return;
  const timers = loadJSON('gl_exo_timers', {});
  const maxW = loadJSON('gl_max_weights', {});
  delete timers[exo];
  delete maxW[exo];
  saveJSON('gl_exo_timers', timers);
  saveJSON('gl_max_weights', maxW);
  renderExoMemoList();
  toast('Mémo supprimé.', 'ok');
}



// ─────────────────────────────────────────
// BLOC 6 — LOGIQUE SÉANCE (NOUVEAU SYSTÈME)
// ─────────────────────────────────────────

// Ajout d’une entrée (nouveau système)
function addEntry() {
  const idx = parseInt(document.getElementById('sel-machine').value);
  if (isNaN(idx)) {
    document.getElementById('sel-machine').focus();
    return;
  }

  const m = getAllMachines()[idx];
  const poids = document.getElementById('sel-poids').value;
  const series = document.getElementById('sel-series').value;
  const reps = document.getElementById('sel-reps').value;
  const rm1reel = document.getElementById('inp-1rm').value;

  const entry = {
    nom: m.nom,
    groupe: m.groupe,
    icon: m.icon,
    poids,
    series,
    reps,
    rm1est: calc1RM(poids, reps),
    rm1reel: rm1reel ? parseInt(rm1reel) : null,
    id: Date.now()
  };

  session.push(entry);
  saveJSON('gl_session', session);

  document.getElementById('inp-1rm').value = '';
  const btn = document.getElementById('save-btn');
  btn.className = 'btn-ghost';
  btn.textContent = '💾 Sauvegarder';

  // Auto-incrément séries
  const selS = document.getElementById('sel-series');
  selS.value = String(Math.min(parseInt(series) + 1, 6));

  renderSession();
  startTimer(entry);
}



// ─────────────────────────────────────────
// DRAG & DROP POUR RÉORGANISER
// ─────────────────────────────────────────

function attachDragDrop() {
  const list = document.getElementById('entry-list');
  const wraps = list.querySelectorAll('.entry-wrap');
  let dragSrc = null;

  // Cloner chaque wrap pour supprimer les anciens listeners
  wraps.forEach(wrap => {
    const clone = wrap.cloneNode(true);
    wrap.parentNode.replaceChild(clone, wrap);
  });

  list.querySelectorAll('.entry-wrap').forEach(wrap => {
    wrap.addEventListener('dragstart', e => {
      dragSrc = wrap;
      wrap.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', wrap.id);
    });

    wrap.addEventListener('dragend', () => {
      wrap.classList.remove('dragging');
      list.querySelectorAll('.entry-wrap').forEach(w => w.classList.remove('drag-over'));
      syncSessionFromDOM();
      attachDragDrop();
    });

    wrap.addEventListener('dragover', e => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      if (wrap !== dragSrc) {
        list.querySelectorAll('.entry-wrap').forEach(w => w.classList.remove('drag-over'));
        wrap.classList.add('drag-over');
      }
    });

    wrap.addEventListener('drop', e => {
      e.preventDefault();
      if (dragSrc && dragSrc !== wrap) {
        const all = Array.from(list.querySelectorAll('.entry-wrap'));
        const srcIdx = all.indexOf(dragSrc);
        const dstIdx = all.indexOf(wrap);
        if (srcIdx < dstIdx) list.insertBefore(dragSrc, wrap.nextSibling);
        else list.insertBefore(dragSrc, wrap);
      }
      wrap.classList.remove('drag-over');
    });
  });
}

function syncSessionFromDOM() {
  const list = document.getElementById('entry-list');
  const wraps = list.querySelectorAll('.entry-wrap');
  const ids = Array.from(wraps).map(w => parseInt(w.id.replace('ew-', '')));

  session.sort((a, b) => ids.indexOf(a.id) - ids.indexOf(b.id));
  saveJSON('gl_session', session);
  renderVolume();
}

// ─────────────────────────────────────────
// REMPLIR LA LISTE DES MACHINES (NOUVEAU SYSTÈME)
// ─────────────────────────────────────────
function renderMachineSelect() {
  const sel = document.getElementById('sel-machine');
  if (!sel) return;

  const all = getAllMachines();
  sel.innerHTML = all.map((m, i) =>
    `<option value="${i}">${m.icon} ${m.nom}${m.isCustom ? ' ★' : ''}</option>`
  ).join('');
}

// ─────────────────────────────────────────
// FILTRER LES MACHINES PAR GROUPE
// ─────────────────────────────────────────
function filterMachines() {
  const g = document.getElementById('sel-groupe').value;
  const sel = document.getElementById('sel-machine');

  const all = getAllMachines();
  const list = g ? all.filter(m => m.groupe === g) : all;

  sel.innerHTML = list.map(m => {
    const i = all.indexOf(m);
    return `<option value="${i}">${m.icon} ${m.nom}${m.isCustom ? ' ★' : ''}</option>`;
  }).join('');

  renderPoidsForMachine();
  document.getElementById('sel-series').value = '1';
}

function renderPoidsForMachine() {
  const selM = document.getElementById('sel-machine');
  const selP = document.getElementById('sel-poids');
  if (!selM || !selP) return;

  const idx = parseInt(selM.value);
  if (isNaN(idx)) {
    selP.innerHTML = '<option value="">—</option>';
    return;
  }

  const m = getAllMachines()[idx];
  selP.innerHTML = m.poids.map(p => `<option value="${p}">${p} kg</option>`).join('');

  document.getElementById('sel-series').value = '1';
}



// ─────────────────────────────────────────
// SAUVEGARDE DE LA SÉANCE
// ─────────────────────────────────────────
function saveSession() {
  if (!session.length) {
    toast('Ajoute au moins un exercice.', 'warn');
    return;
  }

  

  const h = getHistory();
  const key = todayKey();

  let cardio = loadJSON('gl_cardio', null);
  if (cardio && cardio.date !== todayKey()) cardio = null;

  const existing = h[key] || { entries: [], cardio: null };

  existing.entries = [...session];
  if (cardio) existing.cardio = cardio;

  h[key] = existing;

  // Mise à jour des poids max persistants
  const mw = loadJSON('gl_max_weights', {});
  session.forEach(e => {
    const p = parseFloat(e.poids);
    if (!mw[e.nom] || p > mw[e.nom]) mw[e.nom] = p;
  });

  saveJSON('gl_max_weights', mw);
  saveHistory(h);

  const btn = document.getElementById('save-btn');
  btn.className = 'btn-ghost ok';
  btn.textContent = '✓ Sauvegardé !';
}

async function clearSession() {
  if (!session.length) return;
  if (!await confirm2('Effacer tous les exercices de la séance en cours ?')) return;

  session = [];
  saveJSON('gl_session', session);
  renderSession();
}

// ─────────────────────────────────────────
// SUPPRESSION D’UNE ENTRÉE
// ─────────────────────────────────────────

function removeEntry(id) {
  session = session.filter(e => e.id !== id);
  saveJSON('gl_session', session);
  renderSession();
}



// ─────────────────────────────────────────
// RENDER SESSION (NOUVEAU SYSTÈME)
// ─────────────────────────────────────────

function renderSession() {
  const list = document.getElementById('entry-list');
  const countEl = document.getElementById('entry-count');
  countEl.textContent = session.length + ' exo';
  countEl.classList.toggle('dis-none', !session.length);

  if (!session.length) {
    list.innerHTML = `<div class="empty"><span class="eico-lg">🏋️</span>Aucun exercice.<br>Lance-toi !</div>`;
    document.getElementById('vol-block').style.display = 'none';
    return;
  }

  // Garder les accordéons déjà ouverts
  const openIds = new Set();
  list.querySelectorAll('.acc-wrap.open').forEach(el => openIds.add(parseInt(el.dataset.id)));

  list.innerHTML = session.map(e => {
    const color = GROUPE_COLORS[e.groupe] || 'var(--mu)';
    const isOpen = openIds.has(e.id);
    return `
    <div class="acc-wrap${isOpen ? ' open' : ''}" data-id="${e.id}">
      <div class="entry-del-bg"><span>🗑 SUPPRIMER</span></div>
      <div class="acc-head" onclick="if(!event.target.closest('button'))accToggle(${e.id})">
        <div class="acc-dot" style="background:${color}"></div>
        <div class="acc-name">${e.nom}</div>
        <span class="tag ac">${e.series}×${e.reps}</span>
        <span class="tag" style="margin-left:4px">${e.poids} kg</span>
        <span class="acc-chevron">▾</span>
      </div>
      <div class="acc-body">
        <div class="acc-grid">
          <div class="acc-stat"><div class="acc-stat-lbl">Séries × Reps</div><div class="acc-stat-val">${e.series} × ${e.reps}</div></div>
          <div class="acc-stat"><div class="acc-stat-lbl">Poids</div><div class="acc-stat-val">${e.poids} kg</div></div>
          <div class="acc-stat"><div class="acc-stat-lbl">Volume</div><div class="acc-stat-val" style="color:var(--ac)">${vol(e).toLocaleString('fr-FR')} kg</div></div>
          <div class="acc-stat"><div class="acc-stat-lbl">1RM estimé</div><div class="acc-stat-val">${e.rm1est} kg${e.rm1reel ? ` <span style="color:var(--mu);font-size:11px">/ réel ${e.rm1reel}</span>` : ''}</div></div>
        </div>
        <div class="acc-actions">
          <button class="acc-btn-timer" data-action="start-timer" data-param="${e.id}">⏱ Repos</button>
          <button class="acc-btn-edit" data-action="edit-entry" data-param="${e.id}">✎ Modifier</button>
          <button class="acc-btn-del" data-action="delete-entry" data-param="${e.id}">Supprimer</button>
        </div>
      </div>
    </div>`;
  }).join('');

  renderVolume();
  document.getElementById('vol-block').style.display = 'block';
}

function accToggle(id) {
  const el = document.querySelector(`.acc-wrap[data-id="${id}"]`);
  if (el) el.classList.toggle('open');
}





// ─────────────────────────────────────────
// VOLUME TOTAL + PAR EXERCICE
// ─────────────────────────────────────────

function renderVolume() {
  const byName = {};

  session.forEach(e => {
    if (!byName[e.nom]) byName[e.nom] = { vol: 0, rm1est: 0, rm1reel: null };
    byName[e.nom].vol += vol(e);
    byName[e.nom].rm1est = Math.max(byName[e.nom].rm1est, e.rm1est);
    if (e.rm1reel) byName[e.nom].rm1reel = Math.max(byName[e.nom].rm1reel || 0, e.rm1reel);
  });

  const tv = session.reduce((a, e) => a + vol(e), 0);

  document.getElementById('vol-list').innerHTML = Object.entries(byName).map(([n, d]) => {
    const rmStr = `
      <span class="vol-rm">
        1RM est. ${d.rm1est} kg${d.rm1reel ? ' | réel ' + d.rm1reel + ' kg' : ''}
      </span>`;

    return `
      <div class="vol-row">
        <span class="vol-name">${n}</span>
        <span class="vol-val">${d.vol.toLocaleString('fr-FR')} kg</span>
        ${rmStr}
      </div>`;
  }).join('');

  document.getElementById('vol-total').innerHTML = `
    <span>Volume total séance</span>
    <span>${tv.toLocaleString('fr-FR')} kg</span>`;
}


// ─────────────────────────────────────────
// HISTORIQUE — VERSION PROPRE
// ─────────────────────────────────────────

async function deleteDay(key) {
  if (!await confirm2('Supprimer la séance du ' + fmtDateLong(key) + ' ?')) return;

  const h = getHistory();
  delete h[key];
  saveHistory(h);

  renderHistory();
  renderStats();
}

function renderHistory() {
  const h = getHistory();
  const keys = Object.keys(h).sort().reverse();
  const c = document.getElementById('history-list');

  if (!keys.length) {
    c.innerHTML = `
      <div class="empty">
        <span class="eico-lg">📋</span>
        Pas encore d'historique.<br>Sauvegarde ta première séance !
      </div>`;
    return;
  }

  c.innerHTML = keys.map(key => {
    const raw = h[key];
    const entries = getEntries(raw);
    const cardio = Array.isArray(raw) ? null : (raw.cardio || null);

    const tv = entries.reduce((a, e) => a + vol(e), 0);

    const cardioStr = cardio ? `
  <div class="hist-cardio">
    <div class="hist-cardio-row">
      <span class="hist-cardio-ico">🚶</span>
      <span class="hist-cardio-txt">${cardio.duree} min · ${cardio.pente}% pente · ${cardio.vitesse} km/h</span>
    </div>
    <button class="hist-cardio-del" data-action="clear-cardio">❌ Supprimer la marche</button>
  </div>` : '';

    return `
      <div class="day-label">${fmtDateLong(key)}</div>
      <div class="day-card">
        <div class="day-head">
          <span class="hist-head-info">
              ${entries.length} exercice(s) · 
              <span class="hist-head-vol">${tv.toLocaleString('fr-FR')} kg vol.</span>
          </span>
          <button class="delbtn" data-action="delete-day" data-param="${key}">Supprimer</button>
        </div>

        ${entries.map(e => {
          const rm = e.rm1est ? `<span class="dtag drm">est. ${e.rm1est}kg</span>` : '';
          const rmr = e.rm1reel ? `<span class="dtag drm-reel">réel ${e.rm1reel}kg</span>` : '';

          return `
            <div class="day-exo">
              <span class="hist-exo-ico">${e.icon}</span>
              <span class="dexo-name">${e.nom}</span>
              <div class="dtags">
                <span class="dtag">${e.poids} kg</span>
                <span class="dtag">${e.series}s·${e.reps}r</span>
                <span class="dtag dv">${vol(e).toLocaleString('fr-FR')}kg</span>
                ${rm}${rmr}
              </div>
            </div>`;
        }).join('')}

        ${cardioStr}
      </div>`;
  }).join('');
}



// ─────────────────────────────────────────
// STATS — VERSION PROPRE
// ─────────────────────────────────────────

function renderStats() {
  const h = getHistory();
  const keys = Object.keys(h).sort();

  document.getElementById('st-seances').textContent = keys.length;
  document.getElementById('st-exos').textContent = keys.reduce((a, k) => a + getEntries(h[k]).length, 0);

  const tv = keys.reduce((a, k) => a + getEntries(h[k]).reduce((b, e) => b + vol(e), 0), 0);
  document.getElementById('st-vol').textContent = (tv / 1000).toFixed(1) + 't';

  const exoSet = new Set();
  keys.forEach(k => getEntries(h[k]).forEach(e => exoSet.add(e.nom)));

  const sel = document.getElementById('sel-chart-exo');
  const cur = sel.value;

  sel.innerHTML = '<option value="">— Choisir un exercice —</option>';
  Array.from(exoSet).sort().forEach(n => {
    const o = document.createElement('option');
    o.value = n;
    o.textContent = n;
    if (n === cur) o.selected = true;
    sel.appendChild(o);
  });

  renderChart();
}

// ─── BOTTOM SHEET ─── //

const GROUPE_COLORS = {
  'Pectoraux':'#a78bfa','Dos':'#22d98a','Jambes':'#38bdf8',
  'Épaules':'#fb923c','Biceps':'#e879f9','Triceps':'#f59e0b',
  'Abdos':'#f87171','Mollets':'#a3e635'
};

let bsSelectedIdx = null;
let bsSelectedPoidsIdx = null;
let bsSeries = 4;
let bsReps = 10;

function bsOpen() {
  document.getElementById('bs-overlay').classList.add('open');
  document.getElementById('bs-sheet').classList.add('open');
  document.body.style.overflow = 'hidden';
  bsShowStep1();
}

function bsClose() {
  document.getElementById('bs-overlay').classList.remove('open');
  document.getElementById('bs-sheet').classList.remove('open');
  document.body.style.overflow = '';
}

function bsShowStep1() {
  document.getElementById('bs-exo-list').style.display = 'flex';
  document.getElementById('bs-params').style.display = 'none';
  bsRenderExos('');
}

function bsRenderExos(groupe) {
  const all = getAllMachines();
  const maxW = loadJSON('gl_max_weights', {});
  const list = groupe ? all.filter(m => m.groupe === groupe) : all;
  document.getElementById('bs-exo-list').innerHTML = list.map(m => {
    const i = all.indexOf(m);
    const color = GROUPE_COLORS[m.groupe] || 'var(--mu)';
    const last = maxW[m.nom] ? `Dern: ${maxW[m.nom]} kg` : '';
    return `<div class="bs-exo-row" onclick="bsSelectExo(${i})">
      <div class="bs-exo-dot" style="background:${color}"></div>
      <div class="bs-exo-name">${m.nom}${m.isCustom ? ' ★' : ''}</div>
      ${last ? `<div class="bs-exo-last">${last}</div>` : ''}
    </div>`;
  }).join('');
}

function bsSelectExo(idx) {
  bsSelectedIdx = idx;
  const m = getAllMachines()[idx];
  const maxW = loadJSON('gl_max_weights', {});
  const color = GROUPE_COLORS[m.groupe] || 'var(--mu)';

  document.getElementById('bs-selected-name').innerHTML =
    `<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${color};margin-right:8px;vertical-align:middle"></span>${m.nom}`;

  // Poids pills
  const lastPoids = maxW[m.nom];
  bsSelectedPoidsIdx = lastPoids ? m.poids.findIndex(p => p == lastPoids) : 0;
  if (bsSelectedPoidsIdx < 0) bsSelectedPoidsIdx = 0;
  bsRenderPoids(m);

  // Steppers
  document.getElementById('bs-series-val').textContent = bsSeries;
  document.getElementById('bs-reps-val').textContent = bsReps;

  document.getElementById('bs-exo-list').style.display = 'none';
  document.getElementById('bs-params').style.display = 'block';

  // Scroll vers la pill sélectionnée
  setTimeout(() => {
    const pill = document.querySelector('#bs-poids-pills .selected');
    if (pill) pill.scrollIntoView({ inline: 'center', behavior: 'smooth' });
  }, 60);
}

function bsRenderPoids(m) {
  document.getElementById('bs-poids-pills').innerHTML = m.poids.map((p, i) =>
    `<div class="bs-poids-pill${i === bsSelectedPoidsIdx ? ' selected' : ''}" onclick="bsSelectPoids(${i})">${p}</div>`
  ).join('');
}

function bsSelectPoids(i) {
  bsSelectedPoidsIdx = i;
  document.querySelectorAll('.bs-poids-pill').forEach((el, idx) =>
    el.classList.toggle('selected', idx === i)
  );
}

function bsConfirm() {
  if (bsSelectedIdx === null) { toast('Sélectionne un exercice.', 'warn'); return; }
  const m = getAllMachines()[bsSelectedIdx];
  const poids = m.poids[bsSelectedPoidsIdx];

  document.getElementById('sel-machine').value = bsSelectedIdx;
  renderPoidsForMachine();
  document.getElementById('sel-poids').value = poids;
  document.getElementById('sel-series').value = bsSeries;
  document.getElementById('sel-reps').value = bsReps;

  bsSeries = Math.min(bsSeries + 1, 6);
  bsClose();
  addEntry();
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-open-bs').addEventListener('click', bsOpen);
  document.getElementById('bs-close').addEventListener('click', bsClose);
  document.getElementById('bs-overlay').addEventListener('click', bsClose);
  document.getElementById('bs-back').addEventListener('click', bsShowStep1);
  document.getElementById('bs-confirm').addEventListener('click', bsConfirm);

  document.getElementById('bs-series-minus').addEventListener('click', () => {
    bsSeries = Math.max(1, bsSeries - 1);
    document.getElementById('bs-series-val').textContent = bsSeries;
  });
  document.getElementById('bs-series-plus').addEventListener('click', () => {
    bsSeries = Math.min(10, bsSeries + 1);
    document.getElementById('bs-series-val').textContent = bsSeries;
  });
  document.getElementById('bs-reps-minus').addEventListener('click', () => {
    bsReps = Math.max(1, bsReps - 1);
    document.getElementById('bs-reps-val').textContent = bsReps;
  });
  document.getElementById('bs-reps-plus').addEventListener('click', () => {
    bsReps = Math.min(30, bsReps + 1);
    document.getElementById('bs-reps-val').textContent = bsReps;
  });

  document.getElementById('bs-chips').addEventListener('click', e => {
    const chip = e.target.closest('.bs-chip');
    if (!chip) return;
    document.querySelectorAll('.bs-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    bsRenderExos(chip.dataset.groupe);
  });

  let startY = 0;
  document.getElementById('bs-handle').addEventListener('touchstart', e => { startY = e.touches[0].clientY; }, { passive: true });
  document.getElementById('bs-handle').addEventListener('touchend', e => { if (e.changedTouches[0].clientY - startY > 60) bsClose(); });
});

// ─────────────────────────────────────────
// GRAPHIQUES — VERSION PROPRE
// ─────────────────────────────────────────

function renderChart() {
  const h = getHistory();
  const keys = Object.keys(h).sort();

  const selExo = document.getElementById('sel-chart-exo').value;
  const emp = document.getElementById('chart-empty');
  const cw = document.querySelector('.chart-wrap');
  const leg = document.getElementById('rm-legend');

  if (myChart) {
    myChart.destroy();
    myChart = null;
  }

  leg.style.display = 'none';

  if (!selExo) {
    cw.style.display = 'none';
    emp.style.display = 'block';
    emp.textContent = 'Choisis un exercice pour voir son évolution.';
    return;
  }

  const now = new Date();

  const filtered = keys.filter(k => {
    if (!getEntries(h[k]).some(e => e.nom === selExo)) return false;
    if (chartDays === 0) return true;
    return (now - new Date(k + 'T00:00:00')) / 86400000 <= chartDays;
  });

  if (!filtered.length) {
    cw.style.display = 'none';
    emp.style.display = 'block';
    emp.textContent = 'Pas de données sur cette période.';
    return;
  }

  cw.style.display = 'block';
  emp.style.display = 'none';

  const ctx = document.getElementById('myChart').getContext('2d');
  const labels = filtered.map(fmtDate);

  if (chartMode === 'volume') {
    const dataVol = filtered.map(k =>
      getEntries(h[k]).filter(e => e.nom === selExo).reduce((a, e) => a + vol(e), 0)
    );

    const dataPoids = filtered.map(k => {
      const ex = getEntries(h[k]).filter(e => e.nom === selExo);
      return ex.length ? Math.max(...ex.map(e => parseInt(e.poids))) : 0;
    });

    myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Volume (kg)',
            data: dataVol,
            backgroundColor: 'rgba(200,255,0,0.15)',
            borderColor: '#c8ff00',
            borderWidth: 1.5,
            borderRadius: 5,
            yAxisID: 'y'
          },
          {
            label: 'Poids max (kg)',
            data: dataPoids,
            type: 'line',
            borderColor: '#a78bfa',
            backgroundColor: 'transparent',
            borderWidth: 2,
            pointBackgroundColor: '#a78bfa',
            pointRadius: 4,
            tension: 0.3,
            yAxisID: 'y2'
          }
        ]
      },
      options: chartOpts('Volume', 'Poids max', '#c8ff00', '#a78bfa')
    });

  } else {
    leg.style.display = 'block';

    const dataEst = filtered.map(k => {
      const ex = getEntries(h[k]).filter(e => e.nom === selExo);
      return ex.length ? Math.max(...ex.map(e => e.rm1est || best1RM(e))) : null;
    });

    const dataReel = filtered.map(k => {
      const ex = getEntries(h[k]).filter(e => e.nom === selExo && e.rm1reel);
      return ex.length ? Math.max(...ex.map(e => e.rm1reel)) : null;
    });

    myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: '1RM estimé (kg)',
            data: dataEst,
            borderColor: '#38bdf8',
            backgroundColor: 'rgba(56,189,248,0.1)',
            borderWidth: 2,
            pointBackgroundColor: '#38bdf8',
            pointRadius: 4,
            tension: 0.3,
            spanGaps: true
          },
          {
            label: '1RM réel (kg)',
            data: dataReel,
            borderColor: '#f59e0b',
            backgroundColor: 'rgba(245,158,11,0.1)',
            borderWidth: 2,
            pointBackgroundColor: '#f59e0b',
            pointRadius: 5,
            tension: 0.3,
            spanGaps: true,
            borderDash: [4, 3]
          }
        ]
      },
      options: chartOpts('1RM (kg)', null, '#38bdf8', null)
    });
  }
}

function chartOpts(yLabel, y2Label, c1, c2) {
  const scales = {
    x: {
      ticks: { color: '#888', font: { size: 10 } },
      grid: { color: '#1e1e1e' }
    },
    y: {
      ticks: {
        color: c1,
        font: { size: 10 },
        callback: v => v >= 1000 ? (v / 1000).toFixed(1) + 'k' : v
      },
      grid: { color: '#1e1e1e' },
      title: { display: true, text: yLabel, color: c1, font: { size: 10 } }
    }
  };

  if (y2Label) {
    scales.y2 = {
      position: 'right',
      ticks: { color: c2, font: { size: 10 } },
      grid: { display: false },
      title: { display: true, text: y2Label, color: c2, font: { size: 10 } }
    };
  }

  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: { color: '#888', font: { size: 11 }, boxWidth: 12 }
      },
      tooltip: {
        callbacks: {
          label: c => `${c.dataset.label}: ${c.parsed.y !== null ? c.parsed.y.toLocaleString('fr-FR') + ' kg' : '—'}`
        }
      }
    },
    scales
  };
}



// ─────────────────────────────────────────
// CHANGEMENT MODE / FILTRE GRAPHIQUE
// ─────────────────────────────────────────

function setChartMode(mode, btn) {
  chartMode = mode;
  document.querySelectorAll('.ctab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderChart();
}

function setFilter(days, btn) {
  chartDays = days;
  document.querySelectorAll('.cf-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderChart();
}



// ─────────────────────────────────────────
// GOOGLE SHEETS — VERSION PROPRE
// ─────────────────────────────────────────

function saveSheetConfig() {
  const su = document.getElementById('inp-script').value.trim();
  const shu = document.getElementById('inp-sheet').value.trim();

  if (!su || !su.startsWith('https://script.google.com')) {
    toast('URL Apps Script invalide.', 'error');
    return;
  }

  localStorage.setItem('gl_script_url', su);
  if (shu) localStorage.setItem('gl_sheet_url', shu);

  renderSheetsConfig();
}

async function resetSheetConfig() {
  if (!await confirm2('Supprimer ta configuration ?')) return;

  localStorage.removeItem('gl_script_url');
  localStorage.removeItem('gl_sheet_url');

  renderSheetsConfig();
}

function renderSheetsConfig() {
  const su = localStorage.getItem('gl_script_url') || '';

  document.getElementById('sheets-nc').style.display = su ? 'none' : 'block';
  document.getElementById('sheets-c').style.display = su ? 'block' : 'none';

  if (su) {
    document.getElementById('open-sheet-btn').style.display =
      localStorage.getItem('gl_sheet_url') ? 'block' : 'none';
  }
}

function openMySheet() {
  const u = localStorage.getItem('gl_sheet_url');
  if (u) window.open(u, '_blank');
}

function buildRows(data) {
  const rows = [];

  Object.entries(data).sort().forEach(([key, val]) => {
    const day = Array.isArray(val) ? { entries: val, cardio: null } : val;
    const entries = day.entries || [];
    const cardio = day.cardio;

    const dateStr = fmtDateLong(key);

    entries.forEach(e => {
      rows.push([
        dateStr,
        e.groupe || '',
        e.nom,
        parseInt(e.poids),
        parseInt(e.series),
        parseInt(e.reps),
        vol(e),
        e.rm1est || '',
        e.rm1reel || '',
        '',
        ''
      ]);
    });

    if (cardio) {
      rows.push([
        dateStr,
        'Cardio',
        'Marche tapis',
        '',
        '',
        '',
        '',
        '',
        '',
        cardio.duree,
        cardio.pente,
        cardio.vitesse
      ]);
    }
  });

  return rows;
}

function rowKey(row) {
  return [row[0], row[1], row[2], row[3], row[4], row[5]].join('|');
}

function getSentKeys() {
  return new Set(loadJSON('gl_sent_keys', []));
}

function saveSentKeys(keys) {
  saveJSON('gl_sent_keys', Array.from(keys));
}

function sendToSheets(rows, statusEl, btn, lbl) {
  const su = localStorage.getItem('gl_script_url') || '';
  if (!su) {
    toast('Configure ton Google Sheets dans Paramètres.', 'warn');
    return;
  }

  if (!rows.length) {
    toast('Aucune donnée à envoyer.', 'warn');
    return;
  }

  const sentKeys = getSentKeys();
  const newRows = rows.filter(row => !sentKeys.has(rowKey(row)));

  if (!newRows.length) {
    statusEl.style.display = 'block';
    statusEl.style.color = '#f59e0b';
    statusEl.textContent = 'Tout est déjà à jour dans Sheets.';
    setTimeout(() => statusEl.style.display = 'none', 3000);
    return;
  }

  statusEl.style.display = 'block';
  statusEl.style.color = 'var(--mu)';
  statusEl.textContent = 'Envoi de ' + newRows.length + ' ligne(s)...';
  btn.disabled = true;

  fetch(su, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ rows: newRows })
  })
    .then(() => {
      newRows.forEach(row => sentKeys.add(rowKey(row)));
      saveSentKeys(sentKeys);

      statusEl.style.color = 'var(--ac)';
      statusEl.textContent = newRows.length + ' ligne(s) ajoutée(s) !';

      btn.textContent = lbl + ' ok';
      setTimeout(() => {
        statusEl.style.display = 'none';
        btn.textContent = lbl;
        btn.disabled = false;
      }, 3000);
    })
    .catch(() => {
      statusEl.style.color = 'var(--rd)';
      statusEl.textContent = 'Erreur réseau.';
      btn.disabled = false;
    });
}

async function sendAllToSheets() {
  if (!await confirm2("Envoyer tout l'historique vers Google Sheets ?")) return;

  const h = getHistory();
  let cardio = loadJSON('gl_cardio', null);

  if (cardio && cardio.date !== todayKey()) cardio = null;

  const key = todayKey();
  if (cardio && !h[key]) {
    h[key] = { entries: session, cardio };
    saveHistory(h);
  }

  if (!Object.keys(h).length) {
    toast('Aucune séance sauvegardée.', 'warn');
    return;
  }

  sendToSheets(
    buildRows(h),
    document.getElementById('export-status'),
    document.getElementById('export-all-btn'),
    'Envoyer tout'
  );
}

function sendTodayToSheets() {
  let cardio = loadJSON('gl_cardio', null);
  if (cardio && cardio.date !== todayKey()) cardio = null;

  if (!session.length && !cardio) {
    toast('Aucune donnée à envoyer.', 'warn');
    return;
  }

  const d = {};
  d[todayKey()] = { entries: session, cardio };

  sendToSheets(
    buildRows(d),
    document.getElementById('send-today-status'),
    document.getElementById('send-today-btn'),
    'Sheets'
  );
}



// ─────────────────────────────────────────
// ACCUEIL — DASHBOARD
// ─────────────────────────────────────────

function renderAccueil() {
  const h = getHistory();
  const keys = Object.keys(h).sort().reverse();


  const totalVol = keys.reduce(
    (a, k) => a + getEntries(h[k]).reduce((b, e) => b + vol(e), 0),
    0
  );

  const best1rm = keys.reduce(
    (a, k) => Math.max(a, getEntries(h[k]).reduce((b, e) => Math.max(b, e.rm1est || 0), 0)),
    0
  );

  const now = new Date();
  const thisMonth = keys.filter(k => {
    const d = new Date(k + 'T00:00:00');
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  }).length;

  const hk = document.getElementById('hk-seances');
  if (hk) hk.textContent = keys.length;

  const hv = document.getElementById('hk-vol');
  if (hv) hv.textContent = totalVol >= 1000 ? (totalVol / 1000).toFixed(1) + 't' : totalVol + 'kg';

  const hm = document.getElementById('hk-month');
  if (hm) hm.textContent = thisMonth;

  const hr = document.getElementById('hk-1rm');
  if (hr) hr.textContent = best1rm ? best1rm + 'kg' : '—';

  const hg = document.getElementById('home-greeting');
  if (hg) {
    const h2 = new Date().getHours();
    hg.textContent = h2 < 12 ? 'Bonjour ☀️' : h2 < 18 ? 'Bon après-midi 💪' : 'Bonsoir 🌙';
  }

  const lc = document.getElementById('home-last-content');
  if (lc) {
    if (!keys.length) {
      lc.innerHTML = `<div style="font-size:13px;color:var(--mu);">Aucune séance enregistrée.</div>`;
    } else {
      const lk = keys[0];
      const le = getEntries(h[lk]);
      const d = new Date(lk + 'T00:00:00');
      const ds = d.toLocaleDateString('fr-FR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
      });

      lc.innerHTML =
        `<div class="home-last-date">${ds}</div>` +
        le.slice(0, 4).map(e => `
    <div class="home-exo-row">
      <span>${e.icon} ${e.nom}</span>
      <span class="home-exo-val">${e.poids} kg × ${e.reps}r</span>
    </div>
        `).join('') +
        (le.length > 4
          ? `<div class="home-last-more">+${le.length - 4} exercice(s)...</div>`
          : '');
    }
  }
}



// ─────────────────────────────────────────
// PARAMÈTRES — VERSION PROPRE
// ─────────────────────────────────────────

function renderParamsPage() {
  renderSheetsConfig();
}

function delExoTimer(exo) {
  const mt = loadJSON('gl_exo_timers', {});
  delete mt[exo];
  saveJSON('gl_exo_timers', mt);
  renderParamsPage();
}

function delMaxWeight(exo) {
  const mw = loadJSON('gl_max_weights', {});
  delete mw[exo];
  saveJSON('gl_max_weights', mw);
  renderParamsPage();
}

// ─── EXERCICES CUSTOM ───

function loadCustomMachines() {
  return loadJSON('gl_custom_machines', []);
}

function saveCustomMachines(list) {
  saveJSON('gl_custom_machines', list);
}


function renderCustomMachinesList() {
  const list = loadCustomMachines();
  const el = document.getElementById('custom-machines-list');
  if (!el) return;

  if (!list.length) {
    el.innerHTML = `<p class="memo-empty">Aucun exercice personnalisé.</p>`;
    return;
  }

  el.innerHTML = list.map((m, i) => `
    <div class="custom-machine-row">
      <div class="custom-machine-info">
        <div class="custom-machine-name">${m.icon || '💪'} ${m.nom}</div>
        <div class="custom-machine-meta">${m.groupe} · ${m.poids.join(', ')} kg</div>
      </div>
      <div class="custom-machine-actions">
        <button class="modal-btn" data-action="edit-custom-machine" data-param="${i}">✎</button>
        <button class="modal-btn confirm" data-action="delete-custom-machine" data-param="${i}">×</button>
      </div>
    </div>
  `).join('');
}

function openMachineModal(options = {}) {
  const { editCustomIndex = null, editBaseIdx = null } = options;

  const isCustomEdit = editCustomIndex !== null;
  const isBaseEdit = editBaseIdx !== null;

  let m = null;
  if (isCustomEdit) {
    m = loadCustomMachines()[editCustomIndex];
  } else if (isBaseEdit) {
    m = getAllMachines()[editBaseIdx];
  }

  const overlay = document.createElement('div');
  overlay.className = 'machine-modal-overlay';
  overlay.innerHTML = `
    <div class="machine-modal-box">
      <div class="machine-modal-title">${m ? '✎ Modifier — ' + m.nom : '+ Nouvel exercice'}</div>

      <div class="machine-modal-field">
        <label>Nom de l'exercice</label>
        <input type="text" id="om-nom" placeholder="Ex: Curl incliné" value="${m ? m.nom : ''}">
      </div>

      <div class="machine-modal-field">
        <label>Groupe musculaire</label>
        <select id="om-groupe">
          ${groupOptions(m?.groupe || '')}
        </select>
      </div>

      <div class="machine-modal-field">
        <label>Poids disponibles (séparés par des virgules)</label>
        <input type="text" id="om-poids" placeholder="Ex: 5, 10, 15, 20, 25" value="${m ? m.poids.join(', ') : ''}">
      </div>

      <div class="machine-modal-actions">
        <button class="modal-btn cancel" id="om-cancel">Annuler</button>
        <button class="modal-btn confirm green" id="om-save">${m ? 'Enregistrer' : 'Ajouter'}</button>
      </div>
    </div>`;

  document.body.appendChild(overlay);
  overlay.querySelector('#om-cancel').addEventListener('click', () => overlay.remove());

  overlay.querySelector('#om-save').addEventListener('click', () => {
    const nom = overlay.querySelector('#om-nom').value.trim();
    const groupe = overlay.querySelector('#om-groupe').value;
    const poids = parsePoids(overlay.querySelector('#om-poids').value);
    const icon = GROUPE_ICONS[groupe] || '💪';

    if (!nom) { toast('Le nom est obligatoire.', 'warn'); return; }
    if (!poids.length) { toast('Ajoute au moins un poids valide.', 'warn'); return; }

    if (isCustomEdit) {
      // Modifier un exercice custom
      const list = loadCustomMachines();
      list[editCustomIndex] = { nom, icon, groupe, poids };
      saveCustomMachines(list);
      toast('Exercice modifié.', 'ok');
    } else if (isBaseEdit) {
      // Modifier un exercice de base via overrides
      const overrides = loadJSON('gl_machine_overrides', {});
      overrides[editBaseIdx] = { nom, groupe, icon, poids };
      saveJSON('gl_machine_overrides', overrides);
      toast('Exercice modifié.', 'ok');
    } else {
      // Nouvel exercice custom
      const list = loadCustomMachines();
      list.push({ nom, icon, groupe, poids });
      saveCustomMachines(list);
      toast('Exercice ajouté.', 'ok');
    }

    invalidateMachines();
    overlay.remove();
    renderCustomMachinesList();
    renderMachineSelect();
    filterMachines();
  });
}

function openEditEntryModal(id) {
  const entry = session.find(e => e.id == id);
  if (!entry) return;

  const m = getAllMachines().find(x => x.nom === entry.nom);
  const poidsOptions = m
    ? m.poids.map(p => `<option value="${p}" ${p == entry.poids ? 'selected' : ''}>${p} kg</option>`).join('')
    : `<option value="${entry.poids}">${entry.poids} kg</option>`;

  const overlay = document.createElement('div');
  overlay.className = 'machine-modal-overlay';
  overlay.innerHTML = `
    <div class="machine-modal-box">
      <div class="machine-modal-title">✎ ${entry.nom}</div>

      <div class="machine-modal-field">
        <label>Poids (kg)</label>
        <select id="ee-poids">${poidsOptions}</select>
      </div>

      <div class="row2">
        <div class="machine-modal-field">
          <label>Séries</label>
          <select id="ee-series">
            ${[1,2,3,4,5,6].map(n => `<option ${n == entry.series ? 'selected' : ''}>${n}</option>`).join('')}
          </select>
        </div>
        <div class="machine-modal-field">
          <label>Reps</label>
          <select id="ee-reps">
            ${Array.from({length:20},(_,i)=>i+1).map(n => `<option ${n == entry.reps ? 'selected' : ''}>${n}</option>`).join('')}
          </select>
        </div>
      </div>

      <div class="machine-modal-field">
        <label>1RM réel (kg) <span class="text-mu fw400 fs10">optionnel</span></label>
        <input type="number" id="ee-1rm" placeholder="ex: 120" min="0" max="500" value="${entry.rm1reel || ''}">
      </div>

      <div class="machine-modal-actions">
        <button class="modal-btn cancel" id="ee-cancel">Annuler</button>
        <button class="modal-btn confirm green" id="ee-save">Enregistrer</button>
      </div>
    </div>`;

  document.body.appendChild(overlay);

  overlay.querySelector('#ee-cancel').addEventListener('click', () => overlay.remove());

  overlay.querySelector('#ee-save').addEventListener('click', () => {
    const poids = parseFloat(overlay.querySelector('#ee-poids').value);
    const series = parseInt(overlay.querySelector('#ee-series').value);
    const reps = parseInt(overlay.querySelector('#ee-reps').value);
    const rm1reel = parseFloat(overlay.querySelector('#ee-1rm').value) || null;

    const idx = session.findIndex(e => e.id == id);
    if (idx === -1) return;

    session[idx] = {
      ...session[idx],
      poids,
      series,
      reps,
      rm1est: calc1RM(poids, reps),
      rm1reel
    };

    saveJSON('gl_session', session);
    overlay.remove();
    renderSession();
    toast('Exercice modifié.', 'ok');
  });
}

function getAllMachines() {
  if (_machinesCache) return _machinesCache;
  const overrides = loadJSON('gl_machine_overrides', {});
  const base = MACHINES.map((m, i) => overrides[i] ? { ...m, ...overrides[i] } : m);
  const custom = loadCustomMachines().map((m, i) => ({ ...m, customIndex: i, isCustom: true }));
  _machinesCache = [...base, ...custom];
  return _machinesCache;
}

async function deleteCustomMachine(index) {
  if (!await confirm2('Supprimer cet exercice ?')) return;
  const list = loadCustomMachines();
  list.splice(index, 1);
  saveCustomMachines(list);
  renderCustomMachinesList();
  renderMachineSelect();
  filterMachines();
  toast('Exercice supprimé.', 'ok');
}


function addCustomMachineInline() {


  const nom = document.getElementById('mm-nom-inline').value.trim();
  const groupe = document.getElementById('mm-groupe-inline').value;
  const parsePoids = document.getElementById('mm-poids-inline').value;

  if (!nom) { toast('Le nom est obligatoire.', 'warn'); return; }

  const poids = parsePoids
    .split(',')
    .map(p => parseFloat(p.trim()))
    .filter(p => !isNaN(p) && p > 0)
    .sort((a, b) => a - b);

  if (!poids.length) { toast('Ajoute au moins un poids valide.', 'warn'); return; }

  const icon = GROUPE_ICONS[groupe] || '💪';
  const list = loadCustomMachines();
  list.push({ nom, icon, groupe, poids });
  saveCustomMachines(list);

  // Reset du formulaire
  document.getElementById('mm-nom-inline').value = '';
  document.getElementById('mm-poids-inline').value = '';

  renderCustomMachinesList();
  renderMachineSelect();
  filterMachines();
  toast('Exercice ajouté.', 'ok');
}



// ─────────────────────────────────────────
// TIMER — VERSION PROPRE
// ─────────────────────────────────────────

function startTimer(entry) {
  const mt = loadJSON('gl_exo_timers', {});
  if (mt[entry.nom]) {
    TTOTAL = mt[entry.nom];
    saveJSON('gl_timer_dur', TTOTAL);
    syncTpre();
  }

  TLEFT = TTOTAL;

  const mc = document.getElementById('memo-check');
  if (mc) mc.checked = !!mt[entry.nom];

  document.getElementById('tov-name').textContent = entry.nom;
  document.getElementById('tov-sub').textContent =
    `${entry.series} séries · ${entry.reps} reps · ${entry.poids} kg`;

  document.getElementById('tov-rm').textContent =
    `1RM estimé : ${entry.rm1est} kg` +
    (entry.rm1reel ? ` | réel : ${entry.rm1reel} kg` : '');

  const pr = document.getElementById('tpr');
  pr.style.transition = 'none';
  pr.style.strokeDasharray = CIRC;
  pr.style.strokeDashoffset = '0';
  pr.classList.remove('red');

  document.getElementById('tnum').textContent = TLEFT;

  const mpr = document.getElementById('tov-mini-tpr');
  mpr.style.transition = 'none';
  mpr.style.strokeDasharray = MINI_CIRC;
  mpr.style.strokeDashoffset = '0';
  mpr.classList.remove('red');

  document.getElementById('tov-mini-num').textContent = TLEFT;
  document.getElementById('tov-mini-label').textContent = entry.nom;

  timerMini = false;
  document.getElementById('tov-mini').classList.remove('show');
  document.getElementById('tov').classList.add('show');

  if (TIV) { clearInterval(TIV); TIV = null; }
setTimeout(() => {
  pr.style.transition = 'stroke-dashoffset 1s linear';
  mpr.style.transition = 'stroke-dashoffset 1s linear';
  TIV = setInterval(tickTimer, 1000);
}, 60);
}

function tickTimer() {
  TLEFT--;

  document.getElementById('tnum').textContent = TLEFT;
  const pr = document.getElementById('tpr');
  pr.style.strokeDashoffset = ((TTOTAL - TLEFT) / TTOTAL) * CIRC;

  if (TLEFT <= 10) pr.classList.add('red');

  document.getElementById('tov-mini-num').textContent = TLEFT;
  const mpr = document.getElementById('tov-mini-tpr');
  mpr.style.strokeDashoffset = ((TTOTAL - TLEFT) / TTOTAL) * MINI_CIRC;

  if (TLEFT <= 10) mpr.classList.add('red');
  else mpr.classList.remove('red');

  if (TLEFT <= 0) {
    clearInterval(TIV);
    TIV = null;
    timerMini = false;
    document.getElementById('tov').classList.remove('show');
    document.getElementById('tov-mini').classList.remove('show');
    playBeep();
  }
}

function changeTimer(secs, btn) {
  TTOTAL = secs;
  TLEFT = secs;
  saveJSON('gl_timer_dur', secs);
  syncTpre();

  document.getElementById('tnum').textContent = secs;
  document.getElementById('tov-mini-num').textContent = secs;

  const pr = document.getElementById('tpr');
  const mpr = document.getElementById('tov-mini-tpr');

  pr.style.transition = 'none';
  pr.style.strokeDashoffset = '0';
  pr.classList.remove('red');

  mpr.style.transition = 'none';
  mpr.style.strokeDashoffset = '0';
  mpr.classList.remove('red');

  if (TIV) { clearInterval(TIV); TIV = null; }
  setTimeout(() => {  
    pr.style.transition = 'stroke-dashoffset 1s linear';
    mpr.style.transition = 'stroke-dashoffset 1s linear';
    TIV = setInterval(tickTimer, 1000);
  }, 60);
}

function syncTpre() {
  const vals = [30, 60, 90, 120];
  document.querySelectorAll('.tpre').forEach((b, i) =>
    b.classList.toggle('on', vals[i] === TTOTAL)
  );
}

function closeTimerNoMemo() {
  if (TIV) clearInterval(TIV);
  timerMini = false;
  document.getElementById('tov').classList.remove('show');
  document.getElementById('tov-mini').classList.remove('show');
}

function saveMemoTimer() {
  const mc = document.getElementById('memo-check');
  const exoName = document.getElementById('tov-name').textContent;
  if (!exoName || exoName === '—') return;

  const mt = loadJSON('gl_exo_timers', {});

  if (mc && mc.checked) {
    mt[exoName] = TTOTAL;
  } else {
    delete mt[exoName];
  }

  saveJSON('gl_exo_timers', mt);
}

function minimizeTimer() {
  timerMini = true;
  document.getElementById('tov').classList.remove('show');
  document.getElementById('tov-mini').classList.add('show');
}

function expandTimer(e) {
  if (e) e.stopPropagation();
  timerMini = false;
  document.getElementById('tov-mini').classList.remove('show');
  document.getElementById('tov').classList.add('show');
}

function playBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    [0, 220, 440].forEach(delay => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.connect(g);
      g.connect(ctx.destination);
      o.frequency.value = 880;
      o.type = 'sine';
      const t = ctx.currentTime + delay / 1000;
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.4, t + 0.01);
      g.gain.linearRampToValueAtTime(0, t + 0.2);
      o.start(t);
      o.stop(t + 0.22);
    });
  } catch (ex) {}
}


// ─────────────────────────────────────────
// MODE SUIVI
// ─────────────────────────────────────────


let followState = null;

function startFollowFromTemplate(template) {
  followState = {
    exercices: template.exercices.map(e => ({
      ...e,
      seriesValidees: [] // [{poids, reps}]
    })),
    currentIdx: 0
  };

  navTo('seance');
  renderFollow();
  document.getElementById('follow-overlay').classList.add('open');
}

function startFollow() {
  if (!session.length) {
    toast('Ajoute des exercices d\'abord.', 'warn');
    return;
  }

  // Depuis la séance en cours — on crée un pseudo-template
  followState = {
    exercices: session.map(e => ({
      nom: e.nom,
      icon: e.icon,
      groupe: e.groupe || '',
      seriesValidees: []
    })),
    currentIdx: 0
  };

  // Reset la session pour reconstruire en temps réel
  session = [];
  saveJSON('gl_session', session);
  renderSession();

  renderFollow();
  document.getElementById('follow-overlay').classList.add('open');
}

function renderFollow() {
  if (!followState) return;

  const { exercices, currentIdx } = followState;
  const current = exercices[currentIdx];
  const total = exercices.length;

  document.getElementById('follow-progress').textContent = `${currentIdx + 1} / ${total}`;
  document.getElementById('follow-current').style.display = 'block';
  document.getElementById('follow-next-list').style.display = 'flex';
  document.getElementById('follow-recap').style.display = 'none';

  // Exercice en cours
  const seriesHTML = current.seriesValidees.map((s, i) => `
    <div class="follow-serie-done">
      <span class="follow-serie-num">Série ${i + 1}</span>
      <span class="follow-serie-vals">${s.poids} kg · ${s.reps} reps</span>
    </div>
  `).join('');

  document.getElementById('follow-current').innerHTML = `
    <div class="follow-current-name">${current.icon} ${current.nom}</div>
    <div class="follow-current-meta">${current.seriesValidees.length} série(s) faite(s)</div>
    <div class="follow-series-done-list">${seriesHTML}</div>
    <div class="follow-current-actions">
      <button class="btn-ac w100" id="btn-next-serie">+ Série suivante</button>
      <button class="btn-ghost w100 mt8 ${currentIdx + 1 >= total ? 'danger' : ''}" id="btn-end-exo">
        ${currentIdx + 1 >= total ? '🏁 Terminer la séance' : '✓ Terminer cet exercice'}
      </button>
    </div>
  `;

  document.getElementById('btn-next-serie').addEventListener('click', () => openSerieModal(currentIdx));
  document.getElementById('btn-end-exo').addEventListener('click', () => endCurrentExo());

  // Exercices suivants
  const nextEl = document.getElementById('follow-next-list');
  const suivants = exercices.slice(currentIdx + 1);
  nextEl.innerHTML = suivants.length ? suivants.map((e, i) => `
    <div class="follow-next-item ${i === 0 ? 'next' : ''}">
      <span class="follow-next-ico">${e.icon}</span>
      <div class="follow-next-info">
        <div class="follow-next-name">${e.nom}</div>
        <div class="follow-next-meta">${e.seriesValidees.length} série(s) faite(s)</div>
      </div>
    </div>
  `).join('') : '<div class="follow-next-item" style="opacity:.4;font-size:12px;">Dernier exercice</div>';
}

function openSerieModal(exoIdx) {
  const exo = followState.exercices[exoIdx];
  const maxW = loadJSON('gl_max_weights', {});
  const defaultPoids = maxW[exo.nom] || '';
  const m = getAllMachines().find(x => x.nom === exo.nom);

  // Poids de la série précédente si dispo
  const lastSerie = exo.seriesValidees[exo.seriesValidees.length - 1];
  const defaultPoidsVal = lastSerie ? lastSerie.poids : (defaultPoids || '');
  const defaultReps = lastSerie ? lastSerie.reps : 10;

  const poidsOptions = m
    ? m.poids.map(p => `<option value="${p}" ${p == defaultPoidsVal ? 'selected' : ''}>${p} kg</option>`).join('')
    : `<option value="${defaultPoidsVal}">${defaultPoidsVal} kg</option>`;

  const overlay = document.createElement('div');
  overlay.className = 'machine-modal-overlay';
  overlay.innerHTML = `
    <div class="machine-modal-box">
      <div class="machine-modal-title">${exo.icon} ${exo.nom} — Série ${exo.seriesValidees.length + 1}</div>

      <div class="machine-modal-field">
        <label>Poids (kg)</label>
        <select id="serie-poids">${poidsOptions}</select>
      </div>

      <div class="machine-modal-field">
        <label>Reps effectuées</label>
        <select id="serie-reps">
          ${Array.from({length:30},(_,i)=>i+1).map(n =>
            `<option ${n == defaultReps ? 'selected' : ''}>${n}</option>`
          ).join('')}
        </select>
      </div>

      <div class="machine-modal-actions">
        <button class="modal-btn cancel" id="serie-cancel">Annuler</button>
        <button class="modal-btn confirm green" id="serie-validate">✓ Valider la série</button>
      </div>
    </div>`;

  document.body.appendChild(overlay);

  overlay.querySelector('#serie-cancel').addEventListener('click', () => overlay.remove());

  overlay.querySelector('#serie-validate').addEventListener('click', () => {
    const poids = parseFloat(overlay.querySelector('#serie-poids').value);
    const reps = parseInt(overlay.querySelector('#serie-reps').value);

    // Enregistrer la série
    exo.seriesValidees.push({ poids, reps });

    // Ajouter à la session en temps réel
    addSerieToSession(exo, poids, reps);

    overlay.remove();

    // Lancer le timer
    startTimer(exo);

    renderFollow();
    toast(`Série ${exo.seriesValidees.length} validée ✓`, 'ok');
  });
}

function addSerieToSession(exo, poids, reps) {
  // Chaque série validée = une entrée distincte avec series: 1
  // La numérotation réelle (Série 1, Série 2…) vient de l'index dans seriesValidees
  session.push({
    id: Date.now() + Math.random(),
    nom: exo.nom,
    icon: exo.icon,
    groupe: exo.groupe || '',
    poids,
    series: 1,
    reps,
    rm1est: calc1RM(poids, reps),
    rm1reel: null
  });

  saveJSON('gl_session', session);
  renderSession();
}

function endCurrentExo() {
  if (!followState) return;
  const { exercices, currentIdx } = followState;
  const current = exercices[currentIdx];

  if (!current.seriesValidees.length) {
    toast('Valide au moins une série avant de continuer.', 'warn');
    return;
  }

  if (currentIdx + 1 >= exercices.length) {
    showRecap();
  } else {
    followState.currentIdx++;
    renderFollow();
  }
}

function showRecap() {
  if (!followState) return;

  document.getElementById('follow-current').style.display = 'none';
  document.getElementById('follow-next-list').style.display = 'none';
  document.getElementById('follow-progress').textContent = '🏁 Terminé';

  const recap = document.getElementById('follow-recap');
  recap.style.display = 'block';

  document.getElementById('follow-recap-list').innerHTML = followState.exercices.map(e => {
    const total = e.seriesValidees.length;
    const details = e.seriesValidees.map((s, i) =>
      `<div class="follow-recap-serie">Série ${i+1} : ${s.poids} kg × ${s.reps} reps</div>`
    ).join('');
    return `
      <div class="follow-recap-item">
        <div class="follow-recap-exo">${e.icon} ${e.nom}</div>
        <div class="follow-recap-detail">${details}</div>
        <div class="follow-recap-score ${total ? 'perfect' : ''}">${total} série(s) ✓</div>
      </div>
    `;
  }).join('');
}

function closeFollow() {
  document.getElementById('follow-overlay').classList.remove('open');
  followState = null;
}

function saveFollow() {
  // Reconstruire la session proprement depuis les séries validées dans followState
  session = [];
  let idCounter = Date.now();

  followState.exercices.forEach(exo => {
    exo.seriesValidees.forEach((s, idx) => {
      session.push({
        id: idCounter++,
        nom: exo.nom,
        icon: exo.icon,
        groupe: exo.groupe || '',
        poids: s.poids,
        series: idx + 1,
        reps: s.reps,
        rm1est: calc1RM(s.poids, s.reps),
        rm1reel: null
      });
    });
  });

  saveJSON('gl_session', session);
  renderSession();
  closeFollow();
  saveSession();
}


// ─────────────────────────────────────────
// CARDIO — VERSION PROPRE
// ─────────────────────────────────────────

function clearCardio() {
  localStorage.removeItem('gl_cardio');
  const h = getHistory();
  const key = todayKey();
  if (h[key] && h[key].cardio) {
    delete h[key].cardio;
    saveHistory(h);
  }
  renderCardio();
  renderHistory();
}

// APRÈS (version finale)
function addCardio() {
  const duree = parseInt(document.getElementById('c-duree').value);
  const pente = parseFloat(document.getElementById('c-pente').value);
  const vitesse = parseFloat(document.getElementById('c-vitesse').value);

  const cardio = { duree, pente, vitesse };

  saveJSON('gl_cardio', {
    date: todayKey(),
    duree,
    pente,
    vitesse
  });

  const h = getHistory();
  const key = todayKey();

  const existing = h[key] || { entries: [], cardio: null };
  existing.cardio = cardio;

  h[key] = existing;
  saveHistory(h);

  renderCardio();
}

function editCardio() {
  const c = loadJSON('gl_cardio', null);

  if (c) {
    const ds = document.getElementById('c-duree');
    const ps = document.getElementById('c-pente');
    const vs = document.getElementById('c-vitesse');

    for (let i = 0; i < ds.options.length; i++)
      if (parseInt(ds.options[i].value) === c.duree) ds.selectedIndex = i;

    for (let i = 0; i < ps.options.length; i++)
      if (parseFloat(ps.options[i].value) === c.pente) ps.selectedIndex = i;

    for (let i = 0; i < vs.options.length; i++)
      if (parseFloat(vs.options[i].value) === c.vitesse) vs.selectedIndex = i;
  }

  document.getElementById('cardio-done').classList.add('dis-none');
  document.getElementById('cardio-form').classList.remove('dis-none');
  document.getElementById('cardio-card').classList.remove('done');
}

function removeCardio() {
  localStorage.removeItem('gl_cardio');

  const h = getHistory();
  const key = todayKey();

  if (h[key]) {
    if (Array.isArray(h[key])) h[key] = { entries: h[key], cardio: null };
    else h[key].cardio = null;

    saveHistory(h);
  }

  renderCardio();
}

function renderCardio() {
  let c = loadJSON('gl_cardio', null);

  if (c && c.date !== todayKey()) {
    localStorage.removeItem('gl_cardio');
    c = null;
  }

  const form = document.getElementById('cardio-form');
  const done = document.getElementById('cardio-done');
  const card = document.getElementById('cardio-card');

  if (!form || !done) return;

  if (!c) {
    form.classList.remove('dis-none');
    done.classList.add('dis-none');
    card.classList.remove('done');
    return;
  }

  document.getElementById('cardio-done-summary').textContent =
    `${c.duree} min · ${c.pente}% pente · ${c.vitesse} km/h`;

  form.classList.add('dis-none');
  done.classList.remove('dis-none');
  card.classList.add('done');
}



// ─────────────────────────────────────────
// NAVIGATION — VERSION PROPRE
// ─────────────────────────────────────────

const PAGE_TITLES = {
  accueil: 'Accueil',
  seance: 'Séance',
  historique: 'Historique',
  stats: 'Stats',
  params: 'Paramètres'
};

function navTo(name) {
  ['accueil', 'seance', 'historique', 'stats', 'params'].forEach(n => {
    const p = document.getElementById('page-' + n);
    if (p) p.classList.toggle('active', n === name);

    const b = document.getElementById('bn-' + n);
    if (b) b.classList.toggle('active', n === name);
  });

  const tt = document.getElementById('topbar-title');
  if (tt) tt.textContent = PAGE_TITLES[name] || '';

  const bar = document.getElementById('bar-seance');
  if (bar) bar.style.display = name === 'seance' ? 'block' : 'none';

  if (name === 'historique') renderHistory();
  if (name === 'stats') {
    renderStats();
    renderSheetsConfig();
  }
  if (name === 'params') renderParamsPage();
  if (name === 'accueil') renderAccueil();

  const pw = document.getElementById('pages-wrapper');
  if (pw) pw.scrollTop = 0;
}



// ─────────────────────────────────────────
// THÈME — VERSION PROPRE
// ─────────────────────────────────────────

function initTheme() {
  const saved = localStorage.getItem('gl_theme');
  const root = document.documentElement;
  const btn = document.getElementById('theme-btn');

  if (saved === 'light') {
    root.classList.remove('dark');
    root.classList.add('light');
    if (btn) btn.textContent = '☀️';
  } else if (saved === 'dark') {
    root.classList.remove('light');
    root.classList.add('dark');
    if (btn) btn.textContent = '🌙';
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme:dark)').matches;
    if (btn) btn.textContent = prefersDark ? '🌙' : '☀️';
  }
}

function toggleTheme() {
  const root = document.documentElement;
  const btn = document.getElementById('theme-btn');
  const meta = document.querySelector('meta[name=theme-color]');

  if (root.classList.contains('light')) {
    root.classList.remove('light');
    root.classList.add('dark');
    localStorage.setItem('gl_theme', 'dark');
    if (btn) btn.textContent = '🌙';
    if (meta) meta.content = '#0f0f0f';
  } else {
    root.classList.remove('dark');
    root.classList.add('light');
    localStorage.setItem('gl_theme', 'light');
    if (btn) btn.textContent = '☀️';
    if (meta) meta.content = '#f4f4f0';
  }
}

window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change', e => {
  if (!localStorage.getItem('gl_theme')) {
    const btn = document.getElementById('theme-btn');
    if (btn) btn.textContent = e.matches ? '🌙' : '☀️';
  }
});


// Vider tout l'historique
async function clearHistory() {
  if (!await confirm2('Supprimer toutes les séances ? Cette action est irréversible.')) return;
  localStorage.removeItem('gl_history');
  invalidateHistory(); // ← ajouter cette ligne
  renderHistory();
  renderStats();
  renderAccueil();
}

// Reset complet de toutes les données
async function resetAll() {
  if (!await confirm2('Effacer TOUTES les données (séances, poids, timers, config) ? Irréversible.')) return;
  const keys = ['gl_history','gl_session','gl_cardio','gl_max_weights',
                 'gl_exo_timers','gl_sent_keys','gl_script_url',
                 'gl_sheet_url','gl_theme','gl_timer_dur'];
  keys.forEach(k => localStorage.removeItem(k));
  session = [];
  invalidateHistory();
  location.reload(); // ici c'est intentionnel : reset total
}

// ─────────────────────────────────────────
// INIT FINAL — VERSION PROPRE
// ─────────────────────────────────────────

function init() {
  // Charger données
  session = loadJSON('gl_session', []);
  TLEFT = TTOTAL;

  // UI
  renderSession();
  renderMachineSelect();
  filterMachines();
  renderAccueil();
  renderTemplateList()
  renderHistory();
  renderStats();
  renderSheetsConfig();
  renderCardio();
  renderExoMemoList();
  syncTpre();
  initTheme();

  // Navigation par défaut
  navTo('accueil');

  // EVENTS GLOBAUX
const btnExport = document.getElementById('btn-export-backup');
if (btnExport) btnExport.addEventListener('click', exportBackup);

const btnImport = document.getElementById('btn-import-backup');
const inpImport = document.getElementById('inp-import-backup');
if (btnImport) btnImport.addEventListener('click', () => inpImport.click());
if (inpImport) inpImport.addEventListener('change', e => importBackup(e.target.files[0]));
  // Mode suivi
  const btnStartFollow = document.getElementById('btn-start-follow');
  if (btnStartFollow) btnStartFollow.addEventListener('click', startFollow);

  const followClose = document.getElementById('follow-close');
  if (followClose) followClose.addEventListener('click', async () => {
    if (!await confirm2('Quitter le mode suivi ? La progression sera perdue.')) return;
    closeFollow();
  });

  const followSave = document.getElementById('follow-save');
  if (followSave) followSave.addEventListener('click', saveFollow);

  const followDiscard = document.getElementById('follow-discard');
  if (followDiscard) followDiscard.addEventListener('click', async () => {
    if (!await confirm2('Abandonner la séance sans sauvegarder ?')) return;
    closeFollow();
  });

  // Délégation — cases séries
  document.getElementById('follow-current').addEventListener('click', e => {
    const btn = e.target.closest('[data-action="check-serie"]');
    if (!btn) return;
    checkSerie(parseInt(btn.dataset.serie));
  });

  // Templates
  const btnCreateTemplate = document.getElementById('btn-create-template');
  if (btnCreateTemplate) btnCreateTemplate.addEventListener('click', openCreateTemplateModal);

  document.getElementById('template-list').addEventListener('click', e => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    const { action, param } = btn.dataset;
    if (action === 'load-template') loadTemplate(parseInt(param));
    if (action === 'delete-template') deleteTemplate(parseInt(param));
  });


  document.querySelectorAll('[data-nav]').forEach(btn => {
    btn.addEventListener('click', () => navTo(btn.dataset.nav));
  });

  // Délégation — page Historique
  document.getElementById('history-list').addEventListener('click', e => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    const { action, param } = btn.dataset;
    if (action === 'delete-day') deleteDay(param);
    if (action === 'clear-cardio') clearCardio();
  });

  // Délégation — accordéon mémos (page Paramètres)
  document.getElementById('exo-memo-list').addEventListener('click', e => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    const { action, param } = btn.dataset;
    if (action === 'delete-exo-memo') deleteExoMemo(param);
    if (action === 'delete-exo-timer') deleteExoTimer(param);
    if (action === 'delete-exo-poids') deleteExoPoids(param);
  });

  // Délégation — listes timers et poids max (page Paramètres)
  // Ces listes sont dans renderParamsPage, on délègue sur la page entière
  document.getElementById('page-params').addEventListener('click', e => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    const { action, param } = btn.dataset;
    if (action === 'del-exo-timer') delExoTimer(param);
    if (action === 'del-max-weight') delMaxWeight(param);
  });

  // Sheets config
  const btnSaveSheet = document.getElementById('btn-save-sheet');
  if (btnSaveSheet) btnSaveSheet.addEventListener('click', saveSheetConfig);

  const btnResetSheet = document.getElementById('btn-reset-sheet');
  if (btnResetSheet) btnResetSheet.addEventListener('click', resetSheetConfig);

  const sendTodayBtn = document.getElementById('send-today-btn');
  if (sendTodayBtn) sendTodayBtn.addEventListener('click', sendTodayToSheets);

  // Chart tabs (Volume / 1RM)
  document.querySelectorAll('.ctab[data-mode]').forEach(btn => {
    btn.addEventListener('click', () => setChartMode(btn.dataset.mode, btn));
  });

  // Chart filtres (7j / 30j / Tout)
  document.querySelectorAll('.cf-btn[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => setFilter(parseInt(btn.dataset.filter), btn));
  });
  const exportAllBtn = document.getElementById('export-all-btn');
  if (exportAllBtn) exportAllBtn.addEventListener('click', sendAllToSheets);

  const openSheetBtn = document.getElementById('open-sheet-btn');
  if (openSheetBtn) openSheetBtn.addEventListener('click', openMySheet);

  // Boutons zone dangereuse
  const dangerBtns = document.querySelectorAll('.danger-btn');
  if (dangerBtns[0]) dangerBtns[0].addEventListener('click', clearHistory);
  if (dangerBtns[1]) dangerBtns[1].addEventListener('click', resetAll);

  const selMachine = document.getElementById('sel-machine');
  if (selMachine) selMachine.addEventListener('change', renderPoidsForMachine);

  const themeBtn = document.getElementById('theme-btn');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  const btnAddEntry = document.getElementById('btn-add-entry');
  if (btnAddEntry) btnAddEntry.addEventListener('click', addEntry);

  const btnClearSession = document.getElementById('btn-clear-session');
  if (btnClearSession) btnClearSession.addEventListener('click', clearSession);

  const btnAddCardio = document.getElementById('btn-add-cardio');
  if (btnAddCardio) btnAddCardio.addEventListener('click', addCardio);

  const btnEditCardio = document.getElementById('btn-edit-cardio');
  if (btnEditCardio) btnEditCardio.addEventListener('click', editCardio);

  const saveBtn = document.getElementById('save-btn');
  if (saveBtn) saveBtn.addEventListener('click', saveSession);

  document.querySelectorAll('.tpre[data-timer]').forEach(btn => {
    btn.addEventListener('click', () => changeTimer(parseInt(btn.dataset.timer), btn));
  });

  const memoCheck = document.getElementById('memo-check');
  if (memoCheck) memoCheck.addEventListener('change', saveMemoTimer);

  const btnTimerMinimize = document.getElementById('btn-timer-minimize');
  if (btnTimerMinimize) btnTimerMinimize.addEventListener('click', minimizeTimer);

  const btnTimerClose = document.getElementById('btn-timer-close');
  if (btnTimerClose) btnTimerClose.addEventListener('click', closeTimerNoMemo);

  const tovMini = document.getElementById('tov-mini');
  if (tovMini) tovMini.addEventListener('click', () => expandTimer());

  const selGroupe = document.getElementById('sel-groupe');
  if (selGroupe) selGroupe.addEventListener('change', filterMachines);

  const selChartExo = document.getElementById('sel-chart-exo');
  if (selChartExo) selChartExo.addEventListener('change', renderChart);

  const btnMiniExpand = document.getElementById('btn-mini-expand');
  if (btnMiniExpand) {
    btnMiniExpand.addEventListener('click', e => {
      e.stopPropagation();
      expandTimer(e);
    });
  }

  // Swipe to delete — délégation sur le conteneur
  const entryList = document.getElementById('entry-list');
  let swipeState = null;

  // Délégation click — edit entry
  entryList.addEventListener('click', e => {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  e.stopPropagation();
  const { action, param } = btn.dataset;
  if (action === 'start-timer') startTimer(session.find(x => x.id === parseInt(param)));
  if (action === 'edit-entry') openEditEntryModal(param);
  if (action === 'delete-entry') removeEntry(parseInt(param));
});

  entryList.addEventListener('touchstart', e => {
  // Bloquer le swipe si on est dans le corps de l'accordéon (boutons)
  if (e.target.closest('.acc-body')) return;
  if (e.target.closest('button')) return;
  const wrap = e.target.closest('.acc-wrap');
  if (!wrap) return;
  swipeState = { wrap, startX: e.touches[0].clientX, curX: 0 };
}, { passive: true });

  entryList.addEventListener('touchmove', e => {
  if (!swipeState) return;
  const dx = e.touches[0].clientX - swipeState.startX;
  // On bloque le scroll vertical seulement si swipe horizontal confirmé
  if (Math.abs(dx) > 10) e.preventDefault();
  const entry = swipeState.wrap.querySelector('.acc-head');
  const bg = swipeState.wrap.querySelector('.entry-del-bg');
  swipeState.curX = Math.min(0, dx);
  entry.style.transform = `translateX(${swipeState.curX}px)`;
  bg.style.opacity = Math.min(Math.abs(swipeState.curX) / 90, 1);
}, { passive: false });


  entryList.addEventListener('touchend', () => {
    if (!swipeState) return;
    const { wrap } = swipeState;  // ← on retire curX ici
    const curX = swipeState.curX; // ← on le lit directement depuis l'objet
    const entry = wrap.querySelector('.acc-head');
    const bg = wrap.querySelector('.entry-del-bg');
    //entry.classList.remove('swiping');

    if (Math.abs(curX) >= 90) {
      entry.style.transition = 'transform .2s ease';
      entry.style.transform = 'translateX(-110%)';
      setTimeout(() => removeEntry(parseInt(wrap.dataset.id)), 200);
    } else {
      entry.style.transform = 'translateX(0)';
      bg.style.opacity = 0;
    }
    swipeState = null;
  });
  
  // Bouton ouvrir modale ajout exercice
  const btnAddMachineInline = document.getElementById('btn-add-machine-inline');
  if (btnAddMachineInline) btnAddMachineInline.addEventListener('click', addCustomMachineInline);

// Délégation — liste exercices custom
document.getElementById('custom-machines-card').addEventListener('click', e => {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  const { action, param } = btn.dataset;
  if (action === 'edit-custom-machine') openMachineModal({ editCustomIndex: parseInt(param) });
  if (action === 'delete-custom-machine') deleteCustomMachine(parseInt(param));
});

  const btnEditMachine = document.getElementById('btn-edit-machine');
  if (btnEditMachine) btnEditMachine.addEventListener('click', () => {
    const idx = parseInt(document.getElementById('sel-machine').value);
    if (isNaN(idx)) { toast('Sélectionne d\'abord un exercice.', 'warn'); return; }
    const m = getAllMachines()[idx];
    if (m.isCustom) {
      openMachineModal({ editCustomIndex: m.customIndex });
    } else {
      openMachineModal({ editBaseIdx: idx });
    }
  });


}
// ─────────────────────────────────────────
// BOOT
// ─────────────────────────────────────────

window.addEventListener('DOMContentLoaded', init);