import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, HandCoins, ReceiptText, Scale } from "lucide-react";
import { Section } from "./Section";

export const Tokenomics = () => {
  return (
    <Section className="flex flex-col items-center gap-4 pb-10 pt-3 md:grow md:flex-row">
      <div className="flex grow  flex-col items-center gap-4 lg:flex-row lg:justify-around">
        <Card className="border-1 size-56 border  border-primary bg-gradient-to-r from-primary to-primary/90 shadow-xl hover:-translate-y-3">
          <CardHeader>
            <CardTitle className="text-gradient-to-r pb-3 text-center text-background">
              Total Supply
            </CardTitle>
          </CardHeader>

          <CardContent className="text-center text-background">
            <div className="flex flex-col items-center">
              <Scale size={48} className="mb-2" />
              <p className="">1,000,000</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-1 size-56 border  border-primary bg-gradient-to-r from-primary to-primary/90 shadow-xl hover:-translate-y-3">
          <CardHeader>
            <CardTitle className=" text-gradient-to-r pb-3 text-center text-background">
              LP Burned
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-background">
            <div className="flex flex-col items-center">
              <Flame size={48} className="mb-2" />
              <p className="">Say no more</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex grow flex-col items-center gap-4 lg:flex-row lg:justify-around">
        <Card className="border-1 size-56 border  border-primary bg-gradient-to-r from-primary to-primary/90 shadow-xl hover:-translate-y-3">
          <CardHeader>
            <CardTitle className=" text-gradient-to-r pb-3 text-center text-background">
              Taxes
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-background">
            <div className="flex flex-col items-center">
              <HandCoins size={48} className="mb-2" />
              <p className="">0/0</p>
            </div>
          </CardContent>
        </Card>{" "}
        <Card className="border-1 size-56 border  border-primary bg-gradient-to-r from-primary to-primary/90 shadow-xl hover:-translate-y-3">
          <CardHeader>
            <CardTitle className="text-gradient-to-r pb-3 text-center text-background">
              Contract
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-background">
            <div className="flex flex-col items-center">
              <ReceiptText size={48} className="mb-2" />
              <p className="">Renounced</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};
