import logo from '../../assets/icons/logo.svg';
import user from '../../assets/icons/user.svg';
import cart from '../../assets/icons/cart.svg';
import symbol from '../../assets/icons/symbol.svg';
import './navbar.scss';
import Burger from '../burger/Burger';
import menu from '../../assets/icons/menu.svg';

function Navbar() {
  const burgerMenuItems = ['Steaks', 'Burgers', 'French fries', 'Drinks', 'Gdzie dowozimy?', 'Kontakt'];
  return (
    <nav id="nav">
      <Burger
        items={burgerMenuItems}
        pageWrapId="main"
        outerContainerId="nav"
        customBurgerIcon={<img src={menu} alt="menu" />}
      />
      <div className="nav__container">
        <div className="nav-left">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <ul className="nav-left__list">
            {burgerMenuItems.map(item => (
              <li>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav-right">
          <ul className="nav-right__list">
            <li>
              <a href="#">
                <img src={user} alt="user-icon" />
                <span>Moje konto</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={cart} alt="cart-icon" />
                <span>Koszyk</span>
              </a>
            </li>
            <li>
              <a className="btn small-btn" href="#">
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
