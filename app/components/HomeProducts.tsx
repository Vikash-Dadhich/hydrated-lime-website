"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import products from "../data/products";

export default function HomeProducts() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="products" className="bg-white py-24 px-6">
      <div className="max-w-[72rem] mx-auto">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-slate-400 mb-3">
              Product Range
            </p>
            <h2
              className="font-bold text-slate-900 leading-tight"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", letterSpacing: "-0.025em" }}
            >
              Four Products.
              <br />Built for Industry.
            </h2>
          </div>
          <Link
            href="/products"
            className="shrink-0 inline-flex items-center gap-2 text-[0.875rem] font-medium text-slate-500 hover:text-slate-900 transition-colors duration-200 no-underline group"
          >
            View all products
            <svg
              width="16" height="16" viewBox="0 0 24 24" fill="none"
              className="group-hover:translate-x-0.5 transition-transform duration-200"
            >
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </Link>
        </div>

        {/* 2 × 2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((product, i) => (
            <Link
              key={product.id}
              href={`/products#${product.id}`}
              className="group relative overflow-hidden rounded-2xl no-underline"
              style={{ aspectRatio: i < 2 ? "4/3" : "16/9" }}
              onMouseEnter={() => setHovered(product.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Product image */}
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                style={{
                  objectFit: "cover",
                  transition: "transform 600ms cubic-bezier(0.16,1,0.3,1)",
                  transform: hovered === product.id ? "scale(1.06)" : "scale(1)",
                }}
              />

              {/* Base gradient overlay — always visible */}
              <div
                className="absolute inset-0 transition-opacity duration-400"
                style={{
                  background: "linear-gradient(160deg, rgba(15,23,42,0.2) 0%, rgba(15,23,42,0.7) 100%)",
                }}
              />

              {/* Hover overlay — deeper */}
              <div
                className="absolute inset-0 transition-opacity duration-400"
                style={{
                  background: "linear-gradient(160deg, rgba(15,23,42,0.4) 0%, rgba(15,23,42,0.85) 100%)",
                  opacity: hovered === product.id ? 1 : 0,
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-7">
                {/* Top: product number */}
                <div className="flex items-center justify-between">
                  <span className="text-[0.6875rem] font-bold tracking-[0.15em] uppercase text-white/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* Arrow — appears on hover */}
                  <div
                    className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300"
                    style={{
                      opacity: hovered === product.id ? 1 : 0,
                      transform: hovered === product.id ? "scale(1) translateX(0)" : "scale(0.8) translateX(8px)",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>

                {/* Bottom: product name + tagline */}
                <div>
                  <h3
                    className="font-bold text-white leading-tight mb-2"
                    style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)", letterSpacing: "-0.015em" }}
                  >
                    {product.name}
                  </h3>
                  <p
                    className="text-white/65 leading-snug transition-all duration-300"
                    style={{
                      fontSize: "0.875rem",
                      maxHeight: hovered === product.id ? "4rem" : "0",
                      opacity: hovered === product.id ? 1 : 0,
                      overflow: "hidden",
                    }}
                  >
                    {product.tagline}
                  </p>
                  <p
                    className="text-[0.75rem] text-white/50 mt-2 transition-opacity duration-300"
                    style={{ opacity: hovered === product.id ? 1 : 0.6 }}
                  >
                    View details →
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
