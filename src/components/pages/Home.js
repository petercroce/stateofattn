import React from 'react';
import Radium from 'radium';

import Eyes from '../layout/Eyes';

function Home() {
  return (
    <div style={styles.container}>
      <Eyes></Eyes>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: '100vh',
  },
}

export default Radium(Home);
