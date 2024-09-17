import styled from "styled-components";

interface FooterLinksListProps {
	children: React.ReactNode;
	title: string;
	color?: string;
	fontSize?: number;
}

const FooterLinksList: React.FC<FooterLinksListProps> = ({
	children,
	title,
	color = "#fff",
	fontSize = 1.6,
}) => {
	return (
		<StyledUl>
			<li
				className='list-title'
				style={{ color: color, fontSize: `${fontSize}rem` }}
			>
				{title}
			</li>
			{children}
		</StyledUl>
	);
};

export default FooterLinksList;

const StyledUl = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	list-style: none;

	& .list-title {
		margin-bottom: 1rem;
	}
`;
