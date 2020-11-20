import React from 'react';

const CardSmall = (props) => {
    // https://getbootstrap.com/docs/4.0/utilities/text/
    // https://getbootstrap.com/docs/4.0/utilities/spacing/
    // TODO: make box smaller // maybe
    return (
        <div className="bg-light mw-25 p-3 h-100 text-center">
            <h4 className="pt-2 text-danger">{props.icon}</h4>
            <p className="pb-2">{props.info}</p>
        </div>
    );
};

export default CardSmall;