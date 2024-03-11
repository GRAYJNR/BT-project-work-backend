import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/shop/ProductCard";



interface IProductProps {
  id: number,
  title: string,
  price: string,
  category: string,
  description: string,
  image: string
}


function Shop() {

  const [products, setProducts] = useState<IProductProps[]>([]);


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
  }, [])



  return (

    <>

      <Hero />

      <div className="flex flex-wrap gap-5 justify-center p-20 bg-gray-50 my-5">

        {
          !products || products.length < 1 ? 
          <p className="text-2xl text-gray-300">Store is closed, {"we'll"} repopen soon.</p>
          :
            <>
              
              {
                products.map(product => <ProductCard product={product} key={product.id} />)
              }
            </>
        }

      </div>
    </>
  );
}

export default Shop;