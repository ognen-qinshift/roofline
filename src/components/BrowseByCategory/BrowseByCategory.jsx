import React from 'react';
import './BrowseByCategory.css';
import allProperties from '../../data/allPropertiesData.json';
import PropertyCard from '../Listings-hero/PropertyCard';

function BrowseByCategory() {
  // first 4
  const featuredProperties = allProperties.slice(0, 4);

  return (
    <section className="browse-categories container">
      <h2 className="featured-caption"><span>New</span> Arrivals</h2>
      <p className='subheadline-browse'>
        Discover the latest listings added to our collection.
        From cozy city flats to spacious countryside escapes: explore fresh opportunities tailored to your lifestyle.
      </p>

      {/* cards  */}
      <div className="listings-content-grid">
        {featuredProperties.map((prop, idx) => (
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

    </section>
  );
}

export default BrowseByCategory;