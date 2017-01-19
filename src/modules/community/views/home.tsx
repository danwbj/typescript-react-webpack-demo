import * as React from "react";

export interface HomeProps {
    compiler : string;
    framework : string;
}
export interface HomeState {
    isActive : any
}

// 'HelloProps' describes the shape of props. State is never set so we use the
// 'undefined' type.
export class Home extends React.Component < HomeProps,
    HomeState> {
    public state : HomeState
    constructor(props : HomeProps) {
        super(props);
        console.log(this.state)
        this.state = { isActive: 'hahahah' }
        console.log(this.state)
    }

    componentDidMount() {
        console.log('pppp')
    }

    render() {
        // console.log('this.props.compiler')
        // console.log(this.props.compiler)
        return <h1>community home</h1>;
    }
}