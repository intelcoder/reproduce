import { Box, Main } from 'grommet'
import styled from 'styled-components'

export const SearchMain = styled(Main)`
  max-height: calc(100vh - ${({ theme }) => theme.header.height});
`

export const SearchContent = styled(Box)`
  overflow-y: scroll;
  min-width: 800px;
  @media screen and (max-width: ${props => props.theme.global.size.xxlarge}) {
    min-width: 720px;
  }
  @media screen and (max-width: ${props => props.theme.global.size.large}) {
    min-width: 100%;
    flex: 1;
  }
  > div {
    min-height: auto;
  }
`
export const SearchContainer = styled(Box)`
  height: calc(100vh - ${props => props.theme.header.height});
  overflow-y: hidden;
`
export const MapContainer = styled(Box)`
  @media screen and (max-width: ${props => props.theme.global.size.large}) {
    display: none;
  }
`
export const AssignmentCardContainer = styled(Box)`
  padding: 0 5px;
  flex-basis: 33%;
  margin-bottom: ${props => props.theme.global.edgeSize.small};
  @media screen and (max-width: ${props => props.theme.global.size.xxlarge}) {
    padding: 0 5px;
    flex-basis: 50%;
    max-width: 50%;
  }
  @media screen and (max-width: 500px) {
    flex-basis: 100%;
    max-width: 100%;
  }
`
