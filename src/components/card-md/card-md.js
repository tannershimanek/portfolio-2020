import React from 'react';

const CardMedium = (props) => {
    // https://getbootstrap.com/docs/4.0/utilities/text/
    // https://getbootstrap.com/docs/4.0/utilities/spacing/
    // TODO: make box smaller // maybe
    return (
        <div className="bg-light mw-25 pt-3 px-2 my-2">
            {/* <h4 className="pt-2 text-danger">{props.icon}</h4> */}
            <p className="pb-2">{props.info}</p>
        </div>
    );
};

export default CardMedium;