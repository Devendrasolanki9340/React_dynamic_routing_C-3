import axios from "axios"
import { useContext, useEffect  } from "react"
import { MyStore } from "../Context/MyContext"
import ProductsCard from "./ProductsCard"
import Products from "./Products"


const Home = () => {
    let {productsData, setProductsData} = useContext(MyStore)


    let getProductsData =  async ()=>{
        try {
            console.log("Fetching products...");
            let res = await axios.get("https://fakestoreapi.com/products")
            console.log("API Response:", res.data);
            setProductsData(res.data);
            console.log("Products set successfully");
            
        } catch (error) {
            console.log("error in api",error);
        }
    }
    useEffect(()=>{
        getProductsData()
    },[])


  return (
    <div className=" p-3 grid grid-cols-4">
      {
        productsData.map((val)=>{
            return <ProductsCard key={val.id} product={val}/>
        })
    }
    
    </div>
  )
}

export default Home
