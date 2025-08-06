import React, { lazy, Suspense } from 'react'; // Must be imported for webpack to work
import './App.css';


const Header = lazy(() => import('HeaderApp/Header'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <img className='App-logo' src="https://sns-img-hw.xhscdn.com/47eb6e4a-0b8e-a0e7-9778-7c199931ef12?imageView2/2/w/1920/format/webp|imageMogr2/strip" alt="img" />
    </div>
  );
}

export default App;
