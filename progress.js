// Progress Tracking — Agent Systems Course
// Uses LocalStorage, no backend needed

const MODULES = ['m0','m1','m2','m3','m4','m5','m6','m7a','m7b','m8','m9','m10','m11','m12','m13'];
const STORAGE_KEY = 'agent-systems-progress';

function getProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch { return {}; }
}

function saveProgress(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function markComplete(moduleId) {
  const p = getProgress();
  p[moduleId] = { completed: true, date: new Date().toISOString().split('T')[0] };
  saveProgress(p);
  updateUI();
}

function markIncomplete(moduleId) {
  const p = getProgress();
  delete p[moduleId];
  saveProgress(p);
  updateUI();
}

function isComplete(moduleId) {
  return getProgress()[moduleId]?.completed === true;
}

function getCompletionCount() {
  const p = getProgress();
  return MODULES.filter(m => p[m]?.completed).length;
}

function getCompletionPercent() {
  return Math.round((getCompletionCount() / MODULES.length) * 100);
}

// UI Updates
function updateUI() {
  // Update all completion checkboxes
  document.querySelectorAll('[data-module-complete]').forEach(el => {
    const mod = el.dataset.moduleComplete;
    const done = isComplete(mod);
    el.checked = done;
    el.closest('.card, .module-card, tr')?.classList.toggle('completed', done);
  });

  // Update progress counter
  document.querySelectorAll('.progress-count').forEach(el => {
    el.textContent = `${getCompletionCount()}/${MODULES.length}`;
  });

  // Update progress percent
  document.querySelectorAll('.progress-percent').forEach(el => {
    el.textContent = `${getCompletionPercent()}%`;
  });

  // Update overall progress bar
  document.querySelectorAll('.overall-progress-fill').forEach(el => {
    el.style.width = `${getCompletionPercent()}%`;
  });
}

// Module completion button (for module pages)
function initModuleCompletion(moduleId) {
  const container = document.querySelector('.celebration, .nav-footer');
  if (!container) return;

  const done = isComplete(moduleId);
  const wrapper = document.createElement('div');
  wrapper.style.cssText = 'text-align:center; margin:1.5rem 0;';
  wrapper.innerHTML = `
    <button class="btn module-done-btn" style="background:${done ? 'var(--green)' : 'var(--surface)'}; color:${done ? 'var(--bg)' : 'var(--text)'}; border:1px solid ${done ? 'var(--green)' : 'var(--border)'}; cursor:pointer; transition:all 0.2s;">
      <span class="de">${done ? '✅ Modul abgeschlossen' : '☐ Modul als erledigt markieren'}</span>
      <span class="en">${done ? '✅ Module completed' : '☐ Mark module as complete'}</span>
    </button>
  `;

  const btn = wrapper.querySelector('.module-done-btn');
  btn.addEventListener('click', () => {
    if (isComplete(moduleId)) {
      markIncomplete(moduleId);
      btn.style.background = 'var(--surface)';
      btn.style.color = 'var(--text)';
      btn.style.borderColor = 'var(--border)';
      btn.querySelector('.de').textContent = '☐ Modul als erledigt markieren';
      btn.querySelector('.en').textContent = '☐ Mark module as complete';
    } else {
      markComplete(moduleId);
      btn.style.background = 'var(--green)';
      btn.style.color = 'var(--bg)';
      btn.style.borderColor = 'var(--green)';
      btn.querySelector('.de').textContent = '✅ Modul abgeschlossen';
      btn.querySelector('.en').textContent = '✅ Module completed';
    }
  });

  container.parentNode.insertBefore(wrapper, container);
}

// Init on page load
document.addEventListener('DOMContentLoaded', () => {
  updateUI();

  // Auto-detect module from page
  const path = window.location.pathname;
  const match = path.match(/modul(\d+[ab]?)\.html/);
  if (match) {
    const moduleId = 'm' + match[1];
    initModuleCompletion(moduleId);
  }
});
