import { useRef, useState } from "react";
import { ContainerForm, FormAdicionarNomes } from "./styles";
import useAdicionarParticipantes from "../../state/hook/useAdicionarParticipantes";
import { useRecoilValue } from "recoil";
import { mensagemErro } from "../../state/atom";

const Formulario = () => {
  const [nome, setNome] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const adicionarParticipante = useAdicionarParticipantes();
  const messageErro = useRecoilValue(mensagemErro);

  const handleAdicionarNome = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    adicionarParticipante(nome);
    setNome('');
    inputRef.current?.focus();
  }

  return (
    <FormAdicionarNomes onSubmit={handleAdicionarNome}>
      <ContainerForm>
        <input
          ref={inputRef}
          value={nome}
          type="text"
          placeholder="Insira os nomes dos participantes"
          onChange={(e) => setNome(e.target.value)}
        />
        <button disabled={!nome}>Adicionar</button>
      </ContainerForm>
      {messageErro && <p role="alert">{messageErro}</p>}
    </FormAdicionarNomes>
  )
};

export default Formulario;