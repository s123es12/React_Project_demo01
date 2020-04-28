import React, { Component } from 'react';
import{
    Modal,
    Button
} from 'antd';

class Register extends Component {
    
    render() { 
        return (
            <Modal
                title="Basic Modal"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        );
    }
}
 
export default Register;