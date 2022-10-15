import { Component } from "react";

const styles = {
  home:{
    height: '400px',
    color: 'black',
    fontWeight: '900',
    fontSize: '60px',
    marginTop: '100px',
    display: 'inline-block',

  }
}


class HomePage extends Component {
  render() {
    return (
      <div style={styles.home}>
      <p>Cuidamos tu energia</p>
      </div>
    )
  }
}

export default HomePage;