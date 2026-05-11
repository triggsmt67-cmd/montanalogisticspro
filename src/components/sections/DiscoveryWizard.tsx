"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

const STEPS = [
  { id: "model", title: "Business Model" },
  { id: "volume", title: "Monthly Volume" },
  { id: "pain", title: "Primary Challenge" },
  { id: "contact", title: "Your Details" },
];

export function DiscoveryWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    model: "",
    volume: "",
    pain: "",
    name: "",
    email: "",
    company: "",
  });

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  return (
    <section className="py-24 bg-[#0B1120] relative border-t border-slate-800">
      <div className="container px-4 mx-auto max-w-3xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Scaling Today</h2>
          <p className="text-slate-400">Tell us about your business, and we'll build a custom prep solution.</p>
        </div>

        <Card className="glass-dark border-white/10 shadow-2xl rounded-3xl overflow-hidden">
          {/* Progress Bar */}
          {!isSubmitted && (
            <div className="w-full h-1 bg-slate-800">
              <motion.div 
                className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )}

          <CardContent className="p-8 md:p-12 min-h-[400px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Application Received</h3>
                  <p className="text-slate-400 max-w-md mx-auto">
                    Thanks for reaching out, {formData.name || "there"}. Our team will review your details and contact you within 24 hours to discuss your custom prep plan.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8 w-full"
                >
                  <div className="mb-8">
                    <span className="text-emerald-400 text-sm font-bold uppercase tracking-wider">Step {currentStep + 1} of {STEPS.length}</span>
                    <h3 className="text-2xl font-bold text-white mt-2">{STEPS[currentStep].title}</h3>
                  </div>

                  {currentStep === 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {["Online Arbitrage", "Retail Arbitrage", "Wholesale", "Private Label"].map((model) => (
                        <div 
                          key={model}
                          onClick={() => setFormData({ ...formData, model })}
                          className={`p-6 rounded-xl border cursor-pointer transition-all ${formData.model === model ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400' : 'border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-600 hover:bg-slate-800 shadow-sm hover:shadow'}`}
                        >
                          <span className="font-medium">{model}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {currentStep === 1 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {["< 1,000", "1,000 - 5,000", "5,000 - 10,000", "10,000+"].map((vol) => (
                        <div 
                          key={vol}
                          onClick={() => setFormData({ ...formData, volume: vol })}
                          className={`p-6 rounded-xl border cursor-pointer transition-all ${formData.volume === vol ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400' : 'border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-600 hover:bg-slate-800 shadow-sm hover:shadow'}`}
                        >
                          <span className="font-medium">{vol} units/mo</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {["High Taxes", "Slow Processing Times", "Inventory Errors", "Scaling Constraints"].map((pain) => (
                        <div 
                          key={pain}
                          onClick={() => setFormData({ ...formData, pain })}
                          className={`p-6 rounded-xl border cursor-pointer transition-all ${formData.pain === pain ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400' : 'border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-600 hover:bg-slate-800 shadow-sm hover:shadow'}`}
                        >
                          <span className="font-medium">{pain}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div className="grid gap-2">
                        <Label htmlFor="name" className="text-slate-300">Full Name</Label>
                        <Input 
                          id="name" 
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-slate-900/50 border-slate-800 text-white focus-visible:ring-emerald-500/20 shadow-sm h-11" 
                          placeholder="John Doe" 
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email" className="text-slate-300">Work Email</Label>
                        <Input 
                          id="email" 
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-slate-900/50 border-slate-800 text-white focus-visible:ring-emerald-500/20 shadow-sm h-11" 
                          placeholder="john@company.com" 
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="company" className="text-slate-300">Company Name</Label>
                        <Input 
                          id="company" 
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="bg-slate-900/50 border-slate-800 text-white focus-visible:ring-emerald-500/20 shadow-sm h-11" 
                          placeholder="Acme Sourcing" 
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between pt-8 mt-auto">
                    <Button 
                      variant="ghost" 
                      onClick={handleBack} 
                      disabled={currentStep === 0}
                      className={currentStep === 0 ? "opacity-0" : "text-slate-400 hover:text-white hover:bg-slate-800"}
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" /> Back
                    </Button>
                    <Button 
                      onClick={handleNext} 
                      className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold border-0 rounded-full px-8 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all"
                      disabled={
                        (currentStep === 0 && !formData.model) ||
                        (currentStep === 1 && !formData.volume) ||
                        (currentStep === 2 && !formData.pain) ||
                        (currentStep === 3 && (!formData.name || !formData.email))
                      }
                    >
                      {currentStep === STEPS.length - 1 ? "Submit Request" : "Continue"} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
