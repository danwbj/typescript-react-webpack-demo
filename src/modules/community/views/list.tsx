import * as React from "react";

export interface ListProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class List extends React.Component<ListProps, undefined> {
    render() {
        return <h1>community list</h1>;
    }
}