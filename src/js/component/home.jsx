import React, {useState} from "react";
import { Trash } from "phosphor-react"


//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	return (
		<div className="container">
			<h1>My Todo List</h1>
			<ul>
				<li>
					<input 
					type="text"
					onChange={(e)=>{setInputValue(e.target.value)}}
					value={inputValue}
					onKeyPress={(e) => {
						if (e.key === "Enter") {
							setTodos(todos.concat(inputValue));
							setInputValue("");
						}		
					}}
					placeholder="Add your item here" />
				</li>
				{todos.map(item =><li>
					{item}
				<button className="trash">
					<Trash size={24}/>
				</button>
				</li>)}
			</ul>
			<div>x Task</div>
		</div>
	);
};

export default Home;
