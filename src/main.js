import React from 'react';

import dhokla from './dhokla.jpg'
import jalebi from './jalebi.jpg'
import usal from './usal.jpg'
import './App.css'

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count1: 0,
            count2: 0,
            count3: 0,
            Total: 0,
            Date: "", 
            EDate: "" 
        }
        this.increase1 = this.increase1.bind(this)
        this.increase2 = this.increase2.bind(this)
        this.increase3 = this.increase3.bind(this)
        this.decrease1 = this.decrease1.bind(this)
        this.decrease2 = this.decrease2.bind(this)
        this.decrease3 = this.decrease3.bind(this)
        this.display = this.display.bind(this)
    }
        increase1=(e)=>{ 
        this.setState({ 
        count1: this.state.count1 + 1, 
        Total: this.state.Total + 150 
        });
        }
        decrease1=(e)=>{ 
        this.setState({ 
        count1: this.state.count1 - 1, 
        Total: this.state.Total - 150 
        });
        }
        increase2=(e)=>{ 
            this.setState({ 
            count2: this.state.count2 + 1, 
            Total: this.state.Total + 200 
            });
            }
        decrease2=(e)=>{ 
            this.setState({ 
            count2: this.state.count2 - 1, 
            Total: this.state.Total - 200 
            });
            }
        increase3=(e)=>{ 
            this.setState({ 
            count3: this.state.count3 + 1, 
            Total: this.state.Total + 100 
            });
            }
        decrease3=(e)=>{ 
            this.setState({ 
            count3: this.state.count3 - 1, 
            Total: this.state.Total - 100 
            });
            } 
        display=(e)=>{ 
            
            const date = new Date();
            
            const date1 = date.getHours() + ':' + date.getMinutes();
            var edate1;
            
            if(date.getHours()=='23'){
                edate1 = '00' + ':' + date.getMinutes(); 
            }
            else{
                edate1 = date.getHours() + 1 + ':' + date.getMinutes(); 
            }
                
            console.log(date1); 
            console.log(edate1); 
            
            this.setState({ 
                Date: date1, 
                EDate: edate1
            }) 
        }              
    render() {
        return(
            <div className="divclass">
                <centre><h1 className='header'>Food Adda</h1></centre>
            <div className="divclass">
                <img className="imageclass" src={dhokla}/>
                <p className="textclass">Name : {this.props.food[0]}</p>
                <p className="textclass">Price: {this.props.price[0]} INR </p>
                <label className="textclass">Quantity :</label>
                <input className="inputclass" type="text" value={this.state.count1}></input> 
                <button className="buttonclass1" onClick={this.increase1}>+</button>
                <button className="buttonclass2" onClick={this.decrease1}>- </button>
            </div>
            <div className="divclass">
                <img className="imageclass" src ={jalebi}/>
                <p className="textclass">Name : {this.props.food[1]}</p>
                <p className="textclass">Price: {this.props.price[1]} INR </p>
                <label className="textclass">Quantity :</label>
                <input className="inputclass" type="text" value={this.state.count2}></input>
                <button className="buttonclass1" onClick={this.increase2}>+</button>
                <button className="buttonclass2" onClick={this.decrease2}>- </button>
            </div>

            <div className="divclass">
                <img className="imageclass" src ={usal}/>
                <p className="textclass">Name : {this.props.food[2]}</p>
                <p className="textclass">Price: {this.props.price[2]} INR </p>
                <label className="textclass">Quantity :</label>
                <input className="inputclass" type="text" value={this.state.count3}></input>
                <button className="buttonclass1" onClick={this.increase3}>+</button>
                <button className="buttonclass2" onClick={this.decrease3}>- </button>
            </div>

            <div>
                <button className="summaryclass" onClick={this.display}>Order Summary</button>
                <h2>Total : {this.state.Total} INR</h2>
                <h2>Order Time : {this.state.Date} </h2>
                <h2>Delivery Time : {this.state.EDate} </h2>
            </div>
            </div>
            )
        }
}

export default Main;