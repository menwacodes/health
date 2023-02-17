import Link from "next/link.js";
import classes from './Header.module.scss'
import Logo from "./Logo.js";
// need next-auth here

function SiteHeader() {
  return (
    <header className={classes.main__header}>
        <Link href={"/"}>
            <Logo/>
        </Link>
        <nav className={classes.main__header__nav}>
            <ul className={classes.main__header__nav__items}>
              <li><Link className={classes.main__header__nav__item} href="/bp">BP</Link></li>
              <li><Link className={classes.main__header__nav__item} href="/meds">Meds</Link></li>
              <li><Link className={classes.main__header__nav__item} href="#">Notes</Link></li>
              <li><Link className={classes.main__header__nav__item} href="/workouts">Workouts</Link></li>
              <li><Link className={classes.main__header__nav__item} href="#"> | Logout</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default SiteHeader