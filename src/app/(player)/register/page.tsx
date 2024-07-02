'use client'
import { IoMdEye, IoMdEyeOff } from "react-icons/io"
import { FormtoolsForm, FormtoolsInput, FormtoolsPassword } from "formtools-react"
import { useAPIContext } from "@/contexts/api"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { AiOutlineLoading } from "react-icons/ai"

/* TIPOS */
import Player from "@/types/models/player"

export default function Login() {
    const router = useRouter()
    const [ submited, setSubmited ] = useState<boolean>(false)
    const { playerService } = useAPIContext()

    function onSubmit(data: Player | FormData) {  // Função que lida quando o login for feito
        setSubmited(true)
        playerService.register(data as Player).then(resp => {
            if (resp) {
                const { token } = resp.data  // Pego o token retornado da API
                localStorage.setItem('token', token)  // Coloco o token no armazenamento local
                router.push('/logged')
            } else {
                setSubmited(false)
            }
        })
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

            <button className={`flex items-center justify-center gap-2 gray-button`} disabled={submited}>
                ENVIAR
                { submited && <AiOutlineLoading className="animate-spin text-white text-xl" /> }
            </button>
        </FormtoolsForm>
    </>
}
