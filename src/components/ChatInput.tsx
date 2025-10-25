import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-t border-border bg-card/80 backdrop-blur-md">
      <div className="max-w-3xl mx-auto px-4 py-4">
        <div className="flex gap-3 items-center">
          <Input
            type="text"
            placeholder="Enter a prompt here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 bg-muted/50 border-border focus-visible:ring-1 focus-visible:ring-primary rounded-full px-5 py-6 text-base"
          />
          <Button 
            type="submit" 
            size="icon"
            className="rounded-full w-11 h-11 bg-muted hover:bg-muted/80 text-foreground shadow-none"
            disabled={!message.trim()}
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ChatInput;
