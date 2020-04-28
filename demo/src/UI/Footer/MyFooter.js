import React, { Component } from 'react';
import { 
    Icon,
    List,
    Card
} from 'antd';

import "./footer.less";

class MyFooter extends Component {
    
    render() { 
      const data = [
        {
          title: '關於',
          content:[
            {name:'多元與歸屬感',url:''},
            {name:'無障礙設施',url:''},
            {name:'信任與安全',url:''},
            {name:'Airbnb公民',url:''},
            {name:'Airbnb新聞中心',url:''}
          ]
        },
        {
          title: '社群',
          content:[
            {name:'Airbnb雜誌',url:''},
            {name:'商務Airbnb',url:''},
            {name:'邀請好友',url:''},
            {name:'職業',url:''}
          ]
        },
        {
          title: '旅居主人',
          content:[
            {name:'出租你的旅居',url:''},
            {name:'舉辦體驗',url:''},
            {name:'體驗策劃人的義務',url:''},
            {name:'Open Homes',url:''},
            {name:'奧運',url:''},
            {name:'資源中心',url:''}
          ]
        },
        {
          title: '客戶支援',
          content:[
            {name:'說明中心',url:''},
            {name:'社區支援',url:''}
          ]
        }
      ];
        return (
          <div className="footer">
          <div  className="footer_firstNav">
            <List
              grid={{ gutter: 16, column: 4 }}
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  <div className="footer_list">
                    <h4>{item.title}</h4>
                    <Card bordered={false}>
                      {/* {item.content.name} */}
                      {item.content.map((items,index)=>(<p key={items+index}><a href="">{items.name}</a></p>))}
                    </Card>
                  </div>
                  
                </List.Item>
              )}
            />
          </div>

          <hr/>
            <div className="footer_main">
              <div className="footer_left">
                &copy; 2020 Airbnb, Inc. All rights reserved
                &nbsp;·&nbsp;&nbsp;
                <a className="footer_nav">私隱設定</a> 
                &nbsp;&nbsp;·&nbsp;&nbsp;
                <a className="footer_nav">條款</a>
                &nbsp;&nbsp;·&nbsp;&nbsp;
                <a className="footer_nav">網站地圖</a>
              </div>
                
              <div className="footer_right_city" >
                <a><Icon type="global" /><span>繁體中文 (HK)</span></a>
                <a><Icon type="transaction"/><span>HKD</span></a>
              </div>
             
              <div className="footer_right_social">
                <a><Icon type="facebook" /></a>
                <a><Icon type="weibo" /></a>
                <a><Icon type="twitter" /></a>
                <a><Icon type="instagram" /></a>
              </div>    
            </div>
            </div>
        );
    }
}
 
export default MyFooter;