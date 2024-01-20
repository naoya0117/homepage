import { inputAdornmentClasses } from "@mui/material";

type TextInputProps = {
    className?: string;
    id?: string;
    name?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    value?: string;
    type?: string;
};
export const TextInput = ({ className, id, name, onChange, placeholder, value, type }: TextInputProps) => {
    return (
        <input type='text'
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
        onChange={onChange}
        typeof={type || "text"}>
        </input>
    )
}