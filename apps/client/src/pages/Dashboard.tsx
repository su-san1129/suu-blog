import type { MenuProps } from 'antd'
import { Layout, Menu, theme } from 'antd'
const { Header, Content, Sider } = Layout
import { Outlet, Link } from 'react-router-dom'
import Logo from '../components/layout/Logo'

const items1: MenuProps['items'] = [
  { label: '新規', to: 'new' },
  { label: '編集', to: 'edit' },
].map(({ label, to }, i) => ({
  key: i + 1,
  label: <Link to={to}>{label}</Link>,
}))

const Dashboard = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <Logo />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu mode="inline" style={{ height: '100%', borderRight: 0 }} items={items1} />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            style={{
              padding: 24,
              margin: '8px 0',
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Dashboard
