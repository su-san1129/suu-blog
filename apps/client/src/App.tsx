import './App.css'
import { Layout } from 'antd'
import { SWRConfig } from 'swr'
import { fetcher } from './api/fetcher'
import Content from './components/layout/Content'
import Logo from './components/layout/Logo'

const { Header, Footer } = Layout

function App() {
  return (
    <SWRConfig value={{ fetcher }}>
      <Layout>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <div className="header" style={{ color: 'white' }}>
            <Logo />
          </div>
        </Header>
        <Content />
        <Footer style={{ textAlign: 'center' }}>2024 Suu blog</Footer>
      </Layout>
    </SWRConfig>
  )
}

export default App
