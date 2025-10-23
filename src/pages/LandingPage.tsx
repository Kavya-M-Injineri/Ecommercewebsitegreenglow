import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1628077532539-0fb27834972d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZXBsYW50JTIwZ3JlZW4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjEyNDIzMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-emerald-800/70 to-green-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-3xl">
          {/* Logo/Icon */}
          <div className="mb-8 flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="relative">
              <div className="absolute inset-0 bg-green-400 blur-3xl opacity-50 animate-pulse" />
              <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-full border border-white/20 shadow-2xl">
                <Sparkles className="w-16 h-16 text-green-300" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="mb-6 text-white animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <span className="block text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-green-200 via-emerald-100 to-green-200 bg-clip-text text-transparent drop-shadow-lg">
              GreenGlow
            </span>
            <span className="block mt-3 text-2xl md:text-3xl text-green-100/90">
              The Houseplant Haven
            </span>
          </h1>

          {/* About Text */}
          <p className="mb-10 text-lg md:text-xl text-green-50/90 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Transform your living space into a lush sanctuary with our curated collection
            of premium houseplants. From air-purifying wonders to statement greenery,
            discover the perfect plant companion for your home.
          </p>

          {/* CTA Button */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <button
              onClick={() => navigate('/products')}
              className="group relative px-8 py-4 rounded-full overflow-hidden shadow-2xl transition-all hover:scale-105 hover:shadow-green-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-500 to-green-500 transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-emerald-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2 text-white">
                Get Started
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="mt-16 flex items-center justify-center gap-8 text-green-100/60 animate-in fade-in duration-700 delay-500">
            <div className="text-center">
              <div className="text-3xl mb-1">🌿</div>
              <p className="text-sm">Fresh Plants</p>
            </div>
            <div className="w-px h-12 bg-green-100/20" />
            <div className="text-center">
              <div className="text-3xl mb-1">💚</div>
              <p className="text-sm">Eco-Friendly</p>
            </div>
            <div className="w-px h-12 bg-green-100/20" />
            <div className="text-center">
              <div className="text-3xl mb-1">✨</div>
              <p className="text-sm">Premium Quality</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-300/30 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-emerald-300/20 rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-green-400/25 rounded-full animate-pulse delay-500" />
      </div>
    </div>
  );
}
