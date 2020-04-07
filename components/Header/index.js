import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import Fonts from 'Components/Fonts'
import { Search, Menu as MenuIcon } from 'grommet-icons'
import { setDrawerOpen as setDrawerOpenAction } from 'Redux/app/actions'

import { TextInput, Anchor, Box } from 'grommet'
import { connect } from 'react-redux'
import { MenuBox, MenuButton, AppHeader, InputContainer } from './styles'
import Drawer from './components/Drawer'
import LinkMenu from './components/LinkMenu'
import LoginSignup from './components/LoginSignup'

export const Logo = () => (
  <Box justify="center" height="xxsmall" width="auto">
    <Anchor label="Home" href="/" />
  </Box>
)

const Header = ({ isDrawerOpen, setDrawerOpen, openModal }) => {
  useEffect(() => {
    Fonts()
  }, [])
  return (
    <>
      <AppHeader background="light-1" pad="medium" border="bottom">
        <MenuBox direction="row" align="center">
          <Logo />
          <InputContainer pad={{ left: 'small' }} width="100%">
            <TextInput
              icon={<Search size="small" />}
              size="xsmall"
              dropHeight="xsmall"
            />
          </InputContainer>
        </MenuBox>
        <Box justify="center" direction="row" gap={{ left: 'medium' }}>
          <LinkMenu drawerStyle={false} />
          <LoginSignup openModal={openModal} />
          <MenuButton
            onClick={() => setDrawerOpen(!isDrawerOpen)}
            icon={<MenuIcon />}
          />
        </Box>
      </AppHeader>
      {isDrawerOpen && (
        <Drawer
          plain
          position="left"
          full="vertical"
          modal
          onClickOutside={() => setDrawerOpen(false)}
          onEsc={() => setDrawerOpen(false)}
          setDrawerOpen={setDrawerOpen}
        >
          <LinkMenu drawerStyle direction="column" justify="flex-start" />
          <LoginSignup
            drawerStyle
            openModal={openModal}
            direction="column"
            justify="flex-start"
          />
        </Drawer>
      )}
    </>
  )
}

Header.propTypes = {
  isDrawerOpen: PropTypes.bool,
  setDrawerOpen: PropTypes.func,
  openModal: PropTypes.func,
}

const mapToStateProps = state => ({
  isDrawerOpen: state.app.isDrawerOpen,
})
const actions = {
  setDrawerOpen: setDrawerOpenAction,
}

export default connect(
  mapToStateProps,
  actions,
)(Header)
