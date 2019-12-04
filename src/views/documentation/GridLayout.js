import React from 'react';

class GridLayout extends React.Component {
  render () {
    return (
      <div>
        <h2>Grid Layout</h2>
        <p>Lazy Kit uses the Bootstrap 12 columns grid system. If you want to learn more about using it, please look at our <a href="https://bootstrapbay.com/blog/day-2-bootstrap-4-grid-system-tutorial-examples/" href="_blank">Bootstrap grid system tutorial</a>. We start from the basic structure and go more in depth over there. Learning more about <a href="https://bootstrapbay.com/blog/day-3-bootstrap-4-flex-tutorial-and-examples/" target="_blank">Bootstrap 4 flex</a> is also useful, as it makes aligning items much easier and it is the basis for the grid system.</p>
        <p><b>Reactstrap</b> wraps the grid elements in components. For a full documentation, please go <a href="https://reactstrap.github.io/components/layout/" target="_blank">here</a>.</p>
      </div>
    )
  }

};

export default GridLayout;
