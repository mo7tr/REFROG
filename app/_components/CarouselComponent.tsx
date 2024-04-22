import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Section } from "./Section";

export function CarouselComponent() {
  type ImgInfos = {
    path: string;
    alt: string;
  };

  const imgInfos: ImgInfos[] = [
    { path: "/refrogcomputer.jpeg", alt: "refrogcomputer" },
    { path: "/refrogchad.jpg", alt: "refrogchad" },
    { path: "/refroglambo.jpg", alt: "refroglambo" },
    { path: "/refrogmuscle.jpg", alt: "refrogmuscle" },
  ];

  return (
    <Section className="py-10">
      <Carousel className="w-full max-w-md ">
        <CarouselContent>
          {imgInfos.map((info, index) => (
            <CarouselItem key={index}>
              <div>
                <Card className=" border-none">
                  <CardContent className="flex aspect-square items-center justify-center bg-primary p-2">
                    <Image
                      src={info.path}
                      alt={info.alt}
                      width={500}
                      height={500}
                      priority={true}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  );
}
