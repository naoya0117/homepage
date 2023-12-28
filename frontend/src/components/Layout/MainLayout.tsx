type MainLayoutProps = {
    children: React.ReactNode;
}
export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="flex flex-row justify-between">
            {children}
        </div>
    );

};