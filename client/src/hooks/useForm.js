import { useState } from "react"

export default function useForm(initilaValues) {

    const [values, setValues] = useState(initilaValues);

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        submitHeandler(values)
    }
    return {
        values,
        onChange,
        onSubmit
    }
}