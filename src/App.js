import React, { Component, useContext, useReducer, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import obj from './assets/data.json';
import { loadShow, left, right } from './actions';
import reducer from './reducers';

export const AppContext = React.createContext(null);

const List = () => {
  const ctx = useContext(AppContext);

  useEffect(() => {
    ctx.dispatch(loadShow(ctx.state.lists, ctx.state.page));
  }, true);

  return (
    <div>
      {ctx.state.show.map(
        (value, index) => (
          <div key={index} >{value.content}</div>
        )
      )}

    </div>

  );
};

// const List = () => {
//   const ctx = useContext(AppContext);
//   return (
//     <div>
//       {
//         ctx.state.show.map(
//           (value) => (
//             <div>
//               {value.content}
//             </div>
//           )
//         )
//       }
//     </div>

//   );
// };

const Arrow = () =>{
  const ctx = useContext(AppContext);

  const handleLeftClick = () => {
    ctx.dispatch(left(ctx.state.lists, ctx.state.page));
  };

  const handleRightClick = () => {
    ctx.dispatch(right(ctx.state.lists, ctx.state.page));
  };

  

  return (
      <div>
        <button onClick={handleLeftClick} disabled={ctx.state.leftStatus ? "" : "disabled"}>左</button>
        <button onClick={handleRightClick} disabled={ctx.state.rightStatus ? "" : "disabled"}>右</button>
      </div>
  );
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    lists: obj.data,
    show: [],
    page: 0,
    leftStatus: false,
    rightStatus: false,
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div>
        <List />
        <Arrow />
      </div>
    </AppContext.Provider>

  );
};



export default App;
