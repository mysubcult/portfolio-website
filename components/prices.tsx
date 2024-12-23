// /components/prices.tsx

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { priceData } from "@/lib/data";
import Price from "./price";
import { useSectionInView } from "@/lib/hooks";

export default function Prices() {
  const { ref } = useSectionInView("Цены", 0.5);

  return (
    <section ref={ref} id="prices" className="scroll-mt-28 mb-28">
      <SectionHeading>💰 Цены</SectionHeading>
      <div>
        {priceData.map((price, index) => (
          <React.Fragment key={index}>
            <Price {...price} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
