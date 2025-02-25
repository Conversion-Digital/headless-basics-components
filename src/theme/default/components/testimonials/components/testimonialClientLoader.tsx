"use client"

import dynamic from "next/dynamic"

const TestimonialClient = dynamic(() => import("./testimonialClient"))

interface TestimonialClientLoaderProps {
  pageTestimonial: any; // Replace 'any' with the appropriate type if known
}

export default function TestimonialClientLoader({ pageTestimonial }: TestimonialClientLoaderProps) {
  return (
    <>
      <TestimonialClient pageTestimonial={pageTestimonial} />
    </>
  )
}
