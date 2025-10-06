import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import StarContainer from "./components/Star/StarContainer"
import { Route, Switch, useLocation } from "wouter"
import { BadgesPage, BannersPage, CardsPage, TestimonialsPage, ToolTipPage, ToastPopupPage } from "./pages"

function App() {
  const [location, setLocation] = useLocation();
  return (
    <div className="container">
      <StarContainer/>
      <h1>Your components go here</h1>
      <Menu>
        <Menu.Button>Component</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item onClick ={() => setLocation('/badges')}>Badges</Menu.Item>
          <Menu.Item onClick ={() => setLocation('/banners')}>Banners</Menu.Item>
          <Menu.Item onClick ={() => setLocation('/cards')}>Cards</Menu.Item>
          <Menu.Item onClick ={() => setLocation('/testimonials')}>Testimonials</Menu.Item>
          <Menu.Item onClick ={() => setLocation('/tooltip')}>ToolTip</Menu.Item>
          <Menu.Item onClick ={() => setLocation('/toastpopup')}>ToastPopup</Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <Switch>
        <Route path="/badges" component={BadgesPage}/>
        <Route path="/banners" component={BannersPage}/>
        <Route path="/cards" component={CardsPage}/>
        <Route path="/testimonials" component={TestimonialsPage}/>
        <Route path="/tooltip" component={ToolTipPage}/>
        <Route path="/toastpopup" component={ToastPopupPage}/>
      </Switch>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
