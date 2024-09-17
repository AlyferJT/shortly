import styled, { keyframes } from "styled-components";

const Loader: React.FC = () => {
	return (
		<StyledSpan>
			<div className='circle one'></div>
			<div className='circle two'></div>
			<div className='circle three'></div>
		</StyledSpan>
	);
};

export default Loader;

const loadingAnimation = keyframes`
    0% {
        transform: translateY(0)
    }

    50% {
        transform: translateY(-20%)
    }

    100% {
        transform: translateY(0)
    }
`;

const StyledSpan = styled.span`
	display: flex;
	justify-content: center;
	gap: 0.5rem;
	& .circle {
		width: 0.8rem;
		height: 0.8rem;
		border-radius: 50%;
		background-color: hsl(180, 66%, 49%);

		&.one,
		&.two,
		&.three {
			animation-name: ${loadingAnimation};
			animation-duration: 0.6s;
			animation-iteration-count: infinite;
		}

		&.two {
			animation-delay: 0.2s;
		}
		&.three {
			animation-delay: 0.4s;
		}
	}
`;
