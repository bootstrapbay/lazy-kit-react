import React from 'react';
import ExampleNavbar from "./ExampleNavbar";

const NavBars = (props) => {
  let sets = [
    {
      bg: "bg-primary",
      navItems: [{name: "Home"}, {name: "Features"}, {name: "Pricing"}, {name: "Services"}]
    },
    {
      bg: "bg-secondary",
      navItems: [{icon: ['fab', 'twitter']}, {icon: ['fab', 'facebook-square']}, {icon: ['fab', 'linkedin']}, {icon: ['fab', 'github']}]
    },
    {
      bg: "bg-info",
      navItems: [{name: "Twitter", icon: ['fab', 'twitter']}, {name: "Facebook", icon: ['fab', 'facebook-square']}, {name: "Github", icon: ['fab', 'github']}]
    },
    {
      bg: "bg-success",
      navItems: [{name: "Twitter", icon: ['fab', 'twitter']}, {name: "Facebook", icon: ['fab', 'facebook-square']}, {name: "Github", icon: ['fab', 'github']}]
    },
    {
      bg: "bg-warning",
      navItems: [{name: "Home"}, {name: "Discover"}, {name: "Profile"}]
    },
    {
      bg: "bg-danger",
      navItems: [{name: "Timeline"}, {name: "Friends"}, {name: "Dashboard"}]
    },
    {
      bg: "bg-dark",
      navItems: [{icon: "campground"}, {icon: "binoculars"}, {icon: "fire"}]
    },
    {
      bg: "bg-light",
      light: true,
      dark: false,
      navItems: [{icon: "cat"}, {icon: "crow"}, {icon: "dog"}, {icon: "fish"}, {icon: "otter"}]
    }
  ];

  let navSets = sets.map((set, index) => {
    return (<ExampleNavbar {...set} key={`example-navbar-${index}`}/>);
  })

  let navTransSet = {
      bg: "navbar-transparent",
      navItems: [{name: "Home", icon: "cat"}, {name: "Profile", icon: "dog"}, {name: "Dashboard", icon: "fish"}]
  }
  let navTrans = (
    <div className="demo-background">
      <div className="filter"></div>
      <ExampleNavbar {...navTransSet} />
    </div>
  );

  return (
    <div>
      {navSets}
      {navTrans}
    </div>
  );
};

export default NavBars;
