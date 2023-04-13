import HeaderButton from "$store/islands/HeaderButton.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";

import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import type { INavItem } from "./NavItem.tsx";

function Navbar({ items }: {
  items: INavItem[];
}) {
  return (
    <>
      {/* Mobile Version */}
      <div
        class={`lg:hidden flex flex-row justify-between items-center h-[${navbarHeight}] px-2 gap-2`}
      >
        <HeaderButton variant="menu" />
      </div>

      {/* Desktop Version */}
      <div class="hidden lg:flex flex-row justify-between items-center border-b-1 border-default w-full pl-2 pr-3">
        <div class="flex-none w-44">
        </div>
        <div class="flex-auto flex justify-center md:text-[16px]">
          {items.map((item) => <NavItem item={item} />)}
        </div>
      </div>
    </>
  );
}

export default Navbar;
