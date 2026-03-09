"use client";

import { useSurvey } from "./SurveyProvider";

export default function SurveyButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const openSurvey = useSurvey();
  return (
    <button onClick={openSurvey} className={className}>
      {children}
    </button>
  );
}
