import { Component } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

class Length extends Component {
    constructor() {
        super();
        this.state = {
            m: '',
            ft: '',
            cm:'',
            in:''
        }
        this.handleMChange = this.handleMChange.bind(this);
        this.handleFtChange = this.handleFtChange.bind(this);
        this.handleCmChange = this.handleCmChange.bind(this);
        this.handleInChange = this.handleInChange.bind(this);
        this.calculate = this.calculate.bind(this);

    }

    handleCmChange(e) {
        this.setState({
            cm: e.target.value
        });
        this.calculate('cm', e.target.value);
    }
    handleInChange(e) {
        this.setState({
            in: e.target.value
        });
        this.calculate('in', e.target.value);
    }
    handleMChange(e) {
        this.setState({
            m: e.target.value
        });
        this.calculate('m', e.target.value);
    }
    handleFtChange(e) {
        this.setState({
            ft: e.target.value
        });
        this.calculate('ft', e.target.value);
    }
    calculate(_value, num) {
            switch(_value){
                case "m": this.setState({
                    ft: num*3.281,
                    cm: num*100,
                    in: num*39.37
                });
                break;
                case 'ft':this.setState({
                    m:num/3.281,
                    cm: num*30.48,
                    in:num*12
                });
                break;
                case "cm": this.setState({
                    ft: num/30.48,
                    m: num/100,
                    in:num/2.54
                });
                break;
                case 'in':this.setState({
                    m:num/39.37,
                    cm:num*2.54,
                    ft:num/12,
                });
                break;
            }

    }
    render() {
        return (
            <div className="container">
                   <Breadcrumb>
                    <BreadcrumbItem><Link to="/">主頁</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to="/">容積/面積</Link></BreadcrumbItem>
                    <BreadcrumbItem active>長度轉換器</BreadcrumbItem>
                </Breadcrumb>
                <div className="row row-content">
                    <div className="col-sm-12">
                        <form>
                            <div className="row">
                                <div className="form-group col-6">
                                    <legend>米</legend>
                                    <div className="row">
                                        <div className="col-12">
                                            <input className="form-control" id="m" type="number" value={this.state.m} onChange={this.handleMChange} />
                                            <label className="control-label" htmlFor="m">m</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group col-6">
                                    <legend>尺</legend>
                                    <div className="row">
                                        <div className="col-12">
                                            <input className="form-control" id="ft" type="number" name="ft" value={this.state.ft} onChange={this.handleFtChange} />
                                            <label className="control-label" htmlFor="ft">ft</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="form-group col-6">
                                    <legend>厘米</legend>
                                    <div className="row">
                                        <div className="col-12">
                                            <input className="form-control" id="cm" type="number" value={this.state.cm} onChange={this.handleCmChange} />
                                            <label className="control-label" htmlFor="cm">cm</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group col-6">
                                    <legend>吋</legend>
                                    <div className="row">
                                        <div className="col-12">
                                            <input className="form-control" id="in" type="number" name="in" value={this.state.in} onChange={this.handleInChange} />
                                            <label className="control-label" htmlFor="in">in</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="jumbotron">
                    <h4>長度對換</h4>
                    <div className="row">
                        <div className="col-12 col-md-4">1米=100厘米=3.281尺</div>
                        <div className="col-12 col-md-4">1尺=12吋</div>
                        <div className="col-12 col-md-4">1吋=2.54厘米</div>
                    </div>    
                </div>
            </div>
        );
    }

}
export default Length;