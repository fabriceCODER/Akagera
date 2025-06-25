
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Hero section */}
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-32 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Summer styles are finally here
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.
            </p>
          </div>
          <div className="mt-10">
            <div className="mt-10 flex gap-4">
              <Button 
                onClick={() => navigate('/products')} 
                className="bg-akagera-700 hover:bg-akagera-800"
                size="lg"
              >
                Shop Collection
              </Button>
              <Button 
                variant="outline"
                onClick={() => navigate('/products')} 
                className="border-akagera-700 text-akagera-700 hover:bg-akagera-50"
                size="lg"
              >
                Learn More
              </Button>
            </div>
            <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">
              <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                      <img
                        src="https://images.unsplash.com/photo-1590330297626-d7aff25a0431?q=80&w=3387&auto=format&fit=crop"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://images.unsplash.com/photo-1588117305388-c2631a279f82?q=80&w=3387&auto=format&fit=crop"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://images.unsplash.com/photo-1556306535-0f09a537f0a3?q=80&w=3270&auto=format&fit=crop"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://images.unsplash.com/photo-1556306510-31ca015374b0?q=80&w=3270&auto=format&fit=crop"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=3115&auto=format&fit=crop"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=3024&auto=format&fit=crop"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://images.unsplash.com/photo-1591369822096-ffd140ec948f?q=80&w=3387&auto=format&fit=crop"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
