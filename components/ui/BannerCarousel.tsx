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
  action?: {
    href: string;
    title: string;
    legend1: string;
    legend2: string;
    subTitle: string;
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
        <Picture preload={lcp} class="w-1/2">
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
          />
          <img 
            loading={lcp ? "eager" : "lazy"}
            src={desktop}
            alt={alt}
          />
        </Picture>
        {action && (
          <div class="w-1/2 flex flex-col bg-blue">
            <Text variant="heading-3">
              {action.title}
            </Text>
            <Text variant="heading-3">
              {action.legend1}
            </Text>
            <Text variant="heading-3">
              {action.legend2}
            </Text>
            <Text variant="heading-3">
              {action.subTitle}
            </Text>
            <Button variant="secondary">{action.label}</Button>
          </div>
        )}
      </>
   
  );
}
function BannerProduct({ image, lcp }: { image: Banner; lcp?: boolean }) {
  const {
    alt,
    mobile,
    desktop,
    action,
    width = 600, 
    height= 600
  } = image;

return (
  <div class="relative">
          <div class="m-10 box-border z-20">
            <div class="flex h-[600px] p-10 relative z-10">
              <Picture preload={lcp} class="w-1/2">
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
                />
                <img 
                  loading={lcp ? "eager" : "lazy"}
                  src={desktop}
                  alt={alt}
                />
              </Picture>
              {action && (
                <div class="flex flex-col bg-blue h-[400px] w-1/2">
                  <Text variant="heading-3">
                    {action.title}
                  </Text>
                  <Text variant="heading-3">
                    {action.legend1}
                  </Text>
                  <Text variant="heading-3">
                    {action.legend2}
                  </Text>
                  <Text variant="heading-3">
                    {action.subTitle}
                  </Text>
                  <Button variant="secondary">{action.label}</Button>
                </div>
              )}
               </div>
            <div class="h-64 w-64 bg-gray-600 absolute z-0 top-0 left-0 ">teste</div>
            <div class="h-64 w-64 bg-gray-600 absolute z-0 bottom-0 right-0">teste</div>
          </div>
      </div>
    );
}
function BannerCarouselDif({ image, lcp }: { image: Banner; lcp?: boolean }) {
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
        <Picture preload={lcp} class="w-1/2">
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
          />
          <img 
            loading={lcp ? "eager" : "lazy"}
            src={desktop}
            alt={alt}
          />
        </Picture>
        <div>Mensagem personalizada</div>
        {action && (
          <div class="w-1/2 flex flex-col">
            <Text variant="heading-3">
              {action.title}
            </Text>
            <Text variant="heading-3">
              {action.legend1}
            </Text>
            <Text variant="heading-3">
              {action.legend2}
            </Text>
            <Text variant="heading-3">
              {action.subTitle}
            </Text>
            <Button variant="secondary">{action.label}</Button>
          </div>
        )}
      </>
   
  );
}
function BannerFullScreen({ image, lcp }: { image: Banner; lcp?: boolean }) {
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
        <Picture preload={lcp} class="w-1/2">
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
          />
          <img 
            loading={lcp ? "eager" : "lazy"}
            src={desktop}
            alt={alt}
          />
        </Picture>
         <div>Mensagem personalizada</div>
        {action && (
          <div class="w-1/2 flex flex-col">
            <Text variant="heading-3">
              {action.title}
            </Text>
            <Text variant="heading-3">
              {action.legend1}
            </Text>
            <Text variant="heading-3">
              {action.legend2}
            </Text>
            <Text variant="heading-3">
              {action.subTitle}
            </Text>
            <Button variant="secondary">{action.label}</Button>
          </div>
        )}
      </>
   
  );
}


function BannerCarousel({ images, preload }: Props) {
const styles = [
    { display: 'flex', margin: '75px 0 0 0'},
    { width: '1200px', margin: '75px auto 0', display: 'flex', flexDirection: 'row-reverse', height: '600px'},
    { width: '1200px', height: '600px', margin: '0 auto' }

];
    return (
      <div>
          {images?.map((image, index) => (
            <div style={styles[index]}>
               {index === 0 || index === 1 || index === 6 ? (
                <BannerItem image={image} lcp={index === 0 && preload} />
        ) : index === 2 || index === 3 || index === 7 ? (
        <BannerProduct image={image} lcp={index === 2 && preload} />
      ) : index === 4 ? (
        <BannerCarouselDif image={image} lcp={index === 4 && preload} />
      ) : index === 5 ? (
        <BannerFullScreen image={image} lcp={index === 5 && preload} />
      ) : (
        <BannerProduct image={image} lcp={index === 0 && preload} />
      )}
            </div>
          ))}
      </div>
    
  );
}

export default BannerCarousel;