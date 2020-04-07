import React from 'react'
import { Box, Image } from 'grommet'
import IMG from 'Public/images/home-real-estate.jpg'
const Home = () => (
  <Box height="small" width="100%">
    <Image
      fit="cover"
      src={IMG}
    />
  </Box>
)

Home.getServerSideProps = async ({ req, store }) => {
  return {
    props: {
      test: 'teset',
      meta: [
      ],
    },
  }
}
export default Home
