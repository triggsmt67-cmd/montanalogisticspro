"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";

const STEPS = [
  { id: "volume", title: "What's your monthly volume?" },
  { id: "friction", title: "What's your biggest prep headache?" },
  { id: "contact", title: "Where should we send your plan?" },
];

export function DiscoveryStepper() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    volume: "",
    friction: "",
    name: "",
    email: "",
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

  const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 32 : -32,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 32 : -32,
      opacity: 0
    })
  };

  const [direction, setDirection] = useState(1);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    if (newDirection === 1) handleNext();
    else handleBack();
  };

  return (
    <section className="py-32 relative overflow-hidden bg-[#000000] border-t border-white/[0.05]" id="intake-flow">
      {/* Colorful Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-radial-gradient z-0 opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      
      <div className="container px-4 mx-auto max-w-2xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-4 tracking-tight">
            Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Custom Prep Plan</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg">Tell us about your business, and we'll show you exactly how much time and money you can save.</p>
        </motion.div>

        <div className="linear-card overflow-hidden p-8 md:p-12 min-h-[450px] flex flex-col relative shadow-[0_0_40px_rgba(16,185,129,0.05)] border-white/[0.08]">
          {/* Colorful Progress Bar */}
          {!isSubmitted && (
            <div className="absolute top-0 left-0 w-full h-1 bg-white/[0.05]">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
                transition={{ duration: 0.6, ease: easeOut }}
              />
            </div>
          )}

          <AnimatePresence initial={false} custom={direction} mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: easeOut }}
                className="text-center space-y-6 m-auto"
              >
                <div className="w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.2)] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-medium text-white tracking-tight">Request Received</h3>
                <p className="text-zinc-400 max-w-sm mx-auto text-sm leading-relaxed">
                  Thanks, <span className="text-emerald-400 font-medium">{formData.name || "friend"}</span>. We're reviewing your info and will reach out with your custom plan shortly.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={currentStep}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "tween", ease: easeOut, duration: 0.4 },
                  opacity: { duration: 0.3 }
                }}
                className="space-y-8 w-full flex-1 flex flex-col"
              >
                <div className="mb-6 pb-6 flex flex-col items-center justify-center text-center">
                  <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-2">Step {currentStep + 1} of {STEPS.length}</span>
                  <h3 className="text-2xl font-medium text-white tracking-tight">{STEPS[currentStep].title}</h3>
                </div>

                <div className="flex-1">
                  {currentStep === 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {["< 1,000 Units", "1,000 - 5,000 Units", "5,000 - 15,000 Units", "15,000+ Units"].map((vol) => (
                        <div 
                          key={vol}
                          onClick={() => setFormData({ ...formData, volume: vol })}
                          className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 ease-out group ${
                            formData.volume === vol 
                              ? 'border-emerald-500 bg-emerald-500/10 shadow-[0_4px_24px_rgba(16,185,129,0.15)] text-emerald-400 scale-[1.02]' 
                              : 'border-white/[0.05] bg-white/[0.02] text-zinc-400 hover:border-emerald-500/40 hover:bg-emerald-500/5'
                          }`}
                        >
                          <span className={`text-sm font-medium ${formData.volume === vol ? 'text-emerald-400' : 'group-hover:text-emerald-300'}`}>{vol}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {currentStep === 1 && (
                    <div className="grid grid-cols-1 gap-3">
                      {["Paying Too Much Sales Tax", "Slow Prep & Shipping Times", "High Error Rates & Lost Units", "Running Out of Space"].map((friction) => (
                        <div 
                          key={friction}
                          onClick={() => setFormData({ ...formData, friction })}
                          className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 ease-out flex items-center gap-4 group ${
                            formData.friction === friction 
                              ? 'border-emerald-500 bg-emerald-500/10 shadow-[0_4px_24px_rgba(16,185,129,0.15)] scale-[1.02]' 
                              : 'border-white/[0.05] bg-white/[0.02] hover:border-emerald-500/40 hover:bg-emerald-500/5'
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                            formData.friction === friction ? 'border-emerald-400 bg-emerald-400' : 'border-zinc-600 group-hover:border-emerald-500/50'
                          }`}>
                            {formData.friction === friction && <div className="w-2 h-2 bg-black rounded-full" />}
                          </div>
                          <span className={`text-sm font-medium ${formData.friction === friction ? 'text-emerald-400' : 'text-zinc-400 group-hover:text-emerald-300'}`}>{friction}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-6 max-w-sm mx-auto w-full">
                      <div className="grid gap-2 input-focus-ring group">
                        <Label htmlFor="name" className="text-zinc-400 text-xs font-medium group-focus-within:text-cyan-400 transition-colors">First Name</Label>
                        <Input 
                          id="name" 
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-white/[0.03] border-white/[0.1] text-white focus-visible:ring-0 focus-visible:border-cyan-400 focus-visible:shadow-[0_0_15px_rgba(6,182,212,0.2)] rounded-xl h-14 px-5 shadow-inner transition-all duration-300" 
                          placeholder="John Doe" 
                        />
                      </div>
                      <div className="grid gap-2 input-focus-ring group">
                        <Label htmlFor="email" className="text-zinc-400 text-xs font-medium group-focus-within:text-cyan-400 transition-colors">Email Address</Label>
                        <Input 
                          id="email" 
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-white/[0.03] border-white/[0.1] text-white focus-visible:ring-0 focus-visible:border-cyan-400 focus-visible:shadow-[0_0_15px_rgba(6,182,212,0.2)] rounded-xl h-14 px-5 shadow-inner transition-all duration-300" 
                          placeholder="john@company.com" 
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-center pt-8 mt-6 border-t border-white/[0.05]">
                  <button 
                    onClick={() => paginate(-1)} 
                    disabled={currentStep === 0}
                    className={currentStep === 0 ? "opacity-0 pointer-events-none" : "linear-button-secondary h-12 px-5 text-sm flex items-center hover:bg-white/[0.1]"}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </button>
                  <button 
                    onClick={() => paginate(1)} 
                    className={`h-12 px-8 rounded-full text-sm font-bold flex items-center transition-all duration-300 ${
                      (currentStep === 0 && !formData.volume) || (currentStep === 1 && !formData.friction) || (currentStep === 2 && (!formData.name || !formData.email))
                      ? 'bg-white/[0.05] text-zinc-500 cursor-not-allowed pointer-events-none'
                      : currentStep === STEPS.length - 1
                        ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:scale-105'
                        : 'bg-white text-black hover:scale-105 hover:bg-zinc-200 shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                    }`}
                    disabled={
                      (currentStep === 0 && !formData.volume) ||
                      (currentStep === 1 && !formData.friction) ||
                      (currentStep === 2 && (!formData.name || !formData.email))
                    }
                  >
                    {currentStep === STEPS.length - 1 ? "Get My Plan" : "Continue"} <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
