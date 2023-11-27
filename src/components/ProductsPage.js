import { useState } from 'react';
import jsonData from '../data.json';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  // set initial state for products using jsonData
  const [products, setProducts] = useState(jsonData);
  // set initial state for searchText using empty string
  const [searchText, setSearchText] = useState('');
  // set initial state for in stock only checkbox to false
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  // function to handle changes in the search text
  const handleSearchChange = (text) => {
    // update the search text state
    setSearchText(text);
  };

  // function to handle toggling in stock only checkbox
  const handleCheckBoxChange = () => {
    // update the state to it's opposite each time the box is checked/unchecked
    setShowInStockOnly(!showInStockOnly);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        onSearchChange={handleSearchChange}
        onCheckBoxChange={handleCheckBoxChange}
      />
      <ProductTable
        products={products}
        searchText={searchText}
        showInStockOnly={showInStockOnly}
      />
    </div>
  );
}

export default ProductsPage;
