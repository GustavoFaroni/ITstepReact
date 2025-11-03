import React, { useState } from "react";

function ListaDeTarefas() {
  const [listaTarefas, setListaTarefas] = useState([]);

  const [inputAtual, setInputAtual] = useState({
    tarefa: "",
    prazo: ""
  });

  //Função genérica para atualizar o estado 'inputAtual'
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    
    setInputAtual(inputAnterior => ({
      ...inputAnterior,
      [name]: value
    }));
  };


  const adicionarTarefa = (event) => {
    event.preventDefault(); // Impede o formulário de recarregar a página


    // Adiciona o objeto 'inputAtual' na lista 'listaTarefas'
    setListaTarefas([...listaTarefas, inputAtual]);

    // Limpa os campos de input para a próxima tarefa
    setInputAtual({ tarefa: "", prazo: "" });
  };


  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <form onSubmit={adicionarTarefa}>
        <div>
        <input
          type="text"
          name="tarefa" // O 'name' deve ser igual à chave no estado 'inputAtual'
          placeholder="Tarefa"
          value={inputAtual.tarefa}
          onChange={handleInputChange}
        /></div><div>
        <input
          type="text"
          name="prazo" // O 'name' deve ser igual à chave no estado 'inputAtual'
          placeholder="Prazo"
          value={inputAtual.prazo}
          onChange={handleInputChange}
        /></div>
        <button type="submit">Adicionar</button>
      </form>

      {}
      <h2>Tarefas:</h2>
      <ul>
        {listaTarefas.map((item, index) => (
          <li key={index}>
            <strong>Tarefa:</strong> {item.tarefa} | <strong>Prazo:</strong> {item.prazo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTarefas;