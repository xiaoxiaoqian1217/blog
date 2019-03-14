import * as React from 'react';
import styles from './Sider.css';
import { Menu, Icon } from 'antd';
import Link from 'umi/link';
import propTypes from 'prop-types';
import MenuItem from 'antd/lib/menu/MenuItem';
import icon_companyLogo from '../assets/logo1.png';
const { SubMenu } = Menu;

export interface SiderProps {
  menuData: Array<Routes>;
}

interface  Routes {
  path: string;
  name: string;
  routes?: Array<any>;
  component?:string;

}
export default class Sider extends React.PureComponent<SiderProps, any> {
  // constructor(props) {
  //   super(props)
    rootSubmenuKeys = this.props.menuData;
    state = {
      openKeys : [this.rootSubmenuKeys[0].name]
    }
  // }
  
  renderMenu = (menuData:Array<Routes>): React.ReactNode => { 
      return menuData.map(item => {
        if (item.routes) {
          return (
            <SubMenu key={item.name} title={<span>{item.name}</span>}>
                 {this.renderMenu(item.routes)}
             </SubMenu>
          );
        }
        return <MenuItem key={item.name}><Link to={item.path}>{item.name}</Link></MenuItem>;
      });
    
  
    
  };
  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }
  public render() {
    const { menuData } = this.props;
    const { openKeys } = this.state
    return (
      <div className={styles.sider}>
        <div className={styles.header}>
          <img  src={icon_companyLogo} alt='logo'></img>
                 <h2>{`云天分析系统`}</h2>
        </div>
        <div className={styles.body}>
          <Menu
          // style={{width: '100%' }}
          mode="inline"
          openKeys={openKeys}
          // defaultSelectedKeys={[openKeys[1]]}
          onOpenChange={this.onOpenChange}
          >
            {this.renderMenu(menuData)}
          </Menu>
        </div>
      </div>
    );
  }
}
