import { FormFloating, FormLabel } from '../StyledComponents/Common.jsx';
import {useDarkMode} from "@/hooks/useDarkMode.js";

function FormField({
                       label,
                       type = "text",
                       id,
                       name,
                       placeholder,
                       value,
                       onChange,
                       darkMode
                   }) {
    return (
        <>
            <FormLabel $darkMode={darkMode}>{label}</FormLabel>
            <FormFloating className="form-floating" $darkMode={darkMode}>
                <input
                    type={type}
                    className="form-control"
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                <label htmlFor={id}>{placeholder}</label>
            </FormFloating>
        </>
    );
}

export default FormField;