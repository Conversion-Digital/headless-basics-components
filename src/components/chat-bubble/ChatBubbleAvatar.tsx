import React from "react"

import { Avatar, AvatarFallback, AvatarImage, AvatarProps } from "../avatar"
import { cnm as cn } from "../../utils/cnMerge";

export interface ChatBubbleAvatarProps extends AvatarProps {
  src?: string
  fallback?: string
}

const ChatBubbleAvatar = React.forwardRef<
  React.ElementRef<typeof Avatar>,
  ChatBubbleAvatarProps
>(({ src, fallback, className, ...props }, ref) => (
  <Avatar {...props} ref={ref} className={cn("chat-image", className)}>
    {src ? <AvatarImage src={src} /> : null}
    {fallback ? <AvatarFallback>{fallback}</AvatarFallback> : null}
  </Avatar>
))

ChatBubbleAvatar.displayName = "ChatBubbleAvatar"

export default ChatBubbleAvatar
