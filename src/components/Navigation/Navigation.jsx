import { NavLink } from "react-router-dom";
import css from './Navigation.module.css'
import clsx from 'clsx'

const Navigation = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <ul className={css.navList}>
          <li className={css.navItem}><NavLink to="/" className={({isActive}) => clsx(css.navLink, {[css.navLinkActive]: isActive,})}>Home</NavLink></li>
          <li className={css.navItem}><NavLink to="/movies" className={({isActive}) => clsx(css.navLink2, {[css.navLinkActive2]: isActive,})}>Movies</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation