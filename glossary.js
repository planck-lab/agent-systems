// Glossary Widget — Agent Systems
const glossaryDE = {
  'Agent': 'Software-Entität mit Ziel, Werkzeugen und Entscheidungsschleife — mehr als ein Chatbot.',
  'Orchestrator': 'System, das Agents koordiniert, routet und überwacht.',
  'HITL (Human-in-the-Loop)': 'Mensch als Kontrollinstanz im Agent-Workflow. Entscheidet, was der Agent darf.',
  'Autonomie-Spektrum': 'Skala von voll-manuell (L0) bis voll-autonom (L4) für Agent-Entscheidungen.',
  'ReAct': 'Reasoning + Acting Pattern: Denken → Handeln → Beobachten Schleife (Yao et al., 2023).',
  'Reflection': 'Agent evaluiert eigenen Output und iteriert — eines der 4 Kern-Patterns nach Andrew Ng.',
  'MCP (Model Context Protocol)': 'Industriestandard für Tool-Integration. Wie USB für Agents (Anthropic, 2024).',
  'A2A (Agent-to-Agent)': 'Industriestandard für Agent-Kommunikation. Wie HTTP für Agents (Google, 2025).',
  'Tool Use': 'Fähigkeit eines Agents, externe Werkzeuge aufzurufen (Suche, Dateien, APIs).',
  'Approval Policy': 'Regelwerk, das bestimmt welche Agent-Aktionen menschliche Freigabe brauchen.',
  'Gateway': 'Zentrale Vermittlungsschicht zwischen Channels (Telegram, Slack...) und Agent-Runtime.',
  'Session': 'Isolierter Gesprächskontext mit eigener History und State.',
  'Skill': 'Wiederverwendbare Fähigkeits-Definition: SKILL.md (Instruktionen) + Scripts.',
  'Planning': 'Agent zerlegt komplexe Aufgaben in Teilschritte — Kern-Pattern nach Andrew Ng.',
  'Prompt Injection': 'Angriff, bei dem manipulierter Input die Agent-Instruktionen überschreibt.'
};

const glossaryEN = {
  'Agent': 'Software entity with a goal, tools, and a decision loop — more than a chatbot.',
  'Orchestrator': 'System that coordinates, routes, and monitors agents.',
  'HITL (Human-in-the-Loop)': 'Human as control authority in agent workflows. Decides what the agent may do.',
  'Autonomy Spectrum': 'Scale from fully manual (L0) to fully autonomous (L4) for agent decisions.',
  'ReAct': 'Reasoning + Acting pattern: Think → Act → Observe loop (Yao et al., 2023).',
  'Reflection': 'Agent evaluates own output and iterates — one of 4 core patterns per Andrew Ng.',
  'MCP (Model Context Protocol)': 'Industry standard for tool integration. Like USB for agents (Anthropic, 2024).',
  'A2A (Agent-to-Agent)': 'Industry standard for agent communication. Like HTTP for agents (Google, 2025).',
  'Tool Use': 'An agent\'s ability to call external tools (search, files, APIs).',
  'Approval Policy': 'Ruleset determining which agent actions require human approval.',
  'Gateway': 'Central routing layer between channels (Telegram, Slack...) and agent runtime.',
  'Session': 'Isolated conversation context with its own history and state.',
  'Skill': 'Reusable capability definition: SKILL.md (instructions) + scripts.',
  'Planning': 'Agent decomposes complex tasks into sub-steps — core pattern per Andrew Ng.',
  'Prompt Injection': 'Attack where manipulated input overrides agent instructions.'
};

function initGlossary() {
  const lang = document.documentElement.lang || 'de';
  const glossary = lang === 'en' ? glossaryEN : glossaryDE;
  const title = lang === 'en' ? 'Glossary' : 'Begriffe';
  document.querySelectorAll('.glossary-toggle, .glossary-panel').forEach(el => el.remove());
  const btn = document.createElement('button');
  btn.className = 'glossary-toggle';
  btn.textContent = '📖 ' + title;
  btn.onclick = () => document.querySelector('.glossary-panel').classList.toggle('open');
  const panel = document.createElement('div');
  panel.className = 'glossary-panel';
  let html = '<h3>' + title + '</h3><dl>';
  for (const [term, def] of Object.entries(glossary)) {
    html += '<dt>' + term + '</dt><dd>' + def + '</dd>';
  }
  html += '</dl>';
  panel.innerHTML = html;
  document.body.appendChild(btn);
  document.body.appendChild(panel);
}
document.addEventListener('DOMContentLoaded', initGlossary);
