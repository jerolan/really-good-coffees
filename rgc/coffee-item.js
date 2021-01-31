import Image from "./image";

export default function GalleryItem({
  href,
  image,
  name,
  country,
  notes,
  properties,
}) {
  return (
    <a href={href}>
      <div className="transition-all p-6 shadow-lg hover:shadow-2xl leading-none rounded-lg  dark:bg-gray-900">
        <div className="w-full h-96 mb-6 bg-secondary overflow-hidden rounded-lg">
          {image ? (
            <Image
              height={image.height}
              width={image.width}
              src={image.url}
              alt={name}
            />
          ) : null}
        </div>
        <div>
          <div className="mb-2.5">
            <p className="font-semibold dark:text-white">{country}</p>
          </div>
          <div className="mb-2.5">
            <h3 className="text-4xl font-bold text-dark dark:text-white">
              {name}
            </h3>
          </div>
          <div className="mb-8">
            <div className="flex flex-wrap">
              {notes.map((note) => (
                <div className="rounded-lg bg-secondary-dark dark:bg-primary bg-opacity-10 dark:bg-opacity-100 px-2 mb-2 mr-2">
                  <p className="text-sm font-medium text-secondary-dark dark:text-primary-dark">
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {properties.map((property) => (
              <div>
                <p className="text-sm dark:text-white">
                  <span className="text-gray-500 dark:text-white">
                    {property.label}:
                  </span>{" "}
                  {property.value}
                </p>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-100 dark:border-gray-500 pt-4">
            <button
              aria-hidden="true"
              role="button"
              className="transition-all bg-secondary-dark dark:bg-primary bg-opacity-10 text-secondary-dark dark:text-primary-dark py-2 px-3 rounded inline-flex items-center"
            >
              Revisa en la tienda
              <svg
                className="fill-current w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </a>
  );
}
