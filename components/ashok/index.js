
import { Component } from "react"

class Ashok extends Component {
    state = { count: 0 }

    increaseCount = () => {
        this.setState((pevState) => ({ count: pevState.count + 1 }))
    }

    render() {
        const { count } = this.state
        return (
            <div>
                <h1>{count}</h1>
                <button type="button" onClick={this.increaseCount}>Increase</button>

            </div>
        )
    }
}

export default Ashok