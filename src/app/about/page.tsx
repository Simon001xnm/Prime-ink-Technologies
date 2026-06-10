
'use client';

import { Shield, Target, Award, Globe, Zap, Cpu } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPage() {
  const facilityImage = PlaceHolderImages.find(p => p.id === 'about-facility');

  return (
    <div className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32">
      {/* Background Neural Grid Effect */}
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      
      <div className="container relative z-10 px-4 md:px-6">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center space-y-6 mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <Cpu className="h-3 w-3" />
            Our Origins
          </div>
          <h1 className="text-4xl font-black tracking-tighter sm:text-6xl lg:text-7xl neon-glow font-headline uppercase leading-none">
            About <span className="text-primary italic">Prime </span> 
            <span className="text-red-500">Ink</span>
          </h1>
          <div className="h-1.5 w-32 bg-gradient-to-r from-primary to-red-600 rounded-full"></div>
          <p className="max-w-[800px] text-muted-foreground md:text-xl font-medium">
            We are the standard in industrial printing. Simple language, advanced technology.
          </p>
        </div>

        {/* Content Section 1: The Mission */}
        <div className="grid gap-12 lg:grid-cols-2 items-center mb-24 md:mb-32">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-foreground font-headline uppercase border-l-4 border-red-500 pl-6">
                Our Simple Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We make printing easy and high-quality for everyone. You don't need to be a technician to get the best results. Our cartridges are built to just work, every time.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold uppercase tracking-widest text-primary">Built for Everyone</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're running a small home office or a large industrial complex, our toner is designed to save you time and money. We focus on the tech so you can focus on your work.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-tighter text-red-500 border border-red-500/20 bg-red-500/5 px-4 py-2 rounded">
                <Shield className="h-4 w-4" /> No Leaks
              </div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-tighter text-primary border border-primary/20 bg-primary/5 px-4 py-2 rounded">
                <Zap className="h-4 w-4" /> Instant Dry
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-br from-primary/30 to-red-600/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-black shadow-2xl">
              {facilityImage && (
                <Image 
                  src={facilityImage.imageUrl} 
                  alt={facilityImage.description} 
                  fill 
                  className="object-cover opacity-70 group-hover:opacity-90 transition-all duration-700 group-hover:scale-110"
                  data-ai-hint={facilityImage.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/70">Main Production Node</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 md:mb-32">
          {[
            { 
              icon: Target, 
              title: "Maximum Yield", 
              desc: "We fill our cartridges to the absolute limit. You get more pages for every shilling spent.",
              color: "text-primary",
              borderColor: "border-primary/30"
            },
            { 
              icon: Zap, 
              title: "Fastest Drying", 
              desc: "Our ink dries the second it hits the paper. No smudges, no waiting, just perfect prints.",
              color: "text-red-500",
              borderColor: "border-red-500/30"
            },
            { 
              icon: Shield, 
              title: "Total Reliability", 
              desc: "Tested in extreme conditions. Our toner won't damage your printer or leak on your documents.",
              color: "text-primary",
              borderColor: "border-primary/30"
            }
          ].map((item, i) => (
            <div key={i} className={`glass-panel p-10 rounded-2xl border ${item.borderColor} space-y-6 transition-transform hover:-translate-y-2`}>
              <div className={`h-14 w-14 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center ${item.color}`}>
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-foreground font-headline italic">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* The Standard CTA Section */}
        <div className="relative rounded-3xl overflow-hidden bg-black/60 border border-white/10 p-8 md:p-16 text-center tech-border">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
          
          <div className="space-y-6 relative z-10">
            <h2 className="text-3xl font-black font-headline uppercase tracking-tighter md:text-5xl neon-glow">
              THE <span className="text-red-500">PRIME</span> STANDARD
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">
              We supply the best because you deserve the best. No complicated talk, just high-performance ink that works for you.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              {[
                { label: "Printers Supported", value: "500+", color: "text-primary" },
                { label: "Satisfied Users", value: "10k+", color: "text-red-500" },
                { label: "Delivery Speed", value: "Instant", color: "text-primary" },
                { label: "Success Rate", value: "99.9%", color: "text-red-500" }
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <span className={`block text-3xl md:text-4xl font-black ${stat.color} font-mono tracking-tighter`}>{stat.value}</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
