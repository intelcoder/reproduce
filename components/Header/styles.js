import styled from 'styled-components'
import { Anchor, Box, Button, Header as GrommetHeader } from 'grommet'
import React from 'react'

export const AppHeader = styled(GrommetHeader)`
  height: ${props => props.theme.header.height};
  //width: ${props => console.log(props)};
`
export const InputContainer = styled(Box)`
  max-width: 350px;
  input {
    padding: 8px;
    padding-left: 30px;
  }
`
export const MenuButton = styled(Button)`
  @media screen and (min-width: 1024px) {
    display: none;
  }
`
export const Logo = () => (
  <Box justify="center" height="xxsmall" width="xxsmall">
    <Anchor label="Home" href="/" />
  </Box>
)

export const MenuBox = styled(Box)`
  flex: 1;
  ${MenuButton} {
    padding-left: 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.global.size.xxlarge}) {
    ${MenuButton} {
      display: none;
    }
  }
`
