import { cn } from "@/lib/utils";

type FeatureCardProps = {
  eyebrow?: string;
  title: string;
  text: string;
  className?: string;
};

export function FeatureCard({ eyebrow, title, text, className }: FeatureCardProps) {
  return (
    <article className={cn("feature-card", className)}>
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-6 text-white/68">{text}</p>
    </article>
  );
}
