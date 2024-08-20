import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

const IceCream = (props) => {
  return (
    <div>
      <h1>Total iceCream - {props.numOfIceCream} </h1>
      <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(IceCream);
