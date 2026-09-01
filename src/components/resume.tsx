import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { IframeResizer } from "@/components/iframe-resizer";

type Role = {
  title: string;
  start: string;
  end?: string | null;
  description?: string;
};

type WorkBase = {
  company: string;
  link: string;
  badges: readonly string[];
  logo?: unknown;
};

type WorkEntry = (WorkBase & { roles: readonly Role[] }) | (WorkBase & Role);

export type ResumeData = {
  name: string;
  initials?: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  avatarUrl: string;
  personalWebsiteUrl?: string;
  contact: {
    email?: string;
    tel?: string;
    social: readonly {
      name: string;
      url: string;
      icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    }[];
  };
  education: readonly {
    school: string;
    degree: string;
    start: string;
    end: string;
  }[];
  work: readonly WorkEntry[];
  skills: readonly string[];
  projects: readonly {
    title: string;
    techStack: readonly string[];
    description: string;
    link?: { label: string; href: string };
  }[];
};

interface ResumeProps {
  data: ResumeData;
  /** Render the Projects section. */
  showProjects?: boolean;
  /** Force Education onwards onto a second page when printing. */
  forcePageBreak?: boolean;
}

export function Resume({
  data,
  showProjects = true,
  forcePageBreak = true,
}: ResumeProps) {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-0 md:p-16">
      <IframeResizer />
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:max-w-none print:space-y-3">
        <div className="flex items-center justify-between print:items-start print:gap-5">
          <div className="min-w-0 flex-1 space-y-1.5 print:space-y-1">
            <h1 className="text-2xl font-bold print:text-2xl print:leading-tight">{data.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground print:max-w-[calc(100%-0.5rem)] print:pr-4 print:text-sm print:leading-snug">
              {data.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={data.locationLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlobeIcon className="size-3" />
                {data.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {data.contact.email ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${data.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {data.contact.tel ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${data.contact.tel}`}>
                    <PhoneIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {data.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex print:text-sm">
              {data.contact.email ? (
                <a href={`mailto:${data.contact.email}`}>
                  <span className="underline">{data.contact.email}</span>
                </a>
              ) : null}
              {data.contact.tel ? (
                <a href={`tel:${data.contact.tel}`}>
                  <span className="underline">{data.contact.tel}</span>
                </a>
              ) : null}
            </div>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={data.avatarUrl}
            alt={data.name}
            width={112}
            height={112}
            className="size-28 shrink-0 rounded-xl object-cover print:size-24"
          />
        </div>
        <Section className="print:gap-y-1.5">
          <h2 className="text-xl font-bold print:text-lg">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground print:text-sm print:leading-snug">
            {data.summary}
          </p>
        </Section>
        <Section id="cv-work" className="print:gap-y-2">
          <h2 className="text-xl font-bold print:text-lg">Work Experience</h2>
          {data.work.map((work) => {
            const hasMultipleRoles = "roles" in work;
            const roles: Role[] = hasMultipleRoles
              ? [...work.roles]
              : [
                  {
                    title: work.title,
                    start: work.start,
                    end: work.end,
                    description: work.description,
                  },
                ];

            return (
              <Card key={work.company} className="cv-print-card print:shadow-none">
                <CardHeader className="space-y-3 print:space-y-2">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a
                        className="hover:underline"
                        href={work.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {work.company}
                      </a>
                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs print:text-[10px] print:leading-tight print:px-1 print:py-0.5"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    {!hasMultipleRoles ? (
                      <div className="text-sm tabular-nums text-gray-500">
                        {roles[0].start} - {roles[0].end ?? "Present"}
                      </div>
                    ) : null}
                  </div>

                  {roles.map((role, index) => (
                    <div
                      key={`${role.title}-${role.start}`}
                      className={index > 0 ? "border-t border-border/60 pt-3 print:border-t print:pt-2" : undefined}
                    >
                      <div className="flex items-center justify-between gap-x-2">
                        <h4 className="font-mono text-sm leading-none">
                          {role.title}
                        </h4>
                        {hasMultipleRoles ? (
                          <div className="text-sm tabular-nums text-gray-500">
                            {role.start} - {role.end ?? "Present"}
                          </div>
                        ) : null}
                      </div>
                      {role.description ? (
                        <CardContent className="mt-2 p-0 print:mt-1.5 print:text-sm print:leading-snug">
                          {role.description}
                        </CardContent>
                      ) : null}
                    </div>
                  ))}
                </CardHeader>
              </Card>
            );
          })}
        </Section>
        <div
          id={forcePageBreak ? "cv-page-2" : undefined}
          className="space-y-8 print:space-y-3"
        >
          <Section className="print:gap-y-1.5">
            <h2 className="text-xl font-bold print:text-lg">Education</h2>
            {data.education.map((education) => {
              return (
                <Card key={education.school} className="cv-print-card print:shadow-none">
                  <CardHeader className="print:p-0">
                    <div className="flex items-center justify-between gap-x-2 text-base">
                      <h3 className="font-semibold leading-none">
                        {education.school}
                      </h3>
                      <div className="text-sm tabular-nums text-gray-500">
                        {education.start} - {education.end}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="mt-2 p-0 print:mt-1 print:text-sm">
                    {education.degree}
                  </CardContent>
                </Card>
              );
            })}
          </Section>
          <Section id="cv-skills" className="print:gap-y-1.5">
            <h2 className="text-xl font-bold print:text-lg">Skills</h2>
            <div className="flex flex-wrap gap-1 print:gap-1">
              {data.skills.map((skill) => {
                return (
                  <Badge className="print:px-1.5 print:py-0 print:text-[10px]" key={skill}>
                    {skill}
                  </Badge>
                );
              })}
            </div>
          </Section>

          {showProjects ? (
            <Section id="cv-projects" className="print:gap-y-1.5">
              <h2 className="text-xl font-bold print:text-lg">Projects</h2>
              <div className="-mx-3 grid grid-cols-1 gap-3 print:mx-0 print:grid-cols-3 print:gap-1.5 md:grid-cols-2 lg:grid-cols-3">
                {data.projects.map((project) => {
                  return (
                    <ProjectCard
                      key={project.title}
                      title={project.title}
                      description={project.description}
                      tags={project.techStack}
                      link={project.link?.href}
                    />
                  );
                })}
              </div>
            </Section>
          ) : null}
        </div>
      </section>
    </main>
  );
}
