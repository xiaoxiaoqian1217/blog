import * as React from 'react';
export type SimpleLayoutComponent<P> = React.SFC<P>;
export interface SimpleLayoutProps extends React.Props<any> {
    history?: History;
    location?: Location;
  }

  const SimpleLayout:SimpleLayoutComponent<SimpleLayoutProps> = props => {
    return (
    <div>
        {props.children}
    </div>
    );
  };
  export default SimpleLayout