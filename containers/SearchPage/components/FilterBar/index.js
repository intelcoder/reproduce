import React from 'react'
import styled from 'styled-components'
import Select from 'Components/Form/Select'
import { Box, Button } from 'grommet'

const options = [
  {
    label: '100k',
    value: '100k',
  },
  {
    label: '125k',
    value: '125k',
  },
  {
    label: '150k',
    value: '150k',
  },
  {
    label: '200k',
    value: '200k',
  },
]

const PriceContainer = styled(Box)`
  max-width: 310px;
`

const FilterBar = ({ toggleMoreFilter, moreFilterOpen }) => {
  return (
    <Box
      height="48px"
      direction="row"
      pad={{ vertical: '6px' }}
      margin={{ bottom: 'small', top: '-6px' }}
    >
      <PriceContainer
        margin={{ right: 'small' }}
        align="center"
        direction="row"
      >
        <Select options={options} placeHolder={'Min Price'} />
        <Box pad="xsmall">-</Box>
        <Select options={options} placeHolder={'Max Price'} />
      </PriceContainer>
      <Button
        onClick={() => toggleMoreFilter(!moreFilterOpen)}
        size="small"
        margin={{ right: 'small' }}
        gap="small"
        label={`${moreFilterOpen ? 'Close ' : ''}Filters`}
      />
    </Box>
  )
}

export default FilterBar
