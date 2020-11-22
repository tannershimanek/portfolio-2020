// import logo from './logo.svg';
// import './App.css';
import Navigation from "./components/nav/nav.js"
import Footer from "./components/footer/footer.js"


// class App extends React.Component {
//   constructor() {
//       super();
//       this.scrollTo = this.scrollTo.bind(this);
//       this.footer = React.createRef();
//       this.state = {
//           changeScrollTo: 'about'
//       };
//   };

//   changeScrollTo = (anchor) => {
//       switch (anchor) {
//           case 'footer':
//               return this.footer.current.refs.scrollIntoView({ behavior: 'smooth', block: 'start'})
//       };
//   }
// };


function App() {
  return (
    <div className="App">
      <Navigation />
      <Footer />
    </div>
  );
}

export default App;
