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