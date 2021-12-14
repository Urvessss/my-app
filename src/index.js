import { Provider } from "react-redux";


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
reportWebVitals();