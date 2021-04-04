export default function FancyText({ children }) {
  return (
    <p
      className="relative italic leading-none"
      style={{ marginBottom: 8, marginRight: 8 }}
    >
      <span
        className="text-dark dark:text-light"
        style={{
          textShadow:
            "4px 4px 0px #3872FF, 8px 8px 0px RGBA(56, 114, 255, 0.5);",
        }}
      >
        {children}
      </span>
    </p>
  );
}
