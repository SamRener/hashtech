import React, { Component } from 'react';
import '../Background/Background.css';
export default class Background extends Component{
    render(){
        return (
            this.props.type === 'video'? (
                <div>
                    <video autoplay muted loop className="bg-video">
                        <source src={this.props.media} type="video/mp4"/>
                        Your browser does not support HTML5 video.
                    </video>
                    <div className="content"></div>
              </div>
            ): (
                <div>

                </div>
            )
        );
    }
}