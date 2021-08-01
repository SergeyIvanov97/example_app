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
function Button3(props) {
    return (
        <div className="btn-group">
            <button type="button" name="button_3" className="btn btn-primary"
                    onClick={props.fetchData}>Button 3
            </button>
        </div>
    );
}

export default React.memo(Button3);
