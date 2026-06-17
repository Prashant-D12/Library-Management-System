import { useState } from "react";

export default function UserLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }
    alert(`Welcome, ${username}!`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-md w-full max-w-md px-10 py-12">

        
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
          User Login
        </h1>

        
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
            placeholder=""
          />
        </div>

      
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
            placeholder=""
          />
        </div>

      
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition-colors duration-200"
        >
          Login
        </button>

      
        <p className="text-center text-sm text-gray-500 mt-5">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline font-medium">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}