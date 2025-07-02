import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./listingsContent.css";
import allProperties from "../../data/allPropertiesData.js";
import PropertyCard from "./PropertyCard";

const categories = [
    { label: "Apartments", type: "Apartment", icon: "apartment" },
    { label: "Houses", type: "House", icon: "home" },
    { label: "Villas", type: "Villa", icon: "villa" },
    { label: "Offices", type: "Office", icon: "business" },
];

const INITIAL_LIMIT = 8;
const LOAD_MORE_COUNT = 8;

function ListingsContent() {
    // const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState(null);
    const [priceSort, setPriceSort] = useState("");
    const [dealType, setDealType] = useState("");
    const [visibleCount, setVisibleCount] = useState(INITIAL_LIMIT);

    // search 
    const location = useLocation();
    const initialParams = new URLSearchParams(location.search);
    const initialSearch = initialParams.get("search") || "";
    const [search, setSearch] = useState(initialSearch);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        setSearch(params.get("search") || "");
    }, [location.search]);

    // filter
    let filteredProperties = allProperties.filter((prop) => {
        const matchesCategory = activeCategory
            ? prop.type === activeCategory
            : true;
        const matchesSearch =
            (prop.title || "").toLowerCase().includes(search.toLowerCase()) ||
            (prop.location || "").toLowerCase().includes(search.toLowerCase());
        const matchesDeal = dealType
            ? prop.tag === dealType
            : true;
        return matchesCategory && matchesSearch && matchesDeal;
    });

    // sort
    if (priceSort === "highest") {
        filteredProperties = [...filteredProperties].sort((a, b) => (b.price || 0) - (a.price || 0));
    } else if (priceSort === "lowest") {
        filteredProperties = [...filteredProperties].sort((a, b) => (a.price || 0) - (b.price || 0));
    }

    // slice visible
    const visibleProperties = filteredProperties.slice(0, visibleCount);

    return (
        <div className="listings-content">
            <div className="container">


                {/* controls */}
                <div className="search-controls">


                    {/* -> search */}
                    <form className="category-btn search-form"
                        onSubmit={e => e.preventDefault()}>
                        <input
                            className="search-bar"
                            type="search"
                            placeholder="Search by title or location..."
                            value={search}
                            onChange={e => setSearch(e.target.value)} />

                        <button
                            className="form-search-ico category-btn"
                            type="submit">
                            <span className="material-icons-outlined">search</span>
                        </button>
                    </form>

                    {/* -> categories */}
                    <div className="sort-wrap">
                        <span>Categories:</span>
                        {categories.map(cat => (
                            <button
                                key={cat.type}
                                className={`category-btn${activeCategory === cat.type ? " active" : ""}`}
                                onClick={() => setActiveCategory(activeCategory === cat.type ? null : cat.type)}
                                type="button"
                            >
                                <div className="category-icon material-icons-outlined">{cat.icon}</div>
                                <div className="category-name">{cat.label}</div>
                            </button>
                        ))}
                    </div>

                    {/* -> sort */}
                    <div className="sort-wrap">
                        <span>Sort&nbsp;by&nbsp;price:</span>
                        <button
                            type="button"
                            className={`category-btn ${priceSort === "highest" ? " active" : ""}`}
                            onClick={() => setPriceSort(priceSort === "highest" ? "" : "highest")}>
                            Highest
                        </button>
                        <button
                            type="button"
                            className={`category-btn ${priceSort === "lowest" ? " active" : ""}`}
                            onClick={() => setPriceSort(priceSort === "lowest" ? "" : "lowest")}>
                            Lowest
                        </button>
                    </div>

                    {/* -> deal type */}
                    <div className="sort-wrap">
                        <span>Deal&nbsp;type:</span>
                        <button
                            type="button"
                            className={`category-btn ${dealType === "For Sale" ? " active" : ""}`}
                            onClick={() => setDealType(dealType === "For Sale" ? "" : "For Sale")}>
                            For&nbsp;Sale
                        </button>
                        <button
                            type="button"
                            className={`category-btn ${dealType === "For Rent" ? " active" : ""}`}
                            onClick={() => setDealType(dealType === "For Rent" ? "" : "For Rent")}>
                            For&nbsp;Rent
                        </button>
                    </div>
                </div>

                {/* ///////// content ////////////*/}
                <div className="listings-content">
                    <div className="listings-content-grid">
                        {visibleProperties.length === 0 && (
                            <div style={{ gridColumn: "1/-1", textAlign: "center", color: "#888", padding: "2rem" }}>
                                No properties found.
                            </div>
                        )}
                        {visibleProperties.map((prop, idx) => (
                            <PropertyCard
                                key={idx}
                                img={prop.image}
                                title={prop.title}
                                location={prop.location}
                                tag={prop.tag}
                                rooms={prop.rooms}
                                beds={prop.beds}
                                baths={prop.baths}
                                area={prop.square_meters}
                                price={prop.price}
                                style={{
                                    animationDelay: `${(idx % 4) * 0.1}s`
                                }}
                            />
                        ))}
                    </div>

                    {/* SHOW MORE*/}
                    {visibleCount < filteredProperties.length && (
                        <div style={{ textAlign: "center", margin: "2rem 0" }}>
                            <button
                                className="link btn btn-orange show-more-btn"
                                onClick={() => setVisibleCount(v => v + LOAD_MORE_COUNT)}
                            >
                                Show More
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default ListingsContent;