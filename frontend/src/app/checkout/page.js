"use client";

import { useState, useEffect } from "react";
import Image from "next/image"; // Import Image from Next.js

const page = () => {
  const [pricePerTicket] = useState(100);
  const [numTickets, setNumTickets] = useState(1);
  const [discount] = useState(20); // Set the discount here, it's automatically applied
  const [total, setTotal] = useState(pricePerTicket);

  useEffect(() => {
    // Calculate total price dynamically
    const calculatedTotal = Math.max(0, pricePerTicket * numTickets - discount);
    setTotal(calculatedTotal);
  }, [numTickets, discount, pricePerTicket]);

  return (
    <main className="min-h-screen bg-white py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">Payment</h2>

          <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
            {/* Payment Form */}
            <form className="w-full rounded-lg border border-[#003060] bg-white p-4 shadow-md sm:p-6 lg:max-w-xl lg:p-8">
              <div className="mb-6 grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="full_name" className="mb-2 block text-sm font-medium text-gray-900">
                    Full name (as displayed on card)*
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                    placeholder="Bonnie Green"
                    required
                  />
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="card-number-input" className="mb-2 block text-sm font-medium text-gray-900">
                    Card number*
                  </label>
                  <input
                    type="text"
                    id="card-number-input"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900"
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                    pattern="^4[0-9]{12}(?:[0-9]{3})?$"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="card-expiration-input" className="mb-2 block text-sm font-medium text-gray-900">
                    Card expiration*
                  </label>
                  <input
                    type="text"
                    id="card-expiration-input"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900"
                    placeholder="12/23"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="cvv-input" className="mb-2 flex items-center gap-1 text-sm font-medium text-gray-900">
                    CVV*
                  </label>
                  <input
                    type="number"
                    id="cvv-input"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                    placeholder="•••"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-lg bg-[#fe542b] px-5 py-2.5 text-sm font-medium text-white"
              >
                Pay now
              </button>
            </form>

            {/* Payment Summary */}
            <div className="mt-6 grow sm:mt-8 lg:mt-0 ">
              <div className="space-y-4 rounded-lg border border-[#003060] bg-gray-50 p-6">
                <div className="space-y-2">
                  {/* Price */}
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500">Price</dt>
                    <dd className="text-base font-medium text-gray-900">${pricePerTicket.toFixed(2)}</dd>
                  </dl>

                  {/* Number of tickets */}
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500">Number of Tickets</dt>
                    <dd>
                      <input
                        type="number"
                        id="tickets"
                        className="w-20 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                        min="1"
                        max="10"
                        value={numTickets}
                        onChange={(e) => setNumTickets(parseInt(e.target.value) || 1)}
                      />
                    </dd>
                  </dl>

                  {/* Discount */}
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500">Discount</dt>
                    <dd className="text-base font-medium text-green-500">-${discount.toFixed(2)}</dd>
                  </dl>
                </div>

                {/* Total */}
                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                  <dt className="text-base font-bold text-gray-900">Total</dt>
                  <dd className="text-base font-bold text-gray-900" id="total">
                    ${total.toFixed(2)}
                  </dd>
                </dl>
              </div>

              {/* Payment Icons */}
              <div className="mt-6 flex items-center justify-center gap-8">
                <Image src="/Images/paypal.png" alt="PayPal" width={40} height={40} />
                <Image src="/Images/visa.png" alt="Visa" width={40} height={40} />
                <Image src="/Images/card.png" alt="MasterCard" width={40} height={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
