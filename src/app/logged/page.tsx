'use client'
import { useEffect, useState } from "react"
import { useAPIContext } from "@/contexts/api"
import Link from "next/link"

import { FaPlay, FaTrash } from "react-icons/fa"
import { IoMdAddCircle } from "react-icons/io"


export default function Logged() {
    const [ chars, setChars ] = useState<Array<{
        name: string
        id: string
    }>>([])
    const { characterService } = useAPIContext()

    useEffect(() => {
        setChars([])
        characterService.get().then(resp => {
            if (resp) {
                for (let charId of resp.data) {
                    characterService.name(charId).then(resp => {
                        if (resp) {
                            setChars([
                                ...chars,
                                {
                                    id: charId,
                                    name: resp.data.name
                                }
                            ])
                        }
                    })
                }
            }
        })
    }, [])

    function handleDeleteCharacter(id: string) {
        characterService.delete(id).then(resp => {
            if (resp) setChars(chars.filter(char => char.id !== id))
        })
    }

    return <>
        <h1 className="font-bold text-gray-800 text-2xl bg-white p-3 rounded-md absolute left-1/2 -translate-x-1/2 -top-8">PERSONAGENS</h1>
        {chars.length > 0 && <table className="w-[80%]">
            <thead className="block w-full">
                <tr className="border-b-2 table w-full">
                    <th className="text-gray-800 p-2 font-bold text-left">Nome</th>
                    <th className="text-gray-800 p-2 font-bold text-right">Ações</th>
                </tr>
            </thead>
            <tbody className="overflow-y-auto max-h-52 block w-full">
                {chars.map(obj => <tr key={obj.id} className="border-b table w-full">
                    <td className="p-2 text-gray-600">{ obj.name }</td>
                    <td className="p-2 flex items-center justify-end gap-2">
                        <Link className="green-button font-bold text-sm flex items-center justify-center gap-2" href={'/character'}>JOGAR <FaPlay/></Link>
                        <button className="red-button font-bold text-sm flex items-center justify-center gap-2" onClick={() => handleDeleteCharacter(obj.id)}>DELETAR <FaTrash/></button>
                    </td>
                </tr>)}
            </tbody>
            <tfoot>
                <tr className="border-t">
                    <td><Link href={'/character/create'} className="flex items-center justify-center w-fit text-emerald-500 hover:text-emerald-600 active:text-emerald-800">
                        <IoMdAddCircle className="text-3xl"/>
                        Criar Personagem
                    </Link></td>
                </tr>
            </tfoot>
        </table>}
        { chars.length == 0 && <div className="flex items-center justify-center flex-col">
            <h1 className="text-gray-800 text-3xl font-bold">NENHUM PERSONAGEM</h1>
            <p className="text-sm text-gray-500 mt-4">Você não possui nenhum personagem ainda!</p>
            <Link className="gray-button text-sm font-bold mt-2" href={'/character/add'}>CRIAR PERSONAGEM</Link>
        </div> }
    </>
}
