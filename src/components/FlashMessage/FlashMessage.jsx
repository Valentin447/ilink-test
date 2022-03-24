import React from 'react';

const Flashmessage = (props) => {
    return (
        <div className={'flash-message' + ' ' + props.classMod}>
            <div className='flash-message__button-close'></div>
        </div>
    );
}

export default Flashmessage;

// classMod: flash-message-success, 
//           flash-message-error, 
//           flash-message-success-mob, 
//           flash-message-error-mo
