import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import "../../App.scss"
const AppLayout = () => {
    return <div>
        <Sidebar /> 
        <Outlet />
    </div>;
};

export default AppLayout;