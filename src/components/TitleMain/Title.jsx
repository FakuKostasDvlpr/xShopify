import React from 'react'
import { ContHeader } from './TitleStyles'
import {IoMdAddCircle} from "react-icons/io"
const Title = () => {
  return (
    <ContHeader>
     <img src="https://www.ecommercethesis.com/wp-content/uploads/2021/06/Shopify.png" alt="" />
     <div className='AddButton flex justify-center '>
      <IoMdAddCircle fontSize={40}/>
     </div>
    </ContHeader>
  )
}

export default Title