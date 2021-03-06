import React from 'react';
import { Badge } from 'reactstrap';

const Header = (props) => {
    return (
        <div className="p-5 d-flex justify-content-center">
            <h1><Badge color="info">Sharelinks on #React</Badge></h1>
        </div>
    );
}

export default Header;