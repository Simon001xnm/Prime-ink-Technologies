'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, Bot, X, MessageSquare, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" className="h-6 w-6 fill-current">
    <path d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm7.5 20.8a1.2 1.2 0 0 1-1.7.1l-4.2-2.5a.6.6 0 0 0-.6-.1l-1.6.8a6.3 6.3 0 0 1-6.1-6.1l.8-1.6a.6.6 0 0 0-.1-.6L7.1 9.7a1.2 1.2 0 0 1 .1-1.7l1.1-1.1a1.2 1.2 0 0 1 1.7 0l2.5 4.2a.6.6 0 0 0 .7.3l1.8-.4a4.4 4.4 0 0 1 4.5 4.5l-.4 1.8a.6.6 0 0 0 .3.7l4.2 2.5a1.2 1.2 0 0 1 0 1.7Z" />
  </svg>
);

export default function FloatingHelp() {
  const [isOpen, setIsOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! I have a question.");
    const whatsappUrl = `https://wa.me/254712345678?text=${message}`; // Replace with your number
    window.open(whatsappUrl, '_blank');
  };

  const handleChatSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newMessages = [...chatMessages, { sender: 'user' as const, text: inputValue }];
    setChatMessages(newMessages);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      setChatMessages([...newMessages, { sender: 'bot' as const, text: 'Hello! How can I help you today?' }]);
    }, 1000);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {isOpen && (
          <>
            <Button
              variant="outline"
              className="flex items-center gap-3 rounded-full bg-background pr-5 shadow-lg"
              onClick={() => setIsChatOpen(true)}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Bot />
              </span>
              Chat with AI
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-3 rounded-full bg-background pr-5 shadow-lg"
              onClick={handleWhatsAppClick}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white">
                <WhatsAppIcon />
              </span>
              Contact on WhatsApp
            </Button>
          </>
        )}
        <Button
          size="icon"
          className={cn(
            "h-16 w-16 rounded-full shadow-xl transition-transform duration-300",
            isOpen && 'rotate-45'
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Plus className="h-8 w-8" />
        </Button>
      </div>

      {isChatOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Card className="w-80 shadow-2xl">
            <CardHeader className="flex flex-row items-center justify-between bg-primary text-primary-foreground">
              <div className="flex items-center gap-3">
                <Bot className="h-6 w-6" />
                <CardTitle className="text-lg">Chatbot Assistant</CardTitle>
              </div>
              <Button variant="ghost" size="icon" className="h-7 w-7 text-primary-foreground" onClick={() => setIsChatOpen(false)}>
                <X />
              </Button>
            </CardHeader>
            <CardContent className="h-80 overflow-y-auto p-4 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <Bot size={20} />
                </div>
                <div className="rounded-lg bg-muted p-3 text-sm">
                    Welcome to Prime Ink! How can I assist you with your toner needs?
                </div>
              </div>
              {chatMessages.map((msg, index) => (
                <div key={index} className={cn("flex items-start gap-3", msg.sender === 'user' && "justify-end")}>
                  {msg.sender === 'bot' && (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <Bot size={20} />
                    </div>
                  )}
                  <div className={cn("rounded-lg p-3 text-sm max-w-[80%]", msg.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted')}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <form onSubmit={handleChatSubmit} className="flex w-full gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type a message..."
                />
                <Button type="submit" size="icon">
                  <MessageSquare className="h-5 w-5" />
                </Button>
              </form>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
}
