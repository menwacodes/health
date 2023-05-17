import Link from "next/link";
import classes from './Header.module.scss';
import Logo from "./Logo.js";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {signOut} from "next-auth/react";

function SiteHeader() {
    const user = useSelector(state => state.user);


    return (
        <header className={ classes.main__header }>
            <Link href={ "/" }>
                <Logo/>
            </Link>
            <nav className={ classes.main__header__nav }>
                <ul className={ classes.main__header__nav__items }>
                    <li><Link className={ classes.main__header__nav__item } href="/bp">BP</Link></li>
                    <li><Link className={ classes.main__header__nav__item } href="/meds">Meds</Link></li>
                    <li><Link className={ classes.main__header__nav__item } href="#">Notes</Link></li>
                    <li><Link className={ classes.main__header__nav__item } href="/workouts">Workouts</Link></li>
                    { user && !user.auth &&
                        <li>
                            <Link className={ classes.main__header__nav__item } href="/users/login"> | Login</Link>
                        </li>
                    }
                    { user && user.auth &&
                        <li>
                            <Link
                                className={ classes.main__header__nav__item } href="#"
                                onClick={ () => {
                                    signOut({ callbackUrl: "/" });
                                } }
                            > | Logout
                            </Link>
                        </li>
                    }
                </ul>
            </nav>
        </header>
    );
}

export default SiteHeader;