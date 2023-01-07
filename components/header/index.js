import Link from "next/link.js";
import classes from './Header.module.scss'
import Logo from "./Logo.js";

function SiteHeader() {
  return (
    <>
      <Logo />
        <nav>
            <ul>
              <li><Link href="#">BP</Link></li>
              <li><Link href="#">Meds</Link></li>
              <li><Link href="#">Appointments</Link></li>
              <li><Link href="/workouts">Workouts</Link></li>
            </ul>
        </nav>
    </>
  )
}

export default SiteHeader