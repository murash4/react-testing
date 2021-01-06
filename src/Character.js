const Character = ({ name, side }) => {
	return (
		<li>
			{ name } - <strong>{ side }</strong>
		</li>
	)
}

export default Character
