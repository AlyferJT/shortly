import styled from "styled-components";

import bgPatternDesktop from "../../assets/svg/bg-boost-desktop.svg";

import Button from "../UI/Button";

const CallToAction: React.FC = () => {
	return (
		<StyledSection id='CallToAction'>
			<h2 className='cta-title'>Boost your links today</h2>
			<Button fontSize={2} paddingMultiplier={1.3} classes='cta-btn'>
				Get Started
			</Button>
		</StyledSection>
	);
};

export default CallToAction;

const StyledSection = styled.section`
	width: 100%;
	background-color: hsl(257, 27%, 26%);
	background-image: url(${bgPatternDesktop});
	background-size: cover;
	background-position: bottom;

	text-align: center;
	padding: 6rem;

	& .cta-title {
		letter-spacing: -1px;
		font-size: 4rem;
		color: #fff;
	}

	& .cta-btn {
		margin: 2rem auto 0;
	}

	@media (max-width: 28rem) {
		& .cta-title {
			font-size: 3rem;
		}
	}
`;
