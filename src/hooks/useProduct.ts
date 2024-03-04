const useProduct = () => {
  const getProducts = async () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => json)
      .then((j) => j)
      .catch((err) => {
        console.log(err);
        return [];
      });
  };

  return {
    getProducts,
  };
};

export default useProduct;
