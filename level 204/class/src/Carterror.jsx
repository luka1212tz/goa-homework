class CartErrorBoundary extends React.Component {
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
          <h2>კალათის ჩატვირთვა ვერ მოხერხდა</h2>
          <button onClick={this.reset}>
            კალათის გასუფთავება
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default CartErrorBoundary