import React, { useState } from "react";

function CriarSenha() {
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(null);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSenha(value);

    if (value.length > 0 && value.length < 10) {
      setErro("Senha muito pequena");
    } else {
      setErro(null);
    }
  };


  return (
    <div>
      <h1>inserir senha</h1>
        <div>
          <input
            type="password"
            name="senha"
            placeholder="Insira a senha (mínimo 10 caracteres)"
            value={senha}
            onChange={handleInputChange}
          />
        </div>

      {erro && <h2 style={{ color: 'red' }}>{erro}</h2>}
    </div>
  );
}

export default CriarSenha;