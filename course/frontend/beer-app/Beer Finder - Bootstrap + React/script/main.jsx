class BeerFinderApp extends React.Component {
    constructor() {
        super()
        this.state = {
            listBeer: [],
            beer: {}
        }
    }

    showListBeer = (queryBeers) => {
        BeersApi.getBeerList(queryBeers)
            .then(data => this.setState({
                listBeer: data
            }))
    }

    showBeer = (idBeer) => {
        BeersApi.getBeer(idBeer)
            .then(beer => this.setState({ beer }))
    }

    setReset = () => {
        this.setState({
            listBeer: [],
            beer: {}
        })
    }

    render() {
        return <div>
            <header>
                <ButtonReset onSetReset={this.setReset} />
            </header>
            <main>
                <SearchBeer onShowListBeer={this.showListBeer} />
                <BeerList listBeer={this.state.listBeer} onShowBeer={this.showBeer} />
                <InfoBeer beer={this.state.beer} />
            </main>
        </div>

    }
}

function BeerList(props) {
    return (
        <div className="list_beer">
            <table className="table table-hover">
                <thead className="header_table">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Model</th>
                        <th scope="col">Type</th>
                        <th scope="col">Organic</th>
                    </tr>
                </thead>
                <tbody id="list_brand">
                    {props.listBeer.map(beer => {
                        return (
                            <tr data-toggle="modal" data-target="#modal_table" onClick={
                                (e) => {
                                    e.preventDefault
                                    props.onShowBeer(beer.id)
                                }
                            }>
                                <th scope="row">{beer.id}</th>
                                <td>{beer.name} </td>
                                <td>{beer.type}</td>
                                <td>{beer.isOrganic} </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div >
    )
}

function InfoBeer(props) {
    console.log(props.beer)
    return (
        <div className="modal fade" id="modal_table" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div id="brand_name" className="modal-header">
                        <h4 className="modal-title" id="modal_label">{props.beer.name}</h4>
                        <img id="modal_image" src="" />
                    </div>
                    <div id="modal_body" className="modal-body">
                        <p>{props.beer.description}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" >Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


class SearchBeer extends React.Component {
    constructor() {
        super()
        this.state = {
            query: ""
        }
    }

    setQuery = (e) => {
        this.setState({ query: e.target.value })
    }

    onSearch = (e) => {
        e.preventDefault();
        this.props.onShowListBeer(this.state.query)
        this.setState({ query: "" })
    }

    render() {
        return (
            <div id="intro_search" className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 font-weight-normal">Beer Finder</h1>
                    <form onSubmit={this.onSearch}>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" onChange={this.setQuery} value={this.state.query} />
                            <div className="input-group-append">
                                <input type="submit" id="button_search" className="btn btn-outline-secondary" defaultValue="Search" /> </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

function ButtonReset(props) {
    return (
        <nav className="site-header sticky-top py-1">
            <div id="logo" className="container d-flex flex-column flex-md-row justify-content-between">
                <a className="py-2" href="#" onClick={props.onSetReset}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="d-block mx-auto">
                        <circle cx={12} cy={12} r={10} />
                        <line x1="14.31" y1={8} x2="20.05" y2="17.94" />
                        <line x1="9.69" y1={8} x2="21.17" y2={8} />
                        <line x1="7.38" y1={12} x2="13.12" y2="2.06" />
                        <line x1="9.69" y1={16} x2="3.95" y2="6.06" />
                        <line x1="14.31" y1={16} x2="2.83" y2={16} />
                        <line x1="16.62" y1={12} x2="10.88" y2="21.94" />
                    </svg>
                </a>
            </div>
        </nav>

    )
}

ReactDOM.render(<BeerFinderApp />,
    document.getElementById('root'))
