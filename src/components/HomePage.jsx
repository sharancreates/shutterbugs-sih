import React, { useState, useEffect, useMemo } from "react";

const LogoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#22d3ee" />
    <path d="M7 8H17" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M7 12H17" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M7 16H12" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300 hover:text-white transition-colors" fill="none" viewBox="0 0 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const FloatChatPage = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const particles = useMemo(() =>
    Array.from({ length: 80 }).map((_, i) => ({
      key: i,
      size: Math.random() * 10 + 3,
      left: `${Math.random() * 100}%`,
      bottom: `${Math.random() * 10}%`,
      duration: `${Math.random() * 12 + 8}s`,
      delay: `${Math.random() * 5}s`,
    })), []
  );

  return (
    <>
      <style>{`
        @keyframes blob {
          0%,100% { transform: translate(0px,0px) scale(1); }
          33% { transform: translate(40px,-50px) scale(1.2); }
          66% { transform: translate(-30px,30px) scale(0.8); }
        }

        @keyframes floatUpFade {
          0% { opacity: 0; transform: translateY(0) scale(0.5); }
          25% { opacity: 0.7; transform: translateY(-30vh) scale(1.2); }
          100% { opacity: 0; transform: translateY(-100vh) scale(0.7); }
        }

        @keyframes gradient-bg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes spin {
          100% { transform: rotate(360deg); }
        }

        /* TYPEWRITER EFFECT */
        .typewriter h1 {
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid #22d3ee;
          animation:
            typing 3s steps(30, end),
            blink 0.75s step-end infinite;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blink {
          50% { border-color: transparent }
        }

        /* Gradient background */
        .animated-gradient {
          background: linear-gradient(-45deg, #020c1b, #0a192f, #1f3a61, #040d21);
          background-size: 400% 400%;
          animation: gradient-bg 20s ease infinite;
        }

        .aurora::before {
          content: "";
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          background: radial-gradient(circle, rgba(0,255,255,0.15), transparent 70%);
          animation: spin 25s linear infinite;
        }

        .shimmer {
          background: linear-gradient(90deg, #fff, #22d3ee, #fff);
          background-size: 200%;
          -webkit-background-clip: text;
          color: transparent;
          animation: shimmer 5s infinite linear;
        }

        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .magnetic:hover {
          transform: scale(1.05);
          box-shadow: 0 0 12px rgba(34, 211, 238, 0.4);
        }
      `}</style>

      <div className="text-white font-sans min-h-screen relative overflow-hidden animated-gradient aurora">
        {/* Spotlight */}
        <div
          className="pointer-events-none fixed inset-0 z-30 transition duration-300"
          style={{
            background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(34, 211, 238, 0.15), transparent 80%)`,
          }}
        ></div>

        {/* Blobs */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 motion-safe:animate-[blob_6s_infinite]" />
        <div className="absolute bottom-20 -right-20 w-[28rem] h-[28rem] bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 motion-safe:animate-[blob_8s_infinite_2s]" />
        <div className="absolute top-1/2 left-1/2 w-[30rem] h-[30rem] bg-purple-700 rounded-full mix-blend-screen filter blur-3xl opacity-20 motion-safe:animate-[blob_10s_infinite_4s]" />

        {/* Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map(({ key, size, left, bottom, duration, delay }) => (
            <div
              key={key}
              className="absolute bg-white rounded-full opacity-20"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left,
                bottom,
                animation: `floatUpFade ${duration} ease-in infinite`,
                animationDelay: delay,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Navbar */}
          <header className="sticky top-0 z-50 py-6 px-6 md:px-20 bg-black/30 backdrop-blur-xl border-b border-white/10">
            <nav className="flex justify-between items-center">
              <div className="flex items-center gap-3 cursor-pointer">
                <LogoIcon />
                <span className="text-2xl shimmer font-bold">FloatChat</span>
              </div>
              <ul className="hidden lg:flex items-center gap-10">
                {["Home", "Explore Data", "Features", "About", "Support"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-cyan-400 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
              <div className="hidden md:flex items-center gap-4">
                <button aria-label="Search" className="hover:scale-110 transition-transform">
                  <SearchIcon />
                </button>
                <button className="px-5 py-2 border border-cyan-400 rounded-md text-cyan-400 hover:bg-cyan-400 hover:text-[#020c1b] font-semibold transition magnetic">
                  Login
                </button>
                <button className="px-5 py-2 bg-orange-500 rounded-md hover:bg-orange-600 font-semibold transition magnetic">
                  Sign Up
                </button>
              </div>
            </nav>
          </header>

          {/* Hero Section */}
          <main className="flex-grow flex flex-col justify-center items-center text-center px-4">
            <div className="typewriter">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6">
                Converse with the Ocean
              </h1>
            </div>
            <p className="text-md sm:text-lg md:text-xl text-gray-300 max-w-3xl mb-10 mt-4">
              Explore ARGO data through AI-driven natural conversations and dynamic visualizations
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-cyan-500 text-white font-semibold px-10 py-4 rounded-lg hover:bg-cyan-600 transition-transform hover:scale-110 shadow-lg shadow-cyan-500/30 magnetic">
                Start Exploring
              </button>
              <button className="bg-transparent border border-gray-500 text-white font-semibold px-10 py-4 rounded-lg hover:bg-gray-800 transition-colors magnetic">
                How It Works
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default FloatChatPage;

