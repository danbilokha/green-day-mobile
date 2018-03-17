import React, {PureComponent} from 'react';

class Body extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='body-content'>
                {this.props.children}
            </div>
        )
    }
}

export {Body};