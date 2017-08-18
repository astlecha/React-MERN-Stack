// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var Form = require("./component/children/grandchildren/Form");
var Results = require("./components/children/grandchildren/Results");
var Saved = require ("./components/children/Saved");
var helper = require("./utils/helper");
var Main  = require("../components/Main");

// Export the Routes
module.exports = (

    // The high level component is the Router component
    <Router history={hashHistory}>

      <Route path="/" component={Main}>

        {/* If user selects Child1 then show the appropriate component*/}
        <Route path="Search" component={Search} >

          {/* Child1 has its own Grandchildren options */}
          <Route path="Form" component={Form} />
          <Route path="Results" component={Results} />

        </Route>

        {/* If user selects Child2 then show the appropriate component*/}
        <Route path="Saved" component={Saved} />

        {/* If user selects any other path... we get the Home Route */}
        <IndexRoute component={Search} />

      </Route>
    </Router>
);