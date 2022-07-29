import { slide as Menu } from 'react-burger-menu';
import logo from '../../assets/icons/logo.svg';
import user from '../../assets/icons/user.svg';
import cart from '../../assets/icons/cart.svg';
import symbol from '../../assets/icons/symbol.svg';
import './navbar.scss';

function Navbar(props) {
  return (
    <nav id="nav">
      <Menu {...props}>
        <a className="menu-item" href="/">
          Steaks
        </a>

        <a className="menu-item" href="/burgers">
          Burgers
        </a>

        <a className="menu-item" href="/pizzas">
          French fries
        </a>

        <a className="menu-item" href="/desserts">
          Drinks
        </a>

        <a className="menu-item" href="/desserts">
          Gdzie dowozimy?
        </a>

        <a className="menu-item" href="/desserts">
          Kontakt
        </a>
      </Menu>
      <div className="nav__container">
        <div className="nav-left">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <ul className="nav-left__list">
            <li>
              <a href="./">Steaks</a>
            </li>
            <li>
              <a href="./">Burgers</a>
            </li>
            <li>
              <a href="./">French fries</a>
            </li>
            <li>
              <a href="./">Drinks</a>
            </li>
            <li>
              <a href="./">Gdzie dowozimy?</a>
            </li>
            <li>
              <a href="./">Kontakt</a>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <ul className="nav-right__list">
            <li>
              <a href="./">
                <img src={user} alt="user-icon" />
                <span>Moje konto</span>
              </a>
            </li>
            <li>
              <a href="./">
                <img src={cart} alt="cart-icon" />
                <span>Koszyk</span>
              </a>
            </li>
            <li>
              <a className="btn small-btn" href="./">
                <img src={symbol} alt="symbol-icon" />
                <span>Zamów </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
