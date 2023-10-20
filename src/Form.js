import { useState } from "react";


const FormComp = () => {

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        quantity: '',
        price: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
    };

    return (
        <div className="formComp">
            <h2>Product Information</h2>
            <form>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e)=>{handleChange(e)}}
                    required
                /><br /><br />

                <label htmlFor="description">Product Description:</label>
                <textarea
                    id="description"
                    name="description"
                    rows="4"
                    value={formData.description}
                    onChange={(e)=>{handleChange(e)}}
                    required
                ></textarea><br /><br />

                <label htmlFor="category">Product Category:</label>
                <input
                    type="text"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={(e)=>{handleChange(e)}}
                    required
                /><br /><br />

                <label htmlFor="quantity">Quantity:</label>
                <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={(e)=>{handleChange(e)}}
                    required
                /><br /><br />

                <label htmlFor="price">Price:</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    step="0.01"
                    value={formData.price}
                    onChange={(e)=>{handleChange(e)}}
                    required
                /><br /><br />

                <input 
                    type="submit" 
                    value="Submit"  
                    onClick={(e)=>{
                        console.log(formData); 
                        e.preventDefault();
                        }
                    }
                />
            </form>
      </div>
    )
}

export default FormComp;