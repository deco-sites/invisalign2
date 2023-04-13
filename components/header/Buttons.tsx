import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useUI } from "$store/sdk/useUI.ts";


function MenuButton() {
  const { displayMenu } = useUI();

  return (
    <Button
    class="md:mt-[30px]"
      variant="icon"
      aria-label="open menu"
      onClick={() => {
        displayMenu.value = true;
      }}
    >
      <span class="font-bold">MENU</span>

      <Icon id="Bars3" width={20} height={20} strokeWidth={0.01} />
    </Button>
  );
}


function HeaderButton({ variant }: { variant: "cart" | "search" | "menu" }) {
  if (variant === "menu") {
    return <>
    <MenuButton />
    </>
  }

  return null;
}

export default HeaderButton;
