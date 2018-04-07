import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Ranking from './containers/Ranking';
import Nav from './containers/Nav'; // 追加

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />

        <Switch>
          {/* 総合ランキングのルート */}
          <Route path="/all" component={Ranking} />
          {/* カテゴリID=1は総合なので /all にリダイレクト */}
          <Route
            path="/category/1"
            render={() => <Redirect to="/all" />}
          />
          {/* 各カテゴリのランキングのルート */}
          <Route
            path="/category/:id"
            render={
              ({ match }) => <Ranking categoryId={match.params.id} />
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
