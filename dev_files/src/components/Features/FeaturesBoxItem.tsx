import styled from "styled-components";

interface FeaturesBoxItemProps {
	icon: string;
	title: string;
	description: string;
	styles?: object;
}

const FeaturesBoxItem: React.FC<FeaturesBoxItemProps> = ({
	icon,
	title,
	description,
	styles = {},
}) => {
	return (
		<StyledDiv style={{ ...styles }}>
			<div className='feature-logo-box'>
				<img src={icon} alt={`${title} icon`} className='feature-logo' />
			</div>
			<span className='feature-title'>{title}</span>
			<p className='feature-description'>{description}</p>
		</StyledDiv>
	);
};

export default FeaturesBoxItem;

const StyledDiv = styled.div`
	background-color: #fff;
	padding: 0 3rem 4rem 3rem;
	padding-top: 0;
	border-radius: 0.4rem;
	z-index: 2;
	box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.1);

	& .feature-logo-box {
		width: 9rem;
		height: 9rem;
		margin-bottom: -1rem;
		background-color: hsl(257, 27%, 26%);

		border-radius: 50%;

		display: flex;
		align-items: center;
		justify-content: center;

		transform: translateY(-50%);
	}

	& .feature-title {
		font-size: 2.2rem;
		font-weight: 700;
		color: hsl(255, 11%, 22%);
	}

	& .feature-description {
		font-size: 1.6rem;
		margin-top: 1.6rem;
		color: hsl(257, 7%, 63%);
		line-height: 1.7;
	}

	@media (max-width: 49rem) {
		max-width: 42rem;
		text-align: center;

		& .feature-logo-box {
			margin: 0 auto;
		}
	}
`;
