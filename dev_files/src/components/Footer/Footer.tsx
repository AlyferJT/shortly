import styled from "styled-components";

import SpacingComponent from "../UI/SpacingComponent";
import ShortlyLogo from "../UI/ShortlyLogo";
import FooterLinks from "./FooterLinks";
import FooterSocialLinks from "./FooterSocialLinks";

const Footer: React.FC = () => {
	return (
		<SpacingComponent bgColor='hsl(260, 8%, 14%)'>
			<StyledFooter id='Footer' className='containerWrapper'>
				<ShortlyLogo color='#fff' />
				<FooterLinks />
				<FooterSocialLinks />
			</StyledFooter>
		</SpacingComponent>
	);
};

export default Footer;

const StyledFooter = styled.footer`
	padding-top: 4.8rem;
	padding-bottom: 8rem;

	display: grid;
	grid-template-columns: 1fr 1.8fr auto;
	column-gap: 9.6rem;

	@media (max-width: 57rem) {
		grid-template-columns: 1fr 2fr 1fr;
		column-gap: 2rem;
	}

	@media (max-width: 39rem) {
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr auto;

		row-gap: 5rem;
		text-align: center;
	}
`;
