import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "store/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { EnhancedStore } from "@reduxjs/toolkit";
import App from "./App";

const Root = ({ store }: { store: EnhancedStore }) => (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(
    <Root store={createStore()} />,
    document.getElementById("root")
);

serviceWorker.unregister();
