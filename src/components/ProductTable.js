import ProductRow from './ProductRow';

// ProductTable receives products and searchText as props
function ProductTable({ products, searchText, showInStockOnly }) {
  // filter the products based on the searchText and checkbox state
  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchText.toLowerCase()) &&
      (!showInStockOnly || (showInStockOnly && product.inStock))
    );
  });

  // render the ProductTable component displaying filtered products
  return (
    <div>
      <table>
        <thead>
          <tr id="table-header">
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => {
            return <ProductRow key={product.id} product={product} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
