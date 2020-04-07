import React from 'react'
import PropTypes from 'prop-types'
import { Box, Layer, Button } from 'grommet'
import styled from 'styled-components'
import { Close } from 'grommet-icons'

export const StyledLayer = styled(Layer)`
  background: white;
  border: 1px solid ${({ theme }) => theme.global.colors.border.light};
  padding: ${({ theme }) => theme.global.spacing};
  border-radius: 0;
  display: none;
  @media screen and (max-width: 1024px) {
    display: flex;
  }
  @media screen and (max-width: ${({ theme }) => theme.global.size.large}) {
    width: initial;
  }
`
export const StyledIconButton = styled(Button)`
  position: absolute;
  right: ${({ theme }) => theme.global.size.xxsmall};
  margin-top: ${({ theme }) => `-${theme.global.size.xxsmall}`};
`

const Drawer = ({ setDrawerOpen, onClickOutside, children }) => (
  <StyledLayer
    position="right"
    full="vertical"
    modal
    onClickOutside={onClickOutside}
    onEsc={onClickOutside}
  >
    <StyledIconButton
      size="small"
      pad="none"
      icon={<Close />}
      onClick={() => setDrawerOpen(false)}
    />
    <Box width="300px" margin={{ bottom: 'small' }}>
      Menu
    </Box>
    {children}
  </StyledLayer>
)

Drawer.propTypes = {
  setDrawerOpen: PropTypes.func,
  onClickOutside: PropTypes.func,
  children: PropTypes.node,
}
export default Drawer
