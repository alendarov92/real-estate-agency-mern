import { useState } from "react"

export default function useForm(registerSubmitHeandler,initilaValues) {

    const [values, setValues] = useState(initilaValues);

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        registerSubmitHeandler(values)
    }
    return {
        values,
        onChange,
        onSubmit
    }
}