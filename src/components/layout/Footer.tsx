import { Logo } from '@/components/Logo';
import Link from 'next/link';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Your source for high-quality, reliable toner cartridges.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Newsletter</h4>
            <p className="text-sm text-muted-foreground">Subscribe to our newsletter for updates and special offers.</p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Enter your email" />
              <Button>Subscribe</Button>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <nav className="flex flex-col gap-2">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Prime Ink Technologies Inc. All rights reserved.</p>
          <p className="mt-2">Developed and maintained by Simon Styles Technologies Limited</p>
        </div>
      </div>
    </footer>
  );
}
