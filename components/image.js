import NextImage from "next/image";

export default function Image({ width, height, ...props }) {
  return <NextImage {...props} style={{ width, height }} />;
}
