import React from 'react';

const Loadfile = () => {
    return (
        <div className="load-file">
            <div className="load-file__icon"></div>
            <div className="load-file__mid">
                <div className="load-file__name">Photo 01-02-2021-20-33  </div>
                <div className="load-file__progress"></div>
            </div>
            <div className="load-file__delete-or-loading">
                <div className="load-file__delete"></div>
                <div className="load-file__loading"></div>
            </div>
        </div>
    );
}

export default Loadfile;
