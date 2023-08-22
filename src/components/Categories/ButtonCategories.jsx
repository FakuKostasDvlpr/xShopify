import React from 'react'
//estilos categoria
import { BoxButton, Button, ButtonCat, CategoryBoxs, Container } from './ButtonStyles'

//iconos
import {TiFlashOutline} from "react-icons/ti"
import {AiFillHome} from "react-icons/ai"
import {LuShirt} from "react-icons/lu"
import {GiRoundStar} from "react-icons/gi"
import {FaQuestion} from "react-icons/fa"

//data , estado
import { products } from '../../data/data'
import { useEffect, useState } from "react";

const ButtonCategories = () => {

  const [id, setId] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(()=>{
    setId(products);
    setCollection([...new Set(products.map((products)=> products.category))])
  },[]) 

  const gallery_filter = (products) =>{
    const filterData = products.filter((products)=> products.tipo === products);
    setId(filterData);


  }
return (
    <Container>
      <CategoryBoxs>
        <ButtonCat>
          {collection.map((category) => (
            <BoxButton key={id}>
              <Button>
                {category === 'Tech' ? <TiFlashOutline fontSize={55} /> :
                 category === 'SetUp' ? <AiFillHome fontSize={55} /> :
                 category === 'Ropa' ? <LuShirt fontSize={55} /> :
                 <FaQuestion />}
              </Button>
            </BoxButton>
          ))}
        </ButtonCat>
        <BoxButton>
            <Button><GiRoundStar className='favorite' fontSize={50}/></Button>
          </BoxButton>
      </CategoryBoxs>
    </Container>
)
};

export default ButtonCategories
