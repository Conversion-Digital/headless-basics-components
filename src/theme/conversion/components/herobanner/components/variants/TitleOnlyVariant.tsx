import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";

export default function TitleOnlyVariant(props: StandardComponentProps) {
  const { matchingData } = props;
  const title = matchingData?.title;
  return (
    <section className="mt-[210px] md:mt-[280px] xl:mt-[335px] mb-14 lg:mb-[100px] text-primary-bg w-full px-6 md:px-12 lg:px-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="w-full 2xl:w-2/3 mt-0 2xl:mt-12 xl:mt-6 3xl:mt-0">
          <h1 className="mb-0 font-staatliches text-4xl md:text-6xl lg:text-7xl font-bold">{title}</h1>
        </div>
      </div>
    </section>
  );
}
