import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchCandies } from '../reducers/candies';

class AllCandies extends Component {

  componentDidMount() {
    this.props.fetchCandies()
  }

  render () {
    if (!this.props.allCandies){
      return (
        <div>
          <h1>ERROR</h1>
        </div>
      )
    } else {
      return (
        <div>
          {this.props.allCandies.map( (candy) => {
            return (
              <div key={candy.id}>
                <img src={candy.imageURL} />
                <h2>{candy.name} x{candy.quantity}</h2>
                <p>{candy.description}</p>
              </div>
            )
            })
          }
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  allCandies: state.allCandies
});

const mapDispatchToProps = dispatch => ({
  fetchCandies: () => dispatch(fetchCandies())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllCandies));
