function ProductRow({ product }) {
  const { category, price, inStock, name, id } = product;

  const className = inStock ? 'in-stock' : 'out-of-stock';

  return (
    <tr>
      <td className={className}>{name}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;
