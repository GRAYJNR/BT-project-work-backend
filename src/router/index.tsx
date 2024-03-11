import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import RootLayout from "../components/layouts/RootLayout";

import Shop from "../pages/Shop";
import Appointments from "../pages/Appointments";



const AppRouter = createBrowserRouter(
    createRoutesFromElements(
    <>
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Shop />} />
                <Route path="shop" element={<Shop />} />
                <Route path="appointments" element={<Appointments />} />
            </Route>

    </>
    )
);




export default AppRouter;