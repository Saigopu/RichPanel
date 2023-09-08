import React from "react";
import { useNavigate } from "react-router-dom";

export default function LogINpage() {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-500 flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Login to FB Helpdesk</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="remember" className="inline-flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="text-blue-500"
              />
              <span className="ml-2 text-gray-700">Remember me</span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            onClick={() => {
              navigate("/fblogin");
            }}
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-gray-600">
          New to FB Helpdesk?{" "}
          <a href="#" className="text-blue-500">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
