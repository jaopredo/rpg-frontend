'use client'
import { FormtoolsForm, FormtoolsSchema, FormtoolsGroup } from "formtools-react"
import { useState } from "react"

/* ESTILO */
import '@/sass/form.scss'

/* TIPOS */
import Character from "@/types/models/character"

/* SCHEMA DO FORMULÁRIO */
import form from "./form"

/* TIPOS */
import { AttributePropsSchema } from '@/components/custom'

export default function CreateCharacter() {
    const [ attrSpentPoints, setAttrSpentPoints ] = useState<number>(0)  // Pontos já gastos nos atributos 

    function onSubmit(data: Omit<Character, 'combat'|'abilities'|'level'>) {
        console.log(data)
    }

    return <FormtoolsForm<Omit<Character, 'combat'|'abilities'|'level'>> multipart={false} onSubmit={onSubmit} className="create-form w-full h-full">
        <FormtoolsGroup className="basic">
            <FormtoolsSchema schema={form.basic} />
        </FormtoolsGroup>

        <FormtoolsGroup className="attributes">
            <div>
                {attrSpentPoints}
            </div>
            <FormtoolsSchema schema={form.attributes} />
        </FormtoolsGroup>

        <FormtoolsGroup className="specs">
            <FormtoolsSchema schema={form.specialities} />
        </FormtoolsGroup>

        <div style={{ gridArea: 'submit' }}>
            <button className='flex items-center justify-center gap-2 gray-button'>ENVIAR</button>
        </div>
    </FormtoolsForm>
}
