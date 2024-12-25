import { Switch, Route, Redirect } from 'react-router-dom';
import ProductsPage from './pages/productsPage';


const Routes = () => (
    <Switch>
        <Route exact path="/" component={ProductsPage} />
    </Switch>
)

export default Routes;