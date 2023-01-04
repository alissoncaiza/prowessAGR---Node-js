import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SellFilter from './SellFilter'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SellFilters = () => {

    
    const [seller, setSeller] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {

        const fetchData = async () => {

            const result = await axios.get("/api/users/all");
            console.log(result.data);
            setSeller(result.data);
        }

        fetchData();

    }, []);

    //search
    const keys = ["name", "email", "address"];

    const search = () => {
        return seller.filter((item) => keys.some((key) => item[key].toLowerCase().includes(query)));
    };

  return (
    <div className='sell-fill-row'>
        {seller.length === 0 ? (<div className='ctn-products'>
            <h3 className='info'>Actualmente no hay vendedores! 😓</h3>
            <img src="./assets/images/illustrations/no-data.svg" alt="" />
        </div>) : (
            <>
            
                <div className="sell-fill-col">
                    <input type="search" placeholder='Buscar...' onChange={(e) => setQuery(e.target.value)} />
                </div>
                <div className="sell-fill-col">
                    <SellFilter seller={search(SellFilter)} />
                </div>
            
            </>
        )}
      

    </div>
       
  )
}

export default SellFilters