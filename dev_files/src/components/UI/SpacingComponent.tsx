import styled from "styled-components";

interface PaddingComponentProps {
	children: React.ReactNode;
	verticalPadding?: number;
	horizontalPadding?: number;
	height?: string;
	bgColor?: string;
	styles?: object;
}

const SpacingComponent: React.FC<PaddingComponentProps> = ({
	children,
	verticalPadding = 0,
	horizontalPadding = 4.8,
	height = "auto",
	bgColor = "transparent",
	styles = {},
}) => {
	const styling = {
		padding: `${verticalPadding}rem ${horizontalPadding}rem`,
		bgColor: `${bgColor}`,
		margin: "0 auto",
		height: `${height}`,
	};
	return (
		<StyledDiv $style={styling} style={styles}>
			{children}
		</StyledDiv>
	);
};

export default SpacingComponent;

interface StyledDivProps {
	$style: { [key: string]: string | number };
}

const StyledDiv = styled.div<StyledDivProps>`
	padding: ${(props) => props.$style.padding};
	background-color: ${(props) => props.$style.bgColor};
	margin: 0 auto;
	height: ${(props) => props.$style.height};

	@media (max-width: 37rem) {
		padding: 0 2rem;
	}
`;
