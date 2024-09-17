import styled from "styled-components";
import FeaturesBoxItem from "./FeaturesBoxItem";

import brandRecognitionIcon from "../../assets/svg/icon-brand-recognition.svg";
import detailedRecordsIcon from "../../assets/svg/icon-detailed-records.svg";
import fullyCustomizableIcon from "../../assets/svg/icon-fully-customizable.svg";

const FeaturesBox: React.FC = () => {
	return (
		<StyledDiv className='containerWrapper'>
			<FeaturesBoxItem
				icon={brandRecognitionIcon}
				title='Brand Recognition'
				description="Boost your brand recognition with each click. Generic links don't 
  mean a thing. Branded links help instil confidence in your content."
				styles={{ transform: "translateY(-15%)" }}
			/>
			<FeaturesBoxItem
				icon={detailedRecordsIcon}
				title='Detailed Records'
				description='Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.'
			/>
			<FeaturesBoxItem
				icon={fullyCustomizableIcon}
				title='Fully Customizable'
				description='Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement.'
				styles={{ transform: "translateY(15%)" }}
			/>
		</StyledDiv>
	);
};

export default FeaturesBox;

const StyledDiv = styled.div`
	position: relative;
	width: 100%;
	height: auto;

	padding: 12.8rem 0;

	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 3.2rem;

	&::before {
		content: "";
		position: absolute;
		background-color: hsl(180, 66%, 49%);
		z-index: 1;

		width: 100%;
		height: 0.8rem;
		top: 45%;
	}

	@media (max-width: 49rem) {
		flex-direction: column;

		&::before {
			width: 0.8rem;
			height: 80%;
			top: 50%;
			transform: translateY(-50%);
		}
	}
`;
