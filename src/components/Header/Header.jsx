import { LogoDark, LogoLight } from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <LogoLight />
          <LogoDark />
          <Nav />
        </div>
      </div>
    </header>
  );
};
export default Header;
