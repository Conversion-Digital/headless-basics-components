
import Image from 'next/image';
import { FC } from 'react';
import { ProductCategoryProps } from '../../../../interfaces/productCategory.interface';

export const ProductCategory: FC<ProductCategoryProps> = ({ category, languageSite }) => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">

        <div className="flex flex-wrap">
          {category.productCategories.map((productCategory) => (

          <div className="w-full" key={productCategory.id}>
            <div className="flex flex-wrap justify-between items-start mb-8">
              <div className="lg:w-1/3 mb-4 lg:mb-0">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{productCategory.name}</h3>
                    <p className="mb-4">{productCategory.description}</p>
                    <a
                      href={productCategory?.url}
                      className="inline-block text-sm text-white bg-yellow-500 py-2 px-4 rounded hover:bg-yellow-600 transition-colors duration-300"
                    >
                      View Category
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 px-4 mb-8" key={productCategory.id}>
              {productCategory.children.edges.map((edge) => (
                <div className="bg-white rounded-lg overflow-hidden shadow-md mb-4" key={edge.node.url}>
                  {edge.node.productPhoto && (
                    <div className="relative h-48">
                      <Image src={edge.node.productPhoto.url} alt={edge?.node?.productPhoto?.media?.altText || edge?.node?.productPhoto?.media?.name || edge?.node?.productName || ''} layout="fill" objectFit="cover" />
                    </div>
                  )}
                  <div className="p-4">
                    <h4 className="text-lg font-bold mb-2">{edge.node.productName || edge.node.name}</h4>
                    <div dangerouslySetInnerHTML={{ __html: edge.node.productDescription || '' }} />
                    <div className="mt-4">
                      <a
                        href={edge?.node?.url}
                        className="text-sm text-white bg-yellow-500 py-2 px-4 rounded hover:bg-yellow-600 transition-colors duration-300"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </div>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
