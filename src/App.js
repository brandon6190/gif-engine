import React from 'react';
import SearchEngine from './components/SearchEngine/SearchEngine';

class App extends React.Component {
  render() {
    const AppStyle = {
      textAlign: 'center'
    }
    return (
      <div style={AppStyle}>
        <SearchEngine />
      </div>
    );
  }
}

export default App;
