import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Bar } from "../components/Bar/Bar";

import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { NotFound } from '../pages/NotFound'

import { urlTypes } from '../types/urlTypes'

export const RootRouters = () => {
    
    return (
        <Router>
            <div>
                <Bar>
                    <Switch>
                        <Route exact path={urlTypes.home.url} component={Home} />
                        <Route exact path={`${urlTypes.details.url}${urlTypes.details.id}`} component={Details} />

                        <Route path="*" component={NotFound} />
                    </Switch>
                </Bar>
            </div>
        </Router>
    )
}
