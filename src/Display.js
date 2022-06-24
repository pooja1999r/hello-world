import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './display.css';
const URL = 'https://dummyjson.com/products';




export default function Display() {
    const [Data, setData] = useState([]);

    useEffect(() => {
        axios.get(URL)
            .then(data => setData(data.data.products))
            .catch(error => console.log(error));
    }, []);

    console.log(Data);
    return (
        <div className='bg-grey'>

            <div className='bg-white'>
                <h1>Items List</h1>
                <div className='items'>
                    {Data.map(item =>
                        <div key={item.id} className='d-flex'  >
                              <img src={item.images[0]} className="img" />
                            {item.title}
                        </div>)}
                </div>
            </div>
        </div>
    )
}
