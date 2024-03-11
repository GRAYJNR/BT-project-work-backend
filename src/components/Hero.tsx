export default function Hero() {
    return (
        <div className="flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl">
            <div className="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5">
                <div className="max-w-xl mb-6">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Brand new
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                        "Introducing Aroma Haven:
                        <br className="hidden md:block" />
                        {' '}
                        <span className="inline-block text-deep-purple-accent-400">
                            Your Gateway to Tranquility
                        </span>
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Elevate your space with the enchanting allure of our Aroma Haven fragrance diffuser.
                        Immerse yourself in a symphony of scents as delicate fragrances dance through the air,
                        transforming any room into a serene sanctuary. Designed with elegance and functionality in mind, our diffuser effortlessly blends into any décor while infusing your surroundings with blissful tranquility. Embrace moments of relaxation and rejuvenation with Aroma Haven,
                        your ultimate companion for a fragrant journey to serenity.
                    </p>
                </div>
                <div className="flex items-center">
                    <a
                        href="/"
                        className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                        No.1 Choice
                    </a>
                    <a
                        href="/"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                        Learn more...
                    </a>
                </div>
            </div>
            <div>
                <img
                    src="https://res.cloudinary.com/dezfi0l7r/image/upload/v1708325312/BT-images/DIFFRAGRANCE1_c2c9ml.webp"
                    className="object-cover object-top w-full h-64 mx-auto lg:h-auto xl:mr-24 md:max-w-sm"
                    alt=""
                />
            </div>
        </div>
    );
}