'use client';
import { cn } from "@conversiondigital/headless-basics-data";
import { Suspense, useState } from "react";

// import styles from "@/sites/default/styles/megamenu.module.css";
import styles from "../../../../../theme/default/styles/megamenu.module.css";

import { ReactNode } from "react";

export const HoverWrapper = ({ children, className, _level }: { children: ReactNode, className?: string, _level: number }) => {
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
