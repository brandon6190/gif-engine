import React from 'react';
import Store from './Store';
import SearchEngine from './components/SearchEngine/SearchEngine';

function App() {
		const AppStyle = {
			textAlign: 'center',
    };
    
		return (
      <Store>
        <div style={AppStyle}>
          <SearchEngine />
        </div>
      </Store>
		);
}

export default App;
