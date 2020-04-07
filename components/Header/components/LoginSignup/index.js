import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, Box } from 'grommet'

const LoginSignupContainer = styled(Box)`
  @media screen and (max-width: ${({ theme }) => theme.global.size.large}) {
    display: ${({ drawerStyle }) => (drawerStyle ? 'flex' : 'none')};
  }
`

const LoginSignup = ({
  drawerStyle,

  direction = 'row',
  justify = 'center',
}) => (
  <LoginSignupContainer
    drawerStyle={drawerStyle}
    justify={justify}
    direction={direction}
    gap="small"
  >
    <Button justify="center">
      Sign up
    </Button>
    <Button justify="center">
      Log in
    </Button>
  </LoginSignupContainer>
)

LoginSignup.propTypes = {
  drawerStyle: PropTypes.bool,
  openModal: PropTypes.func,
  direction: PropTypes.string,
  justify: PropTypes.string,
}

export default LoginSignup
