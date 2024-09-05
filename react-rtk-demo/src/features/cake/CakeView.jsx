import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
    const numOfCake = useSelector((state) => state.cake.numOfCake);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of Cake {numOfCake}</h2>
            <button onClick={() => dispatch(ordered())}>Order cake</button>
            <button onClick={() => dispatch(restocked(5))}>Restock cakes</button>
        </div>
    );
};

export default CakeView;