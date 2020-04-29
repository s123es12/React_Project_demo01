import React, { Component } from 'react';
import { 
    Card,
    Col,
    Row,
    Menu,
    Icon,
    Input,
    Select,
    DatePicker,
    Dropdown,
    Button,
    Calendar
} from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';

import "./content.less";
import happydoctor from '../../images/happydoctor.jpg'
import home2 from '../../images/home2.jpg'
import online_shopping from '../../images/online-shopping.jpg'

moment.locale('en');
const { Option } = Select;
const {RangePicker} = DatePicker
class MyContent extends Component {
    state={
        value:moment(),
        dropdownMenuDataSelect:false
    }
    handleShowDropSelect=()=>{
        let bool = !this.state.dropdownMenuDataSelect;
        this.setState({dropdownMenuDataSelect:bool});
    }
    render() { 
        function onPanelChange(value, mode) {
            console.log("onPanelChange(): ",value, mode);
        }
        
        
        const menu = (
            <Menu>
              <Menu.Item key="0">
                <a href="http://www.alipay.com/">1st menu item</a>
              </Menu.Item>
              <Menu.Item key="1">
                <a href="http://www.taobao.com/">2nd menu item</a>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item key="3">3rd menu item</Menu.Item>
            </Menu>
          );
          const menu2 = (
             
            <div style={{backgroundColor: "white",width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                <Calendar 
                    
                    fullscreen={false} 
                    value={moment()} 
                    onSelect={(data)=>console.log("onSelect(): "+data)} 
                    onPanelChange={this.onPanelChange}
                />
            </div>   
            
            
          );
        
        return (
          <div className="content" style={{height:"100%",backgroundColor:"white"}}>
            <div className="content_menu">
                <div className="content_menu_header" style={{width:"100%"}}>
                    <Menu mode="horizontal" style={{marginBottom:"10px"}}>
                        <Menu.Item><a>尋找住宿</a></Menu.Item>
                        <Menu.Item><a>長期住宿</a></Menu.Item>
                        <Menu.Item><a>體驗</a></Menu.Item>
                        <Menu.Item><a>網上體驗</a></Menu.Item>
                    </Menu>
                    <div className="content_menu_input" style={{display:"flex"}}>
                        
                        <div className="menu_inputDiv" >
                            <label htmlFor="input01">
                                <div style={{padding:"10px"}}>
                                    <h5>位置</h5>
                                    <Input id="input01" placeholder="新增城市、地標或地址" />
                            
                                </div>
                            </label>
                        </div>
                 
                        
                        <div className="menu_inputDiv">
                            <Dropdown overlay={menu2} trigger={['click']}
                                visible={this.state.dropdownMenuDataSelect}
                            >
                                <Button 
                                    onClick={e => {e.preventDefault();this.handleShowDropSelect();}}
                                    style={{width:"100%",height:"100%",margin:"0"}}
                                >
                                     
                                
                                    <h5>入住／退房</h5>
                                       
                                </Button>   
                            </Dropdown>
                        </div>
                        <div className="menu_inputDiv" style={{borderRight:"unset"}}>
                            <Dropdown overlay={menu} trigger={['click']}>
                                <Button 
                                    onClick={e => e.preventDefault()}
                                    style={{width:"100%",height:"100%",margin:"0"}}
                                ><h5 >旅人</h5>
                                <input placeholder="wewewew" disabled="disabled"/>
                                </Button>
                            </Dropdown>
                        </div>
                        
                        <button icon="search" size="large"><Icon type="search"/>搜尋</button>
                        
                        
                    </div>
                </div>
                <div className="content_menu_content" style={{margin:"20px 0"}}>
                    <h1>我們可能暫時天各一方，但定能一同渡過難關。</h1>
                </div>
                <div className="content_menu_footer" style={{width:"100%",marginBottom:"20px"}}>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card 
                                style={{width:"100%",borderRadius:"20px"}}
                                hoverable
                                cover={<img alt="Image1" src={home2}/>}

                            >
                            Card content
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card  
                                style={{width:"100%",borderRadius:"20px"}}
                                hoverable
                                cover={<img alt="Image1" src={happydoctor} />}>
                            Card content
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card  
                                style={{width:"100%",borderRadius:"20px"}}
                                hoverable
                                cover={<img alt="Image1" src={online_shopping}/>}>
                            Card content
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
            <div style={{backgroundColor:"yellow",height:"100px"}}>Content 2</div>
            <div style={{backgroundColor:"yellowgreen",height:"100px"}}>Content 3</div>
            <div style={{backgroundColor:"#FF385C",height:"100px"}}>Content 4</div>
          </div>
        )
        
    }
}

 
export default MyContent;