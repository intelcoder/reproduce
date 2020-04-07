import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Anchor, Box, Menu } from 'grommet'

const StyledMenu = styled(Menu)``
const LinkMenuContainer = styled(Box)`
  @media screen and (max-width: 1024px) {
    display: ${props => (props.drawerStyle ? 'flex' : 'none')};
    ${StyledMenu} {
      > div {
        padding-left: 0;
        padding-top: 0;
      }
    }
  }
`

const LinkMenu = ({ drawerStyle, direction = 'row', justify = 'center' }) => (
  <LinkMenuContainer
    drawerStyle={drawerStyle}
    justify={justify}
    direction={direction}
    gap="small"
  >
    <Anchor
      alignSelf={justify}
      label="Search"
      href="/different-url"
    />
    <Anchor
      alignSelf={justify}
      label="Profile"
      href="/someurl"
    />
    <StyledMenu
      margin={{
        right: '-10px',
      }}
      gap="none"
      size="xsmall"
      label="Menu"
      items={[
        { label: <Anchor label="Search" href="/" />, onClick: () => {} },
        { label: 'Second Action', onClick: () => {} },
      ]}
    />
  </LinkMenuContainer>
)
LinkMenu.propTypes = {
  drawerStyle: PropTypes.bool,
  justify: PropTypes.string,
  direction: PropTypes.string,
}

export default LinkMenu
