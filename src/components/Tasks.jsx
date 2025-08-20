import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

//function traz no parâmetro as props do componente Tasks
function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  //props é um objeto que contém todas as propriedades passadas para o componente
  //cada li precisa de uma chave única, por isso usamos o id da tarefa como key
  // ${} introduz o javascript para alterar o estilo do componente dependendo do estado completed do primeiro button
  const navigate = useNavigate();
  function onSeeDetailsClick(task) {
    let query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`); // Navega para a página de detalhes da tarefa com os parâmetros de título e descrição
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)} // Chama a função onTaskClick passando o id da tarefa
            className={`bg-slate-400 text-left flex items-center text-white p-2 rounded-md w-full 
              ${task.completed && "line-through"}`}
          >
            {task.completed && <CheckIcon />}
            {task.title}
          </button>
          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>
          <Button
            onClick={() => onDeleteTaskClick(task.id)} // Chama a função onDeleteTask passando o id da tarefa
          >
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
