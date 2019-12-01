import React from 'react';
import { directive } from '@babel/types';
import {Link} from 'react-router-dom'
import Header from '../header'


function CheckoutPage() {
    return(
        <React.Fragment>
            <Header/>
        <div>CheckoutPage</div>
        <Link to="/">Home</Link>
        <input></input>
        </React.Fragment>
    )
}

export default CheckoutPage