import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { allData } from '../DataContext/DataContext'

export const Product = (props) => {
    const navTo = useNavigate()
    const { cart, changeCart } = useContext(allData)

    const viewDetails = (id) => {
        navTo(`/Products/${id}`)
    }

    const addToCart = (obj) => {
        const i = cart.findIndex((item) => item.id === obj.id)
        if (i > -1) {
            const arr = cart ? [...cart] : [];
            // const arr= [...cart]
            arr[i].count += 1
            changeCart(arr)
            console.log(arr)
        } else {
            obj.count = 1
            const arr = cart ? [...cart] : [];
            // const arr= [...cart]
            arr.push(obj)
            changeCart(arr)
            console.log(arr)

        }
    }

    return (
        <div className='col-md-6 col-lg-4 col-xl-3 p-3 '>
            <div className="card p-1"  >
                <img src={props.obj.images?.[0] || 'default-image.jpg'} className="card-img-top" alt={props.obj.title} />
                <div className="card-body text-center" >
                    <h5 className="card-title text-start" style={{ height: '50px' }}>{props.obj.title}</h5>
                    {props.type === "cart" &&
                        <h5 className="card-title text-start" style={{ height: '50px' }}>Count : {props.obj.count}</h5>
                    }
                    <p className="card-text text-start" style={{ height: '120px' }}>{props.obj.description.slice(0, 150)} ...</p>
                    <input type='button' value='View Details' className="btn btn-primary mb-2 m-1"
                        onClick={() => { viewDetails(props.obj.id) }} />
                    <input type='button' value='Add to Cart' className="btn btn-primary mb-2 m-1"
                        onClick={() => { addToCart(props.obj) }} />
                </div>
            </div>
        </div>
    )
}
