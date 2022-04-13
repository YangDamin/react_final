// import React, { useState } from 'react';
import React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TodoListTemplate from '../Todo/TodoListTemplates';
import Form from '../Todo/Form';
import TodoItemList from '../Todo/TodoItemList';
import Swal from 'sweetalert2';
import Nav from '../Common/Nav';


// const MyFeed  = () =>{

class MyFeed extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
			// *** Form.js 에서 Hook(useState) 사용으로 인해 제거
			// input : "",
			todos : [
				
			]
		}
		// this.handleChange = this.handleChange.bind(this);
		this.handleCreate = this.handleCreate.bind(this);
		// this.handleKeyPress = this.handleKeyPress.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
		this.handleInitInfo = this.handleInitInfo.bind(this);
	}


	componentDidMount() {
		this.handleInitInfo()
	}


	handleInitInfo() {
		fetch("/api/todos")
			.then(res => res.json())
			.then(todos => this.setState({todos : todos}))
			.catch(err => console.log(err))
	}


	// *** Form.js 에서 Hook(useState) 사용으로 인해 제거
	// input 값 변경
	// handleChange(event) {
	// 	this.setState({
	// 		input: event.target.value
	// 	});
	// }


	// *** Form.js 에서 Hook(useState) 사용으로 인해 state 에서 input 을 제외하고
	// parameter 로 받는다.
	// 등록
	handleCreate(inputValue) {
		const { todos } = this.state;
		const Toast = Swal.mixin({
			toast: true,
			position: 'middle-',
			showConfirmButton: false,
			timer:2000,
			didOpen: (toast) => {
				toast.addEventListener('mouseenter', Swal.stopTimer)
				toast.addEventListener('mouseleave', Swal.resumeTimer)
			  }
			})

		if (inputValue === "") {
			Toast.fire({
				icon: 'warning',
				title: '할 일을 입력해주세요.'
			  })
			return;
		}

		// 화면에서 먼저 변경사항을 보여주는 방법으로 이용
		this.setState({
			// input: "",
			// concat 을 사용하여 배열에 추가
			todos: todos.concat({
				id: 0,	// 임의의 id를 부여하여 key error 를 방지
				content: inputValue,
				isComplete: false
			})
		});

		// 처리
		const data = {
			body: JSON.stringify({"content" : inputValue}),
			headers: {'Content-Type': 'application/json'},
			method: 'post'
		}
		fetch("/api/todos", data)
			.then(res => {
				if(!res.ok) {
					throw new Error(res.status);
				} else {
					return this.handleInitInfo();
				}
			})
			.catch(err => console.log(err));
	}


	// *** Form.js 에서 Hook(useState) 사용으로 인해 제거
	// Enter Key 이벤트
	// handleKeyPress(event) {
	// 	if (event.key === "Enter") {
	// 		this.handleCreate();
	// 	}
	// }


	// 수정
	handleToggle(id) {
		const { todos } = this.state;

		

		const isComplete = todos.find(todo => todo.id === id).isComplete;
		if(!Swal.fire(isComplete ? 
            "미완료 처리 하시겠습니까?" : "완료 처리 하시겠습니까?")) {
			return;
		}

		// 파라미터로 받은 id 를 가지고 몇 번째 아이템인지 찾는다.
		const index = todos.findIndex(todo => todo.id === id);

		// 선택한 객체를 저장한다.
		const selected = todos[index];

		// 배열을 복사한다.
		const nextTodos = [...todos];

		// 기존의 값을 복사하고 isComplete 값을 덮어쓴다.
		nextTodos[index] = {
			...selected,
			isComplete : !selected.isComplete
		};

		this.setState({
			todos : nextTodos
		});

		const data = {
			headers: {'Content-Type':'application/json'},
			method: 'put'
		}
		fetch("/api/todos/" + id, data)
		.then(res => {
			if(!res.ok) {
				throw new Error(res.status);
			} else {
				return this.handleInitInfo();
			}
		})
		.catch(err => console.log(err));
	}


	// 삭제
	handleRemove(id) {
		const { todos } = this.state;

		const removeContent = todos.find(todo => todo.id === id).content;
		if(!Swal.fire("'" + removeContent + "' 을 삭제하시겠습니까?")) {
			return;
		}

		this.setState({
			todos : todos.filter(todo => todo.id !== id)
		});

		const data = {
			headers: {'Content-Type':'application/json'},
			method: 'delete'
		}
		fetch("/api/todos/" + id, data)
		.then(res => {
			if(!res.ok) {
				throw new Error(res.status);
			} else {
				return this.handleInitInfo();
			}
		})
		.catch(err => console.log(err));
	}


	render() {
		return (
            <>
	<Nav/>
        <CssBaseline />
          <Container className="content-container" >
               <Box sx={{ bgcolor: 'rgba(238, 238, 238, 1)',borderRadius:'40px 40px 0 0', 
			   borderWidth: "5px",borderColor:'black',borderStyle:'solid',
			   borderColor:'black', height: '100vh' }}>
            <Box sx={{ flexGrow: 1,mt:6 }}>
              
			<TodoListTemplate form={(
				<Form
					onCreate={this.handleCreate}
				/>
			)}>
				<TodoItemList
					todos={this.state.todos}
					onToggle={this.handleToggle}
					onRemove={this.handleRemove} />
			</TodoListTemplate>
            </Box>
            </Box>
            </Container>
          
            </>
		);
	}
}


export default MyFeed;