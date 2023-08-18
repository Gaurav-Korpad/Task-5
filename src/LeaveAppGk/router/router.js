import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Rootlayout from "./layout/Rootlayout";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Staff from "../pages/Staff";
import Hod from "../pages/Hod";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Rootlayout/>}>
            <Route index element={<Dashboard/>} />
            <Route path="login" element={ <Login/>}/>
            <Route path="register" element={ <Register/>}/>
            <Route path="dashboard/staff" element={<Staff/>}  />
            <Route path="dashboard/hod" element={<Hod/>} />

        </Route>
    )
)