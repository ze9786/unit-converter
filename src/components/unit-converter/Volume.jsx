import { Component } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

class Volume extends Component {
    constructor() {
        super();
        this.state = {
            l: '',
            ml: '',
            m3: '',
            cm3: ''
        }
        this.handleLChange = this.handleLChange.bind(this);
        this.handleMlChange = this.handleMlChange.bind(this);
        this.handleM3Change = this.handleM3Change.bind(this);
        this.handleCm3Change = this.handleCm3Change.bind(this);
        this.calculate = this.calculate.bind(this);

    }

    handleLChange(e) {
        this.setState({
            l: e.target.value
        });
        this.calculate('l', e.target.value);
    }
    handleMlChange(e) {
        this.setState({
            ml: e.target.value
        });
        this.calculate('ml', e.target.value);
    }
    handleM3Change(e) {
        this.setState({
            m3: e.target.value
        });
        this.calculate('m3', e.target.value);
    }
    handleCm3Change(e) {
        this.setState({
            cm3: e.target.value
        });
        this.calculate('cm3', e.target.value);
    }

    calculate(_value, num) {
            switch(_value){
                case "l": this.setState({
                    ml: num*1000,
                    m3:num/1000,
                    cm3: num*1000
                });
                break;
                case 'ml':this.setState({
                    l:num/1000,
                    cm3:num,
                    m3:num/1000000,
                });
                break;
                case "m3": this.setState({
                    cm3: num*1000000,
                    l:num*1000,
                    ml:num*1000000
                });
                break;
                case 'cm3':this.setState({
                    m3:num/1000000,
                    ml:num,
                    l:num/1000
                });
                break;
            }

    }
    render() {
        return (
            <div className="container">
                   <Breadcrumb>
                    <BreadcrumbItem><Link to="/unit-converter">主頁</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to="/">容積/面積</Link></BreadcrumbItem>
                    <BreadcrumbItem active>容量轉換器</BreadcrumbItem>
                </Breadcrumb>
                <div className="row row-content">
                    <div className="col-sm-12">
                        <form>
                            <div className="row">
                                <div className="form-group col-6">
                                    <legend>公升</legend>
                                    <div className="row">
                                        <div className="col-12">
                                            <input className="form-control" id="l" type="number" value={this.state.l} onChange={this.handleLChange} />
                                            <label className="control-label" htmlFor="l">l</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group col-6">
                                    <legend>立方米</legend>
                                    <div className="row">
                                        <div className="col-12">
                                            <input className="form-control" id="m3" type="number" name="m3" value={this.state.m3} onChange={this.handleM3Change} />
                                            <label className="control-label" htmlFor="m3">m³</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="form-group col-6">
                                    <legend>毫升</legend>
                                    <div className="row">
                                        <div className="col-12">
                                            <input className="form-control" id="ml" type="number" value={this.state.ml} onChange={this.handleMlChange} />
                                            <label className="control-label" htmlFor="ml">ml</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group col-6">
                                    <legend>立方厘米</legend>
                                    <div className="row">
                                        <div className="col-12">
                                            <input className="form-control" id="cm3" type="number" name="cm3" value={this.state.cm3} onChange={this.handleCm3Change} />
                                            <label className="control-label" htmlFor="cm3">cm³</label>
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
export default Volume;