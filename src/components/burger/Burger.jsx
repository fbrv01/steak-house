import { slide as Menu } from 'react-burger-menu';
import './burger.scss';

function Burger({ items, ...props }) {
  return (
    <Menu {...props}>
      {items.map((item) => (
        <a className="menu-item" href="#">
          {item}
        </a>
      ))}
    </Menu>
  );
}

export default Burger;
