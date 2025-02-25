import React from "react";
import { PlusIcon, MinusIcon } from "lucide-react";
import { AccordionContent, AccordionItem, AccordionTrigger } from "../accordion";
import LinkGenerator from "./LinkGenerator";
import { IEdgeNestedSitemapItem, INodeNestedSitemapItem, ISitemapItem, SitemapChildren } from "../../interfaces/sitemap";
import { LanguageSite } from "@conversiondigital/headless-basics-data/src/interfaces"

interface SitemapItemProps {
  item: ISitemapItem;
  languageSite: LanguageSite | undefined;
}

const SitemapItem = ({ item, languageSite }: SitemapItemProps) => {
  const { id, hasChildren, children: _children } = item;

  // Type guard to check if children are of type IEdgeNestedSitemapItem
  const isEdgeNestedSitemapItem = (children: SitemapChildren): children is IEdgeNestedSitemapItem => {
    return (children as IEdgeNestedSitemapItem).edges !== undefined;
  };

  // Recursive function to process child nodes and their descendants
  const processChildNodes = (_item: INodeNestedSitemapItem, list: ISitemapItem[]) => {
    if (_item?.node && _item?.node?.children && _item?.node?.showInSitemap) {
      list.push({
        url: _item.node.url,
        name: _item.node.name,
        id: _item.node.id,
        level: _item.node.level,
      } as ISitemapItem);

      if (isEdgeNestedSitemapItem(_item.node.children)) {
        // Process children with edges
        _item.node.children.edges.forEach((child) => {
          processChildNodes(child, list);
        });
      }
    }
  };

  // Function to generate child links from the given data
  const generateChildLinks = (children: SitemapChildren) => {
    const linkList: ISitemapItem[] = [];

    if (isEdgeNestedSitemapItem(children)) {
      // Process children with edges
      children.edges.forEach((child) => {
        processChildNodes(child, linkList);
      });
    } else {
      // Process children as a flat array of nodes
      (children as INodeNestedSitemapItem[]).forEach((child) => {
        processChildNodes(child, linkList);
      });
    }

    return linkList?.map((_item) => (
      <LinkGenerator key={`child-link-${_item.url}-${_item.id}`} item={_item} languageSite={languageSite} isLink={true} />
    ));
  };

  return (
    <AccordionItem className="AccordionItem border-b border-my-blue pr-1" key={id} value={`feature-${id}`}>
      <AccordionTrigger
        className="text-base tracking-0.1em uppercase hover:no-underline pt-5 pb-5 font-[800] [&>div>a]:no-underline [&>div>a]:font-extrabold"
        hasChild={hasChildren}
        collapsedIcon={<PlusIcon className="text-my-yellow shrink-0" />}
        expandedIcon={<MinusIcon className="text-my-yellow shrink-0" />}
      >
        {hasChildren ? (
          <LinkGenerator item={item} languageSite={languageSite} isLink={true} />
        ) : (
          <LinkGenerator item={item} languageSite={languageSite} isLink={false} />
        )}
      </AccordionTrigger>
      {hasChildren && (
        <AccordionContent>
          <div className="ml-6">
            <LinkGenerator item={item} languageSite={languageSite} isLink={false} />
            {generateChildLinks(_children as SitemapChildren)}
          </div>
        </AccordionContent>
      )}
    </AccordionItem>
  );
};

export default SitemapItem;
