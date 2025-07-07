import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { cn } from "@conversiondigital/headless-basics-data";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ServiceLink {
  name: string;
}

interface ServiceImage {
  asset: {
    url: string;
  };
}

interface ServiceItem {
  title: string;
  description: string;
  image: ServiceImage;
  serviceLinks: ServiceLink[];
  category: string;
  imageTitle: string;
  buttonText: string;
  buttonUrl: string;
}

interface CdServicesData {
  _key: string;
  _type: string;
  selectableVariant: string;
  sortOrder: number;
  title: string;
  subtitle: string;
  image?: ServiceImage;
  servicesList: ServiceItem[];
  globalComponentSource?: CdServicesData;
}

export default function CdServiceFeatureBlocksVariant(props: StandardComponentProps) {
  const { matchingData } = props;
  const data = matchingData as CdServicesData;
  const services = data?.servicesList || [];

  const padStart = (number: number) => String(number).padStart(2, "0");

  return (
    <div className="feature-blocks-root container mx-auto font-figtree px-2 md:px-0">
      <section className="pt-4 pb-8 lg:pt-5 lg:pb-[150px] xl:pt-[60px] xl:pb-[200px]">
        {services.map((service: ServiceItem, idx: number) => (
          <div
            key={idx + data._key}
            className="pt-20 pb-15 md:pt-[150px] md:pb-[100px] xl:pt-[200px] 2xl:pt-[270px] lg:pb-0 border-b lg:border-b-0 border-black/20"
          >
            <div
              className={cn(
                "flex flex-wrap flex-col -mt-[3.125rem] md:-mt-[4.375rem] -mx-[0.75rem] md:-mx-[1.25rem] xl:-mx-[3.125rem]",
                idx % 2 ? "md:flex-row-reverse" : "md:flex-row",
              )}
            >
              <div className="lg:w-1/2 relative mt-20 px-12">
                <span className="absolute left-[6px] md:left-[-30px] xl:left-[-40px] top-[-64px] md:top-[-120px] xl:top-[-200px] text-[90px] md:text-[180px] xl:text-[288px] font-extrabold leading-none -z-10 bg-gradient-to-b from-[rgba(128,9,40,0.05)] via-[rgba(128,9,40,0.05)] to-transparent bg-clip-text text-transparent">
                  {padStart(idx + 1)}
                </span>
                <h2 className="font-bold text-[30px] 2xl:text-[44px] 3xl:text-[48px] mb-5 md:mb-[15px] 2xl:mb-6 font-staatliches text-[#212529]">
                  {service.title}
                </h2>
                <p className="text-[#202020] text-base md:text-[1rem] xl:text-[1.125rem] leading-[2] font-normal mb-[2.125rem] md:mb-[0.9375rem] xl:mb-[2.5rem]">
                  {service.description}
                </p>
                {!!service.serviceLinks?.length && (
                  <div className="text-primary-bg/65 mb-[2.5rem] md:mb-[2.5rem] xl:mb-[3.75rem]">
                    <ul className="flex flex-wrap flex-col md:flex-row pl-[18px] list-disc">
                      {service.serviceLinks.map((link, linkIdx) => (
                        <li
                          key={linkIdx}
                          className={cn(
                            "md:text-base 2xl:text-lg md:w-1/2 md:pr-5 leading-[2]",
                            service.serviceLinks?.length > 3 ? "md:w-1/2" : "md:w-full",
                          )}
                        >
                          {link.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <Link
                  href={service.buttonUrl}
                  className="inline-flex items-center font-semibold text-[19px] tracking-[0.05em] text-white bg-accent border border-accent rounded-full py-[24px] px-[2.45rem] hover:bg-primary-bg hover:border-primary-bg/ transition-colors duration-150"
                >
                  {service.buttonText ?? "Learn More"} <ChevronRight className="ml-12 h-5 w-5" />
                </Link>
              </div>
              <div className="lg:w-1/2 mt-20 px-12">
                <Link href={service.buttonUrl} className="block m-0 border border-black/10 rounded-[25px] overflow-hidden relative shadow-[0_10px_100px_#0000001a] hover:shadow-[0_10px_100px_#fe8f1d1a]">
                  <Image
                    width={1200}
                    height={800}
                    src={service.image.asset.url}
                    className="w-full h-auto"
                    alt={service.imageTitle || service.title}
                    priority={idx === 0}
                  />
                  <figcaption className="absolute bottom-0 w-full h-full flex flex-col justify-end p-6 md:p-10 2xl:p-[50px]">
                    <span className="mb-[10px] md:mb-[10px] text-xs tracking-widest text-white uppercase z-10">{service.category}</span>
                    <h3 className="mb-0 text-xl md:text-[30px] text-white z-10 font-staatliches font-bold">
                      {service.imageTitle || service.title}
                    </h3>
                  </figcaption>
                  <div className="absolute bottom-0 left-0 right-0 h-[164px] bg-gradient-to-t from-black/85 to-transparent" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
