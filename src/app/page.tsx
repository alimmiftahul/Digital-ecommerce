import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

interface Perk {
  name: string;
  Icon: any;
  description: string;
}

const perks: Perk[] = [
  {
    name: "Instant delivery",
    Icon: ArrowDownToLine,
    description:
      "Get your assets delivered to yiur email in sedond and download them right away form this site",
  },
  {
    name: "Guarentented qualitty",
    Icon: CheckCircle,
    description:
      "Every quality on our platform is verified by our team to ensure our highest quality standars are available ? Not happy ?  we offre guaranty for this",
  },
  {
    name: "For the Planet",
    Icon: Leaf,
    description:
      "We've pledged 1% of sales to the preservation and restoration of the natural environment",
  },
];

export default function Home() {
  return (
    <>
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
        {/* Todo list products*/}
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="flex justify-center md:flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className="h-1/3 w-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-- text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
