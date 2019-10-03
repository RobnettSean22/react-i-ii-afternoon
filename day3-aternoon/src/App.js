import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './component/Profile'


function App() {
  return (
    <body>
    <header class="home">
        <div>
        <h1>Home</h1>
        </div>
    </header>
    
        <div class='tar'>
            <div class='profiles'>
            <Profile/>
            </div>
            <div class='buttons'>
                <div class='previous'>
                <button >Previous</button>
                </div>
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                    <button>New</button>
                </div>
                <div class='next'>
                <button >Next</button>
                </div>
            </div>

        </div>

    
</body>
    
  );
}

export default App;
