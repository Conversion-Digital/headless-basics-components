'use server'

import { ViewComponentProps } from "@conversiondigital/headless-basics-data/src"
import CtaNavigate from "./variants/ctaNavigate";


export async function View(dynamicComponent: ViewComponentProps) {
  return <CtaNavigate {...dynamicComponent} />;
}