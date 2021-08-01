import React from 'react';

/**
 * Button component.
 *
 * @param {Object} props
 * @param {Function} props.fetchData
 *
 * @returns {JSX.Element}
 *
 * @constructor
 */
function Button1(props) {
    return (
        <div className="btn-group">
            <button type="button" name="button_1" className="btn btn-primary"
                    onClick={props.fetchData}>Button 1
            </button>
        </div>
    );
}

export default React.memo(Button1);
