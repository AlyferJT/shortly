import axios from "axios";

import styled from "styled-components";
import { useRef, useState } from "react";

import bgPatternDesktop from "../../assets/svg/bg-shorten-desktop.svg";
import bgPatternMobile from "../../assets/svg/bg-shorten-mobile.svg";

import SpacingComponent from "../UI/SpacingComponent";
import Button from "../UI/Button";
import ShortenResults from "./ShortenResults";

const apiUrl = "https://ulvis.net/api.php";

interface ShortenedListItem {
	mainUrl: string;
	shortUrl: string;
}

const Shorten: React.FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [linkError, SetLinkError] = useState<string | undefined>(undefined);
	const [shortenedList, setShortenedList] = useState<
		ShortenedListItem[] | never[]
	>([]);
	const linkBox = useRef<HTMLInputElement>(null);

	function addNewShorUrlToList(newUrl: ShortenedListItem) {
		setShortenedList(function (
			prevList: ShortenedListItem[]
		): ShortenedListItem[] {
			const newList = [newUrl, ...prevList];
			newList.splice(3);
			return newList;
		});
	}

	function handleShortenLink(): void {
		const linkBoxValue: string | undefined = linkBox.current?.value;

		if (!linkBoxValue) {
			SetLinkError("Please add a link");
			return;
		}

		SetLinkError(undefined);

		async function getShortenerResult() {
			setIsLoading(true);

			try {
				setTimeout(() => {
					throw new Error("API not responding. Please, try again later...");
				}, 10000);

				const response = await axios.get(
					`${apiUrl}?url=${linkBoxValue}&type=json`
				);

				const newShortenedUrl: ShortenedListItem = {
					mainUrl: linkBoxValue ?? "No url to show.",
					shortUrl: response.data ?? "No url to show.",
				};

				addNewShorUrlToList(newShortenedUrl);
			} catch (err) {
				SetLinkError((err as Error).message ?? "Error");
			} finally {
				setIsLoading(false);
			}
		}

		getShortenerResult();
	}

	return (
		<SpacingComponent bgColor='hsl(0, 0%, 95%)'>
			<StyledForm
				className={`containerWrapper ${linkError ? "error" : ""}`}
				onSubmit={(e) => e.preventDefault()}
				id='Shorten'
			>
				<input
					className='link-box'
					type='text'
					name='link'
					id='link'
					placeholder='Shorten a link here...'
					ref={linkBox}
				/>
				<span className='error-msg'>{linkError}</span>
				<Button
					fontSize={2}
					styles={{ borderRadius: "1rem", padding: "2rem 4rem" }}
					classes='shorten-btn'
					onClick={handleShortenLink}
				>
					Shorten It!
				</Button>
			</StyledForm>
			<ShortenResults isLoading={isLoading} shortenedList={shortenedList} />
		</SpacingComponent>
	);
};

export default Shorten;

const StyledForm = styled.form`
	width: 100%;
	height: 17rem;
	background-color: hsl(257, 27%, 26%);
	background-image: url(${bgPatternDesktop});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: bottom;
	border-radius: 1rem;
	transform: translateY(-50%);
	padding: 5rem 6rem;

	margin-bottom: -6rem;

	display: flex;
	gap: 2rem;

	& .link-box {
		position: relative;
		flex-grow: 1;
		height: 100%;
		border: none;
		outline: none;
		border-radius: 1rem;
		padding: 0 3rem;

		font-family: inherit;
		font-size: 2rem;

		&::placeholder {
			font-size: 2rem;
			color: hsl(257, 7%, 63%);
			transform: translateY(10%);
		}
	}

	& .error-msg {
		position: absolute;
		bottom: 2rem;
		font-style: italic;
		font-size: 1.6rem;
		color: hsl(0, 87%, 67%);

		display: none;
	}

	&.error {
		& .link-box {
			box-shadow: 0 0 0 0.3rem hsl(0, 87%, 67%);
		}

		& .error-msg {
			display: block;
		}
	}

	@media (max-width: 37rem) {
		flex-direction: column;
		padding: 3rem 4rem;
		height: auto;

		background-image: url(${bgPatternMobile});

		& .link-box {
			padding: 2rem;
		}
	}
`;
