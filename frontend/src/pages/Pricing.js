import React from 'react';
import PageWrapper from '../components/PageWrapper';

const plans = [
  {
    name: 'Starter',
    price: '$49',
    description: 'Perfect for new small businesses.',
    features: [
      'LLC Formation',
      'Basic Compliance Alerts',
      'Email Support',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: '$99',
    description: 'Ideal for growing businesses.',
    features: [
      'Everything in Starter',
      'Operating Agreement',
      'EIN Registration',
      'Priority Support',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$199',
    description: 'Advanced features for large businesses.',
    features: [
      'Everything in Pro',
      'Custom Legal Documents',
      'Dedicated Account Manager',
      '24/7 Support',
    ],
    popular: false,
  },
];

const PricingPlans = () => {
  return (
    <PageWrapper>
<div className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Choose your plan
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-600">
          Simple, transparent pricing. No hidden fees.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-lg shadow-lg border ${
              plan.popular
                ? 'border-indigo-600 ring-2 ring-indigo-500'
                : 'border-gray-200'
            } p-6 bg-white flex flex-col justify-between transition hover:scale-[1.01] duration-200`}
          >
            {plan.popular && (
              <div className="mb-4">
                <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
              <p className="mt-2 text-sm sm:text-base text-gray-600">{plan.description}</p>
              <div className="mt-4 text-3xl font-bold text-gray-900">{plan.price}</div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mt-1 mr-2 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              className={`mt-8 w-full py-2 px-4 rounded-md text-white font-semibold transition ${
                plan.popular
                  ? 'bg-indigo-600 hover:bg-indigo-700'
                  : 'bg-gray-800 hover:bg-gray-900'
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>

    </PageWrapper>
      );
};

export default PricingPlans;
