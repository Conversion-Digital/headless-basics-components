import type { Meta, StoryObj } from "@storybook/react";
import DevButton from "./devButton";

const meta: Meta<typeof DevButton> = {
  title: "Components/Developer/DevButton",
  component: DevButton,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof DevButton>;

export const Default: Story = {
  args: {
    metaData: {
      name: "Example Component",
      typeName: "ExampleType",
      id: "example-1",
      url: "/example",
      rendering: "Example",
      variant: "default",
      queryFileLocation: "/queries/example.graphql",
      query: "query ExampleQuery { ... }",
      liveDocumentation: "https://docs.example.com",
      youtubeVideo: "https://youtube.com/example",
      renderingExportFunction: "ExampleComponent",
      isInsideGrid: false,
      isClientSide: true
    }
  }
};
