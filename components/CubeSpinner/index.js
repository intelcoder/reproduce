import React from 'react'
import PropTypes from 'prop-types'
import { Box, Image } from 'grommet'
import bubbleSpinner from '../../public/svg/bubble-loading.svg'

const BubbleSpinner = ({ size = 14 }) => (
  <Box width={`${size}px`} height={`${size}px`}>
    <Image src={bubbleSpinner} width={size} height={size} />
  </Box>
)

BubbleSpinner.propTypes = {
  size: PropTypes.number,
}
export default BubbleSpinner
