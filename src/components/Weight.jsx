import { Component } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

class Weight extends Component {
    constructor() {
        super();
        this.state = {
            kg: '',
            g: '',
            t:'',
            lb:'',
            oz:'',
            jin:'',
            tael:'',
        }
        this.handleKgChange = this.handleKgChange.bind(this);
        this.handleGChange = this.handleGChange.bind(this);
        this.handleTChange = this.handleTChange.bind(this);
        this.handleLbChange = this.handleLbChange.bind(this);
        this.handleOzChange = this.handleOzChange.bind(this);
        this.handleJinChange = this.handleJinChange.bind(this);
        this.handleTaelChange = this.handleTaelChange.bind(this);

        this.calculate = this.calculate.bind(this);

    }

    handleKgChange(e) {
        this.setState({
            kg: e.target.value
        });
        this.calculate('kg', e.target.value);
    }
    handleGChange(e) {
        this.setState({
            g: e.target.value
        });
        this.calculate('g', e.target.value);
    }
    handleTChange(e) {
        this.setState({
            t: e.target.value
        });
        this.calculate('t', e.target.value);
    }
    handleLbChange(e) {
        this.setState({
            lb: e.target.value
        });
        this.calculate('lb', e.target.value);
    }
    handleOzChange(e) {
        this.setState({
            oz: e.target.value
        });
        this.calculate('oz', e.target.value);
    }

    handleJinChange(e) {
        this.setState({
            jin: e.target.value
        });
        this.calculate('jin', e.target.value);
    }
    handleTaelChange(e) {
        this.setState({
            tael: e.target.value
        });
        this.calculate('tael', e.target.value);
    }
    calculate(_value, num) {
            switch(_value){
                case "kg": this.setState({
                    g: num*1000,
                    t: num/1000,
                    lb: num*2.204,
                    oz: num*35.274,
                    jin:num/1.653,
                    tael:num*26.45
                });
                break;
                case "g": this.setState({
                    kg: num/1000,
                    t: num/1000000,
                    lb: num/454,
                    oz: num*28.35,
                    jin:num/500,
                    tael:num/37.79
                });
                break;
                case "t": this.setState({
                    g: num*1000000,
                    kg: num*1000,
                    lb: num*2205,
                    oz: num*35274,
                    jin:num*1653,
                    tael:num*26888.97
                });
                break;
                case "lb": this.setState({
                    g: num*454,
                    t: num/2205,
                    kg: num/2.205,
                    oz: num*16,
                    jin:num/1.653,
                    tael:num*12
                });
                break;
                case "oz": this.setState({
                    g: num/28.35,
                    t: num/35274,
                    lb: num/16,
                    kg: num/35.274,
                    jin:num/1.653,
                    tael:num*1.33
                });
                break;
                case "jin": this.setState({
                    g: num*500,
                    t: num/2205,
                    kg: num/2.205,
                    oz: num*16,
                    lb:num*1.653,
                    tael:num*10
                });
                break;
                case "tael": this.setState({
                    g: num*37.49,
                    t: num/26888.97,
                    lb: num/12,
                    kg: num/26.45,
                    jin:num/10,
                    oz:num/1.33
                });
                break;
            
            }

    }
    render() {
        return (
            <div className="container">
                   <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">主頁</Link></BreadcrumbItem>
                    <BreadcrumbItem active>重量轉換器</BreadcrumbItem>
                </Breadcrumb>
                <div className="row row-content">
                    <div className="col-sm-12">
                        <form>
                            <div className="row">
                                <div className="form-group col-6">
                                    <legend>公斤</legend>
                                    <div className="row">
                                        <div className="col-12">
                                            <input className="form-control" id="KG" type="number" value={this.state.kg} onChange={this.handleKgChange} />
                                            <label className="control-label" htmlFor="kg">kg</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group col-6">
                                    <legend>克</legend>
                                    <div className="row">
                                        <div className="col-12">
                                            <input className="form-control" id="g" type="number" name="g" value={this.state.g} onChange={this.handleGChange} />
                                            <label className="control-label" htmlFor="g">g</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="form-group col-6">
                                    <legend>噸</legend>
                                    <div className="row">
                                        <div className="col-12">
                                            <input className="form-control" id="t" type="number" value={this.state.t} onChange={this.handleTChange} />
                                            <label className="control-label" htmlFor="t">t</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group col-6">
                                    <legend>磅</legend>
                                    <div className="row">
                                        <div className="col-12">
                                            <input className="form-control" id="lb" type="number" name="lb" value={this.state.lb} onChange={this.handleLbChange} />
                                            <label className="control-label" htmlFor="lb">lb</label>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="row">
                                <div className="form-group col-6">
                                    <legend>盎司</legend>
                                    <div className="row">
                                        <div className="col-12">
                                            <input className="form-control" id="oz" type="number" name="oz" value={this.state.oz} onChange={this.handleOzChange} />
                                            <label className="control-label" htmlFor="oz">oz</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-6">
                                    <legend>斤</legend>
                                    <div className="row">
                                        <div className="col-12">
                                            <input className="form-control" id="jin" type="number" value={this.state.jin} onChange={this.handleJinChange} />
                                            <label className="control-label" htmlFor="jin">jin</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group col-6">
                                    <legend>兩</legend>
                                    <div className="row">
                                        <div className="col-12">
                                            <input className="form-control" id="tael" type="number" name="tael" value={this.state.tael} onChange={this.handleTaelChange} />
                                            <label className="control-label" htmlFor="tael">tael</label>
                                        </div>
                                    </div>
                                </div>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}
export default Weight;