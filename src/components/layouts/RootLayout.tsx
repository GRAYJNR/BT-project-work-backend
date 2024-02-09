import { Outlet } from "react-router";

export default function RootLayout() {
    return (
        <div>
            <h3>RootLayout</h3>
            <Outlet />
        </div>
    )
}
