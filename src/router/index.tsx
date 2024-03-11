import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import RootLayout from "../components/layouts/RootLayout";
import Shop from "../pages/Shop";
import Apointments from "../pages/Appointments";



const AppRouter = createBrowserRouter(
    createRoutesFromElements(
    <>
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Shop />} />
                <Route path="shop" element={<Shop />} />
                <Route path="appointments" element={<Apointments />} />
            </Route>

    </>
    )
);




export default AppRouter;