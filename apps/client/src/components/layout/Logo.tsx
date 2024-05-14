import { Image, Grid } from "antd";

const Logo = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const width = Boolean(screens.xs) ? "100px" : "150px";

  return (
    <Image
      width={width}
      src="/images/logo.png"
      className="logo"
      alt="logo"
      preview={false}
    />
  );
};

export default Logo;
