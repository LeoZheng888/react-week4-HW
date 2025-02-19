import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Modal } from 'bootstrap';

function DelProductModal (
      {
    // eslint-disable-next-line react/prop-types
    tempProduct,
      
    // eslint-disable-next-line react/prop-types
    isDelOpen,
      
    // eslint-disable-next-line react/prop-types
    setIsDelopen,
      
    // eslint-disable-next-line react/prop-types
    getProducts
    }
){
    
    const delProductModalRef =useRef(null);
    useEffect(()=>{         
        new Modal(delProductModalRef.current,{
          backdrop:false
        })
        
      },[]) 

useEffect (()=>{
   
    if(isDelOpen){
        const modelInstance = Modal.getInstance(delProductModalRef.current);
        modelInstance.show();
      
    }
},[isDelOpen])

    const handleCloseDelProductModal=()=>{
        const modelInstance = Modal.getInstance(delProductModalRef.current);
        modelInstance.hide();
        setIsDelopen(false)
      }

    const handleDelProduct=async()=>{
        try{
        await delProduct();
        getProducts();
        handleCloseDelProductModal();
        }catch(error){
        alert('刪除產品失敗')
        }
        }

        const delProduct =async ()=>{
            try {
              await axios.delete(`${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_API_PATH}/admin/product/${tempProduct.id}`)
            }catch(error){
          alert('產品新增失敗');
            }
          }


    return (
        <div
ref={delProductModalRef}
  className="modal fade"
  id="delProductModal"
  tabIndex="-1"
  style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5">刪除產品</h1>
        <button
        onClick={handleCloseDelProductModal}
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body">
        你是否要刪除 
        <span className="text-danger fw-bold">{tempProduct.title}</span>
      </div>
      <div className="modal-footer">
        <button
        onClick={handleCloseDelProductModal}
          type="button"
          className="btn btn-secondary"
        >
          取消
        </button>
        <button onClick={handleDelProduct} type="button" className="btn btn-danger">
          刪除
        </button>
      </div>
    </div>
  </div>
</div>
    )

}

export default DelProductModal