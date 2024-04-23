"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { ClipboardCopy } from "lucide-react";
import Link from "next/link";

export const Contract = () => {
  const { toast } = useToast();
  const contractAddress: string =
    "EQBBOscfW6Xb-Vi4aCSaeLf8n-slePbo76YiqgMDdPat5Eqo";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      toast({ description: "Contract copied to clipboard!" });
    } catch (err) {
      toast({ description: "Failed to copy to clipboard!" });
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <Button
        variant="outline"
        className="whitespace-normal "
        onClick={copyToClipboard}
      >
        <ClipboardCopy className="mr-2" />
        {contractAddress}
      </Button>
      <Link
        href="https://www.geckoterminal.com/ton/pools/EQBqn80x5pDTf831WRYCOTmW7CTk4_bQpSdLeuPMXEAmYC9x"
        rel="noopener noreferrer"
        target="_blank"
        className={cn(
          buttonVariants({ variant: "outline" }),
          "font-extrabold hover:animate-bounce",
        )}
      >
        CHART
      </Link>
      <Link
        href="https://app.ston.fi/swap?outputCurrency=EQBBOscfW6Xb-Vi4aCSaeLf8n-slePbo76YiqgMDdPat5Eqo&chartVisible=false&ft=TON&tt=EQBBOscfW6Xb-Vi4aCSaeLf8n-slePbo76YiqgMDdPat5Eqo"
        rel="noopener noreferrer"
        target="_blank"
        className={cn(
          buttonVariants({ variant: "outline" }),
          "animate-bounce font-extrabold",
        )}
      >
        BUY NOW
      </Link>
    </div>
  );
};
