import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderControllerJS from "$store/islands/SliderJS.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import { useId } from "preact/hooks";
import { animation, keyframes, tw } from "twind/css";

export interface Banner {
    desktop: LiveImage;
    mobile: LiveImage;
    alt: string;
    width: number;
    height: number;
    mensagem?: string;
    action?: {
      href: string;
      legenda1: string;
      legenda2: string;
      legenda3: string;
      legenda4: string;
    };
}
export interface Props {
    images?: Banner[];
    preload?: boolean;
    interval?: number;
}

function BannerItem({ image, lcp }: { image: Banner; lcp?: boolean }) {
    const {
      alt,
      mobile,
      desktop,
      mensagem,
      width = 400,
      height = 400,
      action,
    } = image;
  
    return (
    <>
    <div class="flex">
        <div class="mx-auto text-light-blue">{mensagem}</div>
    </div>
    <div class="h-[600px]" style={{backgroundImage: 'linear-gradient(to right, #ffffff 50%, rgb(7, 143, 255) 50%)'}}>
            <div class="h-[400px] min-w-[100vw] flex justify-center items-center flex-row-reverse mt-[20px]">
                <div class="mt-[200px] mr-[200px]">
                <Picture preload={lcp}>
                    <Source
                    media="(max-width: 767px)"
                    fetchPriority={lcp ? "high" : "auto"}
                    src={mobile}
                    width={360}
                    height={600}
                    />
                    <Source
                    media="(min-width: 768px)"
                    fetchPriority={lcp ? "high" : "auto"}
                    src={desktop}
                    width={400}
                    height={400}
                    />
                    <img
                    class="object-cover sm:h-full"
                    loading={lcp ? "eager" : "lazy"}
                    width={width}
                    height={height}
                    src={desktop}
                    alt={alt}
                    />
                </Picture>
                </div>
                <div class="">
                {action && (
                    <div
                    class="max-h-min max-w-[400px] flex flex-col gap-4 bg-hover-inverse pt-[80px] rounded mr-[120px]"
                    style={{ backdropFilter: "blur(8px)" }}
                    >
                    <Text variant="heading-2" tone="blue">
                        {action.legenda1}
                    </Text>
                    <Text variant="heading-3" tone="blue">
                        {action.legenda2}
                    </Text>
                    <Text variant="heading-3" tone="black">
                        {action.legenda3}
                    </Text>
                    <div class="w-[320px]">
                        <Button variant="primary">{action.legenda4}</Button>
                    </div>
                    </div>
                )}
                </div>
            </div>
        </div>
    </>
    );
}
  
function Dots({ images, interval = 0 }: Props) {
    return (
      <>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            @property --dot-progress {
              syntax: '<percentage>';
              inherits: false;
              initial-value: 0%;
            }`,
          }}
        >
        </style>
        <ol class="flex items-center justify-end col-span-full gap-4 z-10 row-start-4">
          {images?.map((_, index) => (
            <li class="h-full">
              <button
                data-dot={index}
                aria-label={`go to slider item ${index}`}
                class="h-full rounded focus:outline-none group"
              >
                <div
                  class={tw`group-disabled:${
                    animation(
                      `${interval}s ease-out 1 forwards`,
                      keyframes`
                        from: {
                          --dot-progress: 0%;
                        }
                        to {
                          --dot-progress: 100%;
                        }
                      `,
                    )
                  } rounded-full w-8 h-8 mr-2`}
                  style={{
                    background:
                      "linear-gradient(to right, #dd1313 var(--dot-progress), rgba(0, 0, 0, 0.4) var(--dot-progress))",
                  }}
                />
              </button>
            </li>
          ))}
        </ol>
      </>
    );
  }
function SliderHome({ images, preload, interval }: Props) {
    const id = useId();
  
    return (
      <div
        id={id}
        class="grid grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_48px]"
      >
        <Slider class="col-span-full row-span-full scrollbar-none gap-6">
          {images?.map((image, index) => (
            <BannerItem image={image} lcp={index === 0 && preload} />
          ))}
        </Slider>

        <Dots images={images} interval={interval} />
  
        <SliderControllerJS rootId={id} interval={interval && interval * 1e3} />
      </div>
    );
  }

export default SliderHome;