import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Contract } from "./Contract";
import { Section } from "./Section";

export const About = () => {
  return (
    <Section className="flex flex-col items-center">
      <Image
        src="/resistanceFrogLogoNoBg.png"
        alt="Resistance Frog Logo "
        width={300}
        height={200}
        layout="responsive"
        priority={true}
        className="mx-auto  max-w-2xl"
      />
      <div className="flex flex-col flex-wrap justify-center gap-4 md:flex-row">
        <Card className="max-w-96 border border-none bg-primary">
          <CardHeader>
            <CardContent className="px-2 text-justify text-primary-foreground">
              Resistance Frog ($REFROG) is more than just another memecoin. It
              represents a community movement focused on spreading freedom,
              resistance, and joy through the iconic frog symbol. Known
              worldwide as a symbol of happiness, frog combined with freedom and
              anti-censorship values of Telegram deserved its own community on
              TON network.
            </CardContent>
          </CardHeader>
          <CardContent className="text-primary-foreground">
            <p>Frogs Matter!</p>
          </CardContent>
        </Card>

        <Card className="max-w-96 border border-none bg-primary">
          <CardHeader>
            <CardTitle className=" text-gradient-to-r pb-3 text-center text-primary-foreground">
              Why choose $REFROG ?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-justify text-primary-foreground">
            We believe in power of frog symbol to bring people together and
            create strong connections. $REFROG gives you an exciting chance to
            be part of something special, helping to build a movement of freedom
            and resistance.
          </CardContent>
        </Card>

        <Card className="max-w-96 border border-none bg-primary ">
          <CardHeader>
            <CardTitle className="text-primary-foreground">CA</CardTitle>
          </CardHeader>
          <CardContent>
            <Contract />
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};
