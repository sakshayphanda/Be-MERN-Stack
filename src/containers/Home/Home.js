import React from 'react';
import './Home.sass';
import { useParams } from 'react-router-dom';

/**
 * React.PureComponent is similar to React.Component. 
 * The difference between them is that React.Component doesn’t implement shouldComponentUpdate(), 
 * but React.PureComponent implements it with a shallow prop and state comparison
 */
class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log('====================================');
    console.log(props);
    console.log('====================================');
    this.state = {
      data: ''
    };
  }

  static getDerivedStateFromProps(latestprops, lateststate) {
    console.log('getDerivedStateFromProps', latestprops, lateststate);
    return {
      abc: 'a'
    };
    /**
     * Called right before th render method.
     * Used RARELY .
     * Only one purpose. 
     * It enables a component to update its internal state as the result of changes in props.
     * Can be used for implementing a <Transition> component that compares its 
     * previous and next children to decide which of them to animate in and out.
     */
  }

  // componentWillMount() {} //deprecated

  render() {
    console.log('render');
    
    /**
     * REQUIRED METHOD
     * It is used to render JSx elements into the DOM
     * It should not modify the state of the component
     */
    return (
    <div>
      Home it is {this.props.path}
    </div>
    );
  }

  componentDidMount() {
    console.log('did mount');    
    console.log(window.location.search)
    /**
     * Invoked immediately after a component is mounted (inserted into the DOM tree)
     * For side-effects or subscriptions(API calls) 
     */

  }

  // componentWillReceiveProps() {} legacy deprecated


  // Called automatically in the case of purecomponent
  
  // shouldComponentUpdate(nextProps: any, nextState:any) {
  //   console.log('shouldComponentUpdate', nextProps, nextState);

  //   /**
  //    * RARE usecase
  //    * CHecked automatically with the Pure component
  //    * Invoked immediately after updating occurs. 
  //    * This method is not called for the initial render.
  //    */
  //   return true; // if false the render, getSnapshotBeforeUpdate and componentDidUpdate methods wont be called
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate, prevProps and state: ', prevProps, prevState);
    
    /**
     * RARE Usecase
     * invoked right before the most recently rendered output is committed to e.g. the DOM.
     * It enables your component to capture some information from the DOM (e.g. scroll position) before 
     * it is potentially changed. 
     * Any value returned by this lifecycle will be passed as a parameter to componentDidUpdate()
     * May be useful with scroll positions
     * A snapshot value (or null) should be returned.
     */
    return null; // null if you dont want any snapshot
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('did update,  prevProps and state: ', prevProps, prevState, snapshot);
    
    /**
     * a good place to do network requests as long as you compare the current props to previous props 
     * (e.g. a network request may not be necessary if the props have not changed).
     */
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
  }

  componentWillUnmount() {
    console.log('unmount');
    
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