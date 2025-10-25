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
    <form onSubmit={handleSubmit} className="bg-card border-t border-border shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex gap-2 items-center">
          <Input
            type="text"
            placeholder="Ask about farming, crops, weather..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 bg-background border-input focus-visible:ring-primary rounded-full px-5"
          />
          <Button 
            type="submit" 
            size="icon"
            className="rounded-full w-10 h-10 bg-primary hover:bg-primary/90"
            disabled={!message.trim()}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ChatInput;
