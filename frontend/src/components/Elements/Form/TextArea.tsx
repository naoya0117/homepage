import { TextField } from '@mui/material';

type TextAreaProps = {
    placeholder?: string;
    value?: string;
}

export const TextArea = ({placeholder, value} : TextAreaProps) => {
    return (
        <TextField
            multiline
            variant="outlined"
            placeholder={placeholder}
            value={value}
        />
    );
}