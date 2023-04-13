import Modal from "$store/components/ui/Modal.tsx";
import { lazy, Suspense } from "preact/compat";
import { useUI } from "$store/sdk/useUI.ts";

import type { Props as MenuProps } from "$store/components/header/Menu.tsx";
import Loading from "$store/components/ui/Loading.tsx";

const Menu = lazy(() => import("$store/components/header/Menu.tsx"));
interface Props {
  menu: MenuProps;
}

function Modals({ menu }: Props) {
  const { displayMenu  } = useUI();

  return (
    <div class="">
      <Modal
        title="Menu"
        mode="center"
        loading="lazy"
        open={displayMenu.value}
        onClose={() => {
          displayMenu.value = false;
        }}
      >
        <Suspense fallback={<Loading />}>
          <Menu {...menu} />
        </Suspense>
      </Modal>
    </div>
  );
}

export default Modals;
