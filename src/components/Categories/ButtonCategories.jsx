import React from 'react'
import { BoxButton, Button, ButtonCat, CategoryBoxs, Container } from './ButtonStyles'
import {TiFlashOutline} from "react-icons/ti"
import {AiFillHome} from "react-icons/ai"
import {LuShirt} from "react-icons/lu"

const ButtonCategories = () => {
  return (
    <Container>
      <CategoryBoxs>
        <ButtonCat>
            <BoxButton>
              <Button><TiFlashOutline fontSize={50}/></Button>
            </BoxButton>
            <BoxButton>
              <Button><AiFillHome fontSize={55}/></Button>
            </BoxButton>
            <BoxButton>
              <Button><LuShirt fontSize={55}/></Button>
            </BoxButton>
        </ButtonCat>
      </CategoryBoxs>
    </Container>
  )
}


export default ButtonCategories
