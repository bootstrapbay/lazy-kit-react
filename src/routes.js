import React from "react";
import { Redirect } from "react-router-dom";

// Layouts
import DefaultLayout from "./layouts/DefaultLayout";
import DocumentationLayout from "./layouts/DocumentationLayout";

// Views
import Presentation from "./views/Presentation";
import Landing from "./views/Landing";
import Register from "./views/Register";
import Profile from "./views/Profile";
import GettingStarted from "./views/documentation/GettingStarted";
import License from "./views/documentation/License";
import Contents from "./views/documentation/Contents";
import Alerts from "./views/documentation/Alerts";
import Badges from "./views/documentation/Badges";
import Buttons from "./views/documentation/Buttons";
import Cards from "./views/documentation/Cards";
import Dropdowns from "./views/documentation/Dropdowns";
import FontAwesome from "./views/documentation/FontAwesome";
import Forms from "./views/documentation/Forms";
import GridLayout from "./views/documentation/GridLayout";
import Modals from "./views/documentation/Modals";
import Navbars from "./views/documentation/Navbars";
import Navs from "./views/documentation/Navs";
import Paginations from "./views/documentation/Paginations";
import ProgressBars from "./views/documentation/ProgressBars";
import Sliders from "./views/documentation/Sliders";
import TooltipsPopovers from "./views/documentation/TooltipsPopovers";
import Typography from "./views/documentation/Typography";
import Credits from "./views/documentation/Credits";
import Support from "./views/documentation/Support";

let presentation_routes = [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: Presentation,
    name: "Presentation"
  },
  {
    path: "/register",
    layout: DefaultLayout,
    component: Register,
    name: "Register"
  },
  {
    path: "/profile",
    layout: DefaultLayout,
    component: Profile,
    name: "Profile"
  },
  {
    path: "/landing",
    layout: DefaultLayout,
    component: Landing,
    name: "Landing"
  }
];

let doc_route = [
  {
    path: "/documentation",
    exact: true,
    layout: DocumentationLayout,
    component: () => <Redirect to="/documentation/getting_started" />,
    name: "Documentation"
  }
];

let introduction_routes = [
  {
    path: "/documentation/getting_started",
    layout: DocumentationLayout,
    component: GettingStarted,
    name: "Getting Started"
  },
  {
    path: "/documentation/license",
    layout: DocumentationLayout,
    component: License,
    name: "License"
  },
  {
    path: "/documentation/contents",
    layout: DocumentationLayout,
    component: Contents,
    name: "Contents"
  }
];

let documentation_routes = [
  {
    path: "/documentation/alerts",
    layout: DocumentationLayout,
    component: Alerts,
    name: "Alerts"
  },
  {
    path: "/documentation/badges",
    layout: DocumentationLayout,
    component: Badges,
    name: "Badges"
  },
  {
    path: "/documentation/buttons",
    layout: DocumentationLayout,
    component: Buttons,
    name: "Buttons"
  },
  {
    path: "/documentation/cards",
    layout: DocumentationLayout,
    component: Cards,
    name: "Cards"
  },
  {
    path: "/documentation/dropdowns",
    layout: DocumentationLayout,
    component: Dropdowns,
    name: "Dropdowns"
  },
  {
    path: "/documentation/font-awesome",
    layout: DocumentationLayout,
    component: FontAwesome,
    name: "Font Awesome"
  },
  {
    path: "/documentation/forms",
    layout: DocumentationLayout,
    component: Forms,
    name: "Forms"
  },
  {
    path: "/documentation/grid-layout",
    layout: DocumentationLayout,
    component: GridLayout,
    name: "Grid & Layout"
  },
  {
    path: "/documentation/modals",
    layout: DocumentationLayout,
    component: Modals,
    name: "Modals"
  },
  {
    path: "/documentation/navbars",
    layout: DocumentationLayout,
    component: Navbars,
    name: "Navbar"
  },
  {
    path: "/documentation/navs",
    layout: DocumentationLayout,
    component: Navs,
    name: "Navs"
  },
  {
    path: "/documentation/pagination",
    layout: DocumentationLayout,
    component: Paginations,
    name: "Pagination"
  },
  {
    path: "/documentation/progress-bars",
    layout: DocumentationLayout,
    component: ProgressBars,
    name: "ProgressBars"
  },
  {
    path: "/documentation/sliders",
    layout: DocumentationLayout,
    component: Sliders,
    name: "Sliders"
  },
  {
    path: "/documentation/tooltips-popovers",
    layout: DocumentationLayout,
    component: TooltipsPopovers,
    name: "Tooltips & Popovers"
  },
  {
    path: "/documentation/typography",
    layout: DocumentationLayout,
    component: Typography,
    name: "Typography"
  }
];

let support_routes = [
  {
    path: "/documentation/credits",
    layout: DocumentationLayout,
    component: Credits,
    name: "Credits"
  },
  {
    path: "/documentation/support",
    layout: DocumentationLayout,
    component: Support,
    name: "Support"
  }
];

let routes = [...presentation_routes, ...doc_route, ...introduction_routes, ...documentation_routes, ...support_routes];
export { routes, presentation_routes, introduction_routes, documentation_routes, support_routes };
