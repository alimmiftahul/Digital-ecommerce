import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="mx-auto flex max-w-3xl flex-col items-center py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Your marketplace for high-quality{"  "}
          <span className="text-blue-700"> products</span>.
        </h1>
        <p className="mt-6 max-w-prose text-lg text-muted-foreground">
          Welcome to Digymerce. every asset on our platform is verified by our
          team to ensure our highest quality standards
        </p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <Link href="/products" className={buttonVariants()}>
            Browse Trending
          </Link>
          <Button variant="ghost">Our Quality Promise &rarr;</Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
