import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { Resume } from "@/components/resume";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return <Resume data={RESUME_DATA} />;
}
