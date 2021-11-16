import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";


function ProductsList() {
    const [proudcts, setProducts] = useState([]);

    const getProducts = async () => {
        const response = await axios.get("http://localhost:5000/products/");
        //console.log(response)
        setProducts(response.data)
    }

    const deleteProduct = async (id) =>{
        await axios.delete(`http://localhost:5000/products/${id}`);
        getProducts();
    }
    
    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <Link to="/add" className="button is-primary mt-5">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        proudcts ? 
                            proudcts.map( (product, index) => (
                                <tr key={product.id}>
                                    <td>{index + 1}</td>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <Link to={`/edit/${product.id}`} className="button is-small is-info">Edit</Link>
                                        <button onClick={() => deleteProduct(product.id)} className="button is-small is-danger">Delete</button>
                                    </td>
                                </tr>
                            )) :
                            null
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductsList
