import SpacingComponent from "../UI/SpacingComponent";
import FeaturesHeader from "./FeaturesHeader";
import FeaturesBox from "./FeaturesBox";

const Features: React.FC = () => {
	return (
		<SpacingComponent
			bgColor='hsl(0, 0%, 95%)'
			styles={{ paddingTop: "10rem" }}
		>
			<FeaturesHeader />
			<FeaturesBox />
		</SpacingComponent>
	);
};

export default Features;
