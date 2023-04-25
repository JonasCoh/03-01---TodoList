import { Component } from 'react'

class ClockEx extends Component {

    timerId = null

    constructor(props) {
        super(props)
        this.state = {
            time: new Date().toLocaleTimeString(),
            num: 10,
        }
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            console.log('running...');
            this.setState({ time: new Date().toLocaleTimeString() })
        }, 1000);
    }

    // componentDidUpdate(){

    // }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    render() {

        return (
            <div className="ClockEx">
                {this.props.title} {this.state.time}
                <button onClick={() => this.setState({ time: new Date().toLocaleTimeString() })}> Update Time </button>
            </div>
        )
    }

}
export default ClockEx;