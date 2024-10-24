import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import AudioDashboard from "./components/AudioDashboard/AudioDashboard";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Audio Dashboard</h1>
          <div>
            <SignedOut>
              <SignInButton className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                Sign In
              </SignInButton>
            </SignedOut>
            <SignedIn>
              {/* Render the UserButton directly without the extra icon */}
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        <AudioDashboard />
      </main>
    </div>
  );
};

export default App;
