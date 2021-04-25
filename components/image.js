export default function Image({ width, height, ...props }) {
  return <img {...props} style={{ width, height }} />;
}
