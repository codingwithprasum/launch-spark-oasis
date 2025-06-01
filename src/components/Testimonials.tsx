
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechFlow Inc.",
      content: "This platform transformed our entire development workflow. We've seen a 300% increase in productivity and our deployment time went from hours to minutes.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder, DataVision",
      content: "The AI-powered analytics have given us insights we never thought possible. Our decision-making process is now data-driven and incredibly accurate.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Emily Watson",
      role: "VP Operations, ScaleUp Co.",
      content: "Implementation was seamless and the support team is exceptional. We're saving $50K monthly in operational costs while improving our service quality.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/6 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/6 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Industry Leaders</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            See what our customers are saying about their transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 relative"
            >
              <Quote className="h-8 w-8 text-cyan-400 mb-6" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 border-2 border-cyan-400"
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-slate-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
