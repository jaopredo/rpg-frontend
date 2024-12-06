import { Wrapper, DefaultProps } from "formtools-react"
import { ChangeEvent } from "react"
import { useFormContext } from "react-hook-form"

export interface AttributeProps extends DefaultProps {
    setSpentPoints: string
}

export interface AttributePropsSchema extends DefaultProps {
    formtool: 'attr'
}

export function Attribute(props: AttributeProps) {
    // const { register } = useFormContext()

    function onChange(e: ChangeEvent<HTMLInputElement>) {
    }

    return <Wrapper {...props}>
        {/* <input {...register(props.name, {
            ...props.validation,
            onChange
        })}/> */}
        MEU PRÓPRIO COMPONENTE
    </Wrapper>
}
