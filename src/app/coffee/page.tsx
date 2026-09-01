import { Metadata } from "next";
import { COFFEE_RESUME_DATA } from "@/data/coffee-resume-data";
import { Resume } from "@/components/resume";

export const metadata: Metadata = {
  title: `${COFFEE_RESUME_DATA.name} | CV`,
  description: COFFEE_RESUME_DATA.summary,
  robots: { index: false, follow: false },
};

export default function CoffeePage() {
  return (
    <Resume
      data={COFFEE_RESUME_DATA}
      showProjects={false}
      forcePageBreak={false}
    />
  );
}
