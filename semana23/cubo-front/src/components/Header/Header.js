import axios from "axios"
import { useContext } from "react"
import { baseURL } from "../../contants/baseURL"
import { GlobalContext } from "../../contexts/global/GlobalContext"
import { useForm } from "../../hooks/useForm"
import { Button, ContainerHeader, Form, Input } from "./styled"

const Header = () => {
    const { request } = useContext(GlobalContext)
    const initialForm = {
        firstName: "",
        lastName: "",
        participation: ""
    }

    const [form, onChange, clear] = useForm(initialForm)

    const sendUser = (e) => {
        e.preventDefault()
        const { firstName, lastName, participation } = form
        const body = {
            firstName,
            lastName,
            participation: Number(participation)
        }
        axios.post(`${baseURL}/user/create`, body)
            .then(res => {
                clear()
                request.requestUser()
                alert(res.data.message)
            })
            .catch(err => {
                console.log({ err }, err.response.data.message)
                alert("Deu ruim")
            })
    }
    const onlyNumber = (text) => {
        return text.replace(/[^0-9]/g, '');
    }
    return <ContainerHeader>
        <Form onSubmit={sendUser}>
            <Input name="firstName"
                placeholder="First Name"
                onChange={onChange}
                value={form.firstName}
                required
            />
            <Input name="lastName"
                placeholder="Last Name"
                onChange={onChange}
                value={form.lastName}
                required
            />
            <Input name="participation"
                placeholder="Participation"
                value={form.participation}
                onChange={(e) => onChange(e, onlyNumber)}
                required
            />
            <Button type="submit">
                Send
            </Button>
        </Form>
    </ContainerHeader>
}
export default Header