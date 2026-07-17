import Image from "next/image";

type UseCaseShowcaseRowProps = {
  eyebrow: string;
  title: string;
  text: string;
  points: Array<{ label: string; text: string }>;
  contextLabel: string;
  resultLabel: string;
  wideSrc: string;
  wideAlt: string;
  closeSrc: string;
  closeAlt: string;
};

export function UseCaseShowcaseRow({
  eyebrow,
  title,
  text,
  points,
  contextLabel,
  resultLabel,
  wideSrc,
  wideAlt,
  closeSrc,
  closeAlt
}: UseCaseShowcaseRowProps) {
  return (
    <article className="usecase-row usecase-row-clarified">
      <div className="usecase-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h3 className="usecase-title">{title}</h3>
        <p className="section-copy">{text}</p>
        <div className="usecase-logic-list">
          {points.map((point, index) => (
            <article key={point.label} className="usecase-logic-item">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <strong>{point.label}</strong>
                <p>{point.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="usecase-board">
        <figure className="usecase-scene-frame">
          <Image
            src={wideSrc}
            alt={wideAlt}
            fill
            sizes="(max-width: 900px) 100vw, 58vw"
            className="usecase-image"
          />
          <figcaption className="usecase-scene-label">{contextLabel}</figcaption>
        </figure>

        <div className="usecase-board-lower">
          <figure className="usecase-support-frame">
            <Image
              src={closeSrc}
              alt={closeAlt}
              fill
              sizes="(max-width: 900px) 100vw, 28vw"
              className="usecase-image"
            />
          </figure>

          <div className="usecase-board-note">
            <span>{resultLabel}</span>
            <strong>{title}</strong>
          </div>
        </div>
      </div>
    </article>
  );
}
