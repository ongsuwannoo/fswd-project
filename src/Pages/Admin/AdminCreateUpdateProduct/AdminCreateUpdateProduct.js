import React, { useState, useCallback, useEffect } from "react";
import { useMutation, useLazyQuery } from '@apollo/client'
import { useHistory, useParams } from 'react-router'

import { CREATE_PRODUCT_MUTATION, PRODUCT_QUERY, UPDATE_PRODUCT } from '../../../graphql/Product'

import { isNumeric } from '../../../utils/isNumeric'
import { InputAdd } from '../../../components/InputAdd/InputAdd'
import { UploadForm } from '../../../components/UploadForm/UploadForm'

const AdminProduct = () => {
  const { productId } = useParams();
  const isUpdateProduct = true ? productId : false;

  const history = useHistory()
  const [createProduct] = useMutation(CREATE_PRODUCT_MUTATION)
  const [updateProduct] = useMutation(UPDATE_PRODUCT)

  const [newProduct, setNewProduct] = useState({ tag: [] });
  const [numTag, setNumTeg] = useState(0);
  const [disabled, setDisabled] = useState({});
  const [valueTag, setValueTag] = useState({});
  const [getProduct] = useLazyQuery(PRODUCT_QUERY, {
    variables: { productId },
    onCompleted: async data => {
      setNewProduct(data.productById)
      setNumTeg(data.productById.tag.length)
    }
  });
  const tags = [];

  // Check page Update or Create
  useEffect(() => {
    if (!isUpdateProduct) return
    getProduct()
  }, [isUpdateProduct, getProduct]);

  // loop create tags
  for (var i = 0; i < numTag; i++) {
    tags.push(
      <InputAdd
        key={i}
        name={'tag' + i}
        index={i}
        value={newProduct.tag[i]}
        onChange={() => handleChangeInputTag}
        onKeyDown={(e) => handleKeyDownInputTag(e)}
        disabled={(disabled['tag' + i]) ? "disabled" : ""}
      />
    );
  }

  // Assign each ValueTag
  const handleChangeInputTag = (e) => {
    const value = e.target.value;
    setValueTag({
      ...valueTag,
      [e.target.name]: value
    });
  }

  // Add Tag from onClick
  const handleAddTags = (e) => {
    setNumTeg(numTag + e)
  }

  // Check key press Enter in input tag  
  const handleKeyDownInputTag = (e) => {
    if (e.key === 'Enter') {
      handleDisableTags(e)
    }
  }

  // Disable input tag And setNewProduct
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

  // Send state to uploadImage
  const handleReturnImage = (value) => {
    setNewProduct({
      ...newProduct,
      image: value
    })
  }

  // setNewProduct from input, option, checkbox form
  const handleInputChange = useCallback(
    (e) => {
      let { name, value } = e.target

      if (name === "active") value = e.target.checked

      if (isNumeric(value)) value = Number(value)

      setNewProduct((prev) => ({ ...prev, [name]: value }))
    },
    [],
  )

  // Submit useMutation createProduct -> backend
  const handleSubmitCreate = useCallback(
    async (e) => {
      e.preventDefault()
      try {
        if (isUpdateProduct) {
          console.log("Update Product");
          await updateProduct({ variables: { record: newProduct, productId } })
          alert('Update success')
          history.push('/admin')
        } else {
          console.log("Create Product");
          await createProduct({ variables: { record: newProduct } })
          alert('Create success')
          history.push('/admin')
        }

      } catch (err) {
        console.log(err)
        alert('Register failed')
      }
    },
    [createProduct, newProduct, history],
  )

  return (
    <div className="bg-blue-200">
      <div className="container bg-gray-50 px-16 ">
        {
          isUpdateProduct
            ? <h1 className="text-yellow-500 text-3xl">Update Product</h1>
            : <h1 className="text-green-500 text-3xl">Create Product</h1>
        }
        <form className="flex flex-col" onSubmit={handleSubmitCreate}>
          {/* Product Name */}
          <label>Product Name</label>
          <input onChange={handleInputChange} value={newProduct.name} type="text" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>

          {/* Description */}
          <label>Description</label>
          <textarea onChange={handleInputChange} value={newProduct.description} name="description" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>

          {/* TYPE */}
          <label>Type</label>
          <select onChange={handleInputChange} value={newProduct.type} name="type" id="type" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option value="">-- Please select one --</option>
            <option value="shirt">เสื้อ</option>
          </select>

          {/* COLOR */}
          <label>Color</label>
          <select onChange={handleInputChange} value={newProduct.color} name="color" id="color" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option value="">-- Please select one --</option>
            <option value="Green">Green</option>
          </select>

          {/* SIZE */}
          <label>Size</label>
          <select onChange={handleInputChange} value={newProduct.size} name="size" id="size" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
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
          <UploadForm handleReturnImage={handleReturnImage} images={newProduct.image} />
          {
            newProduct.image?.map((url, i) => {
              return <img key={i} src={url} alt="img" width="100" />
            })
          }
          {/* Price */}
          <div className="inline">
            <label>Price</label>
            <input onChange={handleInputChange} value={newProduct.price} type="number" name="price" id="number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
            <label >Count</label>
            <input onChange={handleInputChange} value={newProduct.count} type="number" name="count" id="count" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
          </div>

          {/* Status */}
          <label >Status</label>
          <div className="inline">
            <label className="inline-flex items-center mt-3">
              <input onChange={handleInputChange} defaultChecked={newProduct.active} type="checkbox" className="form-checkbox h-5 w-5 text-green-600" name="active" /><span className="ml-2 text-gray-700">Active</span>
            </label>
          </div>

          {/* Main save */}
          <button type="submit" className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 border border-green-500 hover:border-transparent rounded w-max">
            Save Product
          </button>

          {/* Test Save Product Log data newProduct */}
          {/* <button type="button" onClick={() => console.log(newProduct)} className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 border border-green-500 hover:border-transparent rounded w-max">
            Test Save Product
          </button> */}
        </form>
      </div>
    </div>
  )
}
export default AdminProduct;
