import { Card as ShadCard } from "./components/ui/card";

export const Card = ({
  title,
  cta,
  href,
}: {
  title: string;
  cta: string;
  href: string;
}) => {
  return (
    <ShadCard className="group mt-4 overflow-hidden rounded-lg border border-transparent bg-gradient-to-r from-secondary to-primary bg-origin-border text-[#6b7280]">
      <a target="_blank" rel="noopener noreferrer" href={href}>
        <div className="h-full bg-zinc-900 p-4">
          <p className="inline-block text-xl text-white">{title}</p>
          <div className="mt-4 text-xs group-hover:underline">{cta} →</div>
        </div>
      </a>
    </ShadCard>
  );
};
