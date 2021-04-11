import React, {useContext} from 'react';
import Each from './each';

const FilterItems = ({ItemContext, restaurantName})=>{
	const data = useContext(ItemContext);
	const dataFilter = data.filter((e)=> e.restaurant ===restaurantName);

	return <>
		{dataFilter.map((e)=>{
			const foods = e.foodItems;
			return foods.map((each)=>{
				return <Each each={each} key={each.foodName}/>
			});
		})}
	</>
}

export default FilterItems;