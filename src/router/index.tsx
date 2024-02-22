import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import RootLayout from "../components/layouts/RootLayout";
import Shop from "../components/Shop";


const AppRouter = createBrowserRouter(
    createRoutesFromElements(
    <>

            <Route path="/" element={<RootLayout />}>
                <Route index element={<Shop />} />
                <Route path="shop" element={<Shop />} />
            </Route>


    </>
    )
);




export default AppRouter;