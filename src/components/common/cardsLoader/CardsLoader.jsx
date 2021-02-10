import ContentLoader from "react-content-loader";

import React from "react";

export class CardsLoader extends React.PureComponent {
  render() {
    return (
      <ContentLoader
        speed={2}
        className="w-100"
        height={450}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="2" y="8" rx="0" ry="0" width="100" height="71" />
        <rect x="120" y="8" rx="3" ry="3" width="90" height="10" />
        <rect x="120" y="30" rx="3" ry="3" width="90" height="10" />
        <rect x="120" y="52" rx="3" ry="3" width="52" height="10" />
        <rect x="3" y="90" rx="3" ry="3" className="w-100" height="20" />
        <rect x="3" y="120" rx="3" ry="3" className="w-100" height="20" />
        <rect x="3" y="150" rx="3" ry="3" className="w-100" height="20" />
        <rect x="3" y="180" rx="3" ry="3" className="w-100" height="20" />

        <rect x="2" y="220" rx="0" ry="0" width="100" height="71" />
        <rect x="120" y="220" rx="3" ry="3" width="90" height="10" />
        <rect x="120" y="242" rx="3" ry="3" width="90" height="10" />
        <rect x="120" y="264" rx="3" ry="3" width="52" height="10" />
        <rect x="3" y="302" rx="3" ry="3" className="w-100" height="20" />
        <rect x="3" y="332" rx="3" ry="3" className="w-100" height="20" />
        <rect x="3" y="362" rx="3" ry="3" className="w-100" height="20" />
        <rect x="3" y="392" rx="3" ry="3" className="w-100" height="20" />
      </ContentLoader>
    );
  }
}
