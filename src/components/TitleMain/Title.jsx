import React, { useState } from 'react';
import { products } from '../../data/data';
import { AddContainer, Button, ContHeader } from './TitleStyles';
import { IoMdAddCircle } from 'react-icons/io';
// import Modal from 'react-modal';

const Title = () => {
  // const [arreglo, setArreglo] = useState(products);
  // const [showModal, setShowModal] = useState(false);
  // const [newProduct, setNewProduct] = useState({
  //   name: '',
  //   price: 0,
  //   description: '',
  //   imagen: '',
  // });

  // const openModal = () => {
  //   setShowModal(true);
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  //   setNewProduct({
  //     name: '',
  //     price: 0,
  //     description: '',
  //     imagen: '',
  //   });
  // };

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setNewProduct((prevProduct) => ({
  //     ...prevProduct,
  //     [name]: value,
  //   }));
  // };

  // const agregarItem = () => {
  //   const nuevoProducto = {
  //     id: arreglo.length + 1,
  //     ...newProduct,
  //   };

  //   setArreglo([...arreglo, nuevoProducto]);
  //   closeModal();

  //   updateProducts([...arreglo, nuevoProducto]);
  // };

  return (
    <ContHeader>
      <img src="https://www.ecommercethesis.com/wp-content/uploads/2021/06/Shopify.png" alt="IconPage" />
      <AddContainer>
        <Button>
          <IoMdAddCircle className="AddButton" fontSize={40} />
        </Button>
      </AddContainer>
      {/* <Modal className='flex justify-center items-center w-full w-50vh ' isOpen={showModal} onRequestClose={closeModal} contentLabel="Agregar Producto">
        <h2 className='text-center bg-red-500'>Agregar Nuevo Producto</h2>
        <form className='flex justify-center items-center'>
          <input type="text" name="name" placeholder="Nombre del producto" value={newProduct.name} onChange={handleInputChange} />
          <input type="number" name="price" placeholder="Precio" value={newProduct.price} onChange={handleInputChange} />
          <textarea name="description" placeholder="Descripción" value={newProduct.description} onChange={handleInputChange} />
          <input type="text" name="imagen" placeholder="URL de la imagen" value={newProduct.imagen} onChange={handleInputChange} />
          <button type="button" onClick={agregarItem}>Agregar Producto</button>
          <button type="button" onClick={closeModal}>Cancelar</button>
        </form>
      </Modal> */}
    </ContHeader>
  );
};

export default Title;
