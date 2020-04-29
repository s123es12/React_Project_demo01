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
import happydoctor from '../../images/happydoctor.jpg'
import home2 from '../../images/home2.jpg'
import online_shopping from '../../images/online-shopping.jpg'

const { Option } = Select;

class MyContent extends Component {
    
    render() { 
        
          
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
                            <label htmlFor="input02">
                                <div style={{padding:"10px"}}>
                                    <h5>入住／退房</h5>
                                    <Input id="input02" placeholder="新增日期" />
                                </div>
                            </label>
                        </div>
                        <div className="menu_inputDiv"style={{borderRight:"unset"}}>
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