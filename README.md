# Gerenciador de Tarefas

Este é um projeto **para estudos**, criado enquanto aprendo React. O objetivo é praticar conceitos fundamentais do React, como componentes, estados e manipulação de listas, além de utilizar o Tailwind CSS para estilização.

## Funcionalidades

- Adicionar tarefas (em desenvolvimento)
- Marcar tarefas como concluídas
- Remover tarefas da lista

## Estrutura do Projeto

```
GerenciadorBatalha/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AddTasks.jsx
│   │   └── Tasks.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── ...
```

- O estado principal das tarefas é controlado em [`App.jsx`](src/App.jsx).
- O componente [`Tasks`](src/components/Tasks.jsx) exibe a lista de tarefas e permite marcar como concluída ou remover.
- O componente [`AddTasks`](src/components/AddTasks.jsx) será responsável por adicionar novas tarefas (em breve).

## Como rodar o projeto

1. Instale as dependências:

   ```sh
   npm install
   ```

2. Rode o projeto em modo desenvolvimento:

   ```sh
   npm run dev
   ```

3. Acesse no navegador: [http://localhost:5173](http://localhost:5173)

## Tecnologias utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React Icons](https://lucide.dev/)

## Observações

Este projeto é apenas para fins de aprendizado e prática de React.

## 👥 Autoria

 <img style="border-radius: 80%;" src="https://i1.sndcdn.com/avatars-001002863491-80v8qp-t500x500.jpg" width="100px;" alt=""/>
<br />
Feito de ❤️ por Ycaro Batalha

<br />
👋🏽 Let's talk!
<br />

[![Linkedin Badge](https://img.shields.io/badge/-Ycaro-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/ycaro-gabriel-da-costa-batalha-2019/)](https://www.linkedin.com/in/ycaro-gabriel-da-costa-batalha-2019/)

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
