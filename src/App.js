import { Component, createContext, createRef, useState } from "react";

const Theme = createContext({
  mode: 'dark'
});

export default function App() {
  const [shouldRender, setShouldRender] = useState(true);

  return (  
    <>
    <Theme.Provider value = {{mode: 'dark'}}>
      {/* <Counter startingCount={10} /> */}
      { shouldRender && <Counter /> }
      <button onClick={() => setShouldRender(!shouldRender)}>
        Toggle counter
      </button>
    </Theme.Provider>
    </>
  );
}

class Counter extends Component {
  // 1st way
  // static contextType = Theme;
  constructor(props) {
    super(props);
    this.state = {
      count: props.startingCount ?? 0
    };
    this.ref = createRef();
  }

  componentDidMount() {
    console.log('mounted!');
    console.log(this.ref);
    console.log(this.context);
  }
/*
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
  }
  
  componentWillUnmount() {
    console.log('Unmounting!')
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    return nextState.count < 3;
  }
*/
  render() {
    return (
      <>
        <button ref={this.ref} onClick={() => {
          this.setState({
            count: this.state.count + 1
          });
        }}
        >Increment
        </button>
        <p>Count: {this.state.count}</p>
        {/* 1st way */}
        {/* <p>Theme: {this.context.mode}</p> */}

        {/* 2nd way */}
        <Theme.Consumer>
          {
            context => <p>Theme: {context.mode} </p>
          }
        </Theme.Consumer>
      </>
    );
  }
}