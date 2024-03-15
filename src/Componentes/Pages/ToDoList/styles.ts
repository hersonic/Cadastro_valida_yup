import { Box, styled } from "@mui/system";

export const Container = styled(Box)`
	h1 {
		color: black;
		text-align: center;
		margin-top: 200px;
	}

	.App {
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 100vw;
		height: 100vh;
		font-family: Arial, Arial, Helvetica, sans-serif;
	}

	.header {
		flex: 30%;
		background-color: orange;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.header .inputContainer {
		display: flex;
		flex-direction: column;
	}

	.header input {
		width: 200px;
		height: 40px;
		border: none;
		border-bottom-left-radius: 8px;
		border-top-left-radius: 8px;
		padding-left: 10px;
		font-size: 17px;
		border: 1px solid grey;
	}

	.header button {
		width: 70px;
		height: 78px;
		border: none;
		border-bottom-right-radius: 8px;
		border-top-right-radius: 8px;
		padding-left: 10px;
		cursor: pointer;
	}

	.todoList {
		flex: 70%;
		width: 100%;
		display: flex;
		align-items: center;
		padding-top: 50px;
		flex-direction: column;
	}

	.task {
		width: 500px;
		height: 50px;
		display: flex;
		color: white;
		margin: 15px;
	}

	.task .content {
		flex: 80%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.task .content span {
		display: grid;
		place-items: center;
		border: 1px solid white;
		width: 100%;
		height: 100%;
		font-size: 18px;
		border-right: none;
		background-color: orange;
	}

	.task button {
		flex: 20%;
		height: 100%;
		background-color: lightgreen;
		border: none;
		border-bottom-right-radius: 8px;
		border-top-right-radius: 8px;
		cursor: pointer;
	}
`;
