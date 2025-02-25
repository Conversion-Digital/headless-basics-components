'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: Array<{
      event?: string;
      page?: string;
    }>;
  }
}

export function RouteChangeListener() {
    const pathname = usePathname();

    useEffect(() => {
      if (!pathname) return;

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'pageview',
        page: pathname,
      });
      console.log('RouteChangeListener -- pushing a page view to datalayer for', pathname);
    }, [pathname]);

    return <></>;
}
