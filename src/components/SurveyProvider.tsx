"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import SurveyModal from "./SurveyModal";

const SurveyContext = createContext<() => void>(() => {});

export function useSurvey() {
  return useContext(SurveyContext);
}

export default function SurveyProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openSurvey = useCallback(() => setOpen(true), []);

  return (
    <SurveyContext value={openSurvey}>
      {children}
      <SurveyModal open={open} onClose={() => setOpen(false)} />
    </SurveyContext>
  );
}
