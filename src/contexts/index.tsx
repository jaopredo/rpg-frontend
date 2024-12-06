import type { ReactNode } from "react" 

import { APIProvider } from "./api"
import FormtoolsConfigProvider from "./config"

export default function ContextsProvider({ children }: { children: ReactNode|ReactNode[] }) {
    return <FormtoolsConfigProvider>
        <APIProvider>
            {children}
        </APIProvider>
    </FormtoolsConfigProvider>
}
