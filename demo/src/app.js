import React ,{Component} from 'react';
import { 
    Layout
    
} from 'antd';



import MyHeader from './UI/Header/MyHeader';
import MyFooter from './UI/Footer/MyFooter';
import MyContent from './UI/Content/MyContent';

const {Header,Footer, Content } = Layout;

class App extends Component{

    render(){
       

        return (
            <div style={{height:"100%"}}>
               
                <Layout style={{height:"100%",backgroundColor:"#fff"}}>
                    <Header >
                        <MyHeader/>
                    </Header>
                   
                    
                    <Content style={{backgroundColor:"rgb(247, 247, 247"}}>
                        <MyContent/>
                    </Content>
                    
                    <Footer className="footer_test" >
                        <MyFooter/>
                    </Footer>
                </Layout>
            </div>
        )
    }
}
export default App;