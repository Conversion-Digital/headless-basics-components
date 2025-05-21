import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { getCmsImage } from "@conversiondigital/headless-basics-data/src/cms/tools/multiCmsImageTools";
import { ArrowRight } from "lucide-react";

const DefaultVariant: React.FC<StandardComponentProps> = ({ matchingData }) => {

  const heading = matchingData?.heading || "Insights & Perspectives";
  const tagline = matchingData?.tagline || "Latest insights from our digital experts";
  const items = matchingData?.items || [];

  const insights = [
    {
      id: 1,
      image: '/shopify-tools.jpg', // Replace with actual image path
      category: 'SHOPIFY SEARCH ENGINE OPTIMISATION',
      title: 'LEVERAGING SHOPIFY\'S SEO TOOLS TO DOMINATE SEARCH ENGINE RANKINGS',
      link: '#'
    },
    {
      id: 2,
      image: '/shopify-vs-woo1.jpg', // Replace with actual image path
      category: 'SHOPIFY DEVELOPMENT, WORDPRESS',
      title: 'SHOPIFY VS WOOCOMMERCE: WHICH E-COMMERCE PLATFORM WINS ON SEO, MARKETING, AND COSTS?',
      link: '#'
    },
    {
      id: 3,
      image: '/shopify-vs-woo2.jpg', // Replace with actual image path
      category: 'SHOPIFY DEVELOPMENT, WORDPRESS',
      title: 'SHOPIFY VS WOOCOMMERCE: WHICH E-COMMERCE PLATFORM IS EASIER TO USE AND SET UP?',
      link: '#'
    }
  ];

  return (
    // <section id="cdinsights-default" className="bg-[#F5F3ED] text-[#0D0E47] py-12 px-4 md:px-8">
    //   <div className="max-w-7xl mx-auto">
    //     <div className="mb-8 text-center">
    //       <h2 className="text-3xl md:text-4xl font-bold mb-2">{heading}</h2>
    //       <p className="text-lg text-gray-600">{tagline}</p>
    //     </div>
    //     <div className="flex flex-wrap justify-center gap-8">
    //       {Array.isArray(items) &&
    //         items.map((item: any, index: number) => {
    //           // Attempt to get an image if item has an image object from cms, else use item.imageUrl
    //           const { hasImage, imageLocation } = getCmsImage(item);
    //           const url = hasImage ? imageLocation : item?.imageUrl;
    //           return (
    //             <div key={index} className="bg-white w-full md:w-[30%] rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow">
    //               {url && (
    //                 <img
    //                   src={url}
    //                   alt={item?.subtitle || "cdinsights item"}
    //                   className="w-full h-48 object-cover"
    //                 />
    //               )}
    //               <div className="p-4 flex flex-col gap-2">
    //                 <h3 className="text-xl font-semibold text-[#0D0E47]">{item?.title || "Default Item Title"}</h3>
    //                 <p className="text-gray-700 text-sm">{item?.subtitle || "Default item subtitle"}</p>
    //               </div>
    //             </div>
    //           );
    //         })}
    //     </div>
    //   </div>
    // </section>
    <section className="insights-container">
    <div className="max-w-7xl mx-auto">
      <h2 className="insights-heading">INSIGHTS AND PERSPECTIVES</h2>
      <p className="insights-description">
        Read the latest insights and marketing trends, as they are happening, from our team of digital
        experts here at Conversion Digital.
      </p>

      <div className="insights-grid">
        {insights.map((insight) => (
          <div key={insight.id} className="insight-card">
            <img
              src={insight.image}
              alt={insight.title}
              className="insight-image"
            />
            <div className="insight-content">
              <p className="insight-category">{insight.category}</p>
              <h3 className="insight-title">{insight.title}</h3>
              <a href={insight.link} className="insight-read-more">
                Read more <ArrowRight className="insight-read-more-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <a href="#" className="view-all-button">
          View all insights <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </div>
  </section>
  );
};

export default DefaultVariant;