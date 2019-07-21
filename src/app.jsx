import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from 'component/layout/index.jsx'
import Home from 'page/home/index.jsx'

class App extends React.Component{
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/product" component={Home}></Route>
                        <Route path="/product-category" component={Home}></Route>
                    </Switch>
                </Layout>
            </BrowserRouter>
        )
    }
}
ReactDom.render(
    <App />,
    document.getElementById('root')
)