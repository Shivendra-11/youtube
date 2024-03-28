
import Head from './components/Head';
import './App.css';
import Body from './components/Body';
import store from './utils/store';
import { Provider } from 'react-redux';
import Maincontainer from './components/Maincontainer';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Watchpage from './components/Watchpage';

const appRouter=createBrowserRouter([{
  path:'/',
  element:<Body/>,
  children:[
    {
  path:'/',
  element:<Maincontainer/>,
    },

    {
      path:'watch',
      element:<Watchpage/>,
    },
  ],

},
])

function App() {
  return (
    <Provider store={store} >
    <div className="App">
<Head/>
{/* <Body/>
 */}
<RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;
