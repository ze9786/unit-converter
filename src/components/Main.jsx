import { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Bmi from "./Bmi";
import Length from "./Length";
import Weight from "./Weight";


class Main extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div>
                    <TransitionGroup>
                        <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                            <Switch location={this.props.location}>
                                <Route path='/home' component={()=><Home/>}/>
                                <Route exact path='/bmi' component={()=><Bmi/>}/>
                                <Route exact path='/length' component={()=><Length/>}/>
                                <Route exact path='/weight' component={()=><Weight/>}/>
                                <Redirect to="/home" />
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