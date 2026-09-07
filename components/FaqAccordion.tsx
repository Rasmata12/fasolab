"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FaqItem = { q: string; a: string };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={f.q}
            className={`relative rounded-2xl border overflow-hidden transition-colors duration-200 ${
              isOpen ? "border-primary/25 bg-white shadow-sm" : "border-line bg-white hover:border-primary/20"
            }`}
          >
            <span
              className={`absolute left-0 top-0 bottom-0 w-[3px] transition-opacity duration-200 ${
                isOpen ? "bg-primary opacity-100" : "bg-primary opacity-25"
              }`}
            />
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
              aria-expanded={isOpen}
            >
              <span className="text-[15px] font-bold text-navy">{f.q}</span>
              <span
                className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200 ${
                  isOpen ? "bg-primary border-primary rotate-180" : "border-line"
                }`}
              >
                <ChevronDown className={`w-3.5 h-3.5 ${isOpen ? "text-white" : "text-muted"}`} />
              </span>
            </button>
            <div
              className="grid transition-all duration-300 ease-in-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="text-[14px] text-muted font-light leading-relaxed px-6 pb-5">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
