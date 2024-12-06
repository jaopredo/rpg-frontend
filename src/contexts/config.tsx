'use client'
import { ConfigContextProvider, ConfigInterface, createCustomComponent } from "formtools-react"
import { ReactNode } from "react"

/* COMPONENTES CUSTOMIZADOS */
import { Attribute } from "@/components/custom"

const config: ConfigInterface = {
    customComponents: {
        attr: createCustomComponent(Attribute)
    }
}

export default function FormtoolsConfigProvider({ children }: { children: ReactNode }) {
    return <ConfigContextProvider config={config}>
        {children}
    </ConfigContextProvider>
}