import * as React from "react";

export interface IHelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<IHelloProps, {}> {
    render() {
       return <h1>{this.props.compiler} {this.props.framework} Exp</h1>;
    }
}


