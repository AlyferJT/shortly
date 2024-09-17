import styled from "styled-components";

interface ButtonProps {
	children: React.ReactNode;
	paddingMultiplier?: number;
	fontSize?: number;
	styles?: object;
	classes?: string;
	onClick?: (event: React.SyntheticEvent<Element, Event>) => void;
}

const Button: React.FC<ButtonProps> = ({
	children,
	paddingMultiplier = 1,
	fontSize = 1.6,
	styles = {},
	classes = "",
	onClick = undefined,
}) => {
	const styling = {
		...styles,
	};

	const paddingValue = `${1 * paddingMultiplier}rem ${
		3.2 * paddingMultiplier
	}rem`;

	return (
		<StyledButton
			$padding_value={paddingValue}
			$font_size={`${fontSize}rem`}
			className={classes}
			style={styling}
			onClick={onClick}
		>
			{children}
		</StyledButton>
	);
};

export default Button;

const StyledButton = styled.button<{
	$padding_value: string;
	$font_size: string;
}>`
	padding: ${(props) => props.$padding_value};
	background-color: hsl(180, 66%, 49%);
	border: none;
	border-radius: 100rem;

	transition: all 0.1s;

	font-family: inherit;
	font-size: ${(props) => props.$font_size};
	color: white;
	font-weight: 700;

	display: flex;
	align-items: center;
	justify-content: center;

	&.outline {
		color: hsl(257, 7%, 63%);
		background-color: transparent;
	}

	& a:link,
	& a:visited {
		text-decoration: none;

		color: inherit;
	}

	& a:hover,
	& a:active {
		color: inherit;
	}

	&:hover {
		cursor: pointer;
		background-color: hsl(180, 66%, 79%);

		&.outline {
			color: #333;
			background: transparent;
		}
	}
`;
