export interface Car {
  id: string;
  name: string;
  type: 'Economy' | 'Compact' | 'SUV';
  image: string;
  pricePerDay: number;
  seats: number;
  transmission: 'Automatic' | 'Manual';
  fuelType: 'Petrol' | 'Diesel' | 'Electric';
  features: string[];
  available: boolean;
}

export const mockCars: Car[] = [
  {
    id: '1',
    name: 'Economy Hatchback',
    type: 'Economy',
    image: 'car-economy',
    pricePerDay: 34,
    seats: 5,
    transmission: 'Manual',
    fuelType: 'Petrol',
    features: ['Air Conditioning', 'Bluetooth', 'USB Charging', 'AUX Input'],
    available: true,
  },
  {
    id: '2',
    name: 'Compact Sedan',
    type: 'Compact',
    image: 'car-compact',
    pricePerDay: 42,
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    features: ['Air Conditioning', 'Bluetooth', 'Cruise Control', 'Backup Camera'],
    available: true,
  },
  {
    id: '3',
    name: 'Family SUV',
    type: 'SUV',
    image: 'car-suv',
    pricePerDay: 58,
    seats: 7,
    transmission: 'Automatic',
    fuelType: 'Diesel',
    features: ['Air Conditioning', 'Navigation', 'Leather Seats', 'Sunroof', '4WD'],
    available: true,
  },
  {
    id: '4',
    name: 'City Compact',
    type: 'Economy',
    image: 'car-economy',
    pricePerDay: 29,
    seats: 4,
    transmission: 'Manual',
    fuelType: 'Petrol',
    features: ['Air Conditioning', 'Bluetooth'],
    available: true,
  },
  {
    id: '5',
    name: 'Executive Sedan',
    type: 'Compact',
    image: 'car-compact',
    pricePerDay: 54,
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    features: ['Premium Audio', 'Heated Seats', 'Navigation', 'Parking Sensors'],
    available: true,
  },
  {
    id: '6',
    name: 'Adventure SUV',
    type: 'SUV',
    image: 'car-suv',
    pricePerDay: 65,
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Diesel',
    features: ['4WD', 'Roof Rack', 'All-Terrain Tires', 'Hill Assist'],
    available: false,
  },
];
