interface CustomEventMap {
    "errors-api": CustomEvent<string[]>
}

declare global {
    interface WindowEventMap extends WindowEventMap, CustomEventMap {
    }
}
export { }; //keep that for TS compiler.