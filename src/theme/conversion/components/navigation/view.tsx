'use server'
import { ViewComponentProps } from "@conversiondigital/headless-basics-data/src";
import dynamic from "next/dynamic"
import LoadingSpinner from "../../../../components/LoadingSpinner";
import ErrorBoundary from "../../../../components/ErrorBoundary";

const CdnavUI = dynamic(() => import("./components").catch((err) => {
  console.error('Failed to load navigation component:', err);
  return { default: () => <div>Failed to load navigation</div> };
}), { 
  loading: () => (<LoadingSpinner message="Loading navigation..." />),
  ssr: true
});

export async function View(dynamicComponent: ViewComponentProps) {
  return (
    <ErrorBoundary>
      <CdnavUI {...dynamicComponent} />
    </ErrorBoundary>
  );
}