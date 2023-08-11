import React from 'react'
import {IoIosAddCircle} from "react-icons/io"
import {BsFillBookmarkStarFill} from "react-icons/bs"
import "./ContenedorStyle.css"
import { Container, ContainerCaracts, ContainerIcon, ImgContainer, TextContainer, FlexContainer, PriceContainer, ContainerPrice, ContainerFavorite } from './CardStyles'
const CardFuture = ({img, title, category, price, desc}) => 
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
              <p># {category}</p>
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
    //  <div id='Contenedor' className="flex flex-col max-w-sm rounded-xl overflow-hidden shadow-xl w-full m-7 p-10">

    //    <div className='flex cursor-pointer justify-end p-1'>
    //      <IoIosAddCircle className='addButton' fontSize={35}  />
    //    </div>

    //    <div className="h-[200px] w-full">
    //      <img className="h-full w-full object-cover" src={img} alt="Sunset in the mountains"/>
    //    </div>

    //    <div className="font-bold text-xl flex">
    //      <h1 className='text-4xl'>{title}</h1>
    //    </div>

    //    <div className="flex justify-center items-center gap-2 m-5 flex-wrap">
    //      <p className="inline-block bg-gray-200 rounded-full p-2 text-sm font-semibold text-gray-700">{desc}</p>
    //      <p className="inline-block bg-gray-200 rounded-full p-2 text-sm font-semibold text-gray-700 ">{category}</p>
    //    </div>

    //    <div className='flex text-center justify-center'>
    //    <h1 className='text-5xl text-purple-600 font-bold'>{price}</h1>
    //    </div>

    //    <div className='flex justify-end p-1 cursor-pointer mt-10'>

    //      <div className='BoxFav rounded-lg border-gray-400 p-2 cursor-pointer hover:bg-gray-500 hover:border-white  '>
    //        <BsFillBookmarkStarFill className='Favorite' fontSize={30}/>
    //      </div>
    //    </div>
      
    //  </div>
  )
}

export default CardFuture