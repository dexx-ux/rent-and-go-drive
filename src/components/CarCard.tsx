import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Users, Zap, Fuel } from 'lucide-react';
import { Car } from '@/data/mockCars';
import carEconomy from '@/assets/car-economy.jpg';
import carCompact from '@/assets/car-compact.jpg';
import carSuv from '@/assets/car-suv.jpg';

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
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

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-video overflow-hidden bg-muted">
        <img 
          src={getCarImage(car.image)} 
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-semibold text-lg mb-1">{car.name}</h3>
            <p className="text-sm text-muted-foreground">{car.type}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-secondary">${car.pricePerDay}</p>
            <p className="text-xs text-muted-foreground">per day</p>
          </div>
        </div>
        
        <div className="flex gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{car.seats} seats</span>
          </div>
          <div className="flex items-center gap-1">
            <Zap className="h-4 w-4" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center gap-1">
            <Fuel className="h-4 w-4" />
            <span>{car.fuelType}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {car.features.slice(0, 3).map((feature, index) => (
            <span key={index} className="text-xs px-2 py-1 rounded-full bg-muted">
              {feature}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link to={`/car/${car.id}`} className="w-full">
          <Button className="w-full" disabled={!car.available}>
            {car.available ? 'See Details' : 'Currently Unavailable'}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
