function Input(props) {
  return (
    <input
      className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      {...props} // Espalha as propriedades recebidas para o input -> Isso permite que você passe outras propriedades como type, placeholder, value, onChange,
    />
  );
}

export default Input;
