import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp?: string;
}

const ChatMessage = ({ message, isUser, timestamp }: ChatMessageProps) => {
  return (
    <div className={`flex gap-3 mb-4 animate-slide-up ${isUser ? "flex-row-reverse" : ""}`}>
      <div className={`flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 ${
        isUser ? "bg-primary" : "bg-muted"
      }`}>
        {isUser ? (
          <User className="w-4 h-4 text-primary-foreground" />
        ) : (
          <Bot className="w-4 h-4 text-foreground" />
        )}
      </div>
      <div className={`flex flex-col ${isUser ? "items-end" : "items-start"} max-w-[75%]`}>
        <div className={`rounded-2xl px-4 py-2.5 shadow-sm ${
          isUser 
            ? "bg-chat-user text-chat-user-foreground rounded-tr-sm" 
            : "bg-chat-bot text-chat-bot-foreground rounded-tl-sm"
        }`}>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message}</p>
        </div>
        {timestamp && (
          <span className="text-xs text-muted-foreground mt-1 px-1">{timestamp}</span>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
