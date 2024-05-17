import { Image, Grid } from 'antd'
import { Link } from 'react-router-dom'

const Logo = () => {
  const { useBreakpoint } = Grid
  const screens = useBreakpoint()

  const width = Boolean(screens.xs) ? '100px' : '150px'

  return (
    <Link to="/">
      <Image width={width} src="/images/logo.png" className="logo" alt="logo" preview={false} />
    </Link>
  )
}

export default Logo
