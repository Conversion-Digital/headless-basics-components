import React, { Suspense, useEffect, useState } from "react";
import { BallTriangle as Loader } from "react-loading-icons";
import { getCookieValue } from "../../utils/cookie";

interface DelayedSuspenseProps {
  children: React.ReactNode;
  delay: number;
  id: string;
  showLoader?: boolean;
  loadingMessage?: string;
}

function DelayedSuspense({ children, delay, id, showLoader = false, loadingMessage }: DelayedSuspenseProps) {
  const [showFallback, setShowFallback] = useState(false);
  const [adjustedDelay, setAdjustedDelay] = useState(delay);

  useEffect(() => {
    const firstVisit = getCookieValue("firstVisit");
    if (firstVisit) {
      setAdjustedDelay(0);
      console.log(`First visit cookie set, skipping delay: ${id} ${adjustedDelay}`);
    } else {
      console.log(`First visit cookie not set, delay stands:  ${id} ${adjustedDelay}`);
    }
  }, [id]);

  useEffect(() => {
    const timer = setTimeout(() => {
      // console.log(`Display the form after delay: ${id} ${adjustedDelay}`)
      setShowFallback(true);
    }, adjustedDelay);

    return () => clearTimeout(timer);
  }, [adjustedDelay, id]);

  if (showFallback === false) {
    if (showLoader) {
      return (
        <div className="flex min-h-96 w-full items-center justify-center bg-my-yellow py-12">
          <Loader stroke="#000000" speed={0.5} />
          {loadingMessage}
        </div>
      );
    } else {
      return <>{loadingMessage && loadingMessage.length > 0 ? <div> {loadingMessage}</div> : null}</>;
    }
  } else {
    return <Suspense fallback={showFallback ? <div>Loading...</div> : null}>{children}</Suspense>;
  }
}

export default DelayedSuspense;
