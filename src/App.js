import "./App.css";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

export default () => {
    return (
        <div className="App">
            <Header />
            <Route path="/">
                <h1>Home</h1>
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
            <Route path="/test">
                <h1>Test</h1>
            </Route>
            <Route path="/words">
                <h1>My Words</h1>
            </Route>
        </div>
    );
};
