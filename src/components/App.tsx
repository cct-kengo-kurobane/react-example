import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from './Hello';


export class App extends React.Component {
  render() {
      return <Hello compiler="React" framework="Redux" />;
  }
}
