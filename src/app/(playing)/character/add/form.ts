import { SchemaType } from "formtools-react"

import { AttributePropsSchema } from "@/components/custom"

interface FormInterface {
    basic: SchemaType[],
    attributes: SchemaType<AttributePropsSchema>[],
    specialities: SchemaType[]
}

const form: FormInterface = {
    basic: [
        {
            formtool: 'text',
            label: '',
            name: 'basic.name',
            placeholder: 'Insira um Nome'
        },
        {
            formtool: 'number',
            label: 'Idade',
            name: 'basic.age'
        },
        {
            formtool: 'text',
            label: 'Profissão',
            name: 'basic.occupation'
        },
        {
            formtool: 'select',
            type: 'options',
            label: 'Raça',
            name: 'basic.race',
            options: [
                {
                    label: 'Humano',
                    value: 'human'
                },
                {
                    label: 'Vampíro',
                    value: 'vampire'
                },
                {
                    label: 'Homem-Pedra',
                    value: 'rockman'
                },
                {
                    label: 'Animal',
                    value: 'animal'
                }
            ]
        },
        {
            formtool: 'select',
            type: 'options',
            label: 'Estilo de Luta',
            name: 'basic.fightStyle',
            options: [
                {
                    label: 'Nenhum',
                    value: 'none'
                },
                {
                    label: 'Hamon',
                    value: 'hamon'
                },
                {
                    label: 'Spin',
                    value: 'spin'
                },
                {
                    label: 'Esgrima',
                    value: 'fencing'
                },
                {
                    label: 'Atirador',
                    value: 'shooter'
                },
                {
                    label: 'Lutador',
                    value: 'fighter'
                },
            ]
        },
    ],
    attributes: [
        {
            formtool: 'attr',
            label: 'Força',
            name: 'strengh'
        },
        {
            formtool: 'number',
            label: 'Destreza',
            name: 'dexterity'
        },
        {
            formtool: 'number',
            label: 'Constituição',
            name: 'constituition'
        },
        {
            formtool: 'number',
            label: 'Educação',
            name: 'education'
        },
        {
            formtool: 'number',
            label: 'Mentalidade',
            name: 'mentality'
        },
        {
            formtool: 'number',
            label: 'Social',
            name: 'social'
        },
    ],
    specialities: [
        {
            formtool: 'text',
            label: 'Especialidades',
            name: 'teste1'
        }
    ]
}

export default form
