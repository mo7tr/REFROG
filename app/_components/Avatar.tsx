import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PropsWithChildren } from "react";

export function AvatarComponent(
  props: PropsWithChildren<{ className?: string }>,
) {
  return (
    <Avatar>
      <AvatarImage src="/PPrefrog.jpeg" alt="PPrefrog" />
      <AvatarFallback>A</AvatarFallback>
    </Avatar>
  );
}
