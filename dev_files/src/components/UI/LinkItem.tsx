import styled from "styled-components";

interface LinkItemProps {
	children: React.ReactNode;
	url?: string;
	color?: string;
	fontSize?: number;
	letterSpacing?: number;
	hoverColor?: string;
	blank?: boolean;
}

const LinkItem: React.FC<LinkItemProps> = ({
	children,
	url = "https://www.linkedin.com/in/alyferjt/",
	color = "hsl(257, 7%, 63%)",
	fontSize = 1.6,
	letterSpacing = -0.8,
	hoverColor = "hsl(180, 66%, 49%)",
	blank,
}) => {
	return (
		<StyledLi
			$hover_color={hoverColor}
			$style={{
				color: color,
				fontSize: fontSize,
				letterSpacing: letterSpacing,
			}}
		>
			<a
				className='link'
				href={url}
				target={blank ? "_blank" : "_self"}
				rel='noopener noreferrer'
				aria-label={url}
			>
				{children}
			</a>
		</StyledLi>
	);
};

export default LinkItem;

const StyledLi = styled.li<{
	$hover_color?: string;
	$style: { color: string; fontSize: number; letterSpacing: number };
}>`
	list-style: none;

	& a.link {
		text-decoration: none;
		transition: all 0.1s;

		&:link,
		&:visited {
			color: ${(props) => props.$style.color};
			font-size: ${(props) => props.$style.fontSize}rem;
			letter-spacing: ${(props) => props.$style.letterSpacing}px;
		}

		&:hover,
		&:active {
			color: ${(props) => props.$hover_color};

			& svg {
				filter: brightness(0) saturate(100%) invert(94%) sepia(15%)
					saturate(4529%) hue-rotate(137deg) brightness(84%) contrast(92%);
			}
		}
	}
`;
