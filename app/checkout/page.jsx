"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Minus, Plus, Trash2, Share2, MapPin, CheckCircle } from 'lucide-react';

const CartCheckoutPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 1000, quantity: 2 },
    { id: 2, name: 'Product 2', price: 1500, quantity: 1 },
  ]);
  const [earnedRewards, setEarnedRewards] = useState(500); // Assume 500 KSH in rewards
  const [isPaid, setIsPaid] = useState(false);
  const [deliveryLocation, setDeliveryLocation] = useState(null);

  const updateQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = Math.max(0, subtotal - earnedRewards);

  const handleCheckout = () => {
    setIsPaid(true);
    console.log("Payment processed successfully!");
  };

  const handleChooseLocation = () => {
    setDeliveryLocation({
      address: "123 Main St, Nairobi",
      coordinates: { lat: -1.2921, lng: 36.8219 }
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen bg-gradient-to-b from-pink-100 to-purple-100  p-4 max-w-4xl space-y-8">
      <h1 className="text-4xl font-bold mb-2 text-purple-800">My Shopping Cart</h1>
      <p className="text-xl text-gray-600 mb-8">Review your items, choose delivery, and complete your purchase</p>
      
      {/* Referral Banner */}
      <Alert className="mb-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <Share2 className="h-4 w-4" />
        <AlertTitle className="text-lg font-bold">Earn 200 KSH for Every Friend You Refer!</AlertTitle>
        <AlertDescription>
          Share your unique code and start earning now. The more friends join, the more you save on your next purchase!
        </AlertDescription>
        <Button className="mt-2 bg-white text-purple-700 hover:bg-purple-100">
          Share Your Code
        </Button>
      </Alert>
      
      <Card>
        <CardHeader>
          <CardTitle>Cart Items</CardTitle>
        </CardHeader>
        <CardContent>
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.price} KSH</p>
              </div>
              <div className="flex items-center">
                <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="mx-2">{item.quantity}</span>
                <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                  <Plus className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="ml-2" onClick={() => removeItem(item.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
          <Separator className="my-4" />
          <div className="flex justify-between font-semibold">
            <span>Subtotal:</span>
            <span>{subtotal} KSH</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Rewards Applied:</span>
            <span>-{earnedRewards} KSH</span>
          </div>
          <div className="flex justify-between font-bold text-lg mt-2">
            <span>Total:</span>
            <span>{total} KSH</span>
          </div>
          
          {/* Delivery Location Button */}
          <Button 
            className="w-full mt-6 mb-4" 
            variant={deliveryLocation ? "outline" : "default"}
            onClick={handleChooseLocation}
          >
            <MapPin className="mr-2 h-4 w-4" />
            {deliveryLocation ? "Change Delivery Location" : "Choose Delivery Location"}
          </Button>
          
          {/* Display chosen location if available */}
          {deliveryLocation && (
            <Alert className="mb-4">
              <MapPin className="h-4 w-4" />
              <AlertTitle>Delivery Location</AlertTitle>
              <AlertDescription>{deliveryLocation.address}</AlertDescription>
            </Alert>
          )}
          
          {/* Payment Button */}
          <Button 
            className="w-full" 
            onClick={handleCheckout}
            disabled={isPaid || !deliveryLocation}
          >
            {isPaid ? (
              <>
                <CheckCircle className="mr-2 h-4 w-4" />
                Payment Completed
              </>
            ) : (
              'Proceed to Payment'
            )}
          </Button>
          
          {/* Payment Status */}
          {isPaid && (
            <Alert className="mt-4 bg-green-100 text-green-800">
              <CheckCircle className="h-4 w-4" />
              <AlertTitle>Payment Successful</AlertTitle>
              <AlertDescription>Your order has been placed and will be delivered soon!</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
      
      {/* Additional Referral Incentive */}
      <Card className="mt-8 bg-yellow-50">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2">💡 Quick Tip: Refer More, Save More!</h3>
          <p>You're just 2 referrals away from getting your next purchase for free! Refer now and watch your savings grow.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CartCheckoutPage;