import React from 'react';
import Prism from 'prismjs';
import { Link } from 'react-router-dom';
require('prismjs/components/prism-jsx.min');

class Contents extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render () {
    return (
      <div>
        <h2>Lazy Kit React Contents</h2>
        <p>After you download the Lazy Kit archive and unzip it, you will see the following files:</p>

        <ul>
          <li>All template views are located in the <code>src/views</code> folder.</li>
          <li>There are 2 available Layouts in the <code>src/layouts</code> folder. The <code>DefaultLayout</code> features a footer. And the <code>DocumentationLayout</code> has a navbar and a sidebar.Of course you can also add your own layout and use it with your views.</li>
          <li>The <code>src/components</code> holds all components used throughout the kit. You can choose to import them or use them as an example.</li>
          <li>All SCSS files that overwrite the Bootstrap 4 styling can be found in the <code>src/assets</code> folder. The styling is imported for all views in the <code>App.js</code> file.</li>
        </ul>
        <h2>Customising the Kit</h2>
        <p>We have used SCSS to create the Lazy kit design. SCSS is a preprocessor scripting language that is interpreted or compiled into CSS. If you want to learn more about the advantages of working with it, you can go <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer"> here</a>. <br /><br />
        If you want to change the syling of the kit, you can create your own CSS and overwrite the default styling. Or you can modify the SCSS source files. Inside the <code>assets/scss/custom</code> folder you will find a file for every component. In order to compile the SCSS, you can use the <a href="https://www.npmjs.com/package/node-sass" target="_blank" rel="noopener noreferrer">Node SASS package</a>.</p>

        <h2>Reactstrap Components</h2>
        <p>Here are the elements from Reactstrap that have been restyled in this kit:</p>
        <ul>
          <li><Link to="/documentation/alerts">Alerts</Link></li>
          <li><Link to="/documentation/badges">Badges</Link></li>
          <li><Link to="/documentation/buttons">Buttons</Link></li>
          <li><Link to="/documentation/cards">Cards</Link></li>
          <li><Link to="/documentation/dropdowns">Dropdowns</Link></li>
          <li><Link to="/documentation/forms">Forms</Link></li>
          <li><Link to="/documentation/modals">Modals</Link></li>
          <li><Link to="/documentation/navbars">Navbar</Link></li>
          <li><Link to="/documentation/navs">Navs</Link></li>
          <li><Link to="/documentation/pagination">Pagination</Link></li>
          <li><Link to="/documentation/progress-bars">Progress Bars</Link></li>
          <li><Link to="/documentation/tooltips-popovers">Tooltips & Popovers</Link></li>
          <li><Link to="/documentation/typography">Typography</Link></li>
        </ul>

        <h2>New Components</h2>
        <p>Besides overwritting the Reactstrap components, we have also added 2 new ones. These are: </p>
        <ul>
          <li><Link to="/documentation/font-awesome">Font Awesome React</Link> - a free React library for icons.</li>
          <li><Link to="/documentation/sliders">No UI Sliders React</Link> - a custom plugin that offers special use-cases for sliders.</li>
        </ul>
      </div>
    );
  }
};

export default Contents;
