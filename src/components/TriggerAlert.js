import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './common/button';
import Alert from './common/alert';

class TriggerAlert extends Component {
    state = {
        displayAlert: false
    };

    handleDisplayAlert = () => {
        this.setState({
            displayAlert: true
        });
    }

    handleCloseAlert = () => {
        this.setState({
            displayAlert: false
        });
    }

    render() {
        let { displayAlert } = this.state;

        return (
            <>
                <AlertButton onClick={this.handleDisplayAlert}>Click Meh</AlertButton>
                {displayAlert &&
                    <Alert
                        title="StepStone Alert"
                        onClick={this.handleCloseAlert}
                    >
                        This is an alert for StepStone Group demo purposes.
                    </Alert>
                }
            </>
        );
    }
}

export default TriggerAlert;

const AlertButton = styled(Button)`
    margin: 40vh auto 0;
    display: block;
`;