'use strict';

const helloWord = 'Hello, World!';

function salutation() {
    return helloWord;
}

function salute(){
    alert(helloWord);
}

ReactDOM.render(
    <main>
        <section>
            {/*<h1>{helloWord}</h1>*/}
            {salutation()}
            <hr />
            <button className="round-red-button" onClick={salute}>salute</button>
        </section>
    </main>,
    document.getElementById('root'));
