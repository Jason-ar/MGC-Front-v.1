import React from 'react';
import { Button } from 'react-bootstrap';
import { ShopCard } from '../../../src/00CostaOnline/Components/ShopCard';
import { ShopsArray } from '../../../src/00CostaOnline/Data/ShopsArray';

const ShopsContainer = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            
            <p></p>
                <div className="row">
                    {
                        ShopsArray.map(card => (
                            <div className="col-xl-3 col-lg-3 col-sm-4 col-* g-1" key={card.id}>
                                <ShopCard shopName={card.shopName} image={card.image} category={card.category} schedule={card.schedule} direction={card.direction} phone={card.phone} link={card.link} />
                            </div>
                        ))
                    }
                </div>
        </div>
    );
};

export { ShopsContainer };