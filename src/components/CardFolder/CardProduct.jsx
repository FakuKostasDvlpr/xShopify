import React from 'react'
import {BiEditAlt} from "react-icons/bi"
import "./ContenedorStyle.css"
import { Container, ContainerCaracts, ImgContainer, TextContainer, FlexContainer, PriceContainer, ContainerPrice, AddToCart, EditContainer, EditIconContainer, ContainerAddCart } from './CardStyles'
import {GiRoundStar} from "react-icons/gi"

const CardFuture = ({img, title, category, price, desc, tipo}) => 
{
  return (
  <Container>
      <EditContainer>
          <EditIconContainer>
            <BiEditAlt className='EditButton' fontSize={35}/>
          </EditIconContainer>
          <EditIconContainer>
            <GiRoundStar className='FavoriteButton' fontSize={35}/>
          </EditIconContainer>
      </EditContainer>
    <TextContainer>
      <h2>{title}</h2>
    </TextContainer>
      <ImgContainer>
          <img src={img} alt="ImageData" />
      </ImgContainer>
        <ContainerCaracts>
              <FlexContainer>
                <p># {desc}</p>
              </FlexContainer>
            <FlexContainer>
              <p># {tipo}</p>
            </FlexContainer>
        </ContainerCaracts>
      <ContainerPrice className='flex-col mb-10'>
        <PriceContainer>
          <p>{price}</p>
        </PriceContainer>
      </ContainerPrice>
        <AddToCart>
          <ContainerAddCart>
            <p>Agregar al carrito</p>
          </ContainerAddCart>
        </AddToCart>
  </Container>
  )
}

export default CardFuture