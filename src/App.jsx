import CircleOne from "./components/CircleOne/CircleOne";
import CircleTwo from "./components/CircleTwo/CircleTwo";
import Container from "./components/Container/Container";
import { ContainerStyles } from "./components/Container/styles";
import SquareOne from "./components/SquareOne/SquareOne";
import SquareTwo from "./components/SquareTwo/SquareTwo";

const App = () => {
	return (<>

	<ContainerStyles>
		<SquareTwo/>
		<CircleTwo/>
		<CircleOne/>
		<SquareOne/>
		</ContainerStyles>
	
	</>);
};

export default App;
