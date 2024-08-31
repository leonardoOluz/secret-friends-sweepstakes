import { Outlet } from "react-router-dom";
import Cabecalho from "../Cabecalho"

const PaginBase = () => {
    return (<>
        <Cabecalho />
        <Outlet />
    </>);
};

export default PaginBase;