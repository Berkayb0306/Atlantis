import { useState } from "react";

const PricingCards = () => {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      name: "FREE",
      price: { monthly: 0, yearly: 0 },
      features: [
        "Unlimited product updates",
        "Unlimited product updates",
        "Unlimited product updates",
      ],
      storage: "1GB Cloud storage",
      support: "Email and community support",
    },
    {
      name: "STANDARD",
      price: { monthly: 9.99, yearly: 7.49 },
      features: [
        "Unlimited product updates",
        "Unlimited product updates",
        "Unlimited product updates",
      ],
      storage: "1GB Cloud storage",
      support: "Email and community support",
    },
    {
      name: "PREMIUM",
      price: { monthly: 19.99, yearly: 14.99 },
      features: [
        "Unlimited product updates",
        "Unlimited product updates",
        "Unlimited product updates",
      ],
      storage: "1GB Cloud storage",
      support: "Email and community support",
    },
  ];

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">Pricing</h1>
      <p className="text-gray-600 text-center mb-6 max-w-md">
        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
      </p>

      {/* Toggle Switch */}
      <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
        <span className={`text-lg ${billing === "monthly" ? "font-bold" : "text-gray-400"}`}>
          Monthly
        </span>
        <div
          className="w-16 h-8 bg-gray-300 rounded-full flex items-center p-1 cursor-pointer"
          onClick={() => setBilling(billing === "monthly" ? "yearly" : "monthly")}
        >
          <div
            className={`w-6 h-6 bg-white rounded-full shadow-md transform duration-300 ${
              billing === "yearly" ? "translate-x-8" : ""
            }`}
          ></div>
        </div>
        <span className={`text-lg ${billing === "yearly" ? "font-bold" : "text-gray-400"}`}>
          Yearly
        </span>
        <span className="bg-blue-500 text-white px-3 py-1 text-sm rounded-lg">
          Save 25%
        </span>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`p-6 rounded-xl shadow-md ${
              index === 1 ? "bg-blue-900 text-white scale-105" : "bg-white"
            } border ${index === 1 ? "border-blue-900" : "border-gray-200"} w-full`}
          >
            <h2 className="text-xl font-bold text-center mb-2">{plan.name}</h2>
            <p className="text-center mb-4">Organize across all apps by hand</p>
            <p className="text-3xl font-bold text-center mb-2">
              ${plan.price[billing]}
              <span className="text-sm font-normal"> / Per Month</span>
            </p>

            {/* Features */}
            <ul className="mb-4">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  ✅ {feature}
                </li>
              ))}
              <li className="flex items-center gap-2 text-sm">✅ {plan.storage}</li>
              <li className="flex items-center gap-2 text-sm">⚪ {plan.support}</li>
            </ul>

            <button
              className={`w-full md:w-auto py-2 rounded-lg font-semibold ${
                index === 1
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
            >
              Try for free
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
