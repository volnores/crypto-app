export interface IPropsLogin {
    setPassword: (value: string) => void
    setEmail: (value: string) => void
}

export interface IPropsRegister {
    setUserName: (value: string) => void
    setEmail: (value: string) => void
    setFirstName: (value: string) => void
    setPassword: (value: string) => void
    setRepeatPassword: (value: string) => void
}