import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/products/action";

const ProductsContainer = () => {
  const { products, loading } = useSelector((state) => ({ ...state.data }));

  const dispatch = useDispatch();

//   console.log(products.data)

  return (
    <div>
      <h1>hii</h1>
      <button onClick={() => dispatch(fetchProducts())}>fetch product</button>
      {!loading ? (
        products.map((product) => <h1>{product.title}</h1>)
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
};

export default ProductsContainer;
