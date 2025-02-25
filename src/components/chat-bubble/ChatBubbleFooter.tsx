/* eslint-disable react/prop-types */
import React from "react"
import { cnm as cn } from "../../utils/cnMerge";

export type ChatBubbleFooterProps = React.HTMLAttributes<HTMLDivElement>

const ChatBubbleFooter = React.forwardRef<
  HTMLDivElement,
  ChatBubbleFooterProps
>(({ className, ...props }, ref) => (
  <div
    {...props}
    className={cn("chat-footer opacity-50", className)}
    ref={ref}
  />
))

ChatBubbleFooter.displayName = "ChatBubbleFooter"

export default ChatBubbleFooter
