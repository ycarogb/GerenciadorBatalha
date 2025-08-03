import { ChevronRightIcon, TrashIcon } from "lucide-react";

//function traz no parâmetro as props do componente Tasks
function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  //props é um objeto que contém todas as propriedades passadas para o componente
  //cada li precisa de uma chave única, por isso usamos o id da tarefa como key
  // ${} introduz o javascript para alterar o estilo do componente dependendo do estado completed do primeiro button
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)} // Chama a função onTaskClick passando o id da tarefa
            className={`bg-slate-400 text-left text-white p-2 rounded-md w-full 
              ${task.completed && "line-through"}`}
          >
            {task.title}
          </button>
          <button className="bg-slate-400 text-white p-2 rounded-md">
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onDeleteTaskClick(task.id)} // Chama a função onDeleteTask passando o id da tarefa
            className="bg-slate-400 text-white p-2 rounded-md"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
