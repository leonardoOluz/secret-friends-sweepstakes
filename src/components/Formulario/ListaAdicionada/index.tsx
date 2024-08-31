import React from "react";
import styled from "styled-components";

const ListaNomes = styled.li`
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  padding-top: 6px;
  text-align: center;
`
interface props {
    nome: string;
};

const ListaAdicionada: React.FC<props> = ({ nome }) => {
    return (
        <ListaNomes>{nome}</ListaNomes>
    )
};

export default ListaAdicionada;