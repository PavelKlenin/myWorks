import React from 'react';

import Page from '../../components/Page';
import {connect} from 'react-redux';
import {getPhotos} from '../../actions/PageActions';

import './PageContainer.scss';

class PageContainer extends React.Component {
  render() {
    const {page, getPhotos} = this.props;
    const {domain, year} = this.props.match.params;
    return (
      <div className="PageContainer">
        <Page
          domain = {domain}
          photos={page.photos}
          year = {+year}
          loading={page.loading}
          getPhotos={getPhotos} />
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    page: store.page,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPhotos: (domain, year) => dispatch(getPhotos(domain, year)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);