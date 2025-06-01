
import React from 'react';
import { Zap, Shield, BarChart3, Globe, Brain, Rocket } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Leverage cutting-edge machine learning to gain unprecedented insights into your data and automate complex decisions."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience blazing-fast performance with our optimized infrastructure built for scale and reliability."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption, compliance certifications, and advanced threat protection."
    },
    {
      icon: BarChart3,
      title: "Real-time Dashboard",
      description: "Monitor your KPIs with beautiful, customizable dashboards that update in real-time across all devices."
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deploy worldwide with our distributed infrastructure ensuring low latency and high availability globally."
    },
    {
      icon: Rocket,
      title: "Rapid Deployment",
      description: "Get up and running in minutes with our streamlined onboarding and automatic scaling capabilities."
    }
  ];

  return (
    <section className="py-20 bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Modern Teams</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Everything you need to transform your business operations and stay ahead of the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="bg-gradient-to-br from-cyan-500 to-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
