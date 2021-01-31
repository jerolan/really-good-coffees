import Prismic from "@prismicio/client";

// Client method to query documents from the Prismic repo
export default function createClient(req) {
  return Prismic.client(
    process.env.PRISMIC_API_ENDPOINT,
    createClientOptions(req, process.env.PRISMIC_ACCESS_TOKEN)
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
