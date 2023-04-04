import NavItemFooter, { INavItemFooter } from "./NavItemFooter.tsx";

function NavBarFooter({items}:{
    items: INavItemFooter[];
}) {
  return (
    <>
        <div>
          {items.map((item) => <NavItemFooter item={item} />)}
        </div>
      
    </>
  )
}

export default NavBarFooter;