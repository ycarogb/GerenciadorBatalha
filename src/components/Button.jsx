function Button(props) {
  return (
    <button {...props} className="bg-slate-400 text-white p-2 rounded-md">
      {props.children}
    </button>
  );
}

export default Button;

//props.children representa qualquer conteúdo que você coloca entre as tags de abertura e fechamento do componente Button
