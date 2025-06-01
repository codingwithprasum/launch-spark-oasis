
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small teams getting started",
      features: [
        "Up to 5 team members",
        "10GB storage",
        "Basic analytics",
        "Email support",
        "Standard integrations"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 25 team members",
        "100GB storage",
        "Advanced analytics",
        "Priority support",
        "All integrations",
        "Custom workflows",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with specific needs",
      features: [
        "Unlimited team members",
        "Unlimited storage",
        "AI-powered insights",
        "24/7 dedicated support",
        "Custom integrations",
        "Advanced security",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Perfect Plan</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Flexible pricing that scales with your business. Start free, upgrade when you're ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20' 
                : 'border-slate-600/50 hover:border-purple-500/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-3 font-semibold rounded-xl transition-all duration-300 ${
                  plan.popular
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white shadow-lg hover:shadow-cyan-500/25'
                  : 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600 hover:border-purple-500'
                }`}
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">All plans include a 14-day free trial. No credit card required.</p>
          <div className="flex justify-center space-x-8 text-sm text-slate-500">
            <span>✓ Cancel anytime</span>
            <span>✓ 99.9% uptime SLA</span>
            <span>✓ Enterprise support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
