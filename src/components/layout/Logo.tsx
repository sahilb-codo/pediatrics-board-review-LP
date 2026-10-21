import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ImageAsset } from "@/types";

type LogoProps = {
  name: string;
  logo: ImageAsset;
  className?: string;
};

export function Logo({ name, logo, className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex shrink-0 items-center", className)} aria-label={`${name} home`}>
      <Image src={logo.src} alt="" width={logo.width} height={logo.height} loading="eager" className="h-11 w-auto sm:h-12" />
    </Link>
  );
}
