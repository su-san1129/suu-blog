import { ReactNode, createContext, useEffect, useState } from 'react'

type AuthContextType = {
  isAuthenticated: boolean
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
})

type AuthProviderProps = {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true')

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated.toString())
  }, [isAuthenticated])
  const login = () => {
    setIsAuthenticated(true)
  }

  const logout = () => {
    setIsAuthenticated(false)
  }

  return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>
}

export default AuthContext
