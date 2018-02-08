class SpotifyApp extends React.Component {
    constructor() {
        super()
        this.state = {
            query: "",
            artists: []
        }
    }


    keepQuery = (e) => this.setState({ query: e.target.value })

    onSearch = (e) => {
        e.preventDefault()
        spotifyApi.getArtists(this.state.query)
            .then((artists) => {
                artists = artists.map((obj) => {
                    if (obj.images.length === 0) {
                        obj.images[1] = {
                            url: "images/no_image.jpg"
                        }
                    }
                    return obj
                })
                this.setState({ artists })
                // this.setState({artists: artists})
            })
        this.setState({ query: '' })
    }



    render() {
        return (
            <div>
                <div id="intro_search" className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                    <div className="col-md-5 p-lg-5 mx-auto my-5">
                        <h1 className="display-4 font-weight-normal">SPOTIFY</h1>
                        <form onSubmit={this.onSearch}>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="" onChange={this.keepQuery} value={this.state.query} />
                                <div className="input-group-append">
                                    <input type="submit" id="button_search" className="btn btn-outline-secondary" defaultValue="Search" /> </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="container marketing">
                    <div className="row">
                        <ShowAllArtist artists={this.state.artists} />
                    </div>
                </div>
            </div>)
    }
}

function ShowAllArtist(props) {
    return <div>
        {props.artists.map(artist =>
            <div className="list_artists">
                <div className="col-lg-4">
                    <img id="image_artist" className="rounded-circle" src={artist.images[1].url} />
                    <h5 id="artist_name">{artist.name}</h5>
                    <button id="artt" type="submit" className="btn btn-primary btn-sm" value={artist.id}>View details</button>
                </div>
            </div>
        )}
    </div>
}


ReactDOM.render(<SpotifyApp />,
    document.getElementById('root'))
