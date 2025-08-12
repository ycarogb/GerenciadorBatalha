import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import { useState } from "react";
import { v4 } from "uuid";
import { useEffect } from "react";

function App() {
  // criação de um state (um objeto que representa o estado de certo componente) para armazenar as tarefas das tasks
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  ); //se não houver nada no localStorage, o state tasks será um array vazio

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); //salva o state tasks no localStorage e converte o objeto em string
  }, [tasks]); //se algo mudar no state tasks, a função dentro do useEffect será executada

  //crio funções que vão manipular o state tasks aqui em App.jsx porque o state está aqui
  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed }; // Inverte o estado de completado da tarefa
      }
      return task; // Retorna a tarefa inalterada se não for a selecionada
    });
    setTasks(newTask); // Atualiza o state com a nova lista de tarefas
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId); // Filtra as tarefas para remover a tarefa com o id correspondente
    setTasks(newTasks); // Atualiza o state com a nova lista de tarefas
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      completed: false,
    };
    setTasks([...tasks, newTask]); // Adiciona a nova tarefa ao state
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />{" "}
        {/* Passando o state tasks como propriedade para o componente Tasks */}
      </div>
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
