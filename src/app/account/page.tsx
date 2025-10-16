import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { MapPin, CreditCard, Box, User, LogOut } from "lucide-react";

export default function AccountPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-headline">My Account</h1>
          <p className="text-muted-foreground">Welcome back, User!</p>
        </div>
        <Button asChild variant="outline">
          <Link href="/"><LogOut className="mr-2 h-4 w-4"/>Logout</Link>
        </Button>
      </div>
      
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card>
            <CardContent className="p-4">
              <nav className="flex flex-col gap-1">
                <Button variant="ghost" className="justify-start gap-3 text-primary bg-primary/10">
                  <User className="h-5 w-5" />
                  Profile
                </Button>
                <Button variant="ghost" className="justify-start gap-3">
                  <Box className="h-5 w-5" />
                  My Orders
                </Button>
                <Button variant="ghost" className="justify-start gap-3">
                  <MapPin className="h-5 w-5" />
                  Addresses
                </Button>
                <Button variant="ghost" className="justify-start gap-3">
                  <CreditCard className="h-5 w-5" />
                  Payment Methods
                </Button>
              </nav>
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Manage your name and email address.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               <div>
                  <h4 className="font-semibold">Name</h4>
                  <p className="text-muted-foreground">John Doe</p>
               </div>
               <div>
                  <h4 className="font-semibold">Email Address</h4>
                  <p className="text-muted-foreground">john.doe@example.com</p>
               </div>
               <Button variant="secondary">Edit Profile</Button>
            </CardContent>
            <Separator />
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>For your security, we recommend changing your password periodically.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="secondary">Change Password</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
