"use client";
import CTA from "../../../../../components/CTA";

export default function ClientWrapper({ title, text, variant }: { title: string; text: string; variant: 'default' | 'light' }) {
  return (
    <CTA
      title={title}
      text={text}
      variant={variant}
      onClick={() => console.log("CTA clicked")} // Add actual logic here
    />
  );
}
