import React from 'react'
import styled from 'styled-components'
import Select from 'Components/Form/Select'
import { Box, Button, CheckBox } from 'grommet'


const FilterView = ({  }) => {
  return (
    <Box wrap responsive>
      <Select />
      <CheckBox label={'test'} /> <CheckBox label={'test'} />{' '}
      <CheckBox label={'test'} /> <CheckBox label={'test'} />{' '}
      <CheckBox label={'test'} />
    </Box>
  )
}

export default FilterView
