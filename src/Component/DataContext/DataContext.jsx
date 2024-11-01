import React, { createContext, useState } from 'react'




const allData = createContext();

const DataContext = ({children}) => {
  const [list,setList]=useState([]);
  const [cart, setCart] = useState([]);
  const [cartNo, setCartNo] = useState(0);

  const changeList = (x)=> {
    setList(x);
  }
  const changeCart = (x) => {
    setCart(x)
    setCartNo(x.length)
}



  return (
    
      <allData.Provider value={{list,changeList,cart,changeCart,cartNo}}>
        {children}
      </allData.Provider>
    
  )
}

export {DataContext,allData}
