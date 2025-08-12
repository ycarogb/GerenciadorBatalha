import { useState } from "react";

function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={() => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={() => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          // verificar se os campos estão preenchidos
          //".trim" remove espaços em branco do início e do fim da string
          if (!title.trim() || !description.trim()) {
            return alert("Por favor, preencha todos os campos.");
          }
          onAddTaskSubmit(title, description);
          setTitle(""); // Limpa o campo de título após adicionar a tarefa
          setDescription(""); // Limpa o campo de descrição após adicionar a tarefa
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;
