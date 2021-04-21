import React, { useState, useCallback } from "react";
import { useMutation } from '@apollo/client'
import { useHistory } from 'react-router'

import { CREATE_PRODUCT_MUTATION } from '../../../graphql/createProductMutation'

import { isNumeric } from '../../../utils/isNumeric'

const CreateProduct = () => {
  const history = useHistory()
  const [createProduct] = useMutation(CREATE_PRODUCT_MUTATION)

  const [newProduct, setNewProduct] = useState({
    image: ["Link1", "Link2"],
    tag: []
  });
  const [numTag, setNumTeg] = useState(0);
  const [input, setInput] = useState({});
  const [disabled, setDisabled] = useState({});
  const tags = [];
  for (var i = 0; i < numTag; i++) {
    tags.push(
      <input
        className="shadow appearance-none border rounded w-min py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        key={i}
        name={'tag' + i}
        value={input['tag' + i]}
        onChange={() => handleChangeInputTag}
        onKeyDown={(e) => handleKeyDownInputTag(e)}
        disabled={(disabled['tag' + i]) ? "disabled" : ""}
      />
    );
  }

  const handleAddTags = (e) => {
    setNumTeg(numTag + e)
  }

  const handleKeyDownInputTag = (e) => {
    if (e.key === 'Enter') {
      handleDisableTags(e)
    }
  }

  const handleChangeInputTag = (e) => {
    const value = e.target.value;
    setInput({
      ...input,
      [e.target.name]: value
    });
  }

  const handleDisableTags = (e) => {
    const value = e.target.value;
    setDisabled({
      ...disabled,
      [e.target.name]: value
    });

    setNewProduct({
      ...newProduct,
      tag: [...newProduct.tag, value]
    })
  }

  const handleInputChange = useCallback(
    (e) => {
      let { name, value } = e.target

      if (name === "active") value = e.target.checked

      if (isNumeric(value)) value = Number(value)

      setNewProduct((prev) => ({ ...prev, [name]: value }))
    },
    [],
  )

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      try {
        await createProduct({ variables: { record: newProduct } })
        alert('Register success')
        history.push('/')
      } catch (err) {
        console.log(err)
        alert('Register failed')
      }
    },
    [createProduct, newProduct],
  )

  return (
    <div className="bg-blue-200">
      <div className="container bg-gray-50 px-16 ">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <h1 className="text-green-500 text-3xl">Create Product</h1>

          {/* Product Name */}
          <label>Product Name</label>
          <input onChange={handleInputChange} type="text" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>

          {/* Description */}
          <label>Description</label>
          <textarea onChange={handleInputChange} name="description" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>

          {/* TYPE */}
          <label>Type</label>
          <select onChange={handleInputChange} name="type" id="type" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option value="">-- Please select one --</option>
            <option value="shirt">เสื้อ</option>
          </select>

          {/* COLOR */}
          <label>Color</label>
          <select onChange={handleInputChange} name="color" id="color" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option value="">-- Please select one --</option>
            <option value="Green">Green</option>
          </select>

          {/* SIZE */}
          <label>Size</label>
          <select onChange={handleInputChange} name="size" id="size" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option value="">-- Please select one --</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>

          {/* TAG */}
          <label>Tag</label>
          <div className="inline">
            {tags}
            <button onClick={() => handleAddTags(+1)} type="button" className="bg-transparent hover:bg-blue-500 text-gray-800 font-bold border border-gray-500 py-1 px-2 rounded inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#000000"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              <span>Add tag</span>
            </button>
          </div>

          {/* Picture */}
          <label>Picture</label>
          <input type="file" name="pic" id="pic" multiple className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>

          {/* Price */}
          <div className="inline">
            <label>Price</label>
            <input onChange={handleInputChange} type="number" name="price" id="number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
            <label >Count</label>
            <input onChange={handleInputChange} type="number" name="count" id="count" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
          </div>
          <label >Status</label>
          <div className="inline">
            <label className="inline-flex items-center mt-3">
              <input onChange={handleInputChange} type="checkbox" className="form-checkbox h-5 w-5 text-green-600" name="active" /><span className="ml-2 text-gray-700">Active</span>
            </label>
          </div>
          <button type="submit" className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 border border-green-500 hover:border-transparent rounded w-max">
            Save Product
          </button>
          <button type="button" onClick={() => console.log(newProduct)} className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 border border-green-500 hover:border-transparent rounded w-max">
            Test Save Product
          </button>
        </form>
      </div>
    </div>
  )
}
export default CreateProduct;