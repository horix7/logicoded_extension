import { Button } from '@material-ui/core';
import Vscode from '../assets/vscode.png'
import ReactPlayer from 'react-player'


import React , { Component, Fragment } from 'react'

export default class HomePage extends Component {
    state  = {

    }



    render () {
        return (

            <Fragment>
                <div className="twoElem">
                    <div className="content">
                        <p className="maonHeader">
                        Coding is Collaboration
                        </p>
                        <p className="paragraph">
                        Deep Snippet gives you access to thousands of simple, easy to use functionality snippet written by other developers in the world.
                        </p>

                        <div className="buttonHolder">
                            <img src={Vscode} width="20px" alt=""/>
                            <p>Download For Free </p>
                        </div>
                    </div>

                    <div className="videoplayer">
                        <ReactPlayer playIcon playing url="https://www.youtube.com/watch?v=6avJHaC3C2U" />
                    </div>
                </div>

            </Fragment>
        )
    }
}