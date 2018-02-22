class SearchForm extends Component {
    constructor() {
        super()

        // this.state = {value: ''}

        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(event) {
        const value = this.input.value
        //const value = this.state.value

        this.props.onSearch(value)
        event.preventDefaut()
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    ref={node => this.input = node}
                    /*onChange={event => this.setState({value: event.target.value})} */
                    type="text" />
                <button type="submit">Search</button>
            </form>
        )
    }
}