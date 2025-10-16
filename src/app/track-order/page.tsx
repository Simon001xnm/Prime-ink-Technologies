'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2, Package, Truck } from 'lucide-react';

const statuses = [
  { name: 'Order Placed', icon: CheckCircle2, complete: true },
  { name: 'Processing', icon: Package, complete: true },
  { name: 'Shipped', icon: Truck, complete: true },
  { name: 'Delivered', icon: CheckCircle2, complete: false },
];

function OrderTracker() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialOrderId = searchParams.get('orderId') || '';
  const [orderId, setOrderId] = useState(initialOrderId);
  const [submittedId, setSubmittedId] = useState(initialOrderId);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/track-order?orderId=${orderId}`);
    setSubmittedId(orderId);
  };

  return (
    <div className="container mx-auto max-w-2xl px-4 py-8 md:py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold tracking-tight font-headline">Track Your Order</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex items-end gap-4">
            <div className="flex-1 space-y-2">
              <Label htmlFor="order-id">Order ID</Label>
              <Input
                id="order-id"
                placeholder="e.g., ORD12345"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
              />
            </div>
            <Button type="submit">Track</Button>
          </form>

          {submittedId === 'ORD12345' && (
            <div className="mt-8">
              <Separator />
              <div className="py-8">
                <h3 className="text-xl font-semibold mb-2">Order Status for #{submittedId}</h3>
                <p className="text-muted-foreground mb-6">Estimated Delivery: Tomorrow</p>

                <div className="flex items-center">
                  {statuses.map((status, index) => (
                    <div key={status.name} className="flex items-center w-full">
                      <div className="flex flex-col items-center text-center">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${status.complete ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                          <status.icon className="h-6 w-6" />
                        </div>
                        <p className={`mt-2 text-sm font-medium ${status.complete ? 'text-foreground' : 'text-muted-foreground'}`}>{status.name}</p>
                      </div>
                      {index < statuses.length - 1 && (
                        <div className={`flex-1 h-1 ${statuses[index+1].complete ? 'bg-primary' : 'bg-muted'}`} />
                      )}
                    </div>
                  ))}
                </div>

              </div>
            </div>
          )}
          {submittedId && submittedId !== 'ORD12345' && (
            <div className="mt-8 text-center text-muted-foreground">
              <p>Order ID "{submittedId}" not found. Please check the ID and try again.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}


export default function TrackOrderPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <OrderTracker />
        </Suspense>
    );
}