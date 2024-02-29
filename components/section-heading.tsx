import React from "react";

type SectionPropType = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionPropType) {
  return (
    <h2 className="text-3xl font-semibold capitalize mb-8 text-center">
      {children}
    </h2>
  );
}
