'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function CartContents() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  if (cartCount === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 py-12 text-center">
        <ShoppingCart className="h-20 w-20 text-muted-foreground" />
        <h3 className="text-2xl font-semibold">Your cart is empty</h3>
        <p className="text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild>
          <Link href="/#products">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <ScrollArea className="h-[400px] pr-4">
        <ul className="divide-y">
          {cartItems.map((item) => {
            const placeholder = PlaceHolderImages.find(p => p.id === item.product.imageId);
            return (
              <li key={item.id} className="flex items-start gap-4 py-4">
                <div className="aspect-square w-24 flex-shrink-0 overflow-hidden rounded-md border">
                  {placeholder && (
                    <Image
                      src={placeholder.imageUrl}
                      alt={item.product.name}
                      width={100}
                      height={100}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
                <div className="flex-1">
                  <Link href={`/products/${item.product.id}`} className="font-semibold hover:text-primary">
                      {item.product.name}
                  </Link>
                  <p className="text-sm text-muted-foreground">${item.product.price.toFixed(2)}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                       <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)} aria-label="Remove item">
                      <Trash2 className="h-4 w-4 text-muted-foreground hover:text-destructive" />
                    </Button>
                  </div>
                </div>
                <p className="font-semibold">${(item.product.price * item.quantity).toFixed(2)}</p>
              </li>
            );
          })}
        </ul>
      </ScrollArea>
      
      <div className="space-y-4">
        <Separator />
        <div className="flex justify-between font-semibold">
          <span>Subtotal</span>
          <span>${cartTotal.toFixed(2)}</span>
        </div>
        <p className="text-sm text-muted-foreground">Shipping and taxes will be calculated at checkout.</p>
        <Button asChild size="lg" className="w-full">
          <Link href="/checkout">Proceed to Checkout</Link>
        </Button>
      </div>
    </div>
  );
}
