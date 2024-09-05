import {useSelector, useDispatch} from 'react-redux';
import {ordered, restocked} from './icecreamSlice';
import React from 'react';

const IcecreamView = () => {
    const [value, setValue] = React.useState(1);
    const numOfIceCream = useSelector((state) => state.icecream.numOfIcecream);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of IceCream {numOfIceCream}</h2>
            <button onClick={() => dispatch(ordered())}>Order IceCream</button>
            <input
                type='number'
                value={value}
                onChange={(e) => setValue(parseInt(e.target.value))}
            />
            <button onClick={() => dispatch(restocked(value))}>
                Restock IceCream
            </button>
        </div>
    );
};

export default IcecreamView;
