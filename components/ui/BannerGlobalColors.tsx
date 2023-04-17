import Text from "$store/components/ui/Text.tsx";
import Button from "$store/components/ui/Button.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Banner {
  desktop: LiveImage;
  mobile: LiveImage;
  alt: string;
  width?: number,
  height?: number, 
  cores?: "verde" | "rosa" | "azul",
  alinhamento?: "normal" | "inverso",
  botao?: "sim" | "nao",
  action?: {
    href?: string;
    title?: string;
    legend1?: string;
    connectLink?:string;
    hrefConnect?:string;
    legend2?: string;
    subTitle?: string;
    label?: string;
  };
}
export interface Props {
  images?: Banner[];
  preload?: boolean;
  interval?: number;
}

function BannerTeste({ image, lcp }: { image: Banner; lcp?: boolean }) {
    const {
        alt,
        mobile,
        desktop,
        cores,
        alinhamento,
        botao,
        action,
        width = 600, 
        height= 400
      } = image;

      const hiddenButton = botao === "sim" ? "block" : botao === "nao" ? "hidden": ""
      const corEscolhida = cores === "azul" ? "bg-blue" : cores === "verde" ? "bg-green-home" : cores === "rosa" ? "bg-pink" : "bg-gray-500";
      const alinhamentoCSS = alinhamento === "normal" ? "flex-row" : alinhamento === "inverso" ? "flex-row-reverse" : "";
    return (
      <div class="relative mt-[50px] mx-auto max-w-[1200px]">
              <div class="box-border z-20">
                <div class={`flex flex-col relative z-10 pt-12 pl-12 pb-12 pr-12 md:${alinhamentoCSS}`}>
                    <Picture preload={lcp}>
                      <Source
                        media="(max-width: 767px)"
                        fetchPriority={lcp ? "high" : "auto"}
                        src={mobile}
                        width={400}
                        height={391}
                      />
                      <Source
                        media="(min-width: 768px)"
                        fetchPriority={lcp ? "high" : "auto"}
                        src={desktop}
                        width={849}
                        height={491}
                      />
                      <img 
                        loading={lcp ? "eager" : "lazy"}
                        src={desktop}
                        alt={alt}
                      />
                    </Picture>
                    {action && (
                      <div class="flex flex-col bg-default justify-center box-border items-center shadow-lg sm:items-center sm:w-[600px] md:px-[60px] md:py-[20px] md:items-start md:w-[600px]">
                          <Text variant="heading-3" class="pb-[10px]">
                            {action.title}
                          </Text>
                          <span class="text-base pt-[25px]">
                            {action.legend1}
                          </span>
                          <Text variant="heading-3" class="pb-[10px]">
                            {action.legend2}
                          </Text>
                          <Text variant="heading-3" class="pb-[10px]">
                            {action.subTitle}
                          </Text>
                          <div class={`w-[220px] md:w-[320px] ${hiddenButton}`}>
                            <Button variant="primary">{action.label}</Button>
                          </div>
                      </div>
                    )}
                  </div>           
                    <div class={`h-[150px] w-[300px] absolute z-0 top-0 right-0 md:w-74 md:h-[230px] ${corEscolhida}`}></div>
                    <div class={`h-[150px] w-[300px] absolute z-0 bottom-0 left-0 md:w-74 md:h-[230px] ${corEscolhida}`}></div>
                  </div>
              </div>
        );
}

export default BannerTeste