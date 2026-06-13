// Shared Tailwind Claymorphism Utility Classes
// These use Tailwind's arbitrary shadow and border classes to guarantee compilation and visual rendering.

export const CLAY_CLASSES = {
  // Cream/White Cards (Pure white background for high contrast against cream page)
  cardCream: "bg-white border-2 border-charcoal-brand/8 rounded-[32px] shadow-[8px_8px_20px_rgba(26,26,26,0.06),_inset_-6px_-6px_12px_rgba(26,26,26,0.05),_inset_6px_6px_12px_rgba(255,255,255,0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[12px_12px_24px_rgba(26,26,26,0.1),_inset_-6px_-6px_12px_rgba(26,26,26,0.06),_inset_6px_6px_12px_rgba(255,255,255,0.98)]",
  
  // Emerald Green Cards
  cardEmerald: "bg-[#062c21] text-[#fff6e8] border-2 border-[#062c21]/20 rounded-[32px] shadow-[8px_8px_20px_rgba(6,44,33,0.15),_inset_-8px_-8px_16px_rgba(0,0,0,0.35),_inset_8px_8px_16px_rgba(255,255,255,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[12px_12px_24px_rgba(6,44,33,0.22),_inset_-8px_-8px_16px_rgba(0,0,0,0.4),_inset_8px_8px_16px_rgba(255,255,255,0.3)]",
  
  // Mustard Yellow Cards
  cardMustard: "bg-[#f5b02e] text-[#1a1a1a] border-2 border-[#f5b02e]/20 rounded-[32px] shadow-[8px_8px_20px_rgba(245,176,46,0.18),_inset_-8px_-8px_16px_rgba(26,26,26,0.15),_inset_8px_8px_16px_rgba(255,255,255,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[12px_12px_24px_rgba(245,176,46,0.25),_inset_-8px_-8px_16px_rgba(26,26,26,0.2),_inset_8px_8px_16px_rgba(255,255,255,0.6)]",
  
  // Charcoal Buttons
  btnCharcoal: "bg-[#1a1a1a] text-[#fff6e8] border border-[#1a1a1a]/30 rounded-full shadow-[4px_4px_10px_rgba(26,26,26,0.15),_inset_-4px_-4px_8px_rgba(0,0,0,0.5),_inset_4px_4px_8px_rgba(255,255,255,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[6px_6px_14px_rgba(26,26,26,0.2),_inset_-4px_-4px_8px_rgba(0,0,0,0.6),_inset_4px_4px_8px_rgba(255,255,255,0.3)] active:translate-y-px active:shadow-[2px_2px_5px_rgba(26,26,26,0.1),_inset_-2px_-2px_5px_rgba(0,0,0,0.6),_inset_2px_2px_5px_rgba(255,255,255,0.15)]",
  
  // Mustard Yellow Buttons
  btnMustard: "bg-[#f5b02e] text-[#1a1a1a] border border-[#f5b02e]/30 rounded-full shadow-[4px_4px_10px_rgba(245,176,46,0.15),_inset_-4px_-4px_8px_rgba(26,26,26,0.15),_inset_4px_4px_8px_rgba(255,255,255,0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[6px_6px_14px_rgba(245,176,46,0.22),_inset_-4px_-4px_8px_rgba(26,26,26,0.2),_inset_4px_4px_8px_rgba(255,255,255,0.55)] active:translate-y-px active:shadow-[2px_2px_5px_rgba(245,176,46,0.1),_inset_-2px_-2px_5px_rgba(26,26,26,0.2),_inset_2px_2px_5px_rgba(255,255,255,0.4)]",
  
  // Emerald Green Buttons
  btnEmerald: "bg-[#062c21] text-[#fff6e8] border border-[#062c21]/30 rounded-full shadow-[4px_4px_10px_rgba(6,44,33,0.18),_inset_-4px_-4px_8px_rgba(0,0,0,0.4),_inset_4px_4px_8px_rgba(255,255,255,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[6px_6px_14px_rgba(6,44,33,0.25),_inset_-4px_-4px_8px_rgba(0,0,0,0.5),_inset_4px_4px_8px_rgba(255,255,255,0.3)] active:translate-y-px active:shadow-[2px_2px_5px_rgba(6,44,33,0.12),_inset_-2px_-2px_5px_rgba(0,0,0,0.5),_inset_2px_2px_5px_rgba(255,255,255,0.2)]",
  
  // Text Inputs
  input: "bg-white border-2 border-charcoal-brand/10 rounded-full shadow-[inset_2px_2px_5px_rgba(26,26,26,0.05),_inset_-2px_-2px_5px_rgba(255,255,255,0.9),_3px_3px_8px_rgba(26,26,26,0.04)] transition-all duration-200 focus:border-[#062c21] focus:shadow-[inset_2px_2px_5px_rgba(6,44,33,0.1),_inset_-2px_-2px_5px_rgba(255,255,255,0.95),_0_0_0_3px_rgba(6,44,33,0.15)]",

  // Textareas
  textarea: "bg-white border-2 border-charcoal-brand/10 rounded-2xl shadow-[inset_2px_2px_5px_rgba(26,26,26,0.05),_inset_-2px_-2px_5px_rgba(255,255,255,0.9),_3px_3px_8px_rgba(26,26,26,0.04)] transition-all duration-200 focus:border-[#062c21] focus:shadow-[inset_2px_2px_5px_rgba(6,44,33,0.1),_inset_-2px_-2px_5px_rgba(255,255,255,0.95),_0_0_0_3px_rgba(6,44,33,0.15)]",
};
