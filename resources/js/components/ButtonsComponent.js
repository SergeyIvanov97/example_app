import { useState } from 'react';
import PrettyResponse from './PrettyResponse';

/**
 * Root component.
 *
 * @returns {JSX.Element}
 * @constructor
 */
function ButtonsComponent() {
    const [state, setState] = useState({
        message: 'Press a button!',
    });

    const fetchData = (e) => {
        e.target.disabled = true;
        setState({
            message: 'Loading...',
        });

        fetch(`/api/fetch-data?button=${e.target.name}`)
            .then(r => r.json())
            .then(data => setState(data))
            .then(() => e.target.disabled = false);
    };

    return (
        <div className="container p-4 mh-100">
            <div className="row justify-content-center">
                <div className="col">
                    <div className="card">
                        <div className="card-header">Test task for РНР</div>
                        <div className="card-body">
                            <div className="btn-toolbar justify-content-around">
                                <div className="btn-group" role="group">
                                    <button type="button" name="button_1" className="btn btn-primary"
                                            onClick={fetchData}>Button 1
                                    </button>
                                </div>
                                <div className="btn-group">
                                    <button type="button" name="button_2" className="btn btn-primary"
                                            onClick={fetchData}>Button 2
                                    </button>
                                </div>
                                <div className="btn-group">
                                    <button type="button" name="button_3" className="btn btn-primary"
                                            onClick={fetchData}>Button 3
                                    </button>
                                </div>
                            </div>
                            <hr/>
                            <div>
                                <PrettyResponse response={state}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ButtonsComponent;
