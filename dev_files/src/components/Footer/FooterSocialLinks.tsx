import styled from "styled-components";

import LinkItem from "../UI/LinkItem";

import FacebookIcon from "../../assets/icons/FacebookIcon.tsx";
import TwitterIcon from "../../assets/icons/TwitterIcon.tsx";
import PinterestIcon from "../../assets/icons/PinterestIcon.tsx";
import InstagramIcon from "../../assets/icons/InstagramIcon.tsx";

const FooterSocialLinks: React.FC = () => {
	return (
		<StyledUl>
			<LinkItem blank>
				<FacebookIcon />
			</LinkItem>
			<LinkItem blank>
				<TwitterIcon />
			</LinkItem>
			<LinkItem blank>
				<PinterestIcon />
			</LinkItem>
			<LinkItem blank>
				<InstagramIcon />
			</LinkItem>
		</StyledUl>
	);
};

export default FooterSocialLinks;

const StyledUl = styled.ul`
	display: flex;
	justify-content: center;
	gap: 2.4rem;
`;
