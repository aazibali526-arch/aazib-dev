import { techSection } from "@/data/tech";

const REPEATS = 3;

const slot =
  "flex h-7.5 w-26 shrink-0 items-center justify-center sm:h-9.5 sm:w-32.5 lg:h-11 lg:w-40";

const label =
  "font-mono text-sm font-medium whitespace-nowrap text-white opacity-75 transition-[opacity,transform] duration-300 ease-[ease] hover:scale-112 hover:opacity-100 sm:text-base";

export function TechCarousel() {
  const { label: sectionLabel, items } = techSection;
  const repeated = Array.from({ length: REPEATS }, (_, copy) =>
    items.map((name) => ({ name, copy })),
  ).flat();

  return (
    <section aria-label={sectionLabel} className="bg-ink-950">
      <div className="marquee-viewport overflow-hidden py-2 sm:py-3">
        <div className="marquee-track">
          <ul className="flex shrink-0">
            {repeated.map(({ name, copy }, index) => (
              <li
                key={`${name}-${index}`}
                aria-hidden={copy > 0 ? true : undefined}
                className={slot}
              >
                <span className={label}>{name}</span>
              </li>
            ))}
          </ul>
          <ul aria-hidden="true" className="marquee-copy flex shrink-0">
            {repeated.map(({ name }, index) => (
              <li key={`${name}-${index}`} className={slot}>
                <span className={label}>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}