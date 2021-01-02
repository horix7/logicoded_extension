import { Button } from '@material-ui/core';
import Vscode from '../assets/vscode.png'
import ReactPlayer from 'react-player'
import vim from '../assets/vim.png'
import jupyter from '../assets/jupyter.png'
import atom from '../assets/atom.png'
import paycharm from '../assets/paycharm.png'
import sublime from '../assets/sublime.png'
import logo from '../assets/logo.png'
import { SignUpForm } from '../compnents/forms'
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
                            <img src={Vscode} width="30px" alt=""/>
                            <p>Download For Free </p>
                        </div>
                    </div>

                    <div className="videoplayer">
                        <ReactPlayer playIcon  url="https://www.youtube.com/watch?v=6avJHaC3C2U" />
                    </div>
                </div>

                <div className="iconplace">
                    <div className="threeIcon">
                        <img width="120px" src={Vscode} alt=""/>
                        <img width="100px" src={sublime} alt=""/>
                        <img width="100px" src={jupyter} alt=""/>
                    </div>

                    <div className="midlogo">
                        <img width="200px"  src={logo} alt=""/>
                    </div>

                    <div className="threeIcon">
                        <img width="100px" src={vim} alt=""/>
                        <img width="100px" src={paycharm} alt=""/>
                        <img width="100px" src={atom} alt=""/>
                    </div>
                </div>

                <div className="bigdemo">
                    <p className="tittle">Demo </p>

                    <ReactPlayer playIcon width="100%" url="https://www.youtube.com/watch?v=6avJHaC3C2U" />

                </div>

                <div className="bidDemo">
                    <p className="tittle">Why Use Deep Snippet On Your IDE? </p>
                    <p>Experience the power of using other developers simple functionality codes without writing yours from scratch</p>
                
                    <div className="twoElem">
                    <ReactPlayer playIcon width="100%" url="https://www.youtube.com/watch?v=6avJHaC3C2U" />
                    <div className="content">
                        <p>Build Software in few Days instead of 3-9 months of writing your own coding</p>
                        </div>
                        </div>

                    <div className="twoElem">
                    <div className="content">
                        <p>90% less coding. Re-usable snippet written with experience from other developers in the world.</p>
                    </div>
                    <ReactPlayer playIcon width="100%" url="https://www.youtube.com/watch?v=6avJHaC3C2U" />
                    
                    </div>
                </div>


                <div className="twoElem">
                    <div className="content">
                        <p>STAY IN TOUCH </p>
                    </div>

                    <div className="stay_in_touch_form">
                        <SignUpForm />
                    </div>
                </div>
            </Fragment>
        )
    }
}