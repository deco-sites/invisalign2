import Modals from "$store/islands/HeaderModals.tsx";
import type { Image } from "deco-sites/std/components/types.ts";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product, Suggestion } from "deco-sites/std/commerce/types.ts";
import type { ClientConfigVTEX } from "deco-sites/std/functions/vtexConfig.ts";

import Logo from "./Logo.tsx";
import Navbar from "./Navbar.tsx";
import { headerHeight } from "./constants.ts";

export interface NavItem {
  label: string;
  href: string;
  children?: Array<{
    label: string;
    href: string;
  }>;
  
}

export interface Props {
  logo?: {
    src?: Image,
    alt?:string,
    width: number,
    height: number
  };
  infos?: string[]
  navItems?: NavItem[];
  products?: LoaderReturnType<Product[] | null>;
  suggestions?: LoaderReturnType<Suggestion | null>;
  configVTEX?: LoaderReturnType<ClientConfigVTEX>;
}

function Header(
  {
    products,
    navItems = [],
    suggestions,
    configVTEX,
    logo,
    infos = []
  }: Props,
) {
  return (
    <header className={`h-[${headerHeight}]`}>
      <div className={`bg-default w-full`}>
        <Logo logo={logo} infos={infos}/>
        <Navbar items={navItems} />
      </div>

      <Modals
        menu={{ items: navItems }}
      />
    </header>
  );
}

export default Header;
