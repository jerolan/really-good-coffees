import BaseHead from "next/head";

export default function Head({ title, description, logo }) {
  return (
    <BaseHead>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={logo} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content="@sediceyerom" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image:src" content={logo} />
    </BaseHead>
  );
}
