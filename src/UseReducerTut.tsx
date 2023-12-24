import { useReducer } from 'react'
import Button from './components/Button';
import DismissingHeader from './components/DimissingHeader';

const reducer = (state: any, action: any) => {
    switch(action.type) {
        case "Increment":
            return {count: (state.count + 1), showHeader: state.showHeader}
        case "toggleHeader":
            return {count: state.count, showHeader: action.toggleType};
        default:
            return state;
    }
}

const UseReducerTut = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0, showHeader: false});

  return (
    <center>
        <div>
            <DismissingHeader onClose={() => {
                dispatch({type: "toggleHeader", toggleType: false});
              } } showHeader={state.showHeader} title={'Hello I am a header here'}>
            </DismissingHeader>
            <Button text={'Show Header'} onClick={() => {
                dispatch({type: "toggleHeader", toggleType: true});
            }} color='danger'></Button>
            <h3>
                {state.count}
            </h3>
            <Button text={'+'} onClick={() => {
                console.log(state.count);
                dispatch({type: "Increment"});
            }} color='primary'></Button>
        </div>
    </center>    
  )
}

export default UseReducerTut;