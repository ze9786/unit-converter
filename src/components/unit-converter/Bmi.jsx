import { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";


class Bmi extends Component{
    constructor() {
        super();
        this.state = {
            weight:'',
            height:'',
        }
        this.handleHeightChange=this.handleHeightChange.bind(this);
        this.handleWeightChange=this.handleWeightChange.bind(this);
        this.calculateBMI=this.calculateBMI.bind(this);
        
    }

  
    handleHeightChange(e) {
        this.setState({
            height: e.target.value
        });
    
    }
    handleWeightChange(e) {
        this.setState({
            weight: e.target.value
        });
    
    }
    calculateBMI(){
        if(this.state.weight && this.state.height)
        var bmi=(this.state.weight/(this.state.height*this.state.height)).toFixed(2);
        return bmi;
    }
    getBMIResults(bmi){
        let bmiResults = {
          label: '',
          alertClass: '',
        };
        
        if (bmi <= 18.5){
          bmiResults.label = '過輕';
          bmiResults.alertClass = 'alert-danger';
        } 
        else if (bmi <= 24.9) {
          bmiResults.label = '正常';
          bmiResults.alertClass = 'alert-success';
        }
        else if (bmi <= 29.9){
          bmiResults.label = '過重';
          bmiResults.alertClass = 'alert-warning';
        }
        else if (bmi >= 30) {
          bmiResults.label = '肥胖';
          bmiResults.alertClass = 'alert-danger';
        } else {
          bmiResults.label = 'BMI';
          bmiResults.alertClass = 'alert-primary';
        }
    
        return bmiResults;
      }

    render() {
        let bmi=this.calculateBMI();
        let results=this.getBMIResults(bmi);
        return (
            <div className="container">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/unit-converter">主頁</Link></BreadcrumbItem>
                    <BreadcrumbItem active>BMI計算器</BreadcrumbItem>
                </Breadcrumb>               
                 <div className="row row-content">
                <div className="col-4 col-sm-3"></div> 
                <div className="col-sm-9">
            <form>
                <div className="row">
                <div className="form-group col-sm-5">
                <legend>體重</legend>
                <div className="col-8 col-xs-4">
                    <input className="form-control" id="weight" type="number" size value={ this.state.weight } onChange={ this.handleWeightChange } />
                    <label className="control-label" htmlFor="weight">kg</label>
                    </div>
              </div>

              <div className="form-group col-sm-5">
                <legend>高度</legend>
                  <div className="col-8 col-xs-4">
                    <input className="form-control" id="height" type="number" name="height" value={ this.state.height } onChange={ this.handleHeightChange } />
                    <label className="control-label" htmlFor="height">m</label>
                  </div>
              </div>
                </div>
            </form>
          </div>
           <div className="col-sm-3"></div> 
          <div className="col-10 col-sm-6">
            <BmiDisplay bmi={bmi} label={results.label} alertClass={results.alertClass} />
          </div>
          <div className="col-sm-3"></div> 
        </div>
        </div>
        );
    }
    
}
function BmiDisplay(props){
  return (
    <div id="bmiContainer" className={"bmi-result alert " + props.alertClass}>
      <div>{ props.bmi || '--.--' }</div>
      <div>{ props.label }</div>
    </div> 
  )
}
export default Bmi;