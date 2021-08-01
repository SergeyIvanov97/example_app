import { useState, useCallback } from 'react';
import Button1 from './Button1';
import Button2 from './Button2';
import Button3 from './Button3';
import PrettyResponse from './PrettyResponse';

/**
 * Root component.
 *
 * @returns {JSX.Element}
 *
 * @constructor
 */
function Page() {
    const [state, setState] = useState({
        message: 'Press a button!',
    });

    const fetchData = useCallback((event) => {
        event.target.disabled = true;
        setState({
            message: 'Loading...',
        });

        fetch(`/api/fetch-data?button=${event.target.name}`)
            .then(r => r.json())
            .then(data => setState(data))
            .then(() => event.target.disabled = false)
            .catch(error => {
                setState({ message: error.toString() });
                event.target.disabled = false;
            });
    }, []);

    return (
        <div className="container-fluid p-4">
            <div className="row justify-content-center">
                <div className="col">
                    <div className="card">
                        <div className="card-header">Test task for РНР</div>
                        <div className="card-body">
                            <div className="btn-toolbar justify-content-around">
                                <Button1 fetchData={fetchData}/>
                                <Button2 fetchData={fetchData}/>
                                <Button3 fetchData={fetchData}/>
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

export default Page;
