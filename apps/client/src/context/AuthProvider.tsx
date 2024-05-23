import { ReactNode, createContext, useState } from 'react'

type AuthContextType = {
  isAuthenticated: boolean
  accessToken: string
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  accessToken: '',
  login: () => {},
  logout: () => {},
})

type AuthProviderProps = {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const accessToken = localStorage.getItem('accessToken') || ''
  const [isAuthenticated, setIsAuthenticated] = useState(!!accessToken)

  const login = () => {
    setIsAuthenticated(true)
  }

  const logout = () => {
    setIsAuthenticated(false)
  }

  return <AuthContext.Provider value={{ isAuthenticated, accessToken, login, logout }}>{children}</AuthContext.Provider>
}

export default AuthContext
