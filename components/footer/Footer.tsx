import Text from "$store/components/ui/Text.tsx";
import NavBarFooter from "./NavBarFooter.tsx";
import NavItemFooter from "./NavItemFooter.tsx";
import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import type { HTML } from "deco-sites/std/components/types.ts";


export type IconItem = {
  icon: AvailableIcons
}
 
export interface Item {
  label: string;
  href: string;
}
export interface Section {
  label: string;
  subList: Item[];
}
export interface NavItem {
    infos: string[];
    bandeira: string;
    nationality: string;
    icons?: IconItem[];
    infos2?: { label: string, href: string };
    contacts?: { label: string, sac: number; href: string };
    juridico?:{label:string, href: string};
    nomeEmpresa?: string;
    
}

export interface Props {
  sections: Section[];
  navItems?: NavItem[];
}

function Footer({ sections, navItems = [],}: Props) {
  return (
    <footer class="w-full">
      <div class="mx-auto max-w-7xl px-4 border-b-2 border-black">
        <div class="flex mb-[40px]">
          {sections &&
            sections.map((section) => (
              <div key={section.label} class="w-full px-4 ">
                <div>
                <h4 class="font-bold pb-[18px] text-sm text-titles">{section.label}</h4>
                  <ol class=""> 
                    {section.subList &&
                      section.subList.map((item) => (
                        <li key={item.href} class="mb-[12px]">
                          <a href={item.href}><h3 class="text-base text-xs">{item.label}</h3></a>
                        </li>
                      ))}
                  </ol>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div class="mx-auto max-w-7xl pb-[55px]">
          <NavBarFooter items={navItems} />
      </div>
    </footer>
  );
}

export default Footer;
