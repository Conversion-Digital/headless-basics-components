"use client";

import React from 'react';
import DefaultVariant from './variants/cdtestimonialsDefaultVariant';

interface TestimonialsContainerProps {
  data: any;
  variant?: string;
}

export default function TestimonialsContainer({ data, variant = 'default' }: TestimonialsContainerProps) {
  return <DefaultVariant matchingData={data} />;
} 