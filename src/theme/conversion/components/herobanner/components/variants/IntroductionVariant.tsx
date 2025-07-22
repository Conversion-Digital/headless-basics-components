import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";

export default function IntroductionVariant(props: StandardComponentProps) {
  const { matchingData } = props;
  const { title, subtitle, category } = matchingData;

  return (
    <section className="font-figtree h-auto md:h-[50vh] w-full pt-[150px] pb-[40px] md:pt-[200px]  xl:pt-[250px] md:pb-[200px] bg-[#FFF6EC] text-primary-bg px-6 md:px-12 lg:px-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="w-full 2xl:w-2/3 mt-0 2xl:mt-12 xl:mt-6 3xl:mt-0">
          <span className="inline-block text-base md:text-2xl mb-2.5">{category}</span>
          <h1 className="mb-0 font-staatliches text-4xl md:text-6xl lg:text-7xl font-bold">{title}</h1>
          <p className="text-base md:text-2xl mb-11 md:mb-16 mt-4">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
