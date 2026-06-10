'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Bot, X, Zap, Cpu, Activity, ShieldAlert } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function FloatingHelp() {
  const [isOpen, setIsOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello, I need help with an order.");
    const whatsappUrl = `https://wa.me/254710430203?text=${message}`;
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
      setChatMessages([...newMessages, { 
        sender: 'bot' as const, 
        text: 'Hello! I am your assistant. How can I help you find the right toner today?' 
      }]);
    }, 1200);
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex flex-col items-end gap-3 md:gap-4">
        {isOpen && (
          <div className="flex flex-col items-end gap-2 md:gap-3 animate-in slide-in-from-bottom-5">
            <Button
              variant="outline"
              className="group flex items-center gap-2 md:gap-3 rounded-full bg-black/90 backdrop-blur-xl border-primary/40 px-4 md:pr-6 h-10 md:h-12 shadow-2xl transition-all hover:border-primary"
              onClick={() => {
                setIsChatOpen(true);
                setIsOpen(false);
              }}
            >
              <span className="flex h-7 w-7 md:h-9 md:w-9 items-center justify-center rounded-full bg-primary/20 text-primary border border-primary/50 group-hover:bg-primary group-hover:text-black transition-all">
                <Cpu className="h-4 w-4 md:h-5 md:w-5" />
              </span>
              <div className="text-left">
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary">Chat AI</p>
              </div>
            </Button>
            <Button
              variant="outline"
              className="group flex items-center gap-2 md:gap-3 rounded-full bg-black/90 backdrop-blur-xl border-red-500/40 px-4 md:pr-6 h-10 md:h-12 shadow-2xl transition-all hover:border-red-500"
              onClick={handleWhatsAppClick}
            >
              <span className="flex h-7 w-7 md:h-9 md:w-9 items-center justify-center rounded-full bg-red-500/20 text-red-500 border border-red-500/50 group-hover:bg-red-500 group-hover:text-black transition-all">
                <Zap className="h-4 w-4 md:h-5 md:w-5" />
              </span>
              <div className="text-left">
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-red-500">WhatsApp</p>
              </div>
            </Button>
          </div>
        )}
        <Button
          size="icon"
          className={cn(
            "h-14 w-14 md:h-16 md:w-16 rounded-full shadow-[0_0_30px_rgba(14,165,233,0.3)] transition-all duration-500 border-2 border-primary/20 hover:border-primary/60 hover:scale-105 active:scale-95",
            isOpen ? 'rotate-135 bg-red-600 border-red-400' : 'bg-primary text-black'
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-7 w-7 md:h-8 md:w-8" /> : <Activity className="h-7 w-7 md:h-8 md:w-8 animate-pulse" />}
        </Button>
      </div>

      {isChatOpen && (
        <div className="fixed bottom-0 right-0 md:bottom-10 md:right-10 z-[60] w-full md:w-96 p-4 md:p-0 animate-in zoom-in-95 duration-200">
          <Card className="w-full shadow-[0_0_50px_rgba(0,0,0,0.8)] bg-black/95 backdrop-blur-2xl border-red-500/30 overflow-hidden rounded-xl md:rounded-lg">
            <CardHeader className="flex flex-row items-center justify-between bg-red-500/10 border-b border-red-500/20 p-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <ShieldAlert className="h-5 w-5 md:h-6 md:w-6 text-red-500" />
                  <span className="absolute -top-1 -right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                </div>
                <div>
                  <CardTitle className="text-xs md:text-sm font-bold uppercase tracking-widest text-red-500">Support Assistant</CardTitle>
                  <CardDescription className="text-[8px] md:text-[9px] uppercase font-mono text-red-400/70">Secure Help Line</CardDescription>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500/50 hover:text-red-500" onClick={() => setIsChatOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="h-[60vh] md:h-[400px] overflow-y-auto p-4 md:p-6 space-y-4 md:space-y-6 font-mono text-[10px] md:text-xs">
              <div className="flex items-start gap-2 md:gap-3">
                <div className="flex h-7 w-7 md:h-8 md:w-8 shrink-0 items-center justify-center rounded bg-red-500/10 text-red-500 border border-red-500/30">
                    <Bot size={14} className="md:w-4 md:h-4" />
                </div>
                <div className="rounded-md bg-white/5 p-2 md:p-3 leading-relaxed border border-white/5">
                    <span className="text-red-500 font-bold block mb-1">AURA-X:</span> Hello! I'm your assistant. How can I help you find the right toner for your printer?
                </div>
              </div>
              {chatMessages.map((msg, index) => (
                <div key={index} className={cn("flex items-start gap-2 md:gap-3", msg.sender === 'user' && "flex-row-reverse")}>
                  <div className={cn(
                    "flex h-7 w-7 md:h-8 md:w-8 shrink-0 items-center justify-center rounded border",
                    msg.sender === 'bot' ? "bg-red-500/10 text-red-500 border-red-500/30" : "bg-primary/10 text-primary border-primary/30"
                  )}>
                    {msg.sender === 'bot' ? <Bot size={14} className="md:w-4 md:h-4" /> : <div className="text-[8px] md:text-[10px] font-bold">YOU</div>}
                  </div>
                  <div className={cn(
                    "rounded-md p-2 md:p-3 leading-relaxed border",
                    msg.sender === 'user' ? 'bg-primary/10 border-primary/20 text-blue-100' : 'bg-white/5 border-white/5'
                  )}>
                    <span className={cn("font-bold block mb-1", msg.sender === 'user' ? "text-primary" : "text-red-500")}>
                      {msg.sender === 'user' ? "MESSAGE:" : "AURA-X:"}
                    </span>
                    {msg.text}
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter className="p-3 md:p-4 bg-red-500/5 border-t border-red-500/20">
              <form onSubmit={handleChatSubmit} className="flex w-full gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask a question..."
                  className="bg-black/50 border-red-500/20 focus-visible:ring-red-500 h-9 md:h-10 font-mono text-[10px] md:text-xs"
                />
                <Button type="submit" size="icon" className="h-9 w-9 md:h-10 md:w-10 shrink-0 bg-red-600 hover:bg-red-700">
                  <Zap className="h-4 w-4" />
                </Button>
              </form>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
}
