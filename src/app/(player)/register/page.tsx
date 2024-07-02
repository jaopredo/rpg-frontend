'use client'
import { IoMdEye, IoMdEyeOff } from "react-icons/io"
import { FormtoolsForm, FormtoolsInput, FormtoolsPassword } from "formtools-react"

/* TIPOS */
import Player from "@/types/models/player"

export default function Login() {

    function onSubmit(data: Player | FormData) {  // Função que lida quando o login for feito
        console.log(data)
    }

    return <>
        <h1 className="text-center text-gray-800 text-2xl font-bold">LOGIN</h1>
        <FormtoolsForm<Player> onSubmit={onSubmit}>
            <FormtoolsInput
                name="name"
                label="Nome: "
            />
            <FormtoolsInput
                name="email"
                label="Email: "
                type="email"
            />
            <FormtoolsPassword
                name="password"
                label="Senha: "
                stateshowicon={IoMdEye}
                statehideicon={IoMdEyeOff}
            />

            <button className="gray-button">ENVIAR</button>
        </FormtoolsForm>
    </>
}
