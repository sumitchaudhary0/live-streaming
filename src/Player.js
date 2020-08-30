import React, { Component } from 'react'
import { NodePlayerView } from 'react-native-nodemediaclient';
export default class Player extends Component {
  channel = 'nodeskwela';

    render() {
        return (
           <>
            <NodePlayerView
            style={{ height: 200 }}
            ref={(vp) => { this.vp = vp }}
            inputUrl={`rtmp://192.168.43.237/live/${this.channel}`}
            scaleMode={"ScaleAspectFit"}
            bufferTime={300}
            maxBufferTime={1000}
            autoplay={true}
          />
           </>
        )
    }
}
