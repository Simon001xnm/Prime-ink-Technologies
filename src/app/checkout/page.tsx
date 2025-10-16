'use client';

import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart, cartCount } = useCart();
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (cartCount === 0) {
      router.push('/');
    }
  }, [cartCount, router]);

  const shippingCost = 500; // Example shipping in KES
  const tax = cartTotal * 0.16; // Example VAT in KES
  const total = cartTotal + shippingCost + tax;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    clearCart();
    toast({
      title: 'Order Placed!',
      description: 'Thank you for your purchase. A confirmation has been sent to your email.',
    });
    router.push('/track-order?orderId=ORD12345');
  };
  
  if (cartCount === 0) return null;

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8 md:py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-8 font-headline">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Shipping Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" required />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2 col-span-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">Postal Code</Label>
                    <Input id="zip" required />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Payment Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="card-number">Card Number</Label>
                  <Input id="card-number" placeholder="xxxx xxxx xxxx xxxx" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" required />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {cartItems.map(item => {
                    const placeholder = PlaceHolderImages.find(p => p.id === item.product.imageId);
                    return (
                      <li key={item.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="relative h-16 w-16 rounded-md border">
                            {placeholder && <Image src={placeholder.imageUrl} alt={item.product.name} fill className="object-cover rounded-md" />}
                            <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm text-primary-foreground">{item.quantity}</span>
                          </div>
                          <div>
                            <p className="font-semibold">{item.product.name}</p>
                            <p className="text-sm text-muted-foreground">KES {item.product.price.toLocaleString()}</p>
                          </div>
                        </div>
                        <p className="font-semibold">KES {(item.product.price * item.quantity).toLocaleString()}</p>
                      </li>
                    );
                  })}
                </ul>
                <Separator />
                <div className="space-y-2">
                  <div className="flex justify-between"><p>Subtotal</p><p>KES {cartTotal.toLocaleString()}</p></div>
                  <div className="flex justify-between text-muted-foreground"><p>Shipping</p><p>KES {shippingCost.toLocaleString()}</p></div>
                  <div className="flex justify-between text-muted-foreground"><p>Taxes (16% VAT)</p><p>KES {tax.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p></div>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <p>Total</p>
                  <p>KES {total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                </div>
                <Button type="submit" size="lg" className="w-full">Place Order</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
}
