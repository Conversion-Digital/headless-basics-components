'use client';
import { cn } from "@conversiondigital/headless-basics-data/src";
import { Suspense, useState } from "react";

import styles from "../../../../../theme/default/styles/megamenu.module.css";

import { ReactNode } from "react";

interface HoverWrapperProps {
    children: ReactNode;
    className?: string;
    _level: number;
}

export const HoverWrapper = ({ children, className, _level }: HoverWrapperProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const childrenClass = cn(className, _level > 1 && "hover:bg-gray-200");
    const navkids = "font-extrabold " + styles.showNavChildren;
    const hideNavKids = styles.hideNavChildren;
    return (
        <>
        <Suspense>
            <li
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={cn(
                    "flex items-center justify-center transition duration-100 ease-in-out text-sm",
                    childrenClass,
                    { navkids : isHovered },
                    { hideNavKids : !isHovered }
                )}
            >
                {children}
            </li>
        </Suspense>
        </>
    );
};

export default HoverWrapper;
