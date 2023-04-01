import Text from "$store/components/ui/Text.tsx";


export interface INavItem {
  label: string;
  href: string;
  children?: INavItem[];
}

function NavItem({ item }: { item: INavItem }) {
  const { href, label, children } = item;

  return (
    <li class="group flex items-center relative">
    <a href={href} class="px-4 py-3">
      <Text
        class="group-hover:border-black border-solid border-b border-white"
        variant="menu"
      >
        {label}
      </Text>
    </a>
  
    {children && children.length > 0 &&
      (
        <div
          class={`absolute invisible hover:visible group-hover:visible bg-default z-50 flex flex-col gap-6 border-t-1 border-b-2 border-default w-[20vw]`}
          style={{ top: "100%", left: "0px" }}
        >
          <ul class="flex flex-col">
            {children.map((node) => (
              <li>
                <a class="hover:bg-gray-200" href={node.href}>
                  <Text variant="menu">{node.label}</Text>
                </a>
  
                <ul class="flex flex flex-col">
                  {node.children?.map((leaf) => (
                    <li>
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
