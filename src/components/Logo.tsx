import { Printer } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="Prime Ink homepage">
      <Printer className="h-7 w-7 text-primary" />
      <span className="text-xl font-bold tracking-tight text-foreground">
        Prime Ink
      </span>
    </div>
  );
}
