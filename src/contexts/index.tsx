import type { ReactNode } from "react" 
import { APIProvider } from "./api"

export default function ContextsProvider({ children }: { children: ReactNode|ReactNode[] }) {
    return <>
        <APIProvider>
            {children}
        </APIProvider>
    </>
}
