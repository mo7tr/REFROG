import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const Section = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <section className={cn("m-auto px-1 sm:px-2 md:px-4", props.className)}>
      {props.children}
    </section>
  );
};
