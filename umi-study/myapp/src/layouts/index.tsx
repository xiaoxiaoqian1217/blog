import React from 'react';
import styles from './index.css';
import menuData from '../config/menu'
import Sider from './Sider'
import SimpleLayout from './SimpleLayout'
export type BasicLayoutComponent<P> = React.SFC<P>;

export interface BasicLayoutProps extends React.Props<any> {
  history?: History;
  location?: Location;
}

const BasicLayout: BasicLayoutComponent<BasicLayoutProps> = props => {
  if(props.location.pathname==='/login'){
    return   <SimpleLayout>{props.children}</SimpleLayout>
  }
  return (
    <div className={styles.normal}>
    <Sider menuData={menuData}></Sider>
      { props.children }
    </div>
  );
};

export default BasicLayout;
