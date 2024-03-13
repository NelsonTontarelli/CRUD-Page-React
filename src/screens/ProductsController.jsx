import { useState } from "react";
import TableTemplate from "../components/TableTemplate";
import { Flip, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const productsTitles = [
  {
    val: "ID",
    key: 1,
  },
  {
    val: "Name",
    key: 2,
  },
  {
    val: "Description",
    key: 3,
  },
  {
    val: "Create-Date",
    key: 4,
  },
];

const productsData = [
 
];

function ProductsController() {
  const [products, setProducts] = useState(productsData)

  function getData(data) {
    const prevId = productsData[productsData.length - 1]?.id || 0;
    const productsCopy = [...products]
    productsCopy.push({ id: prevId + 1, ...data });
    setProducts(productsCopy);
    toast.success("Record Created Successfully!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Flip,
    });
  }

  function getDataToDelete(index) {
    const updateProducts = [...products]
    updateProducts.splice(index,1)
    setProducts(updateProducts)
  }


  return (
    <>
      <TableTemplate titles={productsTitles} rows={products} sendData={getData} deleteData={getDataToDelete}/>
    </>
  );
}

export default ProductsController;
