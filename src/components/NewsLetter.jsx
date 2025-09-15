import React, { useState } from 'react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the email submission, e.g., send it to a backend API
    // For this example, we'll just log the email and set the subscription status
    console.log(`Email submitted: ${email}`);
    setIsSubscribed(true);
  };

  return (
    <div className="bg-[#0c1328] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          Stay Informed on the Future of Ocean Intelligence
        </h2>
        <p className="text-gray-400 mb-8">
          Get the latest updates on ARGO data discoveries and FloatChat features
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full sm:w-80 px-4 py-3 text-gray-200 bg-[#1e2a44] border border-[#2d3a5a] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#66d9ef] placeholder-gray-400 transition-colors duration-200"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 font-semibold text-white bg-gradient-to-r from-[#1abc9c] to-[#66d9ef] rounded-lg hover:from-[#1abc9c] hover:to-[#5ac3d4] transition-all duration-300 transform hover:scale-105"
          >
            {isSubscribed ? 'Subscribed!' : 'Subscribe'}
          </button>
        </form>
        {isSubscribed && (
          <p className="mt-4 text-green-400">Thank you for subscribing!</p>
        )}
      </div>
    </div>
  );
};

export default NewsletterForm;