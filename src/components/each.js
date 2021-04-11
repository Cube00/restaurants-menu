const Each = ({each})=>{
	const {foodName, foodType, protein,calories} = each;
	return <div className="item">
		<h2>{foodName}</h2>
		<h3>Foodtype: {foodType !== undefined ? foodType : 'none'}</h3>
		<div className="additional-in">
			<span>Protein: {protein !== undefined ? protein : 'none'}</span>
			<span>Calories: {calories}</span>
		</div>
	</div>
}

export default Each;