import styled from "styled-components";

interface ShortlyLogoProps {
	color?: string;
}

const ShortlyLogo: React.FC<ShortlyLogoProps> = ({ color }) => {
	return (
		<StyledSpan color={color} className='header-logo'>
			<a href='#'>Shortly</a>
		</StyledSpan>
	);
};

export default ShortlyLogo;

const StyledSpan = styled.span<{ color?: string }>`
	color: ${({ color }) => (color !== "" ? color : "hsl(255, 11%, 22%)")};
	font-size: 3.4rem;
	font-weight: 700;
	font-family: inherit;

	transition: all 0.1s;

	& a {
		&:link,
		&:visited {
			color: inherit;
			text-decoration: none;
		}
	}

	&:hover {
		transform: scale(1.02) rotate(2deg);
	}
`;
