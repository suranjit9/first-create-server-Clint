import { Outlet } from "react-router-dom";
import Adduser from "../Component/Adduser";


const Root = () => {
    return (
        <div>
            <Adduser></Adduser>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;