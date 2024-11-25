import React, { useState } from 'react';
import productData from "../products.json";  // Corrected the variable name here
import { Link } from 'react-router-dom';
import SelectedCategory from '../components/SelectedCategory';

const title = (
    <h2>Discover your favorite products from thousands of choices right here</h2>
);
const desc = "Explore our vast collection – the largest selection of products you’ll find anywhere!";

const bannerList = [
    { iconName: "icofont-users-alt-4", text: "1.5 Million Customers" },
    { iconName: "icofont-notification", text: "More than 2000 Merchants" },
    { iconName: "icofont-globe", text: "Buy Anything Online" },
];

const Banner = () => {
    const [searchInput, setSearchInput] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(productData);

    // Search functionality
    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        setSearchInput(searchTerm);

        // Filtering products based on search
        const filtered = productData.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();  // Prevent form from reloading the page
    };

    return (
        <div className="banner-section style-4">
            <div className="container">
                <div className="banner-content">
                    {title}
                    <form onSubmit={handleFormSubmit}>
                        <SelectedCategory select="all" />
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search your product"
                            value={searchInput}
                            onChange={handleSearch}
                        />
                        <button type="submit">
                            <i className="icofont-search"></i>
                        </button>
                    </form>
                    <p>{desc}</p>
                    <ul className="lab-ul">
                        {searchInput && filteredProducts.map((product, i) => (
                            <li key={i}>
                                <Link to={`/shop/${product.id}`}>
                                    {product.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Banner;
