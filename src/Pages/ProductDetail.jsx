import { useParams } from "react-router"
import axios  from "axios"
import { useEffect, useState } from "react"


const ProductDetail = () => {

  const [singleProductData, setSingleProductData] = useState([])
  console.log(singleProductData);
  

  let {id} = useParams()

  let getSingleProductData = async ()=>{
    try {
      let res = await axios.get (`https://fakestoreapi.com/products/${id}`)
      // console.log(res);
      setSingleProductData(res.data)
      
    } catch (error) {
      console.log("Detail api error",error);
      
    }
  }
  useEffect(()=>{
    getSingleProductData()
  },[])

  return (
    <div>
       <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">

        <div className="grid md:grid-cols-2 gap-10 p-8">

          {/* Product Image */}
          <div className="flex justify-center items-center bg-gray-50 rounded-xl p-8">
            <img
              src={singleProductData.image}
              alt={singleProductData.title}
              className="h-96 object-contain hover:scale-105 duration-300"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">

            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full w-fit text-sm capitalize">
              {singleProductData.category}
            </span>

            <h1 className="text-4xl font-bold mt-5">
              {singleProductData.title}
            </h1>

            <div className="flex items-center gap-4 mt-5">
              <span className="text-4xl font-bold text-green-600">
                ${singleProductData.price}
              </span>

              <span className="bg-yellow-400 text-black px-3 py-1 rounded-md font-semibold">
                ⭐ {singleProductData.rating?.rate}
              </span>

              <span className="text-gray-500">
                ({singleProductData.rating?.count} Reviews)
              </span>
            </div>

            <p className="text-gray-600 mt-6 leading-7">
              {singleProductData.description}
            </p>

            <div className="flex gap-4 mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
                Add to Cart
              </button>

              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition">
                Buy Now
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductDetail
