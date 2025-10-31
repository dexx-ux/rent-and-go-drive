import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { mockCars } from '@/data/mockCars';
import { Users, Zap, Fuel, CheckCircle, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import carEconomy from '@/assets/car-economy.jpg';
import carCompact from '@/assets/car-compact.jpg';
import carSuv from '@/assets/car-suv.jpg';

const CarDetail = () => {
  const { id } = useParams();
  const car = mockCars.find(c => c.id === id);

  if (!car) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Car Not Found</h1>
            <Link to="/cars">
              <Button>Browse All Cars</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="container py-8 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <img 
                src={getCarImage(car.image)} 
                alt={car.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-video rounded-lg overflow-hidden bg-muted">
                  <img 
                    src={getCarImage(car.image)} 
                    alt={`${car.name} view ${i}`}
                    className="w-full h-full object-cover opacity-75"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Car Details & Booking */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h1 className="text-4xl font-bold mb-2">{car.name}</h1>
                  <Badge variant="secondary">{car.type}</Badge>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-bold text-secondary">${car.pricePerDay}</p>
                  <p className="text-sm text-muted-foreground">per day</p>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Key Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Seats</p>
                      <p className="font-semibold">{car.seats} people</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Transmission</p>
                      <p className="font-semibold">{car.transmission}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Fuel className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Fuel Type</p>
                      <p className="font-semibold">{car.fuelType}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Availability</p>
                      <p className="font-semibold">{car.available ? 'Available' : 'Booked'}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Features & Amenities</h3>
                <div className="grid grid-cols-2 gap-3">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/40">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Pricing Breakdown</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Base Rate (per day)</span>
                    <span className="font-semibold">${car.pricePerDay}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rental Period</span>
                    <span className="font-semibold">{rentalDays} days</span>
                  </div>
                  <div className="border-t pt-2 mt-2 flex justify-between">
                    <span className="font-bold text-lg">Total Cost</span>
                    <span className="font-bold text-2xl text-secondary">${totalCost}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Link to={car.available ? `/checkout/${car.id}` : '#'}>
              <Button 
                variant="booking" 
                size="xl" 
                className="w-full"
                disabled={!car.available}
              >
                {car.available ? 'Book This Car' : 'Currently Unavailable'}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CarDetail;
