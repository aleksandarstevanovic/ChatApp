import { createStore, applyMiddleware,compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from '../reducers/index'
import rootSaga from '../sagas/rootSaga'

const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const SagaMiddleware=createSagaMiddleware();


const store=createStore(
    reducers,
    compose(applyMiddleware(SagaMiddleware),reduxDevTools)
   
)
SagaMiddleware.run(rootSaga)

export default store;