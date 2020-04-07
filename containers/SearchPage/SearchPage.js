import React from 'react'
import CubeSpinner from 'Components/CubeSpinner'
import {
  SearchContent,
  SearchContainer,
  MapContainer,
  SearchMain,
} from './styles'

const SearchPage = () => (
  <SearchMain>
    <SearchContainer flex direction="row">
      <MapContainer justify="center" align="center" basis="1/2" fill="vertical">
        Map
        <CubeSpinner size={40} />
      </MapContainer>
      <SearchContent
        pad={{
          horizontal: 'medium',
        }}
        responsive
        basis="1/2"
        border={{
          color: 'border',
          size: 'xsmall',
          style: 'solid',
          side: 'left',
        }}
      >
      </SearchContent>
    </SearchContainer>
  </SearchMain>
)

export default SearchPage
