import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';

// import store from './store/reducer';
import { MainPage } from './components/MainPage';
import { PostPage } from './components/PostPage';
import { NewPost } from './components/NewPost';

const App: React.FC = (): React.ReactElement => {
    return (
        // <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/posts/new" component={NewPost} />
                <Route path="/posts/:postId" component={PostPage} />
            </Switch>
        </Router>
        // </Provider>
    );
};

export default App;
