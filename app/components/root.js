import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import AllCandies from './AllCandies';

const Root = () => {
  return (
    <Router>
      <div>
        <nav>
          Goodie Bag
          <Link className="navLink" to="/">Home</Link>
          <Link className="navLink" to="candies">Candies</Link>
        </nav>
        <main>
          <h1>Welcome to the Goodie Bag!</h1>
          <p>What a nice home page for your goodies!</p>
        </main>
        <Switch>
          <Route exact path="/candies" component={AllCandies} />
        </Switch>
      </div>
    </Router>
  )
}

export default Root;
