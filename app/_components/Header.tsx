import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AvatarComponent } from "./Avatar";
import { Section } from "./Section";
import { GeckoIcon } from "./icons/GeckoIcon";
import { TelegramIcon } from "./icons/TelegramIcon";
import { TwitterIcon } from "./icons/TwitterIcon";

export const Header = () => {
  return (
    <header className=" sticky top-0 z-10 bg-primary px-2 py-4">
      <Section className="flex items-center ">
        <div className="flex items-center gap-2">
          <AvatarComponent />
          <h1 className="text-2xl font-bold text-background md:text-4xl">
            $REFROG
          </h1>
        </div>

        <div className="flex-1" />
        <ul className="flex items-center gap-3">
          <Link
            href="https://twitter.com/refrogtoncoin"
            rel="noopener noreferrer"
            target="_blank"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-8 p-0 hover:-translate-y-1 hover:translate-x-1 md:size-10",
            )}
          >
            <TwitterIcon size={32} />
          </Link>
          <Link
            href="https://t.me/ReFrogTonCoin"
            rel="noopener noreferrer"
            target="_blank"
            className={cn(
              buttonVariants({ variant: "outline" }),
              " size-8 p-0 hover:-translate-y-1 hover:translate-x-1 md:size-10",
            )}
          >
            <TelegramIcon size={32} />
          </Link>
          <Link
            href="https://www.geckoterminal.com/ton/pools/EQBqn80x5pDTf831WRYCOTmW7CTk4_bQpSdLeuPMXEAmYC9x"
            rel="noopener noreferrer"
            target="_blank"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-8 p-0 hover:-translate-y-1 hover:translate-x-1 md:size-10",
            )}
          >
            <GeckoIcon size={32} />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
