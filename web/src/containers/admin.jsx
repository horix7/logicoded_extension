import React , { Component, Fragment  } from "react";
import  CardElement from "../compnents/cards";
import { Grid } from '@material-ui/core'
import Tables  from "../compnents/tables"
export default class AdminPage extends Component {

    render () {
        return (
            <Fragment>

                <div className="adminHeader">
                    <h1>ADMIN DATA</h1>
                </div>
               <div className="flex">
                   <div >
                   <CardElement className="cards" />
                   </div>
                   <div >

                   <CardElement className="cards" />
                   </div>
                   <div >

                   <CardElement className="cards" />
                   </div>

               </div>

               <Tables /> 
            </Fragment>
        )
    }

}