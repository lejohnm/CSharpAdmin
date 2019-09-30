import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Products from './Products';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state= {activeproduct: 'tops'}
  }
  render() {
  return (
    <div className="App">
      <Navbar onchange= {product => this.setState({activeproduct: product})}/>
      <Products activeproduct={this.state.activeproduct} />
      <Footer />
    </div>
  );
}
}

export default App;
