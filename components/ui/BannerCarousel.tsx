import Text from "$store/components/ui/Text.tsx";
import Button from "$store/components/ui/Button.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { useId } from "preact/hooks";


export interface Banner {
  desktop: LiveImage;
  mobile: LiveImage;
  alt: string;
  width?: number,
  height?: number, 
  action?: {
    href: string;
    title: string;
    legend1: string;
    legend2?: string;
    subTitle?: string;
    label: string;
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
    action,
    width = 800, 
    height =800
  } = image;

return (
  <>
      <div class="flex flex-col  md:flex-row w-full">
        <div class="w-full md:w-1/2">
        <Picture preload={lcp}>
          <Source
            media="(max-width: 767px)"
            fetchPriority={lcp ? "high" : "auto"}
            src={mobile}
            width={660}
            height={400}
          />
          <Source
            media="(min-width: 768px)"
            fetchPriority={lcp ? "high" : "auto"}
            src={desktop}
            width={width}
            height={height}
            class="w-full"
          />
          <img 
            loading={lcp ? "eager" : "lazy"}
            src={desktop}
            alt={alt}
            class="w-full cover"
          />
        </Picture>
        </div>
        <div class="w-full md:w-1/2 flex">
          <div class="flex flex-col items-center justify-center">
              {action && (
                  <div class="flex flex-col justify-center pl-[60px]">
                    <span class="font-black text-blue-title text-5xl text-centermd:text-left pb-[15px]">
                      {action.title}
                    </span>
                  <div class="flex items-center">
                          <div class="bg-pink-title rounded-full w-2 h-2 md:w-2 md:h-2 lg:w-2 lg:h-2 mr-2"></div>
                          <span>{action.legend1}</span>
                  </div>
                  <div class="flex items-center">
                          <div class="bg-pink-title rounded-full  w-2 h-2 md:w-2 md:h-2 lg:w-2 lg:h-2 mr-2"></div>
                          <span>{action.legend2}</span>
                  </div>            
                    <Text variant="heading-3" class="pb-[10px]">
                      {action.subTitle}
                    </Text>
                    <div class="w-[120px] pl-[60px] md:pl-0">
                      <Button variant="primary">{action.label}</Button>
                    </div>
                  </div>
                  )}
            </div>
        </div> 
        </div>
      </>
   
  );
}
function BannerItem2({ image, lcp }: { image: Banner; lcp?: boolean }) {
  const {
    alt,
    mobile,
    desktop,
    action,
    width = 800, 
    height =800
  } = image;

return (
  <>
  <div class="flex flex-col items-center mx-auto md:flex-row-reverse max-w-[1200px] mt-[45px]">
    <div class="w-1/2">
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
                width={width}
                height={height}
                class="w-full cover"
              />
              <img 
                loading={lcp ? "eager" : "lazy"}
                src={desktop}
                alt={alt}
              />
            </Picture>
            </div>
            <div class="md:w-1/2">
              {action && (
                <div class="flex flex-col items-center justify-center">
                  <span class="font-black text-blue-title text-5xl text-center pb-[15px]">
                    {action.title}
                  </span>
                  <div class="flex items-baseline mt[10px]">
                    <div class="w-[10px] mr-[5px]">
                      <div class="bg-pink-title rounded-full w-2 h-2"></div>
                    </div>
                      <span>{action.legend1}</span>
                  </div>
                <div class="flex items-baseline mt-[10px]">
                        <div class="w-[10px] mr-[5px]">
                              <div class="bg-pink-title rounded-full w-2 h-2"></div>
                        </div>
                        <span>{action.legend2}</span>
                </div>     
                  <Text variant="heading-3" class="pb-[10px] mt-[10px]">
                    {action.subTitle}
                  </Text>
                  <div class="w-[320px] mb-[10px]">
                    <Button variant="primary">{action.label}</Button>
                  </div>
                </div>
              )}
            </div>
  </div>
       
      </>
  );
}
// BannerProduct e BannerProduct 2 são iguais muudando apenas cor e flex-row-reverse 
function BannerProduct({ image, lcp }: { image: Banner; lcp?: boolean }) {
  const {
    alt,
    mobile,
    desktop,
    action,
    width = 600, 
    height= 400
  } = image;

return (
  <div class="relative mt-[50px] mx-auto max-w-[1200px]">
          <div class="box-border z-20">
            <div class="flex flex-col relative z-10 pt-12 pl-12 pb-12 pr-12 md:flex-row-reverse">
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
                  <div class="flex flex-col bg-default justify-center shadow-lg md:w-[400px]">
                      <Text variant="heading-3" class="pb-[10px]">
                        {action.title}
                      </Text>
                      <span class="text-base pb-[10px]">
                        {action.legend1}
                      </span>
                      <Text variant="heading-3" class="pb-[10px]">
                        {action.legend2}
                      </Text>
                      <Text variant="heading-3" class="pb-[10px]">
                        {action.subTitle}
                      </Text>
                      <div class="w-[220px] md:w-[320px]">
                        <Button variant="primary">{action.label}</Button>
                      </div>
                  </div>
                )}
              </div>           
                <div class="h-[150px] w-[300px] bg-pink-title absolute z-0 top-0 right-0 md:w-74 h-[230px]"></div>
                <div class="h-[150px] w-[300px] bg-pink-title absolute z-0 bottom-0 left-0 md:w-74 h-[230px]"></div>
              </div>
          </div>
    );
}
function BannerProduct2({ image, lcp }: { image: Banner; lcp?: boolean }) {
  const {
    alt,
    mobile,
    desktop,
    action,
    width = 600,
    height = 400
  } = image;

return (
  <div class="relative mt-[50px] mx-auto max-w-[1200px]">
          <div class="box-border z-20">
            <div class="flex flex-col relative z-10 pt-12 pl-12 pb-12 pr-12 md:flex-row">
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
                  <div class="flex flex-col bg-default justify-center shadow-lg md:w-[400px]">
                      <Text variant="heading-3" class="pb-[10px]">
                        {action.title}
                      </Text>
                      <span class="text-base pb-[10px]">
                        {action.legend1}
                      </span>
                      <Text variant="heading-3" class="pb-[10px]">
                        {action.legend2}
                      </Text>
                      <Text variant="heading-3" class="pb-[10px]">
                        {action.subTitle}
                      </Text>
                      <div class="w-[320px]">
                        <Button variant="primary">{action.label}</Button>
                      </div>
                  </div>
                )}
              </div>           
                <div class="h-[150px] w-[300px] bg-pink-title absolute z-0 top-0 right-0 md:w-74 h-[230px]"></div>
                <div class="h-[150px] w-[300px] bg-pink-title absolute z-0 bottom-0 left-0 md:w-74 h-[230px]"></div>
              </div>
          </div>
    );
}




function BannerCarousel({ images, preload,}: Props) {

return (
      <div>
  {images?.map((image, index) => (
    <div>
      {index === 0 ? (
        <BannerItem image={image} lcp={index === 0 && preload} />
      ) : index === 1 ? (
        <BannerItem2 image={image} lcp={index === 1 && preload} />
      ) : index === 2 ? (
        <BannerProduct image={image} lcp={index === 2 && preload} />
      )  : index === 3 ?(
        <BannerProduct2 image={image} lcp={index===3 && preload} />
      ) : (
        <BannerProduct image={image} lcp={index === 4 && preload} />
      )}
    </div>
  ))}
  </div>
);
}

export default BannerCarousel;