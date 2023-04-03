import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Container from "$store/components/ui/Container.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Newsletter from "./Newsletter.tsx";
import type { ComponentChildren } from "preact";
import Image from "https://denopkg.com/deco-sites/std@0.2.1/components/Image.tsx";

export type IconItem = { icon: AvailableIcons };

export type StringItem = {
  label: string;
  href: string;
};

export type Item = StringItem | IconItem;

export type Section = {
  label: string;
  children: Item[];
};

export type SectionFinish = {
  label: string;
  image?: {
    src?: string;
    alt?: string;
    width: number;
    height: number;
  };
  nacionalidade: string;
  children: Item[];
  texto2: string;
  texto3: string;
  texto4: string;
};

const isIcon = (item: Item): item is IconItem =>
  // deno-lint-ignore no-explicit-any
  typeof (item as any)?.icon === "string";

function SectionItem({ item }: { item: Item }) {
  return (
    <Text variant="caption" tone="default-inverse">
      {isIcon(item) ? (
        <div class="border-default border-1 py-1.5 px-2.5">
          <Icon id={item.icon} width={25} height={20} strokeWidth={0.01} />
        </div>
      ) : (
        <a href={item.href}>{item.label}</a>
      )}
    </Text>
  );
}

function FooterContainer({
  children,
  class: _class = "",
}: {
  class?: string;
  children: ComponentChildren;
}) {
  return <div class={`py-6 px-4 sm:py-12 sm:px-0 ${_class}`}>{children}</div>;
}
function FooterFinish({
  children,
  class: _class = "",
}: {
  class?: string;
  children: ComponentChildren;
}) {
  return <div class={`py-6 px-4 sm:py-12 sm:px-0 ${_class}`}>{children}</div>;
}

function SectionFinishItem({ sectionFinish }: { sectionFinish: SectionFinish }) {
  return (
    <div>
      <Text variant="heading-3" tone="default-inverse">
        {sectionFinish.label}
      </Text>
      <div>
        {sectionFinish.image?.src && (
          <Image
            src={sectionFinish.image.src}
            alt={sectionFinish.image.alt}
            width={sectionFinish.image.width}
            height={sectionFinish.image.height}
          />
        )}
      </div>
      <div>{sectionFinish.nacionalidade} </div>
      <ul class="flex flex-col gap-2 pt-2">
        {sectionFinish.children.map((item) => (
          <li>
            <SectionItem item={item} />
          </li>
        ))}
      </ul>
      <div>
        <Text variant="caption" tone="default-inverse">{sectionFinish.texto2}</Text>
        <Text variant="caption" tone="default-inverse">{sectionFinish.texto3}</Text>
        <Text variant="caption" tone="default-inverse">{sectionFinish.texto4}</Text>
      </div>
    </div>
  );
}


export interface Props {
  sections?: Section[];
  sectionsFinish?: SectionFinish[];
}

function Footer({ sections = [], sectionsFinish =[] }: Props) {
  return (
    <footer class="w-full bg-footer flex flex-col divide-y-1 divide-default">
      <div>
        <Container class="w-full flex flex-col divide-y-1 divide-default">
          <FooterContainer>
          <ul class="hidden sm:flex flex-row gap-20">
              {sections.map((section) => (
                <li>
                  <div>
                    <Text variant="heading-3" tone="default-inverse">
                      {section.label}
                    </Text>

                    <ul
                      class={`flex ${
                        isIcon(section.children[0]) ? "flex-row" : "flex-col"
                      } gap-2 pt-2`}
                    >
                      {section.children.map((item) => (
                        <li>
                          <SectionItem item={item} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </FooterContainer>

          <FooterFinish>
            {sectionsFinish.map((section) => (
              <SectionFinishItem sectionFinish={section} />
            ))}
          </FooterFinish>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
