import { Outlet } from "react-router";
import Navigation from "./Navigation";

export default function RootLayout() {
    return (
        <div className="relative">

            <div className="sticky top-0 z-50">
                <Navigation />
            </div>

            <Outlet />
        </div>
    )
}
