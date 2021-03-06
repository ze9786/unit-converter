import { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Length from "./unit-converter/Length";
import Weight from "./unit-converter/Weight";
import Bmi from './unit-converter/Bmi';
import Area from "./unit-converter/Area";
import Volume from "./unit-converter/Volume";


class Main extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div>
                    <TransitionGroup>
                        <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                            <Switch location={this.props.location}>
                                <Route exact path='/' component={()=><Home/>}/>
                                <Route exact path='/bmi' component={()=><Bmi/>}/>
                                <Route exact path='/length' component={()=><Length/>}/>
                                <Route exact path='/weight' component={()=><Weight/>}/>
                                <Route exact path='/area' component={()=><Area/>}/>
                                <Route exact path='/volume' component={()=><Volume/>}/>
                                <Redirect exact to="/" />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default withRouter(Main);