/**
 * Renders API response in a pretty way.
 *
 * @param {Object} response
 * @returns {JSX.Element}
 * @constructor
 */
function PrettyResponse({ response }) {
    return (
        <pre className="text-white bg-dark p-2 mb-0">{JSON.stringify(response, null, 2)}</pre>
    );
}

export default PrettyResponse;
