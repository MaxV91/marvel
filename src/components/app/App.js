import {Component, useState, lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import decoration from '../../resources/img/vision.png';
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import ComicsList from "../comicsList/ComicsList";
import AppBanner from "../appBanner/AppBanner";
import Spinner from "../spinner/Spinner";

const Page404 = lazy(() => import('../../pages/404'));
const MainPage = lazy(() => import('../../pages/MainPage'));
const ComicsPage = lazy(() => import('../../pages/ComicsPage'));
const SingleComicPage = lazy(() => import('../../pages/SingleComicPage'));

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader/>
        <main>
          <Suspense fallback={<Spinner />} >
            <Switch>
              <Route exact path="/">
                <MainPage />
              </Route>
              <Route exact path="/comics">
                <ComicsPage />
              </Route>
              <Route exact path="/comics/:comicId">
                <SingleComicPage />
              </Route>
              <Route path="*">
                <Page404 />
              </Route>
            </Switch>
          </Suspense>
        </main>
      </div>
    </Router>
  )
}

export default App;