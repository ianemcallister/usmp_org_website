'use client'

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Regex to validate email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      // Simulate a successful submission
      setMessage("Success! You've been added to our mailing list.");
    } else {
      setMessage("Failed to add email. Please enter a valid email address.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-[#ABB7A3] to-[#FCFBFB]">
      <main className="flex flex-col gap-8 items-center sm:items-center text-center">
        {/* Podcast Name */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          The Unstructure My Product Podcast
        </h1>
        <h3>By Ian McAllister</h3>

        {/* Cover Art with Blur Edges Effect */}
        <div className="relative w-full max-w-[500px]">
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
          <Image
            className="rounded-lg"
            src="/cover_art.webp"
            alt="Podcast Cover Art"
            width={500}
            height={500}
            layout="intrinsic"
            priority
          />
        </div>


        {/* Spotify Link */}
        <a
          className="text-blue-500 hover:underline mt-4"
          href="https://open.spotify.com/show/2T9R5aZq3pp6LsT5md4Kfb"
          target="_blank"
          rel="noopener noreferrer"
        >
          Listen on Spotify
        </a>

        {/* Mailing List Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-center sm:items-center w-full max-w-sm mt-8"
        >
          <label
            htmlFor="email"
            className="text-sm font-semibold text-left w-full"
          >
            Join our mailing list
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 mt-4"
          >
            Submit
          </button>
        </form>

        {/* Submission Message */}
        {message && (
          <p
            className={`mt-4 text-sm ${
              message.startsWith("Success")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </main>
    </div>
  );
}
