import React, { Component } from 'react';
import { 
    Card,
    Col,
    Row,
    Menu,
    Icon,
    Input,
    Select,
    Button
} from 'antd';

import "./content.less";

const { Option } = Select;

class MyContent extends Component {
    
    render() { 
        
          
        return (
          <div className="content">
            <div className="content_menu">
                <div className="content_menu_header" style={{width:"100%"}}>
                    <Menu mode="horizontal">
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
                            <label htmlFor="input02">
                                <div style={{padding:"10px"}}>
                                    <h5>入住／退房</h5>
                                    <Input id="input02" placeholder="新增日期" />
                                </div>
                            </label>
                        </div>
                        <div className="menu_inputDiv">
                            <label htmlFor="input03">
                                <div style={{padding:"10px"}}>
                                    <h5>旅人</h5>
                                    <Input id="input03" placeholder="新增旅人" />
                                </div>
                            </label>
                        </div>
                        
                        <button icon="search" size="large"><Icon type="search"/>搜尋</button>
                        
                        
                    </div>
                </div>
                <div className="content_menu_content">
                    <h1>我們可能暫時天各一方，但定能一同渡過難關。</h1>
                </div>
                <div className="content_menu_footer">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title="Card title" bordered={false}>
                            Card content
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Card title" bordered={false}>
                            Card content
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Card title" bordered={false}>
                            Card content
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
            <div style={{backgroundColor:"yellow"}}>as</div>
            <div style={{backgroundColor:"yellowgreen"}}>as</div>
            <div style={{backgroundColor:"#FF385C"}}>as</div>
          </div>
        )
        
    }
}
 
export default MyContent;