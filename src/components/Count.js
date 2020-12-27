import React, { Component } from 'react'

export default class Count extends Component {
    constructor(props){
        super(props)
        this.state = {count:0}
        this.increase=this.increase.bind(this)
        this.decrease=this.decrease.bind(this)
        this.reset=this.reset.bind(this)
    }
    increase(){
        this.setState({count:this.state.count+1})
    }

    decrease(){
        this.setState({count:this.state.count-1})
    }

    reset(){
        this.setState({count:0})
    }
    render() {
        return (
            <div>
                <h1 style={{
                    color:'hotpink',
                    fontSize:50,
                    fontWeight:'bold'
                }}>COUNTER APP</h1>
                <h1 style={{
                    color:'pink',
                    fontSize:45,
                    border:'solid 5px pink',
                    width:100,
                    margin:'0 auto',
                    marginBottom:50,
                    padding:10,
                    borderRadius:'30%'

                }}>{this.state.count}</h1>
                <button style={{
                    color:'white',
                    fontSize:25,
                    margin:10,
                    padding:10,
                    backgroundColor:'hotpink',
                    borderRadius:'50%',
                    border:'solid 3px pink'

                }} onClick={this.increase}>INCREASE</button>
                <button style={{
                    color:'white',
                    fontSize:25,
                    margin:10,
                    padding:10,
                    backgroundColor:'hotpink',
                    borderRadius:'50%',
                    border:'solid 3px pink'

                }} onClick={this.decrease}>DECREASE</button>
                <button style={{
                    color:'white',
                    fontSize:25,
                    margin:10,
                    padding:10,
                    backgroundColor:'hotpink',
                    borderRadius:'50%',
                    border:'solid 3px pink'

                }} onClick={this.reset}>RESET</button>
                
            </div>
        )
    }
}
