import React, { useState } from "react";
import { Card } from "./card";
export function Home() {
	// FUNCION AGREAR PALABRA al array de To Dos
	const handleAdd = () => {
		setListItems([...listItems, newItem]);
		setNewItem("");
	};
	//FUNCION---BORRA index o posicion de la lista comparando la selecionada vs las demas
	const handleDelete = indexToDelete => {
		const newList = listItems.filter((newItem, index) => {
			return index != indexToDelete;
		});
		//reinicioo
		setListItems(newList);
	};
	//ESTADOS
	const [listItems, setListItems] = useState([]);
	const [newItem, setNewItem] = useState("");
	return (
		<div className="text-center mt-5 bg-secondary">
			<h1>To-Dos</h1>
			<input
				type="text"
				onChange={event => {
					setNewItem(event.target.value);
				}}
				value={newItem}
				placeholder="What needs to be done"
			/>
			<button
				type="button"
				className="btn btn-primary"
				onClick={handleAdd}>
				{"Add task"}
			</button>
			<div className="text-center mt-5">
				<ul className="list-group">
					{listItems.map((newItem, index) => {
						return (
							<li
								className="list-group-item"
								key={index}
								onClick={event => handleDelete(index)}>
								<Card name={newItem} />
							</li>
						);
					})}
				</ul>
			</div>
			{/* etiqueta para indicar numeros de To Dos */}
			<label
				className={`text-success font-weight-bold ${
					listItems.length > 0 ? "text-danger" : ""
				}`}
				htmlFor="taskleft">
				{listItems.length} items left
			</label>
		</div>
	);
}
