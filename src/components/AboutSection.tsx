import React from 'react';
import { Hammer, Award, Sparkles, CheckCircle2, ShieldCheck, TreePine } from 'lucide-react';
import { BusinessInfo } from '../businessConfig';

interface AboutSectionProps {
  info: BusinessInfo;
  onOpenQuoteModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ info, onOpenQuoteModal }) => {
  return (
    <section id="about" className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Images Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-stone-800 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&w=800&q=80"
                  alt="Artisan plane smoothing timber"
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                  <TreePine className="w-3.5 h-3.5" />
                  <span>Seasoned Timber</span>
                </div>
                <div className="text-stone-300 text-xs leading-relaxed">
                  Kiln-dried hardwoods rested in Nairobi climate to prevent seasonal shrinkage or warping.
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" />
                  <span>Master Joinery</span>
                </div>
                <div className="text-stone-300 text-xs leading-relaxed">
                  Deep mortise & tenon, dovetail joinery, and hardwood dowels — zero hollow nails or cheap staples.
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-stone-800 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
                  alt="Woodworking chisels and hand planes"
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Story Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Hammer className="w-3.5 h-3.5" />
              <span>The Brian Furniture Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-white leading-tight">
              Crafted With Skill. Built To Last Generations.
            </h2>

            <p className="text-stone-300 text-base leading-relaxed">
              At <strong className="text-amber-400">{info.businessName}</strong>, we reject disposable flat-pack mass production. Every dining suite, sofa, desk, and bed is built piece-by-piece in our Nairobi workshop by experienced carpenters who have practiced traditional timber craftsmanship for decades.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-stone-100">Hand-Selected Genuine Timber</h3>
                  <p className="text-xs text-stone-400 mt-0.5">
                    We personally inspect every slab of African Mahogany, Mvule, Teak, and Wild Acacia for optimal grain figure and structural soundness.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-stone-100">Bespoke Architectural Customization</h3>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Have an awkward living room nook, or need an 8-seater dining table sized precisely to 2.4 meters? We tailor any piece to your home's exact floorplan.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-stone-100">Multi-Stage Hand Polishing</h3>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Silky-smooth finishes using moisture-resistant polyurethane or natural plant-based beeswax oils that enhance wood grain while protecting against spills.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold text-xs sm:text-sm transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>Commission A Custom Piece</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
