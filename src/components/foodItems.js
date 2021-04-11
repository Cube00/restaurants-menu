import React from 'react';
import FilterItems from './filterItems';

const ItemContext = React.createContext();
const FoodItems = ({data, restaurantName}) => {
	return <ItemContext.Provider value={data}>
				<FilterItems ItemContext={ItemContext} restaurantName={restaurantName} />
		   </ItemContext.Provider>
}

export default FoodItems;