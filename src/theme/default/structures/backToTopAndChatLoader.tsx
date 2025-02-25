"use client"

import dynamic from "next/dynamic"

const BackToTopAndChat = dynamic(() => import("./BackToTopAndChat").then((module) => module.BackToTopAndChat))

export default function BackToTopAndChatLoader({}) {
  return (
    <>
      <BackToTopAndChat />
    </>
  )
}
