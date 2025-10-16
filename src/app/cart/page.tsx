import CartContents from '@/components/CartContents';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CartPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold tracking-tight font-headline">
            Your Shopping Cart
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CartContents />
        </CardContent>
      </Card>
    </div>
  );
}
