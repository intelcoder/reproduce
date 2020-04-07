import React from 'react'
import Head from 'next/head'
import { connect } from 'react-redux'
import SearchPage from 'Containers/SearchPage'
import { fetchLookup } from 'Redux/lookups/actions'

const componentMap = {
  Search: <SearchPage />,
}
const Lookups = ({ props: { lookups } }) => {
  return (
    <main>
      <Head />
      {componentMap[lookups.component]}
    </main>
  )
}

Lookups.getServerSideProps = async ({ req, res, store }) => {
  return {
    props: {
      lookups: res.lookups,
    },
  }
}

export default connect(
  state => ({
    lookups: state.lookups,
  }),
  { fetchLookup },
)(Lookups)
