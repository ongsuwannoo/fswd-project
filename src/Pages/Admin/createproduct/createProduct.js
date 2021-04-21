const createProduct = ()=>{
    return(
        <div className="bg-blue-200">
            <div className="container bg-gray-50 px-16 ">
                <form class="flex flex-col ">
                    <h1 className="text-green-500 text-3xl">Create Product</h1>
                    <label>Product Name</label>
                    <input type="text" name="product_name"></input>
                    <label>Description</label>
                    <textarea name="description"></textarea>
                    <label>Type</label>
                    <select name="type" id="type">
                        <option value="เสื้อ">เสื้อ</option>
                    </select>
                    <label>Color</label>
                    <select name="color" id="color">
                        <option value="แดง">แดง</option>
                    </select>
                    <label>Tag</label>
                    <select name="tag" id="tag">
                        <option value="เสื้อผ้าสำหรับผู้หญิง">เสื้อผ้าสำหรับผู้หญิง</option>
                    </select>
                    <label>Picture</label>
                    <select name="pic" id="pic">
                        <option value="https://via.placeholder.com/1800x500">https://via.placeholder.com/1800x500</option>
                    </select>
                    <div className="inline">
                        <label>Price</label>
                        <input type="number" name="number" id="number"></input>
                        <label for="Count">Count</label>
                        <input type="number" name="count" id="count"></input>
                    </div>
                    <label for="">Status</label>
                    <div className="inline">
                        <input type="checkbox" name="status" id="status"></input>
                        <label for="">Active</label>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default createProduct;