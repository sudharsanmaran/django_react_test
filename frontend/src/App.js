import logo from './logo.svg';
import './App.css';
import React from "react";


// let state;
// state = {
//     count: 5,
//     tags:[
//         "tag1","tag2","tag3","tag4",
//     ]
// };
//
// function formateCount(){
//     let count = state.count
//     return count === 0 ? "zero" : count;
// }
//
// function countColour() {
//     let count = state.count
//     let classname="btn  m-2 btn-sm btn-"
//     classname += count ===0 ? "warning" : "primary"
//     return classname
// }
//
// function increment() {
//     console.log("clicked")
//     state.count+=1;
// }
// function decrement() {
//     state.count-=1;
// }

function Header() {
    return <header>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
              integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
              crossOrigin="anonymous"></link>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                crossOrigin="anonymous"></script>
        <NavBar/>
    </header>;
}
function Footer() {
    return(
        <footer>
            <small>@ 20201 hdfvfhsvcb dcbisdfc</small>
        </footer>
    )

}
function Content() {
    return(
            <div>
                <h1> custom page</h1>
                <ul>
                    <li>hsgdv</li>
                    <li>hsgdv</li>
                    <li>hsgdv</li>
                    <li>hsgdv</li>
                    <li>hsgdv</li>
                </ul>
            </div>
    )
}
 class Garage extends React.Component{
    render(){
        return(
            <div>
                <h1>who lives in gar</h1>
                <Car />
            </div>
        )
    }


}
 class Car extends Garage{
    constructor(props) {
        super(props);
        this.state={brand:"ford"}
    }
        render(){
        return(<div>
                <h1> i am {this.state.brand} car</h1>
            </div>

        )
    }
}
export default function Test() {
    return(
        <div>
            <Header/>
            <Content/>
            <Garage/>
            <Footer />
        </div>
    )

}
function NavBar() {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider"></hr>
                                    </li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex="-1"
                                   aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )


}
// function App() {
//     return (
//     <div >
//       <header >
//
//           <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
//                 integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
//                 crossOrigin="anonymous"></link>
//
//           <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
//                   integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
//                   crossOrigin="anonymous"></script>
//       </header>
//         <span className={countColour()}>{formateCount()}</span>
//         <button onClick={increment()} className="btn btn-secondary btn-sm m-2">+</button>
//         <button onClick={decrement()} className="btn btn-secondary btn-sm">-</button>
//         <ul>
//             {state.tags.map(tag => <li key={tag}>{tag}</li>)}
//         </ul>
//
//     </div>
//   );
// }
// export default App;
