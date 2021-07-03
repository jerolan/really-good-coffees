import Prismic from "@prismicio/client";

// createClient creates a new Prismic client
export default function createClient(req) {
  return Prismic.client(
    process.env.NEXT_PUBLIC_PRISMIC_API_ENDPOINT,
    createClientOptions(req, process.env.NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN)
  );
}

function createClientOptions(req, accessToken) {
  const reqOption = req ? { req } : {};
  const accessTokenOption = accessToken ? { accessToken: accessToken } : {};

  return {
    ...reqOption,
    ...accessTokenOption,
  };
}
