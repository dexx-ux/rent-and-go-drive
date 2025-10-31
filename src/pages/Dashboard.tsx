import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Lock, Unlock, Clock, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Dashboard = () => {
  const [isLocked, setIsLocked] = useState(true);
  const { toast } = useToast();

  // Mock active rental
  const hasActiveRental = true;
  const currentLocation = { lat: 40.7128, lng: -74.0060 };

  const handleLockToggle = () => {
    setIsLocked(!isLocked);
    toast({
      title: isLocked ? "Car Unlocked" : "Car Locked",
      description: isLocked ? "Your rental car is now unlocked" : "Your rental car is now locked",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="container py-8 flex-1">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">My Dashboard</h1>
          <Badge variant="secondary" className="text-sm px-4 py-2">
            ID Verified
          </Badge>
        </div>

        {hasActiveRental ? (
          <div className="space-y-6">
            {/* Active Rental */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Current Rental</CardTitle>
                  <Badge>Active</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Economy Hatchback</h3>
                      <p className="text-sm text-muted-foreground">Compact • Manual • Petrol</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Nov 1 - Nov 4, 2025</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>2 days, 5 hours remaining</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant={isLocked ? "default" : "secondary"}
                        onClick={handleLockToggle}
                        className="flex-1"
                      >
                        {isLocked ? (
                          <>
                            <Unlock className="h-4 w-4" />
                            Unlock Car
                          </>
                        ) : (
                          <>
                            <Lock className="h-4 w-4" />
                            Lock Car
                          </>
                        )}
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Extend Rental
                      </Button>
                    </div>
                    <Button variant="destructive" className="w-full">
                      End Trip
                    </Button>
                  </div>

                  {/* GPS Map */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">Live GPS Tracking</h4>
                      <Button variant="ghost" size="sm">
                        <MapPin className="h-4 w-4" />
                        Refresh
                      </Button>
                    </div>
                    <div className="aspect-square rounded-lg bg-muted flex items-center justify-center border-2 border-primary/20">
                      <div className="text-center space-y-2">
                        <MapPin className="h-12 w-12 mx-auto text-primary" />
                        <p className="font-semibold">New York, NY</p>
                        <p className="text-sm text-muted-foreground">
                          Lat: {currentLocation.lat.toFixed(4)}, Lng: {currentLocation.lng.toFixed(4)}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Last updated: 10 seconds ago
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Booking History */}
            <Card>
              <CardHeader>
                <CardTitle>Booking History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex justify-between items-center p-4 rounded-lg border">
                      <div>
                        <p className="font-semibold">Compact Sedan</p>
                        <p className="text-sm text-muted-foreground">Oct {20 - i} - Oct {23 - i}, 2025</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-secondary">${126}</p>
                        <Badge variant="outline">Completed</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <Card>
            <CardContent className="py-12 text-center">
              <MapPin className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">No Active Rentals</h3>
              <p className="text-muted-foreground mb-6">
                Start your journey by browsing our affordable fleet
              </p>
              <Button size="lg">Browse Cars</Button>
            </CardContent>
          </Card>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
