<div align="center">

# 🍎 Newton Quiz

**Quiz interativo sobre Isaac Newton**  
Feito em 24 horas, do zero, sem experiência prévia em React.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

</div>

---

## 📖 Contexto

Em 2024, durante o **segundo ano do ensino médio** (aos 15-16 anos), meu grupo tinha um trabalho de Física sobre Isaac Newton. Meus colegas ficaram responsáveis pelo site informacional — feito no Canva. Eu decidi fazer algo diferente.

Em **24 horas**, aprendi React do zero e entregue um quiz totalmente programado, com frontend em React, backend em Flask e banco de dados SQLite — sozinho, como desafio pessoal dentro do trabalho em grupo.

Ao final do quiz, o jogador é redirecionado para o site informacional que complementa o trabalho.

> **Nota:** Este código reflete meu nível de conhecimento na época. Era iniciante em React e estava aprendendo na prática. Há limitações e coisas que eu faria diferente hoje — mas foi uma entrega funcional dentro do prazo.

---

## 🖼️ Screenshots

| Questão com timer | A questão da maçã | Tela de vitória |
|:-:|:-:|:-:|
| ![Questão](screenshots/question.png) | ![Maçã](screenshots/apple.png) | ![Vitória](screenshots/win.png) |

---

## 🎮 Como funciona

O quiz tem **6 questões** sobre Isaac Newton, servidas por uma API REST em Flask. O jogador tem **15 segundos** por questão — ao acertar, o timer reinicia para a próxima.

A última questão é especial: não há alternativas para clicar. Em vez disso, **uma maçã aparece na tela** 🍎 — referência à famosa história de Newton e a gravidade. Clicar nela leva à tela de vitória.

```
Início → Questão 1 → ... → Questão 5 → 🍎 Questão da Maçã → Vitória
                ↓ tempo esgotado ou erro
              Game Over
```

---

## 📁 Estrutura

```
newton-quiz/
├── frontend/               # React + Vite + Tailwind + React Router
│   └── src/
│       ├── pages/          # 6 questões + telas de vitória e derrota
│       ├── services/api.js # Integração com a API Flask
│       ├── OptionButton.jsx# Lógica de acerto/erro
│       └── Timer.jsx       # Timer de 15s por questão
│
└── backend/                # API REST · Flask + SQLAlchemy
    ├── app.py              # Rotas GET /questions/:id · POST /questions
    └── instance/
        └── questions.sqlite3
```

---

## 🚀 Rodando localmente

### Backend

```bash
cd backend
uv venv --python 3.12
uv pip install -r requirements.txt
uv run python app.py
# API disponível em http://localhost:5000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
# Site disponível em http://localhost:5173
```

---

## 📚 O que aprendi

Esse projeto foi meu primeiro contato real com React. Em 24 horas, aprendi na prática:

- Estruturar uma SPA com múltiplas rotas usando **React Router**
- Criar e consumir uma **API REST** com Flask e SQLAlchemy
- Resolver problemas de **CORS** entre frontend e backend
- Trabalhar sob pressão com prazo curto e entregar algo funcional



---

<div align="center">

*Desenvolvido em 2024 · Miguel Marques*

</div>
