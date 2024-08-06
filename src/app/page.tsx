import InfoCard from "@/components/InfoCard";
import { AllSectionData } from "@/utils/content-data";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-100 p-10">
      {/* Safari */}
      <section>
        <h1 style={{ color: AllSectionData["safari"].tintColor }}>
          {AllSectionData["safari"].title}
        </h1>
        <div className="grid grid-cols-2 gap-8 mt-6">
          <InfoCard
            tintColor={AllSectionData["safari"].tintColor}
            {...AllSectionData["safari"].cards["highlights"]}
          >
            <div className="relative size-full max-w-[400px] mx-auto mt-20">
              <Image
                src="/iphone-mock.png"
                alt="Passwords app"
                fill
                sizes="50vh"
                className="object-contain lg:object-cover object-top"
              />
            </div>
          </InfoCard>
          <InfoCard
            tintColor={AllSectionData["safari"].tintColor}
            {...AllSectionData["safari"].cards["reader"]}
          >
            <div className="relative size-full max-w-[400px] mx-auto mt-20">
              <Image
                src="/iphone-mock.png"
                alt="Passwords app"
                fill
                sizes="50vh"
                className="object-contain lg:object-cover object-top"
              />
            </div>
          </InfoCard>
        </div>
      </section>
      {/* Passwords */}
      <section>
        <h1 style={{ color: AllSectionData["passwords"].tintColor }}>
          {AllSectionData["passwords"].title}
        </h1>
        <div className="grid grid-cols-2 gap-8 mt-6">
          <InfoCard
            tintColor={AllSectionData["passwords"].tintColor}
            {...AllSectionData["passwords"].cards["app"]}
          >
            <div className="relative size-full max-w-[400px] mx-auto mt-20">
              <Image
                src="/iphone-mock.png"
                alt="Passwords app"
                fill
                sizes="50vh"
                className="object-contain lg:object-cover object-top"
              />
            </div>
          </InfoCard>
          <InfoCard
            tintColor={AllSectionData["passwords"].tintColor}
            {...AllSectionData["passwords"].cards["sync"]}
          >
            <div className="w-full flex-1 flex flex-col justify-center">
              <p className="text-[3.5rem] font-medium leading-tight tracking-tight">
                Works across iPhone, iPad, Mac, Apple Vision Pro, and Windows.
              </p>
            </div>
          </InfoCard>
        </div>
      </section>
      {/* Wallet */}
      <section>
        <h1 style={{ color: AllSectionData["wallet"].tintColor }}>
          {AllSectionData["wallet"].title}
        </h1>
        <div className="grid grid-cols-1 gap-8 mt-6">
          <InfoCard
            tintColor={AllSectionData["wallet"].tintColor}
            {...AllSectionData["wallet"].cards["tap"]}
          >
            <div className="relative flex-1 w-full mt-20 flex justify-center items-center gap-8">
              <div className="max-w-[50%]">
                <p className="text-[3.5rem] tracking-tighter font-medium leading-tight max-w-[12ch]">
                  Bring iPhone devices together to pay privately.
                </p>
              </div>
              <div className="relative aspect-[9/16] w-1/2 max-w-[400px]">
                <Image
                  src="/iphone-mock.png"
                  alt="Passwords app"
                  fill
                  sizes="50vh"
                  className="object-contain lg:object-cover object-top"
                />
              </div>
            </div>
          </InfoCard>
        </div>
      </section>
    </main>
  );
}
