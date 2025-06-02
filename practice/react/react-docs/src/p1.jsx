import {useState} from 'react';

const user = {
	name: 'Hedy Lamarr', 
	imageUr: 'https://i.imgur.com/yXOvdOSs.jpg',
	imageSize: 90,
};

export default function Profile() {
	return (
		<>
			<h1>{user.name}</h1>
			<img className="avatar"
				src={user.imageUrl}
				alt={`Photo of ${user.name}`}
				style =  {{
					width: user.imageSize,
					height:  user.imageSize}
				}
			/>
		<ListProduct />
		</>
	);
}

const products = [
	{title: 'Cabbage', id: 1},
	{title: 'Tomato', id: 2},
	{title: 'Apple', id: 3},
];

const listItems = products.map( (product)=>{
return <li key={product.id} >{product.title}</li>
}
);
 function ListProduct() {
return (
	<ul>{listItems}</ul>
);
}

