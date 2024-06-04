import { LogoDark, LogoLight } from "./Logo";
import Nav from "./Nav";

const Header = ({ onVisible }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <LogoLight />
          <LogoDark />
          <Nav onVisible={onVisible} />
        </div>
      </div>
    </header>
  );
};
export default Header;
