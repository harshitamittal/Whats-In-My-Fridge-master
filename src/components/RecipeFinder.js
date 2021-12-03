import React, {Component} from 'react'
import Chip from '@material-ui/core/Chip'
import CircularProgress from '@material-ui/core/CircularProgress';
import Header from './Header'
import Footer from './Footer'
import RecipeCard from './RecipeCard'
import './RecipeFinder.css'



class RecipeFinder extends Component{

    constructor()
    {
        super()
        this.state = {
            loading : false,
            recipes : [],
            inputIngredients : [],
            one_ing : ""
        }

        this.apiCall = this.apiCall.bind(this)
        this.oneIng = this.oneIng.bind(this)
        this.addIngredient = this.addIngredient.bind(this)
        this.removeIngredient = this.removeIngredient.bind(this)

    }



    componentDidMount()
    {
        this.setState({
            loading : true
        })

        fetch("https://myfridgeapi.herokuapp.com/myfridge/")
        .then(response => response.json())
        .then(data => this.setState({
            loading : false,
            recipes : data
        }))
        
    }



    apiCall()
    {
        this.setState({
            loading : true
        })

        const ing_str = this.state.inputIngredients.join()

        if(ing_str.length === 0)
        {
            fetch("https://myfridgeapi.herokuapp.com/myfridge/")
            .then(response => response.json())
            .then(data => this.setState({
                loading : false,
                recipes : data
            }))
        }

        else
        {
            const url1 = "https://myfridgeapi.herokuapp.com/myfridge/?ingredients="
            const search_url = url1.concat(this.state.inputIngredients.join())
            fetch(search_url)
            .then(response => response.json(search_url))
            .then(data => this.setState({
                loading : false,
                recipes : data
            }))
        }
    }


    addIngredient(event){

        const newInputIng = this.state.inputIngredients.concat(this.state.one_ing)
        this.setState({
            inputIngredients : newInputIng
        })

    }



    removeIngredient(label){
        
        const index = this.state.inputIngredients.indexOf(label);

        if (index > -1) {
            var newInputIng = []
            newInputIng = this.state.inputIngredients
            newInputIng.splice(index, 1);
            this.setState({
                inputIngredients : newInputIng
            })
        }

    }


    oneIng(event){

        this.setState({
            one_ing : event.target.value
        })
    }




    render()
    {

        const recipeObj = this.state.recipes.map(item => <div key = {item.id} className = "my-2 col-lg-6"><RecipeCard key={item.id} values = {item} /></div>)
        const ChipObj = this.state.inputIngredients.map(item => <Chip key={item} label = {item} onDelete = {() => this.removeIngredient(item)}/> )
        
        if(this.state.loading){
            return(
                <div className = "RecipeFinder"> 
                
                    <Header />

                    <div className = "container">

                        <form>
                            <div className="input-group input-group-lg mb-3">
                                <input name="usering" value = {this.state.one_ing} onChange={this.oneIng} type="text" className="form-control" placeholder="Type your ingredients here" aria-label="Add your ingredients here" aria-describedby="basic-addon2" />
                                <div className="input-group-append"  style={{backgroundColor: "#F5EEDC"}}>
                                    <button className="btn btn-outline-dark" type="button" onClick = {this.addIngredient}  style={{backgroundColor: "black !important" , color: "white !important"}}>Add</button>
                                </div>
                            </div>
                        </form>
                        {ChipObj}                   
                        <br></br>
                <div className = "button my-4">
                            <a className="button2 mittal" onClick = {this.apiCall} style={{backgroundColor:"black",color:"white",cursor:"pointer"}}>Search Now !</a> 
                        </div>
                        

                        <div className = "button my-5">
                            <CircularProgress />
                        </div>
                    </div>
                    
                    <Footer />
            </div>
            )
        }


        
        return(
            <div className = "RecipeFinder"> 
                
                <Header />

                <div className = "container">

                <form>
                    <div className="input-group input-group-lg mb-3">
                        <input name="usering" value = {this.state.one_ing} onChange={this.oneIng} type="text" className="form-control" placeholder="Type your ingredients here" aria-label="Add your ingredients here" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-dark mittal" type="button" onClick = {this.addIngredient} style={{backgroundColor:"black",color:"white"}}>Add</button>
                        </div>
                    </div>
                </form>
                

                {ChipObj}
                
                <br></br>


                <div className = "button my-4">
                    <a className="button2 mittal" onClick = {this.apiCall} style={{backgroundColor:"black",color:"white",cursor:"pointer"}}>Search Now !</a> 
                </div>
                

                <div className = "row">
                    {recipeObj}
                </div>
                    
                </div>
                
                <Footer />
            </div>
        )
    }

}

export default RecipeFinder