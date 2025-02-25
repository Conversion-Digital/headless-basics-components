/* eslint-disable react/prop-types */
import React, { forwardRef } from "react";
import ChatBubbleAvatar, { ChatBubbleAvatarProps } from "./ChatBubbleAvatar";
import ChatBubbleFooter, { ChatBubbleFooterProps } from "./ChatBubbleFooter";
import { ChatBubbleHeader, ChatBubbleTime, ChatBubbleHeaderProps, ChatBubbleTimeProps } from "./ChatBubbleHeader";
import ChatBubbleMessage, { ChatBubbleMessageProps } from "./ChatBubbleMessage";
import { cnm as cn } from "../../utils/cnMerge";;

export type {
  ChatBubbleAvatarProps,
  ChatBubbleFooterProps,
  ChatBubbleHeaderProps,
  ChatBubbleTimeProps,
  ChatBubbleMessageProps,
};

export type ChatBubbleProps = React.HTMLAttributes<HTMLDivElement> & {
  end?: boolean;
};

const ChatBubble = forwardRef<HTMLDivElement, ChatBubbleProps>(
  ({ end = false, className, children, ...props }, ref): JSX.Element => (
    <div
      {...props}
      className={cn(
        "chat",
        {
          "chat-start": !end,
          "chat-end": end,
        },
        className,
      )}
      ref={ref}
    >
      {children}
    </div>
  ),
);

ChatBubble.displayName = "ChatBubble";

export default Object.assign(ChatBubble, {
  Header: ChatBubbleHeader,
  Time: ChatBubbleTime,
  Avatar: ChatBubbleAvatar,
  Message: ChatBubbleMessage,
  Footer: ChatBubbleFooter,
});
