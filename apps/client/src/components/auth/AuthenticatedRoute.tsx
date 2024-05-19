import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import AuthContext from '../../context/AuthProvider'

interface Props {
  component: React.ComponentType
}

const AuthenticatedRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext)
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" replace />
}

export default AuthenticatedRoute
