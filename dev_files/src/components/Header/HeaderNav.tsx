import styled from "styled-components";

import MenuIcon from "../../assets/icons/MenuIcon.js";

import ShortlyLogo from "../UI/ShortlyLogo";
import LinkItem from "../UI/LinkItem";
import Button from "../UI/Button";
import { useState } from "react";

const HeaderNav: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	function handleToggleMenu() {
		setIsMenuOpen((prevValue) => !prevValue);
	}

	return (
		<StyledHeader className='header-nav containerWrapper'>
			<ShortlyLogo />
			<div className={`nav-divider ${isMenuOpen ? "menu-open" : ""}`}>
				<div className='header-left'>
					<nav>
						<ul className='header-nav-list'>
							<LinkItem
								url='#Features'
								hoverColor='hsl(260, 8%, 14%)'
								letterSpacing={0}
							>
								Features
							</LinkItem>
							<LinkItem
								url='#CallToAction'
								hoverColor='hsl(260, 8%, 14%)'
								letterSpacing={0}
							>
								Pricing
							</LinkItem>
							<LinkItem
								url='#Footer'
								hoverColor='hsl(260, 8%, 14%)'
								letterSpacing={0}
							>
								Resources
							</LinkItem>
						</ul>
					</nav>
				</div>
				<div className='header-right'>
					<Button classes='menu-btn outline'>Login</Button>
					<Button classes='menu-btn'>Sign Up</Button>
				</div>
			</div>

			<button className='mobile-menu-btn' onClick={handleToggleMenu}>
				<MenuIcon />
			</button>
		</StyledHeader>
	);
};

export default HeaderNav;

const StyledHeader = styled.header`
	width: 100%;
	display: flex;
	gap: 4rem;
	padding: 3.6rem 0;

	& .nav-divider {
		display: flex;
		justify-content: space-between;
		flex-grow: 1;

		& .header-left,
		& .header-right,
		& .header-nav-list {
			display: flex;
			align-items: center;
		}

		& .header-left {
			gap: 4rem;

			& .header-nav-list {
				list-style: none;
				gap: 2.4rem;
				& .link {
					font-weight: 700;
				}
			}
		}
	}

	& .mobile-menu-btn {
		display: none;
		width: 5rem;
		background: none;
		border: none;
		color: hsl(257, 7%, 63%);

		&:hover {
			cursor: pointer;
		}
	}

	@media (max-width: 40rem) {
		justify-content: space-between;
		position: relative;

		& .nav-divider {
			transition: all 0.2s;

			position: absolute;
			flex-direction: column;
			width: 100%;

			background-color: hsl(257, 27%, 26%);
			border-radius: 1.6rem;
			padding: 6.4rem 4rem;

			top: 90%;
			left: 50%;
			transform: translateX(-50%) scaleY(0);

			& .header-left {
				margin: 0 auto;

				& .header-nav-list {
					flex-direction: column;
					gap: 3rem;

					.link {
						font-size: 2.4rem;
						color: #fff;
					}
				}
			}

			& .header-right {
				flex-direction: column;

				border-top: 1px solid hsl(257, 7%, 63%);
				padding-top: 2rem;
				margin-top: 4rem;

				& .menu-btn {
					font-size: 2.4rem;
					width: 100%;
					color: #fff;
					display: inline;
					padding: 2rem;
				}
			}

			&.menu-open {
				transform: translateX(-50%) scaleY(1);
			}
		}

		& .mobile-menu-btn {
			display: inline-block;
		}
	}
`;
