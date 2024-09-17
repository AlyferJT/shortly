import SpacingComponent from "../UI/SpacingComponent";
import HeaderNav from "./HeaderNav";
import HeaderHero from "./HeaderHero";

const Header: React.FC = () => {
	return (
		<SpacingComponent
			height='auto'
			styles={{
				display: "grid",
				gridTemplateRows: "auto 3fr",
			}}
		>
			<HeaderNav />
			<HeaderHero />
		</SpacingComponent>
	);
};

export default Header;
