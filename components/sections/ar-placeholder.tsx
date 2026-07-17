interface ArPlaceholderProps {
  eyebrow: string;
  title: string;
  text: string;
}

export function ArPlaceholder({ eyebrow, title, text }: ArPlaceholderProps) {
  return (
    <section className="section-shell ar-placeholder-section">
      <div className="content-shell">
        <div className="ar-placeholder-card">
          <span className="ar-badge">✦ {eyebrow}</span>
          <div className="ar-placeholder-content">
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
