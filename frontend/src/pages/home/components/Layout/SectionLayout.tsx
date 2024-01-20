type SectionLayoutProps = {
    id: string;
    className?: string;
    children: React.ReactNode;
};

export const SectionLayout = ({ id, className, children }: SectionLayoutProps) => {
    return (
        <div id={id} className={`flex flex-col items-center justify-center h-[80vh] max-w-[90%] mx-auto ${className}`}>
            {children}
        </div>
    )
}