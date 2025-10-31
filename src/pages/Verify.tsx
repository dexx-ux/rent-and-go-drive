import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, Upload, Camera } from 'lucide-react';

const Verify = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [licenseFile, setLicenseFile] = useState<File | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleEmailVerification = () => {
    toast({
      title: "Verification Code Sent",
      description: "Please check your email for the verification code.",
    });
    setStep(2);
  };

  const handlePhoneVerification = () => {
    toast({
      title: "Phone Verified",
      description: "Your phone number has been verified successfully.",
    });
    setStep(3);
  };

  const handleLicenseUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLicenseFile(e.target.files[0]);
      toast({
        title: "License Uploaded",
        description: "Your driver's license has been uploaded successfully.",
      });
      setStep(4);
    }
  };

  const handleSelfieCapture = () => {
    toast({
      title: "Verification Complete",
      description: "Your identity has been verified. You can now book cars!",
    });
    setTimeout(() => navigate('/dashboard'), 2000);
  };

  const progressValue = (step / 4) * 100;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 flex items-center justify-center bg-muted/40 py-12">
        <Card className="w-full max-w-2xl mx-4">
          <CardHeader>
            <CardTitle className="text-2xl">Identity Verification</CardTitle>
            <CardDescription>Complete these steps to start renting cars</CardDescription>
            <Progress value={progressValue} className="mt-4" />
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Email Verification */}
            <div className={`space-y-4 ${step !== 1 && 'opacity-50'}`}>
              <div className="flex items-center gap-2">
                {step > 1 && <CheckCircle className="h-5 w-5 text-secondary" />}
                <h3 className="font-semibold text-lg">Step 1: Email Verification</h3>
              </div>
              {step === 1 && (
                <div className="space-y-4 pl-7">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <Button onClick={handleEmailVerification}>Send Verification Code</Button>
                </div>
              )}
            </div>

            {/* Step 2: Phone Verification */}
            <div className={`space-y-4 ${step < 2 && 'opacity-50'}`}>
              <div className="flex items-center gap-2">
                {step > 2 && <CheckCircle className="h-5 w-5 text-secondary" />}
                <h3 className="font-semibold text-lg">Step 2: Phone Verification</h3>
              </div>
              {step === 2 && (
                <div className="space-y-4 pl-7">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="otp">Verification Code</Label>
                    <Input
                      id="otp"
                      placeholder="Enter 6-digit code"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      maxLength={6}
                    />
                  </div>
                  <Button onClick={handlePhoneVerification}>Verify Phone</Button>
                </div>
              )}
            </div>

            {/* Step 3: License Upload */}
            <div className={`space-y-4 ${step < 3 && 'opacity-50'}`}>
              <div className="flex items-center gap-2">
                {step > 3 && <CheckCircle className="h-5 w-5 text-secondary" />}
                <h3 className="font-semibold text-lg">Step 3: Driver's License</h3>
              </div>
              {step === 3 && (
                <div className="space-y-4 pl-7">
                  <p className="text-sm text-muted-foreground">
                    Upload a clear photo of your driver's license. Make sure all details are visible.
                  </p>
                  <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleLicenseUpload}
                      className="hidden"
                      id="license-upload"
                    />
                    <Label htmlFor="license-upload" className="cursor-pointer">
                      <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                      <p className="font-semibold">Click to upload license</p>
                      <p className="text-sm text-muted-foreground mt-2">PNG, JPG up to 10MB</p>
                    </Label>
                  </div>
                </div>
              )}
            </div>

            {/* Step 4: Selfie Verification */}
            <div className={`space-y-4 ${step < 4 && 'opacity-50'}`}>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-lg">Step 4: Selfie Verification</h3>
              </div>
              {step === 4 && (
                <div className="space-y-4 pl-7">
                  <p className="text-sm text-muted-foreground">
                    Take a live selfie to verify your identity matches your license.
                  </p>
                  <Button onClick={handleSelfieCapture} variant="booking" size="lg" className="w-full">
                    <Camera className="h-5 w-5" />
                    Take Selfie
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Verify;
