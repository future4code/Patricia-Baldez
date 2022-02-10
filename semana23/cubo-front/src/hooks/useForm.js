import { useState } from "react"

export const useForm = (initialForm) => {
    const [form, setForm] = useState(initialForm)
    const onChange = (e, mask) => {
        if (mask) {
            setForm({
                ...form, [e.target.name]: mask(e.target.value)
            })
        } else {
            setForm({
                ...form, [e.target.name]: e.target.value
            })
        }
    }
    const clear = () => {
        setForm(initialForm)
    }
    return [form, onChange, clear]
}