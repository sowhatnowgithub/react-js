import { useState } from 'react';

var currentMark = 'X';
var MySquare = () => {
	const [value,setValue] = useState(null);
	function handleClick() {
		setValue(currentMark);
		if(currentMark == 'X') currentMark = 'O';
		else if(currentMark == 'O') currentMark = 'X';
	}
	return (
		<button className="square" onClick={handleClick}> {value} </button>
	);
}

var MyRowSquare = () => {
	 return (<>
		 <div className="board-row" >
		 <MySquare />
		 <MySquare />
		 <MySquare />
		 </div>
	 </>);
}
var MyBoard = () => {
	return (<>
		<MyRowSquare />
		<MyRowSquare />
		<MyRowSquare />
	</>);
}
export default MyBoard;
