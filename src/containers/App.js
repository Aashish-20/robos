import React, {Component} from 'react';
import CardList from '../CardList';
import SearchBox from '../SearchBox';
import Scroll from '../Scroll';
import ErrorBoundary from '../ErrorBoundary';

class App extends Component{
    
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField:''
        }
    }

    //fetching through api and this ethod runs after the render method, you can know about
    //the lifecycle of the components by searchin it that which method runs first 
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users=> this.setState({ robots:users }));
    }

    onSearchChange = (event) => {
        // console.log(event.target.value);
        
        this.setState({searchField:event.target.value})
    
    }

    render() {

        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })

        if(this.state.robots.length === 0) {
            return <h1>Loading...</h1>
        }
        else {
            return (
                <div className = 'tc'>
                    <h1>Robo Dobo Jobo's</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots = {filteredRobots}/>
                        </ErrorBoundary>
                        
                    </Scroll>
                   
        
                </div>
                
            );
        }

        
    }
       
}
export default App;