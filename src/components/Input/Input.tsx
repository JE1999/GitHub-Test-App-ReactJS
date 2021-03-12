import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';

interface IProps {
    label: string;
    name: string;
    type?: string;
    register: () => void;
    defaultValue?: string | string[];
    messageError?: string;
}

export const Input = (props: IProps) => {

    const {
        label = '',
        name,
        type = 'text',
        register,
        defaultValue,
        messageError,
    } = props

    return (
        <FormControl 
            error={messageError ? true : false}
            variant="filled"
            fullWidth
        >
            <InputLabel htmlFor="component-outlined">{label}</InputLabel>
            <FilledInput 
                id="component-outlined"
                // label={label}
                name={name}
                type={type}
                defaultValue={defaultValue}
                inputRef={register}
            />
            <FormHelperText id="component-error-text">{messageError}</FormHelperText>
        </FormControl>
    );
}