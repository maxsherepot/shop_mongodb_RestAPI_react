import { Switch, Route, Redirect } from 'react-router-dom';
import ProductDetailsPage from './pages/productDetailsPage';
import ProductsPage from './pages/productsPage';


const Routes = () => (
    <Switch>
        <Route exact path="/" component={ProductsPage} />
        <Route path="/:id" component={ProductDetailsPage} />
    </Switch>
)

export default Routes;