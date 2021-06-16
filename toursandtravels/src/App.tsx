import React from 'react';
import logo from './logo.svg';
import TopBar from './components/TopBar';
import SideBarNavigation from'./components/SideBarNavigation';
import TTfirstpage from './pages/TTfirstpage';
import TTsecondpage from './pages/TTsecondpage';
import TTthirdpage from './pages/TTthirdpage';
import Componentspage from './pages/Componentspage';
import MainPage from './pages/MainPage';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'

const tempSideBarList = [
  {
      icon: icon1,
      navigatorName: "First Page",
      url:'/firstpage'
  },
  {
      icon: icon2,
      navigatorName: "Second Page",
      url: '/secondpage'
  },
  {
      icon: icon3,
      navigatorName: "Third Page",
      url: '/thirdpage'
  },
  {
      icon: icon4,
      navigatorName: "Components Page",
      url:'/componentspage'

  }

]



function App() {
  return (
    <div className="App">
      {/*<TTfirstpage/>*/}
      {/* <TTsecondpage /> */}
      {/*<TTthirdpage />*/}

      <Router basename="/v1">
        <TopBar />
        <SideBarNavigation sideBarList={tempSideBarList} />
        <div className='pages'>
        <Switch>
          <Route exact path={'/firstpage'} component={TTfirstpage} />

          <Route exact path={'/secondpage'} component={TTsecondpage} />

          <Route exact path={'/thirdpage'} component={TTthirdpage} />

          <Route exact path={'/componentspage'} component={Componentspage} />

        </Switch>
        </div>
      </Router>
    </div>

  );
}

export default App
