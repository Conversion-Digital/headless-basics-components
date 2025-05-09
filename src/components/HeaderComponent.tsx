import React, { useState, useEffect, forwardRef } from "react";

export interface HeaderProps {
  className?: string;
  title?: string;
  backgroundColor?: string;
  isSticky?: boolean;
}

const HeaderComponent = forwardRef<HTMLDivElement, HeaderProps>(
  ({ className, title = "My JOURNEY", backgroundColor = "bg-gray-500", isSticky = false }, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsVisible(window.scrollY === 0);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <header
        ref={ref}
        className={`fixed top-0 left-0 w-full ${backgroundColor} text-white text-center py-4 transition-opacity duration-300 ${
          isSticky ? "sticky" : ""
        } ${isVisible ? "opacity-100" : "opacity-25"} ${className}`}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(window.scrollY === 0)}
      >
        <h1 className="text-xl font-bold">{title}</h1>
      </header>
    );
  }
);

HeaderComponent.displayName = "HeaderComponent";

export { HeaderComponent };
