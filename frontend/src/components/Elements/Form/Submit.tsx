type SubmitProps = {
    className?: string;
    id?: string;
    value? : string;
};

export const Submit: React.FC<SubmitProps> = ({ className, id, value }) => {
    return (
        <input
        type="submit"
        id={id}
        className={`block w-full px-3 py-2 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue`}
        value={ value || "Submit"}
        />
    )

}