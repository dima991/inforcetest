import {Route, Switch} from 'react-router';
import './App.css';

import CardsPage from './components/CardsPage/CardsPage';
import ProductPage from './components/ProductPage/ProductPage'


const App = () => {
return (
  <Switch>
      <Route exact path= "/" 
        render = { () => <CardsPage />}/>
      <Route exact path="/product/:id"
      render = { () => <ProductPage/>}/>
  </Switch>
)
}
export default App;
