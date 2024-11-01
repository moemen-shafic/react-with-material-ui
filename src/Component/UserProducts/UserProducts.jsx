import React, { useContext, useEffect, useState } from 'react'
import {Product}  from '../Prouduct/Product'
import axios from 'axios'
import {allData} from '../DataContext/DataContext'



export const UserProducts = () => {
  const [pageNo, setPageNo]=useState(0)
  const {list, changeList} = useContext(allData);
 
  const getProducts = async (url)=>{
    try {
      const res = await axios.get (url);
      const response = res.data;
      changeList(response)
      
    }catch(error){
      console.log(error)
    
  }
  }
  useEffect (()=>{
    getProducts(`https://api.escuelajs.co/api/v1/products?offset=${pageNo * 12}&limit=12`);
  }, [pageNo, changeList]);
    return (
      <div className="m-4 m-auto row">
        {list.map((item) => (
          <Product key={item.id} obj={item} />
        ))}
    
        <div className="d-flex justify-content-between mt-4">
          <button 
            className="btn btn-primary" 
            onClick={() => setPageNo((prev) => Math.max(prev - 1, 0))}
            disabled={pageNo === 0}
          >
            Previous
          </button>
          <button 
            className="btn btn-primary" 
            onClick={() => setPageNo((prev) => prev + 1)}
            disabled={list.length < 12}  // disable if fewer than 10 items, indicating no more products
          >
            Next
          </button>
        </div>
      </div>
    );

}

