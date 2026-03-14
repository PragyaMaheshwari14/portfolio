import { DATA } from "@/data/resume";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/timeline";

export default function HackathonsSection() {
  return (
    <section id="hackathons" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          {/* Section header */}
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="z-10 rounded-xl px-4 py-1 mx-3 border bg-primary border-primary shadow-sm">
              <span className="text-primary-foreground text-sm font-medium">Hackathons</span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-transparent" />
          </div>

          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
              I like building things
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              During my time in university, I attended {DATA.hackathons.length}+
              hackathons. People from around the country would come together and
              build incredible things in 2-3 days. It was eye-opening to see the
              endless possibilities brought to life by a group of motivated and
              passionate individuals.
            </p>
          </div>
        </div>

        <Timeline>
          {DATA.hackathons.map((hackathon) => (
            <TimelineItem
              key={hackathon.title + hackathon.dates}
              className="w-full flex items-start justify-between gap-10"
            >
              <TimelineConnectItem className="flex items-start justify-center">
                {hackathon.image ? (
                  <img
                    src={hackathon.image}
                    alt={hackathon.title}
                    className="size-10 z-10 shrink-0 overflow-hidden p-1 flex-none border rounded-full shadow ring-2 ring-border bg-card object-contain"
                  />
                ) : (
                  <div className="size-10 z-10 shrink-0 flex-none border rounded-full shadow ring-2 ring-border bg-card" />
                )}
              </TimelineConnectItem>

              <div className="flex flex-1 flex-col justify-start gap-2 min-w-0">
                {hackathon.dates && (
                  <time className="text-xs text-muted-foreground">{hackathon.dates}</time>
                )}
                {hackathon.title && (
                  <h3 className="font-semibold leading-none text-foreground">{hackathon.title}</h3>
                )}
                {hackathon.location && (
                  <p className="text-sm text-muted-foreground">{hackathon.location}</p>
                )}
                {hackathon.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed wrap-break-word">
                    {hackathon.description}
                  </p>
                )}
              </div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}