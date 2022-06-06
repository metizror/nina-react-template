import React, { Suspense, useLayoutEffect } from 'react'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

// Home
const Home = React.lazy(() => import("./components/pages/Home"));
const Hometwo = React.lazy(() => import("./components/pages/Hometwo"));
const Homethree = React.lazy(() => import("./components/pages/Homethree"));
const Homefour = React.lazy(() => import("./components/pages/Homefour"));
const Homefive = React.lazy(() => import("./components/pages/Homefive"));
// About
const About = React.lazy(() => import("./components/pages/About"));
// Events
const Events = React.lazy(() => import("./components/pages/Events"));
// Shop
const Shopleft = React.lazy(() => import("./components/pages/Shopleft"));
const Shopright = React.lazy(() => import("./components/pages/Shopright"));
const Shopdetails = React.lazy(() => import("./components/pages/Shopdetails"));
// Pages(Donation)
const Donationarchive = React.lazy(() => import("./components/pages/Donationarchive"));
const Donationdetails = React.lazy(() => import("./components/pages/Donationdetails"));
// Pages(Extra)
const Wishlist = React.lazy(() => import("./components/pages/Wishlist"));
const Cart = React.lazy(() => import("./components/pages/Cart"));
const Checkout = React.lazy(() => import("./components/pages/Checkout"));
const Contact = React.lazy(() => import("./components/pages/Contact"));
const Login = React.lazy(() => import("./components/pages/Login"));
const Register = React.lazy(() => import("./components/pages/Register"));
const Error = React.lazy(() => import("./components/pages/Error"));
// Blog
const Blogleft = React.lazy(() => import("./components/pages/Blogleft"));
const Blogright = React.lazy(() => import("./components/pages/Blogright"));
const Blogdetails = React.lazy(() => import("./components/pages/Blogdetails"));
// Story
const Storygrid = React.lazy(() => import("./components/pages/Storygrid"));
const Storydetails = React.lazy(() => import("./components/pages/Storydetails"));



// Scroll to Top
const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children || null
})


function App() {
  return (
    <Router basename={"/templatemonster/react/nina/"}>
      <Suspense fallback={<div></div>}>
        <ScrollToTop>
          {/* Home */}
          <Route exact path="/" component={Home} />
          <Route exact path="/home-v2" component={Hometwo} />
          <Route exact path="/home-v3" component={Homethree} />
          <Route exact path="/home-v4" component={Homefour} />
          <Route exact path="/home-v5" component={Homefive} />
          {/* About */}
          <Route exact path="/about" component={About} />
          {/* Events */}
          <Route exact path="/events" component={Events} />
          {/* Shop */}
          <Route exact path="/shop-left" component={Shopleft} />
          <Route exact path="/shop/cat/:catId" component={props => (<Shopleft {...props} key={window.location.pathname} />)} />
          <Route exact path="/shop/tag/:tagId" component={props => (<Shopleft {...props} key={window.location.pathname} />)} />
          <Route exact path="/shop/minPrice=:minPrice&maxPrice=:maxPrice" component={props => (<Shopleft {...props} key={window.location.pathname} />)} />
          <Route exact path="/shop-right" component={Shopright} />
          <Route exact path="/shop-details/:id" component={props => (<Shopdetails {...props} key={window.location.pathname} />)} />
          {/* Pages(Donation) */}
          <Route exact path="/donation-grid" component={Donationarchive} />
          <Route exact path="/donation/cat/:catId" component={props => (<Donationarchive {...props} key={window.location.pathname} />)} />
          <Route exact path="/donation/tag/:tagId" component={props => (<Donationarchive {...props} key={window.location.pathname} />)} />
          <Route exact path="/donation-details/:id" component={props => (<Donationdetails {...props} key={window.location.pathname} />)} />
          {/* Pages(Extra) */}
          <Route exact path="/wishlist" component={Wishlist} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/error-404" component={Error} />
          {/* Blog */}
          <Route exact path="/blog/cat/:catId" component={props => (<Blogleft {...props} key={window.location.pathname} />)} />
          <Route exact path="/blog/author/:authorId" component={props => (<Blogleft {...props} key={window.location.pathname} />)} />
          <Route exact path="/blog/tag/:tagId" component={props => (<Blogleft {...props} key={window.location.pathname} />)} />
          <Route exact path="/blog-left" component={Blogleft} />
          <Route exact path="/blog-right" component={Blogright} />
          <Route exact path="/blog-details/:id" component={props => (<Blogdetails {...props} key={window.location.pathname} />)} />
          {/* Story */}
          <Route exact path="/story/tag/:tagId" component={props => (<Storygrid {...props} key={window.location.pathname} />)} />
          <Route exact path="/story-grid" component={Storygrid} />
          <Route exact path="/story-details/:id" component={props => (<Storydetails {...props} key={window.location.pathname} />)} />
        </ScrollToTop>
      </Suspense>
    </Router>
  );
}

export default App;
