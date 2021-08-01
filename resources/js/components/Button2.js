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
function Button2(props) {
    return (
        <div className="btn-group">
            <button type="button" name="button_2" className="btn btn-primary"
                    onClick={props.fetchData}>Button 2
            </button>
        </div>
    );
}

export default React.memo(Button2);
