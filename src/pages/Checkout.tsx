import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mockCars } from '@/data/mockCars';
import { CreditCard, Lock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import carEconomy from '@/assets/car-economy.jpg';
import carCompact from '@/assets/car-compact.jpg';
import carSuv from '@/assets/car-suv.jpg';

const Checkout = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const car = mockCars.find(c => c.id === id);

  if (!car) {
    return null;
  }

  const getCarImage = (imageName: string) => {
    switch (imageName) {
      case 'car-economy':
        return carEconomy;
      case 'car-compact':
        return carCompact;
      case 'car-suv':
        return carSuv;
      default:
        return carEconomy;
    }
  };

  const rentalDays = 3;
  const totalCost = car.pricePerDay * rentalDays;

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Payment Successful",
      description: "Your booking has been confirmed!",
    });
    setTimeout(() => navigate('/dashboard'), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="container py-8 flex-1">
        <h1 className="text-4xl font-bold mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img 
                    src={getCarImage(car.image)} 
                    alt={car.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{car.name}</h3>
                  <p className="text-sm text-muted-foreground">{car.type}</p>
                </div>
                <div className="space-y-2 pt-4 border-t">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Pick-up</span>
                    <span className="font-semibold">Nov 1, 2025 10:00 AM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Drop-off</span>
                    <span className="font-semibold">Nov 4, 2025 10:00 AM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-semibold">Downtown Center</span>
                  </div>
                </div>
                <div className="space-y-2 pt-4 border-t">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rate per day</span>
                    <span className="font-semibold">${car.pricePerDay}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-semibold">{rentalDays} days</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span className="font-bold text-lg">Total</span>
                    <span className="font-bold text-2xl text-secondary">${totalCost}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-secondary" />
                  Secure Payment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePayment} className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <div className="relative">
                        <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input
                          id="expiry"
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input
                          id="cvc"
                          placeholder="123"
                          maxLength={3}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="name">Cardholder Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="postal">Postal Code</Label>
                      <Input
                        id="postal"
                        placeholder="12345"
                        required
                      />
                    </div>
                  </div>

                  <div className="bg-muted/40 rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Lock className="h-4 w-4 text-secondary" />
                      <span className="font-semibold">SSL Secure Payment</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Your payment information is encrypted and secure. We never store your card details.
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    variant="booking" 
                    size="xl" 
                    className="w-full"
                  >
                    Confirm & Pay ${totalCost}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
