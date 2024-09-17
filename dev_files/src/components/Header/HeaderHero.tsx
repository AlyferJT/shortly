import styled from "styled-components";
import heroImg from "../../assets/svg/illustration-working.svg";

import Button from "../UI/Button";

const HeaderHero: React.FC = () => {
	return (
		<StyledSection className='containerWrapper'>
			<div className='hero-content'>
				<h1 className='hero-title'>More than just shorter links</h1>
				<p className='hero-text'>
					Build your brand&apos;s recognition and get detailed insights on how
					your links are performing.
				</p>
				<Button fontSize={1.8} paddingMultiplier={1.4} classes='hero-cta'>
					Get Started
				</Button>
			</div>
			<div className='hero-image-box'>
				<img src={heroImg} alt='worker on a computer' className='hero-image' />
			</div>
		</StyledSection>
	);
};

export default HeaderHero;

const StyledSection = styled.section`
	width: 100%;
	margin-bottom: 15rem;
	display: grid;
	grid-template-columns: 55% 45%;
	column-gap: 4.8rem;
	align-items: center;

	& .hero-content {
		& .hero-title {
			color: hsl(255, 11%, 22%);
			font-size: 8rem;
			line-height: 1.1;
			letter-spacing: -1px;
		}

		& .hero-text {
			font-size: 2rem;
			color: hsl(257, 7%, 63%);
			width: 90%;
		}

		& .hero-cta {
			margin-top: 3.5rem;
		}
	}

	@media (max-width: 72rem) {
		& .hero-content {
			& .hero-title {
				font-size: 6.2rem;
			}
		}

		& .hero-image {
			width: 120%;
		}
	}

	@media (max-width: 54rem) {
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr;
		row-gap: 5rem;
		margin-bottom: 20rem;

		justify-items: center;

		& .hero-content {
			text-align: center;

			& .hero-title {
				font-size: 7.2rem;
			}

			& .hero-text {
				width: 100%;
				margin: 2.4rem auto 0;
			}

			& .hero-cta {
				display: inline-block;
			}
		}

		& .hero-image-box {
			display: flex;
			grid-row: 1;

			& .hero-image {
				width: 150%;
				margin: 0 auto;
			}
		}
	}

	@media (max-width: 40rem) {
		& .hero-content {
			& .hero-title {
				font-size: 6rem;
			}

			& .hero-cta {
				font-size: 2.4rem;
			}
		}
	}

	@media (max-width: 22rem) {
		& .hero-content {
			& .hero-title {
				font-size: 5rem;
			}
		}
	}
`;
