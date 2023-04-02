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
    children?: Array<{
      label: string;
      href: string;
    }>;
  }>;
  image?: {
    src?: Image;
    alt?: string;
  };
}

export interface Props {
  image?: {
    src?: Image,
    alt?:string,
    width: number,
    height: number
  };
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
    image
  }: Props,
) {
  return (
    <header class={`h-[${headerHeight}]`}>
      <div class="bg-default fixed w-full z-50">
        <Logo image={image}/>
        <Navbar items={navItems} />
      </div>

      <Modals
        menu={{ items: navItems }}
      
      />
    </header>
  );
}

export default Header;
