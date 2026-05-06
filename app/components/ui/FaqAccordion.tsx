"use client";

import { useState, useRef, useEffect } from "react";
import type { FaqItem } from "../../data/faq";

function AccordionItem({
  item,
  index,
  open,
  onToggle,
}: {
  item: FaqItem;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (!bodyRef.current) return;
    setHeight(open ? bodyRef.current.scrollHeight : 0);
  }, [open]);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 py-5 text-left bg-transparent border-0 cursor-pointer group"
      >
        <span className="flex items-center gap-3 min-w-0">
          <span className="text-[0.625rem] font-bold text-slate-400 tabular-nums shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-[0.9375rem] font-semibold text-slate-900 group-hover:text-slate-700 transition-colors duration-150 leading-snug">
            {item.question}
          </span>
        </span>
        <span
          className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-slate-200 flex items-center justify-center shrink-0 transition-all duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <div
        style={{
          height: `${height}px`,
          overflow: "hidden",
          transition: "height 350ms cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div ref={bodyRef} className="pb-5 pl-7">
          <p className="text-[0.9375rem] text-slate-500 leading-[1.85] m-0">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden divide-y-0 px-2">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          item={item}
          index={i}
          open={openIndex === i}
          onToggle={() => toggle(i)}
        />
      ))}
    </div>
  );
}
