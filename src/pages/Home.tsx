import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import CarCard from '@/components/CarCard';
import { mockCars } from '@/data/mockCars';
import { Shield, MapPin, CreditCard, Search, Car, CheckCircle } from 'lucide-react';
import heroImage from '@/assets/hero-car.jpg';

const Home = () => {
  const featuredCars = mockCars.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60" />
        </div>
        
        <div className="relative z-10 container text-center text-primary-foreground">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Drive Affordably. Track Securely.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Find the perfect affordable car near you with real-time GPS tracking and secure verification
          </p>
          <div className="max-w-4xl mx-auto">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/40">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">1. Browse & Book</h3>
              <p className="text-muted-foreground">
                Find the perfect affordable car near you with our easy search
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold">2. Verify & Pay</h3>
              <p className="text-muted-foreground">
                Complete your secure ID check and payment in minutes
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Car className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">3. Unlock & Go</h3>
              <p className="text-muted-foreground">
                Access your car and track your journey in real-time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-20">
        <div className="container">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Affordable Fleet</h2>
            <Link to="/cars">
              <Button variant="outline">View All Cars</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Security Section */}
      <section className="py-20 bg-muted/40">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Your Security is Our Priority
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold">GPS Live Tracking</h3>
              <p className="text-sm text-muted-foreground">
                Track your rental car in real-time for complete peace of mind
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                <Shield className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold">ID Verified Users</h3>
              <p className="text-sm text-muted-foreground">
                All users undergo thorough verification for your safety
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                <CreditCard className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold">Secure SSL Payments</h3>
              <p className="text-sm text-muted-foreground">
                Bank-level encryption protects your payment information
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
