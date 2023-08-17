import React from 'react'
import {IoIosAddCircle} from "react-icons/io"
import {BsFillBookmarkStarFill} from "react-icons/bs"
import "./ContenedorStyle.css"
import { Container, ContainerCaracts, ContainerIcon, ImgContainer, TextContainer, FlexContainer, PriceContainer, ContainerPrice, ContainerFavorite } from './CardStyles'
const CardFuture = ({img, title, category, price, desc, tipo}) => 
{
  return (
  <Container>
    <TextContainer>
      <h2>{title}</h2>
    </TextContainer>
      <ContainerIcon>
          <IoIosAddCircle className='addButton' fontSize={45}/>
      </ContainerIcon>
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
      <ContainerPrice>
        <PriceContainer>
          <p>{price}</p>
        </PriceContainer>
        <ContainerFavorite>
          <BsFillBookmarkStarFill id='mark' color='gray' fontSize={40} />
        </ContainerFavorite>
      </ContainerPrice>


  </Container>
  )
}

export default CardFuture