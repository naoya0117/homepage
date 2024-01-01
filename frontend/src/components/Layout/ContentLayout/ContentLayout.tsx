import * as React from 'react';
import { Head } from '@/components/Head';

type items = {
    id: string;
    name: string;
};

type ContentLayoutProps = {
    children: React.ReactNode;
    title: string;
    description: string;
    sideItems?: items[];
};

export const ContentLayout = ({ children, title, description}: ContentLayoutProps) => {
    return (
        <>
            <Head title={title} description={description} />
            <meta property="og:title" content="Naoya's portfolio"/>
            <meta property="og:image" content="%PUBLIC_URL%/logo.png" />
            <div className="flex flex-col min-h-screen">
                <main className="flex-grow">
                    {children}
                </main>
            </div>
        </>
    );
};