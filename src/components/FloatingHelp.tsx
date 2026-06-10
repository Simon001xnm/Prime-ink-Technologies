'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, Bot, X, MessageSquare, Plus, Activity, Cpu, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function FloatingHelp() {
  const [isOpen, setIsOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Neural Uplink Initialized. Requesting support.");
    const whatsappUrl = `https://wa.me/254710430203?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChatSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newMessages = [...chatMessages, { sender: 'user' as const, text: inputValue }];
    setChatMessages(newMessages);
    setInputValue('');

    // Simulate sophisticated bot response
    setTimeout(() => {
      setChatMessages([...newMessages, { 
        sender: 'bot' as const, 
        text: 'Aura-X Neural Interface synchronized. Processing query... My meta-knowledge suggests CF258X for high-volume monochrome sectors. How shall I assist further?' 
      }]);
    }, 1200);
  };

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
        {isOpen && (
          <div className="flex flex-col items-end gap-3 animate-in slide-in-from-bottom-5">
            <Button
              variant="outline"
              className="group flex items-center gap-3 rounded-full bg-black/80 backdrop-blur-xl border-primary/40 pr-6 shadow-2xl transition-all hover:border-primary"
              onClick={() => {
                setIsChatOpen(true);
                setIsOpen(false);
              }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary border border-primary/50 group-hover:bg-primary group-hover:text-black transition-all">
                <Cpu className="h-6 w-6" />
              </span>
              <div className="text-left">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">Neural Link</p>
                <p className="text-[10px] text-muted-foreground uppercase">AI Intelligence</p>
              </div>
            </Button>
            <Button
              variant="outline"
              className="group flex items-center gap-3 rounded-full bg-black/80 backdrop-blur-xl border-green-500/40 pr-6 shadow-2xl transition-all hover:border-green-500"
              onClick={handleWhatsAppClick}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20 text-green-500 border border-green-500/50 group-hover:bg-green-500 group-hover:text-black transition-all">
                <Zap className="h-6 w-6" />
              </span>
              <div className="text-left">
                <p className="text-xs font-bold uppercase tracking-widest text-green-500">Fast Comms</p>
                <p className="text-[10px] text-muted-foreground uppercase">Direct WhatsApp</p>
              </div>
            </Button>
          </div>
        )}
        <Button
          size="icon"
          className={cn(
            "h-16 w-16 rounded-full shadow-[0_0_30px_rgba(14,165,233,0.3)] transition-all duration-500 border-2 border-primary/20 hover:border-primary/60 hover:scale-110",
            isOpen ? 'rotate-135 bg-red-600 border-red-400' : 'bg-primary text-black'
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-8 w-8" /> : <Activity className="h-8 w-8 animate-pulse" />}
        </Button>
      </div>

      {isChatOpen && (
        <div className="fixed bottom-10 right-10 z-[60] animate-in zoom-in-95 duration-200">
          <Card className="w-96 shadow-[0_0_50px_rgba(0,0,0,0.8)] bg-black/90 backdrop-blur-2xl border-primary/30 overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between bg-primary/10 border-b border-primary/20 p-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Cpu className="h-6 w-6 text-primary" />
                  <span className="absolute -top-1 -right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                </div>
                <div>
                  <CardTitle className="text-sm font-bold uppercase tracking-widest text-primary">Aura-X Neural AI</CardTitle>
                  <CardDescription className="text-[9px] uppercase font-mono">Status: Connected to Grid</CardDescription>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-primary/50 hover:text-primary" onClick={() => setIsChatOpen(false)}>
                <X />
              </Button>
            </CardHeader>
            <CardContent className="h-[400px] overflow-y-auto p-6 space-y-6 font-mono text-xs">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-primary/10 text-primary border border-primary/30">
                    <Bot size={16} />
                </div>
                <div className="rounded-md bg-white/5 p-3 leading-relaxed border border-white/5">
                    <span className="text-primary font-bold">AURA-X:</span> Greetings. System telemetry suggests you are optimizing for peak printing efficiency. How can my meta-logic assist your procurement?
                </div>
              </div>
              {chatMessages.map((msg, index) => (
                <div key={index} className={cn("flex items-start gap-3", msg.sender === 'user' && "flex-row-reverse")}>
                  <div className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded border",
                    msg.sender === 'bot' ? "bg-primary/10 text-primary border-primary/30" : "bg-blue-600/10 text-blue-400 border-blue-400/30"
                  )}>
                    {msg.sender === 'bot' ? <Bot size={16} /> : <div className="text-[10px] font-bold">USR</div>}
                  </div>
                  <div className={cn(
                    "rounded-md p-3 leading-relaxed border",
                    msg.sender === 'user' ? 'bg-blue-600/10 border-blue-600/20 text-blue-100' : 'bg-white/5 border-white/5'
                  )}>
                    <span className={cn("font-bold block mb-1", msg.sender === 'user' ? "text-blue-400" : "text-primary")}>
                      {msg.sender === 'user' ? "LOG:" : "AURA-X:"}
                    </span>
                    {msg.text}
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter className="p-4 bg-primary/5 border-t border-primary/20">
              <form onSubmit={handleChatSubmit} className="flex w-full gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Input query command..."
                  className="bg-black/50 border-primary/20 focus-visible:ring-primary h-10 font-mono text-xs"
                />
                <Button type="submit" size="icon" className="h-10 w-10 shrink-0">
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
