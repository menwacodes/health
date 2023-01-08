## Shell Prep
1. Create folders for
   1. /components
      1. /header
      2. /layout
      3. /ui
   2. /public/img
   3. /public/js
   4. /public/styles/7-Layer-Architecture
2. Import /public/styles/main.scss into /pages/_app.js

## Logo
1. Created component
2. Created but didn't fill component css module
```js
import classes from "./Logo.module.scss";

function Logo() {
    return (
        <div className={classes.logo}>
            <svg>
                <use href={"/img/sprite.svg#icon-heartbeat"}></use>
            </svg>
            <span className={classes.logo__text}>Health</span>
        </div>
    );
}

export default Logo;
```

## Header Section
1. Created site header with nav and next/link \<Link> component
   1. Grabbed an icon from icomoon.io/app with shell and put in /public/img/sprite.svg:
   ```js
    <svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1"
         xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            // symbol tag goes here
        </defs>
    </svg>
    ```
   2. Created /components/header/Logo.js & SCSS
   3. Imported Logo into Header component
   4. Created shell nav
   5. Put Header component with logo and main nav together

## Layout
1. CSS for this should come from base.scss
2. Standard, reusable component
3. Used a workouts directory 
```js
import SiteHeader from "../header/index.js";

function SiteLayout({children}) {
  return (
    <>
      <SiteHeader />
        <main className={"main-content"}>{children}</main>
    </>
  )
}

export default SiteLayout
```
4. Updated /pages/_app.js to wrap site with SiteLayout vs custom layouts for now