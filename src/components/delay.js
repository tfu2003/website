import React from 'react';
import PropTypes from 'prop-types';

class Delay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hidden : true};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({hidden: false});
        }, this.props.wait);
    }

    render() {
        return this.state.hidden ? '' : this.props.children;
    }
}

Delay.propTypes = {
  wait: PropTypes.number.isRequired
};

export default Delay;