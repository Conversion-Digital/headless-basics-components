'use server'

import React from "react";
import { HeaderComponent, HeaderProps } from "../../../../components/HeaderComponent";

export async function View(props: HeaderProps) {
  const { title, backgroundColor, isSticky, className } = props;

  return (
    <div
      className={`p-6 ${isSticky ? "sticky top-0" : ""}`}
      style={{ backgroundColor }}
    >
      <HeaderComponent
        title={title}
        backgroundColor={backgroundColor}
        isSticky={isSticky}
        className={className}
      />
    </div>
  );
}
