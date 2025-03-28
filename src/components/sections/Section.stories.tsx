import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SectionOneColumn from "./sectionOneColumn";
import SectionThreeColumn from "./sectionThreeColumn";
import FeatureSection from "./feature-section";
import StoriesSection from "./stories-section";
import CTASectionThreeColumn from "./ctaSectionThreeColumn";
import CTASectionTwoColumn from "./ctaSectionTwoColumn";
import ImageSectionThreeColumn from "./imageSectionThreeColumn";
import DynamicThreeColumn, { DynamicColumn } from "./dynamicThreeColumn";

const meta: Meta<typeof SectionOneColumn> = {
  title: "Components/Layout/Sections",
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const OneColumn: StoryObj<typeof SectionOneColumn> = {
  render: () => (
    <SectionOneColumn>
      <div className="bg-gray-100 p-4 rounded">
        <h2 className="text-xl font-bold">One Column Content</h2>
        <p>This is an example of one column layout</p>
      </div>
    </SectionOneColumn>
  ),
};

export const ThreeColumn: StoryObj<typeof SectionThreeColumn> = {
  render: () => (
    <SectionThreeColumn
      leftChild={
        <div className="bg-blue-100 p-4 rounded">
          <h3>Left Column</h3>
          <p>Left column content</p>
        </div>
      }
      middleChild={
        <div className="bg-green-100 p-4 rounded">
          <h3>Middle Column</h3>
          <p>Middle column content</p>
        </div>
      }
      rightChild={
        <div className="bg-red-100 p-4 rounded">
          <h3>Right Column</h3>
          <p>Right column content</p>
        </div>
      }
    />
  ),
};

export const ThreeColumnCustomWidth: StoryObj<typeof SectionThreeColumn> = {
  render: () => (
    <SectionThreeColumn
      leftColumnClass="w-1/4"
      middleColumnClass="w-1/2"
      rightColumnClass="w-1/4"
      leftChild={
        <div className="bg-blue-100 p-4 rounded">
          <h3>25%</h3>
          <p>Narrow column</p>
        </div>
      }
      middleChild={
        <div className="bg-green-100 p-4 rounded">
          <h3>50%</h3>
          <p>Wide column</p>
        </div>
      }
      rightChild={
        <div className="bg-red-100 p-4 rounded">
          <h3>25%</h3>
          <p>Narrow column</p>
        </div>
      }
    />
  ),
};

export const Feature: StoryObj<typeof FeatureSection> = {
  render: () => (
    <FeatureSection>
      <FeatureSection.Headline align="center">
        Our Features
      </FeatureSection.Headline>
      <FeatureSection.Description align="center">
        Discover what makes our product special
      </FeatureSection.Description>
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        <FeatureSection.Card
          imageSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z' /%3E%3C/svg%3E"
          title="Feature 1"
          description="Description of feature 1"
          altText="Feature 1"
        />
        <FeatureSection.Card
          imageSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' /%3E%3C/svg%3E"
          title="Feature 2"
          description="Description of feature 2"
          altText="Feature 2"
        />
        <FeatureSection.Card
          imageSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z' /%3E%3C/svg%3E"
          title="Feature 3"
          description="Description of feature 3"
          altText="Feature 3"
        />
      </div>
    </FeatureSection>
  ),
};

export const Stories: StoryObj<typeof StoriesSection> = {
  render: () => (
    <StoriesSection
      title="Customer Stories"
      description="See what our customers are saying"
      cards={[
        {
          image_src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z' /%3E%3C/svg%3E",
          image_alt: "Star Rating",
          image_src1: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' /%3E%3C/svg%3E",
          image_alt1: "John Doe",
          text: "This product has transformed our business operations.",
          text1: "John Doe",
          text2: "CEO"
        },
        {
          image_src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z' /%3E%3C/svg%3E",
          image_alt: "Star Rating",
          image_src1: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' /%3E%3C/svg%3E",
          image_alt1: "Jane Smith",
          text: "The features and support are outstanding.",
          text1: "Jane Smith",
          text2: "CTO"
        },
        {
          image_src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z' /%3E%3C/svg%3E",
          image_alt: "Star Rating",
          image_src1: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' /%3E%3C/svg%3E",
          image_alt1: "Mike Johnson",
          text: "Integration was seamless and the results are amazing.",
          text1: "Mike Johnson",
          text2: "Developer"
        }
      ]}
    />
  ),
};

export const CTAThreeColumn: StoryObj<typeof CTASectionThreeColumn> = {
  render: () => (
    <CTASectionThreeColumn
      data={[
        {
          image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9' /%3E%3C/svg%3E",
          title: "Basic Plan",
          description: "Perfect for starters",
          buttonText: "Get Started",
          buttonLink: "#",
          width: 200,
          height: 200
        },
        {
          image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z' /%3E%3C/svg%3E",
          title: "Pro Plan",
          description: "For growing businesses",
          buttonText: "Upgrade Now",
          buttonLink: "#",
          width: 200,
          height: 200
        },
        {
          image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418' /%3E%3C/svg%3E",
          title: "Enterprise",
          description: "For large organizations",
          buttonText: "Contact Sales",
          buttonLink: "#",
          width: 200,
          height: 200
        }
      ]}
    />
  ),
};

export const CTATwoColumn: StoryObj<typeof CTASectionTwoColumn> = {
  render: () => (
    <CTASectionTwoColumn
      data={{
        title: "Get Started Today",
        description: "Join thousands of satisfied customers who have transformed their business with our solution.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z' /%3E%3C/svg%3E",
        buttonText: "Start Free Trial",
        buttonLink: "#"
      }}
      variation="twoThirds"
    />
  ),
};

export const ImageThreeColumn: StoryObj<typeof ImageSectionThreeColumn> = {
  render: () => (
    <ImageSectionThreeColumn
      images={[
        {
          image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z' /%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z' /%3E%3C/svg%3E",
          title: "Beautiful Landscapes",
          description: "Explore amazing views",
          width: 800,
          height: 600
        },
        {
          image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.005zm-2.116-.006l-.005.006-.006-.006.005-.005.006.005zm-.005-2.116l-.006-.005.006-.005.005.005-.005.005zM9.255 10.5v.008h-.008V10.5h.008zm3.249 1.88l-.007.004-.003-.007.006-.003.004.006zm-1.38 5.126l-.003-.006.006-.004.004.007-.006.003zm.007-6.501l-.003.006-.007-.003.004-.007.006.004zm1.37 5.129l-.007-.004.004-.006.006.003-.004.007zm.504-1.877h-.008v-.007h.008v.007zM9.255 18v.008h-.008V18h.008zm-3.246-1.87l-.007.004L6 16.127l.006-.003.004.006zm1.366-5.119l-.004-.006.006-.004.004.007-.006.003zM7.38 17.5l-.003.006-.007-.003.004-.007.006.004zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007zm-.5 1.873h-.008v-.007h.008v.007zM17.25 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z' /%3E%3C/svg%3E",
          title: "Urban Adventures",
          description: "Discover city life",
          width: 800,
          height: 600
        },
        {
          image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18' /%3E%3C/svg%3E",
          title: "Creative Ideas",
          description: "Get inspired",
          width: 800,
          height: 600
        }
      ]}
      variation="captionHover"
    />
  ),
};

export const DynamicColumns: StoryObj<typeof DynamicThreeColumn> = {
  render: () => (
    <DynamicThreeColumn>
      <DynamicColumn>
        <div className="bg-purple-100 p-6 rounded-lg h-full">
          <h3 className="text-xl font-bold mb-4">Dynamic Column 1</h3>
          <p>This column can contain any content</p>
        </div>
      </DynamicColumn>
      <DynamicColumn>
        <div className="bg-yellow-100 p-6 rounded-lg h-full">
          <h3 className="text-xl font-bold mb-4">Dynamic Column 2</h3>
          <p>Fully customizable content here</p>
        </div>
      </DynamicColumn>
      <DynamicColumn>
        <div className="bg-pink-100 p-6 rounded-lg h-full">
          <h3 className="text-xl font-bold mb-4">Dynamic Column 3</h3>
          <p>Add any React component</p>
        </div>
      </DynamicColumn>
    </DynamicThreeColumn>
  ),
}; 