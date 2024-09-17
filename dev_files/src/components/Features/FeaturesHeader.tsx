import styled from "styled-components";

const FeaturesHeader: React.FC = () => {
	return (
		<StyledHeader id='Features'>
			<h2 className='title'>Advanced Statistics</h2>
			<p className='text'>
				Track how your links are performing across the web with our advanced
				statistics dashboard.
			</p>
		</StyledHeader>
	);
};

export default FeaturesHeader;

const StyledHeader = styled.header`
	max-width: 53rem;
	margin: 0 auto;
	text-align: center;

	& .title {
		color: hsl(255, 11%, 22%);
		font-size: 4rem;
		letter-spacing: -1px;
	}

	& .text {
		margin-top: 1rem;
		color: hsl(257, 7%, 63%);
		line-height: 1.8;
	}

	@media (max-width: 25rem) {
		& .title {
			font-size: 3.4rem;
		}
	}
`;
