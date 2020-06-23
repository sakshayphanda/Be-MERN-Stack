import React from 'react';
import './Home.sass';

/**
 * React.PureComponent is similar to React.Component. 
 * The difference between them is that React.Component doesn’t implement shouldComponentUpdate(), 
 * but React.PureComponent implements it with a shallow prop and state comparison
 */
class Home extends React.PureComponent {
  constructor(public props: {}) {
    super(props);

    this.state = {
      data: ''
    };
  }

  static getDerivedStateFromProps(props: any, state: any) {
    /**
     * Called right before th render method.
     * Used RARELY .
     * Can be used for implementing a <Transition> component that compares its 
     * previous and next children to decide which of them to animate in and out.
     */
  }

  // componentWillMount() {} //deprecated

  render() {
    /**
     * REQUIRED METHOD
     * It is used to render JSx elements into the DOM
     * It should not modify the state of the component
     */
    return (
    <div>
    </div>
    );
  }

  componentDidMount() {
    /**
     * Invoked immediately after a component is mounted (inserted into the DOM tree)
     * For side-effects or subscriptions(API calls) 
     */

  }

  // componentWillReceiveProps() {} legacy deprecated

  shouldComponentUpdate(nextProps: any, nextState:any) {
    /**
     * Invoked immediately after updating occurs. 
     * This method is not called for the initial render.
     */
    return true; // if false the render, getSnapshotBeforeUpdate and componentDidUpdate methods wont be called
  }

  getSnapshotBeforeUpdate(prevProps: {}, prevState: {}) {
    /**
     * invoked right before the most recently rendered output is committed to e.g. the DOM.
     * It enables your component to capture some information from the DOM (e.g. scroll position) before 
     * it is potentially changed. 
     * Any value returned by this lifecycle will be passed as a parameter to componentDidUpdate()
     * 
     * A snapshot value (or null) should be returned.
     */
    return null; // null if you dont want an
  }

  componentDidUpdate(prevProps: {}, prevState: {}, snapshot: {}) {
    /**
     * a good place to do network requests as long as you compare the current props to previous props 
     * (e.g. a network request may not be necessary if the props have not changed).
     */
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
  }

  componentWillUnmount() {
    /**
     * Clean up code
     * unsubscribe and all
     */
  }
}

export default Home;



    // this.setState(
    //   {
    //     data: 'abc'
    //   }
    // );

    // forceUpdate() // to forcefully update the dom