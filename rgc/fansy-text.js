export default function FancyText({ children }) {
  return (
    <div
      className="relative italic"
      style={{ marginBottom: 4, marginRight: 8 }}
    >
      {children}
      <span className="absolute inset-0 text-dark dark:text-light z-50">
        {children}
      </span>
      <span
        className="absolute inset-0 text-secondary"
        style={{ left: 4, top: 2 }}
      >
        {children}
      </span>
      <span
        className="absolute inset-0 text-secondary opacity-50"
        style={{ left: 8, top: 4 }}
      >
        {children}
      </span>
    </div>
  );
}
