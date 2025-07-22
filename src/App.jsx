import Tasks from "./components/Tasks";

function App() {
  return (
    <div>
      <h1> Gerenciador de Tarefas </h1>
      <Tasks />
    </div>
  );
}

export default App;

// ----------------- ESTE CÓDIGO FOI GERADO DURANTE A PARTE TEÓRICA DA AULA  --------
// function App() {
//   const message = "Olá muundo!";
//   return (
//     <div>
//       <h1> {message} </h1>
//     </div>
//   );
// }

// import { useState } from "react";

// export default App;

//Lidando com  State
//A cada interação/ação do usuário o state roda novamente a função que representa o componente
// function App() {
//   const [message, setMessage] = useState("Olá, mundo!"); //message ->é o state (estado em que se encontra o componente) | setMEssage ->função que vai alterar o state

//   return (
//     <div>
//       <h1> {message} </h1>
//       <button
//         onClick={() => {
//           setMessage("Olá, fui clicado!");
//         }}
//       >
//         Mudar mensagem
//       </button>
//     </div>
//   );
// }

// export default App;
