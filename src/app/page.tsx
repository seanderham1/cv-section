import { Metadata } from "next";
import { RESUME_DATA, RESUME_SUMMARY_TEXT } from "@/data/resume-data";
import { Resume } from "@/components/resume";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_SUMMARY_TEXT,
};

export default function Page() {
  return <Resume data={RESUME_DATA} showProjects={false} forcePageBreak={false} />;
}
