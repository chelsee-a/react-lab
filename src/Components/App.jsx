import React from 'react';



class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Chelsee',
            greeting: 'Good morning',
            placeholder: 'Input text here',
            input: '',
            hasLoaded: false
        };
    }

    handleChange(event) {
        //console.log(event.target.value)
        this.setState({ input: event.target.value })
    }

    Toggle(event) {
        //event.preventDefault();
        this.setState(prevState => ({
            hasLoaded: !prevState.hasLoaded
        }));
        //alert('Button was clicked')
    }

    componentDidMount() {
        this.setState({hasLoaded: true});
        
    } 

    render() {
        if (this.state.hasLoaded === true) {
            return (
                <React.Fragment>
                    <h1>{this.state.greeting}, {this.state.name}!</h1>
                    <p>
                        {this.props.value}
                    </p>
                    <input type="text" placeholder={this.state.placeholder}
                        input={this.state.input} onChange={(event) => this.handleChange(event)} />
                    <button onClick={(event) => this.Toggle(event)}>Click Me</button>
                </React.Fragment>
            )
        }
        else {
            return (
                <React.Fragment>
                    <h1>Loading...</h1>
                    <button onClick={(event) => this.Toggle(event)}>Click Me</button>
                </React.Fragment>

            )
        }
    }
}










export default App;