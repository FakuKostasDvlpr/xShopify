import React from 'react'
import { AddContainer, ContHeader } from './TitleStyles'
import {IoMdAddCircle} from "react-icons/io"
const Title = () => {
  return (
  <ContHeader>
      <img src="https://www.ecommercethesis.com/wp-content/uploads/2021/06/Shopify.png" alt="IconPage" />
    <AddContainer>
      <IoMdAddCircle className='AddButton' fontSize={40}/>
    </AddContainer>
  </ContHeader>
  )
}

export default Title