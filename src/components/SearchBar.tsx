import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, MapPin, Search } from 'lucide-react';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');

  return (
    <div className="bg-card rounded-lg shadow-xl p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Pick-up Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="datetime-local"
            placeholder="Pick-up Date & Time"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="datetime-local"
            placeholder="Drop-off Date & Time"
            value={dropoffDate}
            onChange={(e) => setDropoffDate(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Button variant="hero" size="lg" className="w-full">
          <Search className="h-4 w-4" />
          Search Cars
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
