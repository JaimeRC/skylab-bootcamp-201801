'use strict';

function HelloWorld() {
    return <h1>Hello, World!</h1>
}

function Hello(props) {
    return <h1>Hello, {props.name}!</h1>
}

class Calc extends React.Component {
    constructor() {
        super();
        this.state = {
            a: 0,
            b: 0,
            res: 0
        }
    }

    keepA = (e) => {
        this.setState({ a: parseFloat(e.target.value) });
    }

    keepB = function (e) {
        this.setState({ b: parseFloat(e.target.value) });
    }

    calculate = (e) => {
        e.preventDefault();
        //this.state.res = this.state.a + this.state.b; No es correcto esta forma.
        this.setState((prevState) => {
            return {
                res: prevState.a + prevState.b
            }
        })
        //  this.setState({
        //      res: this.setState.a + this.setState.b
        //  });
    }

    render() {
        return <form onSubmit={this.calculate} >
            <input type="text" onChange={this.keepA} />
            +
            <input type="text" onChange={this.keepB.bind(this)} />
            <button type="submit">=</button>
            <input type="text" disable value={this.state.res} />
        </form >
    }
}

ReactDOM.render(
    <main>
        <section>
            <HelloWorld />
            <Hello name="John" />

            <Calc />
        </section>
    </main>,
    document.getElementById('root'));
