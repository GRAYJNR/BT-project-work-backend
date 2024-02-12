import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import RootLayout from "../components/layouts/RootLayout";
import App from "../App";
import Shop from "../Shop";


const AppRouter = createBrowserRouter(
    createRoutesFromElements(
    <>

            <Route path="/" element={<RootLayout />}>
                <Route index path="dashboard" element={<App />} />
                <Route path="shop" element={<Shop />} />
            </Route>


    </>
    )
);




export default AppRouter;