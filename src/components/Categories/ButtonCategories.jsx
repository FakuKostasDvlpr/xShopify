import React from 'react'
import { BoxButton, Button, ButtonCat, CategoryBoxs, Container } from './ButtonStyles'
import {TiFlashOutline} from "react-icons/ti"
import {AiFillHome} from "react-icons/ai"
import {LuShirt} from "react-icons/lu"
import {GiRoundStar} from "react-icons/gi"

const ButtonCategories = () => {
  return (
    <Container>
      <CategoryBoxs>
        <ButtonCat>
          <BoxButton>
            <Button><TiFlashOutline fontSize={45}/></Button>
          </BoxButton>
          <BoxButton>
            <Button><AiFillHome fontSize={45}/></Button>
          </BoxButton>
          <BoxButton>
            <Button><LuShirt fontSize={45}/></Button>
          </BoxButton>
          <BoxButton>
            <Button><GiRoundStar className='favorite' fontSize={45}/></Button>
          </BoxButton>
        </ButtonCat>
      </CategoryBoxs>
    </Container>
  )
}


export default ButtonCategories
