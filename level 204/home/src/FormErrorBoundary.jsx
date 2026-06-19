import React from "react"

class FormErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  reset = () => {
    this.setState({ hasError: false })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>
            უსაფრთხოების წესების დარღვევა! ეს სახელი აკრძალულია.
          </h2>

          <button onClick={this.reset}>
            თავიდან ცდა
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default FormErrorBoundary