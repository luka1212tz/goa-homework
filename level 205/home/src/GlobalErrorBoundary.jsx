import React from "react"

class GlobalErrorBoundary extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false,
      ticketId: ""
    }
  }

  static getDerivedStateFromError() {
    return {
      hasError: true
    }
  }

  componentDidCatch(error) {
    let ticket =
      "TICKET-" + Math.floor(Math.random() * 100000)

    console.log(error)

    this.setState({
      ticketId: ticket
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong</h1>

          <p>
            Support has been notified
          </p>

          <h2>
            Ticket ID: {this.state.ticketId}
          </h2>
        </div>
      )
    }

    return this.props.children
  }
}

export default GlobalErrorBoundary