
export default class ErrorHandler{
    // Essa função adiciona os erros no LocalStorage (Será posteriormente removido)
    static add(errors: string[]) {
        if (typeof window !== 'undefined') {
            const acutalErrors = this.get()
            for (let error of errors) {
                acutalErrors.push(error)
            }
            localStorage.setItem('errors', JSON.stringify(acutalErrors))

            const ErrorEvent = new CustomEvent('errors-api')

            document.dispatchEvent(ErrorEvent)

            setTimeout(() => this.remove(), 7000)
        }
    }

    // Pega os erros do local storage
    static get() {
        if (typeof window !== 'undefined') {
            const errors = JSON.parse(localStorage.getItem('errors') as string)
            return errors?errors:[]
        }
        return []
    }

    // Deleta todos os erros do local storage
    static remove() {
        localStorage.setItem('errors', '[]')
    }
}
