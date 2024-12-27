import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProductDetailsPage from './pages/productDetailsPage';
import ProductsPage from './pages/productsPage';


const Routes = () => (
    <>
        <Navbar />
        <Switch>
            <Route exact path="/" component={ProductsPage} />
            <Route path="/:id" component={ProductDetailsPage} />
        </Switch>
        <Footer />
    </>
)

export default Routes;