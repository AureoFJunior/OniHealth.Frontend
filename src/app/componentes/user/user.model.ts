export interface User {
  id?: number
  firstName: string
  lastName: string
  userName: string
  password: string
  email: string
  birthDate: Date
  isLogged: number
  actualTheme: number
  profilePicture: string
}

export interface UserDTO extends User {
  token: string
  refreshToken: string
}
