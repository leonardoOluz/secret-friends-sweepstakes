import React, { PropsWithChildren } from "react";
import { SecaoDoFormulario } from "./styles";

const SecaoPrincipal: React.FC<PropsWithChildren> = ({children}) => {
    return(
        <SecaoDoFormulario>
            {children}
        </SecaoDoFormulario>
    )
};

export default SecaoPrincipal;