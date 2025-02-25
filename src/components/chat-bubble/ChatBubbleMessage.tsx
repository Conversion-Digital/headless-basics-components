/* eslint-disable react/prop-types */
import React from "react"
import { ColorOptions } from "../../interfaces/theme"
import { cnm as cn } from "../../utils/cnMerge";


export type ChatBubbleMessageProps = React.HTMLAttributes<HTMLDivElement> & {
  color?: ColorOptions
}

const ChatBubbleMessage = React.forwardRef<
  HTMLDivElement,
  ChatBubbleMessageProps
>(({ color, className, ...props }, ref) => {
  const classes = cn(
    "chat-bubble",
    {
      [`chat-bubble-${color}`]: color,
    },
    className
  )

  return <div {...props} className={classes} ref={ref} />
})

ChatBubbleMessage.displayName = "ChatBubbleMessage"
export default ChatBubbleMessage
