import React, { Component } from 'react';
import { 
    Icon,
    Dropdown,
    Row,
    Col,
    Menu,
    Button,
    Modal,
    Form, 
    Input,  
    Checkbox
} from 'antd';

import "./header.less";
import Register from '../Register/Register'

import {loginRequest,registerRequest} from '../../Ajax/axios';

class MyHeader extends Component {
    state ={
      visible:false,
      visible2:false,
      showMsg:""
    }
    showRegister=()=>{
      this.setState({visible:true});
    }
    handleCancel=()=>{
      this.setState({visible:false,visible2:false});
    }
    showLogin=()=>{
      this.setState({visible2:true});
    }
    handleSubmit = async ()=>{
      
    }
    handleRegister = async()=>{
      const {username,password}= this.props.form.getFieldsValue();
      const response = await registerRequest({username,password});
      const result = response.data;
      if(result.code===0){
        console.log("register successed");
      }else{
        // console.log(result);
        // alert(result.msg);
        this.setState({showMsg:result.msg})
      }
    }
    render() { 
        const { getFieldDecorator,getFieldsValue } = this.props.form;
        const menu = (
            <Menu>
              <Menu.Item key="0">
                <a rel="noopener noreferrer" href="dangerouslySetInnerHTML">
                  <Icon type="global"/> 繁體中文
                </a>
              </Menu.Item>
              <Menu.Item key="1">
                <a rel="noopener noreferrer" href="dangerouslySetInnerHTML">
                  <Icon type="transaction"/> HKD
                </a>
              </Menu.Item>
            </Menu>
          );
        return (
          <div className="header_main">
            <Row >
                <Col span={18} push={6} style={{textAlign:"right"}}>
                  
                    <Dropdown overlay={menu} trigger={['click']}>
                      <a className="ant-dropdown-link header_nav" onClick={e => e.preventDefault()}>
                          <><Icon type="global" /><Icon type="down"/></>
                      </a>
                    </Dropdown>
                    <a className="header_nav" href="http://www.google.com" target="_blank">出租你的旅居</a>
                    <a className="header_nav" href="http://www.google.com" target="_blank">舉辦體驗</a>
                    <a className="header_nav" href="dangerouslySetInnerHTML" >幫助 </a>
                    <a className="header_nav" onClick={this.showLogin}>登入</a>
                    <a className="header_nav register" onClick={this.showRegister}>登記</a>
                  
                </Col>
                <Col span={6} pull={18} >
                    <a><Icon style={{fontSize:"30px",color:"Crimson",marginTop:"15px",marginLeft:"10px"}}type="home"/></a>
                </Col>
            </Row> 

            <Modal
              title="登記"
              visible={this.state.visible}
              onCancel={this.handleCancel}
              style={{textAlign:"center"}}
              footer={null}
            >
              <Form onSubmit={this.handleRegister} className="register-form">
                <Form.Item>
                  {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Username"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your password!' }],
                  })(
                    <Input
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Password"
                    />,
                  )}
                </Form.Item>
                  {this.state.showMsg?<h3 style={{color:"red",marginBottom:"0",fontWeight:"bold"}}>{this.state.showMsg}</h3>:""}
                <Button onClick={this.handleRegister} type="primary" size="large"  style={{width:"100%",marginTop:"20px"}}>提交</Button>
              </Form>
            </Modal>  

            <Modal
              title="登入"
              visible={this.state.visible2}
              onCancel={this.handleCancel}
              style={{textAlign:"center"}}
              footer={null}
              onSubmit
            >
              <Form onSubmit={this.handleSubmit} className="register-form">
                <Form.Item>
                  {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Username"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your password!' }],
                  })(
                    <Input
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Password"
                    />,
                  )}
                </Form.Item>

                <Button type="primary" onClick={this.handleSubmit} size="large"  style={{width:"100%",marginTop:"20px"}}>登入</Button>
              </Form>
            </Modal>  
          </div>
          
            
            
        );
    }
}
 
export default Form.create()(MyHeader);