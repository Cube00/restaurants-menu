import React, {useState} from "react";
import FoodItems from './components/foodItems.js';
import {data} from './data';
import './main.css';

const App =() => {
	const restaurants = data.map((e)=>{ return e.restaurant });
	const [visible, setVisible] = useState(false);
	const [restaurantName, seTrestaurantName] = useState('Restaurant Name');

	const chooseRestaurant = ()=>{
		setVisible(true);
		if(visible===true){
			setVisible(false);
		}
	}

	const chooseCat = (e) =>{
		setVisible(false);
		seTrestaurantName(e);
	}

	return <>
		<div className="content">
			<button className="chooseBtn" onClick={()=>chooseRestaurant()}>
				Choose restaurant
			</button>
			<div className={!visible ? 'block invisible' : 'block visible'}>
				<ul>
					{restaurants.map((e)=>{
						return <li className="rest-key" key={e} onClick={()=>chooseCat(e)}>{e}</li>
					})}
				</ul>
			</div>
			<div className='choosedRestaurant'>{restaurantName}</div>
		</div>

		<div className='container-items'>
			<FoodItems data={data} restaurantName={restaurantName} />
		</div>
	</>;
}


export default App;