import Image from "./image";

export default function CoffeeItem({
  href,
  image,
  name,
  country,
  notes,
  properties,
}) {
  return (
    <a href={href}>
      {/* Card */}
      <div className="bg-white dark:bg-gray-900 p-6 shadow-lg hover:shadow-xl rounded-lg transition">
        <div className="mb-6">
          {/* Card Image */}
          <div className="relative w-full h-96 overflow-hidden rounded-lg hover:transform-gpu hover:scale-105 hover:-rotate-3 hover:shadow-2xl transition-all">
            {image ? (
              <Image
                alt={name}
                layout="fill"
                objectFit="cover"
                src={image.url}
              />
            ) : null}
          </div>
        </div>

        {/* Card Body */}
        <div className="text-dark dark:text-white">
          <div className="mb-2.5">
            {/* Card Subtitle */}
            <p className="font-semibold">{country}</p>
          </div>
          <div className="mb-2.5">
            {/* Card Title */}
            <h3 className="text-4xl font-bold">{name}</h3>
          </div>
          <div className="mb-8">
            {/* Card Badges */}
            <div className="flex flex-wrap">
              {notes.map((note) => (
                <div className="bg-secondary bg-opacity-10 dark:bg-primary dark:bg-opacity-100 rounded-lg px-2 mb-2 mr-2">
                  <p className="text-sm font-medium text-secondary dark:text-primary">
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-6">
            {/* Card Properties */}
            <div className="grid grid-cols-2 gap-4">
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
          </div>
          <div className="border-t border-gray-100 dark:border-gray-500 pt-4">
            {/* Card Action */}
            <button
              aria-hidden="true"
              role="button"
              className="bg-secondary focus:animate-pulse dark:bg-primary bg-opacity-10 text-secondary dark:text-primary py-2 px-3 rounded inline-flex items-center"
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
