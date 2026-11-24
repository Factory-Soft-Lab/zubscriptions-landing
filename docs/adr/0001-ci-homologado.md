# ADR 0001: CI homologado (excepción del sitio estático)

Estado: propuesta (24-nov-2026). Referencia: `propuesta-ci-homologado.md`.

Este repo solo tiene `main` y GitHub Pages publica esa rama tal cual (sin build, sin servidor). Por eso **no lleva ramas `infra/deploy-*`, release ni milestones**: no hay versión que liberar ni droplet que desplegar. Solo se añade `ci.yml` informativo que verifica enlaces internos. Si algún día se adopta `develop`/dominio propio, se revisa.
