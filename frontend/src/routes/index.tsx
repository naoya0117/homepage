import { Outlet, useRoutes } from "react-router-dom";
import { Home } from "@/features/home";
import { MainLayout } from "@/components/Layout/MainLayout";

const App = () => {
    return (
        <MainLayout>
            <Outlet />
        </MainLayout>
    );
};

export const AppRoutes = () => {
    const commonRoutes = [
        {
            element: <App />,
            children: [
                { path: '/', element: <Home /> },
                { path: '/blog', element: <div>Blog</div>},
                { path: '/contact', element: <div>Contact</div>},
            ]
        }
    ]

    const element = useRoutes(commonRoutes);

    return element;
}
