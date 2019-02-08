import axios from 'axios';

const GET_CANDIES = 'GET_CANDIES';

export const getCandies = candies => ({
  type: GET_CANDIES,
  candies
})

export const fetchCandies = () => async dispatch => {
  const { data } = await axios.get('api/candies');
  dispatch(getCandies(data));
}

let initialState = {
  allCandies: []
}

const reducer = (state = initialState, action) => {
  console.log('Hit the reducer!');
  switch (action.type) {
    case GET_CANDIES:
    console.log('Candies: ', action.candies);
      return {...state, allCandies: action.candies}
    default:
      return state;
  }
}

export default reducer;
