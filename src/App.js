import React from 'react';
import { connect } from 'react-redux';
import './App.css';

const App = ({ count, increment, decrement, reset }) => {
  return (
    <div className="container">
      <h1 className="title">Counter</h1>
      <div className="counterBox">
        <div className="count">{count}</div>
        <button className="button" onClick={decrement}>-</button>
        <button className="button" onClick={increment}>+</button>
        <button className="button" onClick={reset}>reset</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' }),
  reset: () => dispatch({ type: 'RESET' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
