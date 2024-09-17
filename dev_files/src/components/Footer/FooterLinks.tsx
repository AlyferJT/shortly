import styled from "styled-components";

import FooterLinksList from "./FooterLinksList.tsx";
import LinkItem from "../UI/LinkItem.tsx";

const FooterLinks: React.FC = () => {
	return (
		<StyledDiv>
			<FooterLinksList title='Features'>
				<LinkItem blank>Link Shortening</LinkItem>
				<LinkItem blank>Branded Links</LinkItem>
				<LinkItem blank>Analytics</LinkItem>
			</FooterLinksList>
			<FooterLinksList title='Resources'>
				<LinkItem blank>Blog</LinkItem>
				<LinkItem blank>Developers</LinkItem>
				<LinkItem blank>Support</LinkItem>
			</FooterLinksList>
			<FooterLinksList title='Company'>
				<LinkItem blank>About</LinkItem>
				<LinkItem blank>Our Team</LinkItem>
				<LinkItem blank>Careers</LinkItem>
				<LinkItem blank>Contact</LinkItem>
			</FooterLinksList>
		</StyledDiv>
	);
};

export default FooterLinks;

const StyledDiv = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	align-items: space-between;
	column-gap: 7rem;

	@media (max-width: 57rem) {
		column-gap: 5rem;
	}

	@media (max-width: 25rem) {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(3, 1fr);
	}
`;
