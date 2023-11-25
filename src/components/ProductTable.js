import ProductRow from './ProductRow';

function ProductTable({ products }) {
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
          {products.map((product) => {
            return <ProductRow key={product.id} product={product} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
