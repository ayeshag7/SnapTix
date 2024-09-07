'use client'; // Mark this as a Client Component

import { useState } from 'react';
import Link from 'next/link';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset previous notifications
    setErrorMessage(null);
    setSuccessMessage(null);

    const payload = {
      email: formData.email,
      password: formData.password,
    };
    console.log(payload)

    try {
      const response = await fetch('http://localhost:4000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log(data);
      if (data) {
        // Handle successful login
        setSuccessMessage(data.message || 'Login successful!');
                // Redirect to the homepage after login
        

        // Optionally store the token (JWT) in local storage or cookies
        // localStorage.setItem('token', data.token);

        // Redirect or navigate after successful login (optional)
        // For example, redirect to dashboard:
        // router.push('/dashboard');
      } else {
        // Handle error case
        setErrorMessage(data.message || 'Invalid login credentials');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Failed to communicate with the server.');
    }
  };

  return (
    <main className="min-h-screen">
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0 border border-[#003060] shadow-md">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Sign in to your account
              </h1>

              {/* Success Notification */}
              {successMessage && (
                <p className="text-green-500 text-sm font-medium mb-4">
                  {successMessage}
                </p>
              )}

              {/* Error Notification */}
              {errorMessage && (
                <p className="text-red-500 text-sm font-medium mb-4">
                  {errorMessage}
                </p>
              )}

              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Password Field */}
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Remember Me Checkbox */}
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <Link
                    href="/forgot-password"
                    className="text-sm font-medium text-primary-600 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#fe542b]"
                >
                  Sign in
                </button>
                {/* Signup Link */}
                <p className="text-sm font-light text-gray-500">
                  Don’t have an account yet?{' '}
                  <Link
                    href="/signup"
                    className="text-[#fe542b] underline font-medium text-primary-600"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
