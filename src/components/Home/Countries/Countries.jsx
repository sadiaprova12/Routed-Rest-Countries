// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Countries = () => {
    const countries = useLoaderData();
    return (
        <div>
            <h3>All Countries: {countries.length}</h3>
            <ul>
                {
                    // eslint-disable-next-line react/jsx-key
                    countries.map(country => <li>{country.name.common} <Link to={`/country/${country.cca3}`}>Details</Link></li>)
                }
            </ul>
        </div>
    );
};

export default Countries;