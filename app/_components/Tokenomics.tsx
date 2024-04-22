import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "./Section";

export const Tokenomics = () => {
  return (
    <Section className="flex flex-col items-center gap-4 pb-4 pt-3 md:flex-row">
      <div className="flex flex-col gap-4 lg:flex-row">
        <Card className="h-48 w-48 border border-none bg-primary hover:-translate-y-3">
          <CardHeader>
            <CardTitle className="text-gradient-to-r pb-3 text-center text-primary-foreground">
              Total Supply
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-primary-foreground">
            1,000,000
          </CardContent>
        </Card>{" "}
        <Card className="h-48 w-48 border border-none bg-primary hover:-translate-y-3">
          <CardHeader>
            <CardTitle className=" text-gradient-to-r pb-3 text-center text-primary-foreground">
              LP Burned
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-primary-foreground">
            Community is capable of adding liquidity
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col gap-4 lg:flex-row">
        <Card className="h-48 w-48 border border-none bg-primary hover:-translate-y-3">
          <CardHeader>
            <CardTitle className=" text-gradient-to-r pb-3 text-center text-primary-foreground">
              Taxes
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-primary-foreground">
            0/0
          </CardContent>
        </Card>{" "}
        <Card className="h-48 w-48 border border-none bg-primary hover:-translate-y-3">
          <CardHeader>
            <CardTitle className=" text-gradient-to-r pb-3 text-center text-primary-foreground">
              Contract
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-primary-foreground">
            Renounced
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};
