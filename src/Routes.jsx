import React from 'react';
import { Switch, Route } from "react-router-dom";

import HomePage from './screens/HomeScreen';
import NotFound from './screens/NotFound';
import Cart from './screens/Cart';
import Products from './screens/Products/Products';
import Productdetail from './screens/Products/ProductDetail';

function Asrouter(){
    return(
        <div>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/products' component={Products} />
                <Route path="/products/:id" component={Productdetail} />
                <Route exact path="/cart" component={Cart} />
                <Route path='*'>
                    <NotFound />
                </Route> 
            </Switch>
        </div>
    )
}

export default Asrouter;