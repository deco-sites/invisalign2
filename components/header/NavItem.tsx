import Text from "$store/components/ui/Text.tsx";

export interface INavItem {
  label: string;
  href: string;
  children?: INavItem[];
}

function NavItem({ item }: { item: INavItem }) {
  const { href, label, children } = item;

  return (
    <li class="group flex items-center relative flex-no-wrap">
    <a href={href} class="px-4 py-3">
      <span class="font-bold">{label}</span>
    </a>
  
    {children && children.length > 0 &&
      (
        <div
          class={`absolute invisible hover:visible group-hover:visible bg-default z-50 border-b-4 border-blue-400 flex flex-col gap-6 w-[15vw]`}
          style={{ top: "100%", left: "0px" }}
        >
          <ul class="flex flex-col">
            {children.map((node) => (
              <li class="pl-[5px]">
                {/* TITULOS */}
                <a class="hover:bg-gray-200" href={node.href}>
                  <Text variant="menu">{node.label}</Text>
                </a>
  
                <ul class="flex flex flex-col">
                  {node.children?.map((leaf) => (
                    <li>
                      {/* LINKS- sublist */}
                      <a class="hover:bg-gray-200" href={leaf.href}>
                        <Text variant="caption">{leaf.label}</Text>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
  </li>
  
  );
}

export default NavItem;
