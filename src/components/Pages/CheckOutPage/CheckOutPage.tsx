'use client';

import Image, { StaticImageData } from 'next/image';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import checkout_img from '@/app/assets/images/Checkout/cartType.png'
import checkout_img_2 from '@/app/assets/images/Checkout/checkout_Img.png'
import { div } from 'framer-motion/client';
import TopEducaton from '../CoursesPage/TopEducaton';

interface FormData {
  nameOnCard: string;
  cardNumber: string;
  expirationDate: string;
  cvc: string;
  saveInfo: boolean;
}

interface OrderItem {
  id: number;
  name: string;
  description: string ;
  price: number;
  image: string | StaticImageData;
}

interface OrderSummary {
  items: OrderItem[];
  subtotal: number;
  couponDiscount: number;
  tax: number;
  total: number;
}

const CheckoutPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nameOnCard: '',
    cardNumber: '',
    expirationDate: '',
    cvc: '',
    saveInfo: false,
  });

  const [orderSummary] = useState<OrderSummary>({
    items: [
      {
        id: 1,
        name: 'adipising elit, sed do eiusmod tempor',
        description: 'Lorem ipsum dollar...',
        price: 24.69,
        image: checkout_img_2,
      },
      {
        id: 2,
        name: 'sed do eiusmod tempor adipising elit',
        description: 'Lorem ipsum dollar...',
        price: 24.69,
        image: checkout_img_2,
      },
    ],
    subtotal: 51.38,
    couponDiscount: 0,
    tax: 5,
    total: 56.38,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert('Payment confirmed! Thank you for your purchase.');
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Checkout
              </h1>
              <p className="text-sm text-gray-500 mb-6">
                Complete your payment information
              </p>

              {/* Payment Methods */}
              <div className="mb-8">
                <h2 className="text-sm font-medium text-gray-700 mb-4">
                  Card Type
                </h2>
                <div className="flex space-x-4">
                  <Image
                    src={checkout_img}
                    alt="image"
                    width={696}
                    height={92}
                  />
                </div>
              </div>

              {/* Form Fields */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="nameOnCard"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name on Card
                  </label>
                  <input
                    type="text"
                    id="nameOnCard"
                    name="nameOnCard"
                    value={formData.nameOnCard}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Enter name on Card"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="cardNumber"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Enter Card Number"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="expirationDate"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Expiration Date (MM/YY)
                    </label>
                    <input
                      type="text"
                      id="expirationDate"
                      name="expirationDate"
                      value={formData.expirationDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Enter Expiration Date"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cvc"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      CVC
                    </label>
                    <input
                      type="text"
                      id="cvc"
                      name="cvc"
                      value={formData.cvc}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Enter CVC"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="saveInfo"
                    name="saveInfo"
                    checked={formData.saveInfo}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-teal-600 focus:ring-2 focus:ring-teal-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="saveInfo"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Save my information for faster checkout
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                  Confirm Payment
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="bg-blue-50 rounded-xl shadow-lg p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Summary
              </h2>

              <div className="space-y-4">
                {orderSummary.items.map(item => (
                  <div
                    key={item.id}
                    className="flex items-start space-x-3 pb-4 border-b border-blue-100"
                  >
                    {/* You can replace <img> with Next.js <Image /> if you want optimization */}
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-md object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-500 mb-1">
                        {item.description}
                      </p>
                      <p className="text-sm font-semibold text-gray-800">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Subtotal</span>
                  <span className="text-sm font-medium">
                    ${orderSummary.subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Coupon Discount</span>
                  <span className="text-sm font-medium">
                    {orderSummary.couponDiscount}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">TAX</span>
                  <span className="text-sm font-medium">
                    ${orderSummary.tax.toFixed(2)}
                  </span>
                </div>
                <div className="border-t border-blue-200 pt-3 mt-3">
                  <div className="flex justify-between">
                    <span className="text-base font-bold text-gray-800">
                      Total
                    </span>
                    <span className="text-base font-bold text-gray-800">
                      ${orderSummary.total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='-mt-40'>
        <TopEducaton />
      </div>
    </div>
  );
};

export default CheckoutPage;
