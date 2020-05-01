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
    Calendar,
    List,
    Typography
} from 'antd';
import moment from 'moment';

import "./content.less";
import happydoctor from '../../images/happydoctor.jpg'
import home2 from '../../images/home2.jpg'
import online_shopping from '../../images/online-shopping.jpg'

moment.locale('en');
const { Option } = Select;
const {RangePicker} = DatePicker
class MyContent extends Component {
    state={
        value:["新增日期"],
        dropdownMenuDataSelect:false,
        dropdownMenuPersonSelect:false,
        selectVal1:"",
        selectVal2:""
    }
    handleShowDropSelectData=()=>{
        let bool = !this.state.dropdownMenuDataSelect;
        this.setState({dropdownMenuDataSelect:bool});
    }
    handleShowDropSelectPerson=()=>{
        let bool = !this.state.dropdownMenuPersonSelect;
        this.setState({dropdownMenuPersonSelect:bool});
    }
    render() { 
        const data = [
            {name:"成人",yearOlds:"年齡13+"},
            {name:"兒童",yearOlds:"2 - 12歲"},
            {name:"幼兒",yearOlds:"2歲以下"}
        ];
        
        
        const menu = (
            <List
                dataSource={data}
                renderItem={item => (
                    <List.Item style={{width:"100%"}}>
                        <div style={{width:"60%"}}>
                            <h2>{item.name}</h2>
                            <h4>{item.yearOlds}</h4>
                        </div>
                        <div style={{width:"40%"}}>

                        </div>
                    </List.Item>
                )}
            />
          );
          const menu2 = (
             
            <div style={{backgroundColor: "white",width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                <Calendar 
                    fullscreen={false} 
                    onSelect={(data)=>{
                        
                        if(this.state.selectVal2 && this.state.selectVal1){
                            this.setState({
                                selectVal1:data.format('YYYY-MM-DD'),selectVal2:""
                            })
                        }
                        if(!this.state.selectVal1){
                            return  this.setState({selectVal1:data.format('YYYY-MM-DD')})
                        }else if(!this.state.selectVal2 && this.state.selectVal1!==data.format('YYYY-MM-DD')){
                            return  this.setState({selectVal2:data.format('YYYY-MM-DD')})
                        }                 
                    }} 
                    
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
                                    onClick={e => {e.preventDefault();this.handleShowDropSelectData();}}
                                    style={{width:"100%",height:"100%",margin:"0"}}
                                >
                                    <h5>入住／退房</h5>
                                    <input disabled="disabled" 
                                        placeholder={this.state.selectVal1?this.state.selectVal1+"-"+this.state.selectVal2:"新增日期"}
                                    />

                                </Button>   
                            </Dropdown>
                        </div>
                        <div className="menu_inputDiv" style={{borderRight:"unset"}}>
                            <Dropdown overlay={menu} trigger={['click']}
                                    visible={this.state.dropdownMenuPersonSelect}
                                >
                                <Button 
                                    onClick={e => {e.preventDefault();this.handleShowDropSelectPerson();}}
                                    style={{width:"100%",height:"100%",margin:"0"}}
                                >
                                    <h5>旅人</h5>
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