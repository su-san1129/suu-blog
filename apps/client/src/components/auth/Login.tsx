import React, { useContext, useState } from 'react'
import AuthContext from '../../context/AuthProvider'
import { Button, Card, Col, Input, Row } from 'antd'
// import { post } from '../../api/fetcher'
import Logo from '../layout/Logo'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()
  const [password, setPassword] = useState<string>()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // const res = await post('/login', { password })
    if (password === 'test') {
      login()
      navigate('/dashboard')
    } else {
      console.log('ng')
    }
  }

  return (
    <>
      <Row justify="center">
        <Col span="14" style={{ marginTop: '12px' }}>
          <Logo />
          <Card>
            <Input.Password
              style={{ width: '50%', marginRight: '8px' }}
              placeholder="input password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleSubmit}>Login</Button>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Login
