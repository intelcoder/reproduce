import { connect } from 'react-redux'

import SearchPage from './SearchPage'

const mapStateToProps = state => ({
  moreFilterOpen: false,
})
const actions = {
  toggleMoreFilter: () => {},
}
export default connect(
  mapStateToProps,
  actions,
)(SearchPage)
