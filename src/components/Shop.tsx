
const products = [
    // {
    //   id: 1,
    //   name: 'Basic Tee',
    //   href: '#',
    //   imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    //   imageAlt: "Front of men's Basic Tee in black.",
    //   price: '$35',
    //   color: 'Black',
    // },
        {
          id: 1,
          name: 'DOUBLE DRAWN CURLS 30"',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/dezfi0l7r/image/upload/v1707336852/BT-images/WIG4_qo3owe.jpg',
          imageAlt: 'DOUBLE DRAWN CURLS 30"',
          price: 'GHS 2500',
          color: 'BLACK',
        },
        {
          id: 2,
          name: 'DOUBLE DRAWN CURLS 28"',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/dezfi0l7r/image/upload/v1707336852/BT-images/WIG3_rstjdg.jpg',
          imageAlt: 'DOUBLE DRAWN CURLS 28"',
          price: 'GHS 2000',
          color: 'BLACK',
        },
        {
          id: 3,
          name: 'DOUBLE DRAWN STRAIGHT 18"',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/dezfi0l7r/image/upload/v1707336852/BT-images/WIG2_awikkt.jpg',
          imageAlt: 'DOUBLE DRAWN STRAIGHT 18"',
          price: 'GHS 700',
          color: 'RED',
        },
        {
          id: 4,
          name: 'DOUBLE DRAWN STRAIGHT 18"',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/dezfi0l7r/image/upload/v1707336851/BT-images/WIG1_tnx7sl.jpg',
          imageAlt: 'DOUBLE DRAWN STRAIGHT 18"',
          price: '$25',
          color: 'BLACK',
        },
        {
          id: 5,
          name: 'DOUBLE DRAWN CURLS 24"',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/dezfi0l7r/image/upload/v1707336845/BT-images/MKUP_FRONTAL2_ako5eu.jpg',
          imageAlt: 'DOUBLE DRAWN CURLS 24"',
          price: 'GHS 1500',
          color: 'BRUNETTE',
        },
        {
          id: 6,
          name: 'BONE STRAIGHT 30"',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/dezfi0l7r/image/upload/v1707336845/BT-images/MKUP_ep7psi.jpg',
          imageAlt: 'BONE STRAIGHT 30"',
          price: '$14',
          color: 'BLONDE',
        },
        {
          id: 7,
          name: 'SHORT HAIR',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/dezfi0l7r/image/upload/v1707336818/BT-images/FRONTAL_dlaifa.jpg',
          imageAlt: 'SHORT HAIR',
          price: 'GHS 300',
          color: 'BLACK',
        },
        {
          id: 8,
          name: 'LADIES BAG',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/dezfi0l7r/image/upload/v1708325312/BT-images/BLKBAG1_pkzfis.avif',
          imageAlt: 'LADIES BAG',
          price: 'GHS 150',
          color: 'BLACK',
    },
    {
          id: 9,
          name: 'LADIES BAG',
          slug: 'ladies-bag',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/dezfi0l7r/image/upload/v1708325312/BT-images/WHTBAG_g9qkdf.jpg',
          imageAlt: 'LADIES BAG',
          price: 'GHS 150',
          color: 'Off-white',
    },
    {
          id: 10,
          name: 'LADIES BAG',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/dezfi0l7r/image/upload/v1708325312/BT-images/BLKBAG_pc1vjq.webp',
          imageAlt: 'LADIES BAG',
          price: 'GHS 150',
          color: 'BLACK',
    },
    {
        id: 11,
        name: 'LADIES BAG',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dezfi0l7r/image/upload/v1708325312/BT-images/BRNBAG_gkycqy.jpg',
        imageAlt: 'LADIES BAG',
        price: 'GHS 150',
        color: 'BROWN',
    },
    {
        id: 12,
        name: 'FRAGRANCE DIFFUSER',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dezfi0l7r/image/upload/v1708325312/BT-images/DIFFRAGRANCE_fk6aul.webp',
        imageAlt: 'Bottle of FRAGRANCE DIFFUSER',
        price: 'GHS 100',
        color: 'CLEAR',
    },
    {
        id: 13,
        name: 'FRAGRANCE DIFFUSER',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dezfi0l7r/image/upload/v1708325312/BT-images/DIFFRAGRANCE2_pejoo5.jpg',
        imageAlt: 'Bottle of FRAGRANCE DIFFUSER',
        price: 'GHS 100',
        color: 'COLORED',
    },
    {
        id: 14,
        name: 'FRAGRANCE DIFFUSER',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dezfi0l7r/image/upload/v1708325312/BT-images/DIFFRAGRANCE1_c2c9ml.webp',
        imageAlt: 'Bottle of FRAGRANCE DIFFUSER',
        price: 'GHS 120',
        color: 'CLEAR',
    },
    // {
    //     id: 10,
    //     name: 'Nourishing Body Lotion',
    //     href: '#',
    //     imageSrc: 'https://example.com/body-lotion.jpg',
    //     imageAlt: 'Bottle of nourishing body lotion',
    //     price: '$16',
    //     color: 'Green',
    // },
    
    // More products...
  ]
  
  export default function Shop() {
    return (
      <div className="bg-black">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-500">Welcome to Our Online Shop!</h1>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-500">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  