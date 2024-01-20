import { Outlet, useRoutes } from "react-router-dom";
import { Home } from "@/pages/home";
import { Contact } from "@/pages/contact";
import { MainLayout } from "@/components/Layout";

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
                { path: '/contact', element: <Contact />},
            ]
        }
    ]

    const element = useRoutes(commonRoutes);

    return element;
}
