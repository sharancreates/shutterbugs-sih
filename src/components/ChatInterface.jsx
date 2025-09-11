import React, { useState, useEffect, useRef } from 'react';

const useAutoScroll = (ref, deps) => {
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, deps);
};

const Typewriter = ({ text, onComplete, delay = 25, pause = 250 }) => {
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (index < text.length) {
      timerRef.current = setTimeout(() => {
        setCurrentText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, delay);
    } else if (onComplete) {
      timerRef.current = setTimeout(onComplete, pause);
    }

    return () => clearTimeout(timerRef.current);
  }, [index, text, delay, pause, onComplete]);

  return <p className="whitespace-pre-line">{currentText}</p>;
};

const MapChart = ({ isVisible }) => (
  <div
    className={`w-full h-[250px] bg-cover bg-center rounded-lg shadow-md transition-all duration-500 ease-out transform ${
      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
    }`}
    style={{
      backgroundImage: `url(https://www.researchgate.net/profile/Blair-Greenan/publication/332274799/figure/fig3/AS:745751231594504@1554812357583/Annual-mean-temperatures-in-the-Northeast-Pacific-Ocean-off-British-Columbia.ppm)`
    }}
  >
    <div className="w-full h-full bg-black/40 flex justify-center items-end pb-3">
      <span className="text-gray-200 text-sm italic">
        Pacific Ocean Temperature Trends
      </span>
    </div>
  </div>
);

// Chat bubble with typing animation + optional chart
const ChatMessage = ({ sender, text, onTypeComplete, showChart }) => {
  const [typing, setTyping] = useState(true);

  const handleDone = () => {
    setTyping(false);
    onTypeComplete?.();
  };

  return (
    <div
      role="group"
      aria-label={`${sender} message`}
      className={`flex max-w-[70%] transition-all duration-500 ease-out ${
        sender === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'
      }`}
    >
      {sender === 'assistant' && (
        <div className="w-8 h-8 rounded-full bg-[#55a0f0] flex items-center justify-center text-sm font-bold mr-3">
          AI
        </div>
      )}
      <div
        className={`p-3 px-4 rounded-2xl leading-relaxed ${
          sender === 'user'
            ? 'bg-gradient-to-r from-[#10e3a6] to-[#2ad6b4] text-white rounded-tr-sm'
            : 'bg-[#3d454a] text-[#c4c6c9] rounded-tl-sm flex flex-col gap-3'
        }`}
      >
        {typing ? (
          <Typewriter text={text} onComplete={handleDone} />
        ) : (
          <p>{text}</p>
        )}
        {showChart && !typing && <MapChart isVisible />}
      </div>
    </div>
  );
};

function App() {
  const [step, setStep] = useState(0);
  const chatRef = useRef(null);

  useAutoScroll(chatRef, [step]);

  useEffect(() => {
    const delay = setTimeout(() => setStep(1), 800);
    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="bg-[#212529] min-h-screen flex flex-col items-center justify-center p-8 font-sans text-gray-100">
      <h1 className="text-4xl font-light text-gray-200 mb-8">FloatChat Demo</h1>
      <div className="w-[900px] h-[600px] bg-[#2b3035] rounded-xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="relative flex items-center p-3 px-5 border-b border-[#3d454a] text-[#adb5bd]">
          <div className="flex gap-2 absolute left-5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="mx-auto font-medium text-lg text-gray-300">
            FloatChat Interface
          </span>
        </div>

        {/* Chat Window */}
        <div
          ref={chatRef}
          className="flex-grow p-5 overflow-y-auto flex flex-col gap-5 scroll-smooth"
        >
          {step >= 1 && (
            <ChatMessage
              sender="user"
              text="What is the temperature trend in the Pacific over the last 5 years?"
              onTypeComplete={() => setTimeout(() => setStep(2), 400)}
            />
          )}

          {step >= 2 && (
            <ChatMessage
              sender="assistant"
              text="I've analyzed Pacific Ocean temperature data from ARGO floats. Here's what I found..."
              onTypeComplete={() => setTimeout(() => setStep(3), 250)}
              showChart={step >= 3}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
