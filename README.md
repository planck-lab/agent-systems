<div align="center">

# 🤖 Agent Systems

**Vom Konzept zum eigenen Orchestrator.**

Verstehe wie AI Agents funktionieren, wo sie scheitern, und baue dein eigenes System.

**15 Module · ~16 Stunden · DE + EN · Kostenlos**

[**→ Kurs starten**](https://planck-lab.github.io/agent-systems/)

<p>
  <img src="https://img.shields.io/badge/Module-15-2997FF" alt="Module">
  <img src="https://img.shields.io/badge/Notebooks-14-E67E22" alt="Notebooks">
  <img src="https://img.shields.io/badge/Tracks-2-8957e5" alt="Tracks">
  <img src="https://img.shields.io/badge/Sprachen-DE%20%2B%20EN-58a6ff" alt="Sprachen">
  <img src="https://img.shields.io/badge/Quellen-18%20verifiziert-3fb950" alt="Quellen">
  <img src="https://img.shields.io/badge/Lizenz-CC%20BY--SA%204.0-lightgrey" alt="Lizenz">
  <a href="https://janrummel.github.io/ai-learning/"><img src="https://img.shields.io/badge/part%20of-AI%20Learning-58a6ff" alt="Part of AI Learning"></a>
</p>

---

</div>

## Für wen?

- **🟠 Power-User** (~13h): Konfigurieren, Betreiben, Anpassen. Kein Code nötig.
- **🔴 Developer** (~16h): CLI, Shell-Scripting, eigene Tools und Integrationen.
- **Voraussetzungen:** Keine. Interesse an AI Agents und Bereitschaft, Hands-on zu arbeiten.

## Was du danach kannst

- Die 5 Komponenten eines AI Agents benennen und auf dem Autonomie-Spektrum einordnen
- Einen Agent konfigurieren: Persona, Tools, Memory, Skills, Security
- Approval Policies und HITL-Design-Patterns anwenden
- Ein eigenes Agent-System in Production betreiben

## Roter Faden

Das **Autonomie-Spektrum** — von HITL-intensiv bis vollautonom. Human-in-the-Loop ist kein einzelnes Modul, sondern Design-Prinzip in jedem Modul.

```
🟢 Fahrlehrer (M0-M3)  →  🟡 Beifahrer (M4-M6)  →  🟠 Fährt allein (M7-M9)  →  🔴 Dashcam (M10-M13)
```

## Module

| # | Modul | Track | Notebook | Dauer |
|---|-------|-------|----------|-------|
| 0 | Setup & Werkzeuge | 🟠🔴 | — | 60 min |
| 1 | Was ist ein Agent? | 🟠🔴 | [Colab](https://colab.research.google.com/github/planck-lab/agent-systems/blob/main/notebooks/modul1_was_ist_ein_agent.ipynb) | 45 min |
| 2 | Der Agent Loop | 🟠🔴 | [Colab](https://colab.research.google.com/github/planck-lab/agent-systems/blob/main/notebooks/modul2_agent_loop.ipynb) | 60 min |
| 3 | Orchestrator-Architektur | 🟠🔴 | [Colab](https://colab.research.google.com/github/planck-lab/agent-systems/blob/main/notebooks/modul3_architektur.ipynb) | 60 min |
| 4 | Tool Use & MCP | 🟠🔴 | [Colab](https://colab.research.google.com/github/planck-lab/agent-systems/blob/main/notebooks/modul4_tool_use.ipynb) | 60 min |
| 5 | Persona & Workspace | 🟠🔴 | [Colab](https://colab.research.google.com/github/planck-lab/agent-systems/blob/main/notebooks/modul5_persona.ipynb) | 60 min |
| 6 | Gedächtnis & Kontext | 🟠🔴 | [Colab](https://colab.research.google.com/github/planck-lab/agent-systems/blob/main/notebooks/modul6_gedaechtnis.ipynb) | 75 min |
| 7a | Skills nutzen | 🟠🔴 | [Colab](https://colab.research.google.com/github/planck-lab/agent-systems/blob/main/notebooks/modul7a_skills_nutzen.ipynb) | 60 min |
| 7b | Skills bauen | 🔴 Dev | [Colab](https://colab.research.google.com/github/planck-lab/agent-systems/blob/main/notebooks/modul7b_skills_bauen.ipynb) | 60 min |
| 8 | Fehler, Debugging & Ethik | 🟠🔴 | [Colab](https://colab.research.google.com/github/planck-lab/agent-systems/blob/main/notebooks/modul8_debugging.ipynb) | 75 min |
| 9 | Multi-Agent & A2A | 🟠🔴 | [Colab](https://colab.research.google.com/github/planck-lab/agent-systems/blob/main/notebooks/modul9_multi_agent.ipynb) | 90 min |
| 10 | Automatisierung | 🟠🔴 | [Colab](https://colab.research.google.com/github/planck-lab/agent-systems/blob/main/notebooks/modul10_automatisierung.ipynb) | 75 min |
| 11 | Security & Trust | 🟠🔴 | [Colab](https://colab.research.google.com/github/planck-lab/agent-systems/blob/main/notebooks/modul11_security.ipynb) | 75 min |
| 12 | Eigene Orchestrierung | 🔴 Dev | [Colab](https://colab.research.google.com/github/planck-lab/agent-systems/blob/main/notebooks/modul12_orchestrierung.ipynb) | 90 min |
| 13 | Production Readiness | 🟠🔴 | [Colab](https://colab.research.google.com/github/planck-lab/agent-systems/blob/main/notebooks/modul13_production.ipynb) | 90 min |

## Wissenschaftliche Basis

18 verifizierte Quellen, darunter:
- **Tier A (Peer-reviewed):** ReAct (Yao et al., ICLR 2023), Toolformer (Schick et al., NeurIPS 2023), Generative Agents (Park et al., UIST 2023)
- **Tier B (arXiv/Tech Reports):** MemGPT (Packer et al.), AI Control (Greenblatt et al.), Reflexion (Shinn et al.)
- **Tier C (Industrie):** MCP Specification (Anthropic, 2024), A2A Protocol (Google, 2025), Andrew Ng's Agent Patterns

Framework-agnostisch: Jedes Modul vergleicht LangChain, CrewAI, AutoGen und OpenClaw.

## Wie dieser Kurs gebaut wurde

Dieser Kurs wurde von **Planck** gebaut — einem AI Agent auf einem Mac mini, betrieben mit [OpenClaw](https://docs.openclaw.ai). Curriculum stressgetestet (5.8 → 7.8 → 8.25), Module iteriert (7.2 → 8.2), alles in der Git History nachprüfbar. Du lernst Konzepte, die bei der Erstellung dieses Kurses tatsächlich angewendet wurden.

## Teil des AI Learning Ecosystem

| Kurs | Für wen |
|------|---------|
| [AI Fluency](https://janrummel.github.io/ai-fluency/) | Knowledge Worker — AI im Alltag |
| [AI Product Thinking](https://janrummel.github.io/ai-product-thinking/) | Entscheider — AI-Produkte bewerten |
| [Level Up AI](https://janrummel.github.io/level-up-ai/) | Developer — AI-Features bauen |
| **Agent Systems** (du bist hier) | Builder — Eigene Agent-Systeme |
| [GitHub für Nicht-Programmierer](https://janrummel.github.io/github-fuer-nicht-programmierer/) | Einsteiger — GitHub ohne Code |
| [Obsidian für Einsteiger](https://janrummel.github.io/obsidian-fuer-einsteiger/) | Einsteiger — Wissensmanagement |

[→ AI Learning Hub](https://janrummel.github.io/ai-learning/)

## Contributing

Fehler gefunden? Verbesserungsvorschlag? Issues und Pull Requests sind willkommen — ob Tippfehler, inhaltliche Korrektur oder Übersetzungsverbesserung.

## Author

**Jan Rummel** — Energietechnik-Ingenieur + AI-Praktiker.
[LinkedIn](https://linkedin.com/in/janrummel) · [GitHub](https://github.com/janrummel)

## Lizenz

Inhalt: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · Code: MIT
