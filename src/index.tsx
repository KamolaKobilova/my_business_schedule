import ReactDOM from "react-dom";
// import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import App2 from "./App2";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient()

ReactDOM.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App2 />
    </QueryClientProvider>
  </Provider>,
  document.getElementById("root")
);
