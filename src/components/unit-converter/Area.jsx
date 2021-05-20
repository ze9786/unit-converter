import { Component } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

class Area extends Component {
    constructor() {
        super();
        this.state = {
            m2: '',
            ft2: '',
            cm2:'',
            in:''
        }
        this.handleM2Change = this.handleM2Change.bind(this);
        this.handleFt2Change = this.handleFt2Change.bind(this);
        this.handleCm2Change = this.handleCm2Change.bind(this);
        this.handleIn2Change = this.handleIn2Change.bind(this);
        this.calculate = this.calculate.bind(this);

    }

    handleCm2Change(e) {
        this.setState({
            cm2: e.target.value
        });
        this.calculate('cm2', e.target.value);
    }
    handleIn2Change(e) {
        this.setState({
            in2: e.target.value
        });
        this.calculate('in', e.target.value);
    }
    handleM2Change(e) {
        this.setState({
            m2: e.target.value
        });
        this.calculate('m2', e.target.value);
    }
    handleFt2Change(e) {
        this.setState({
            ft2: e.target.value
        });
        this.calculate('ft2', e.target.value);
    }
    calculate(_value, num) {
            switch(_value){
                case "m2": this.setState({
                    ft2: num*10.764,
                    cm2: num*10000,
                    in2: num*1550
                });
                break;
                case 'ft2':this.setState({
                    m2:num/10.764,
                    cm2: num*929,
                    in2:num*144
                });
                break;
                case "cm2": this.setState({
                    ft2: num/929,
                    m2: num/10000,
                    in2:num/6.452
                });
                break;
                case 'in2':this.setState({
                    m2:num/1550,
                    cm2:num*6.452,
                    ft2:num/144,
                });
                break;
            }

    }
    render() {
        return (
            <div className="container">
                   <Breadcrumb>
                    <BreadcrumbItem><Link to="/unit-converter">主頁</Link></BreadcrumbItem>
                    <BreadcrumbItem active>面積轉換器</BreadcrumbItem>
                </Breadcrumb>
                <div className="row row-content">
                    <div className="col-sm-12">
                        <form>
                            <div className="row">
                                <div className="form-group col-6">
                                    <legend>平方米</legend>
                                    <div className="row">
                                        <div className="col-12">
                                            <input className="form-control" id="m2" type="number" value={this.state.m2} onChange={this.handleM2Change} />
                                            <label className="control-label" htmlFor="m2">m²</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group col-6">
                                    <legend>平方尺</legend>
                                    <div className="row">
                                        <div className="col-12">
                                            <input className="form-control" id="ft2" type="number" name="ft2" value={this.state.ft2} onChange={this.handleFt2Change} />
                                            <label className="control-label" htmlFor="ft2">ft²</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="form-group col-6">
                                    <legend>平方厘米</legend>
                                    <div className="row">
                                        <div className="col-12">
                                            <input className="form-control" id="cm2" type="number" value={this.state.cm2} onChange={this.handleCm2Change} />
                                            <label className="control-label" htmlFor="cm2">cm²</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group col-6">
                                    <legend>平方吋</legend>
                                    <div className="row">
                                        <div className="col-12">
                                            <input className="form-control" id="in2" type="number" name="in2" value={this.state.in2} onChange={this.handleIn2Change} />
                                            <label className="control-label" htmlFor="in2">in²</label>
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
export default Area;