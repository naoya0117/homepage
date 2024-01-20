type TextAreaProps = {
    className?: string;
    id?: string;
    name?: string;
    placeholder?: string;
    rows?: number;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
export const TextArea = ({ className, id, value, name, placeholder, rows, onChange}: TextAreaProps) => {
    return (

        <textarea
            id={id} rows={rows || 5}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
        >
        </textarea>

    )
}