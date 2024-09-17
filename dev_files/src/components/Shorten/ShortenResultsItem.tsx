import styled from "styled-components";
import Button from "../UI/Button";
import { useState } from "react";

interface ShortenResultsItemProps {
	mainUrl: string;
	shortUrl: string;
}

const ShortenResultsItem: React.FC<ShortenResultsItemProps> = ({
	mainUrl,
	shortUrl,
}) => {
	const [isCopied, setIsCopied] = useState<boolean>(false);

	function handleIsCopied() {
		setIsCopied(true);
		navigator.clipboard.writeText(shortUrl);

		setTimeout(() => {
			setIsCopied(false);
		}, 2000);
	}

	return (
		<StyledLi>
			<p className='entered-link'>{mainUrl}</p>
			<p className='shortened-link'>{shortUrl}</p>
			<Button
				onClick={handleIsCopied}
				styles={{ borderRadius: "1rem", width: "11rem" }}
				classes={`shorten-btn ${isCopied ? "copied" : ""}`}
			>
				{isCopied ? "Copied!" : "Copy"}
			</Button>
		</StyledLi>
	);
};

export default ShortenResultsItem;

const StyledLi = styled.li`
	display: grid;
	grid-template-columns: 50% 1fr auto;
	grid-template-rows: auto;
	align-items: center;

	gap: 2rem;

	background-color: #fff;
	border-radius: 0.5rem;
	padding: 1.4rem 3.6rem;

	& .entered-link,
	& .shortened-link {
		font-size: 2rem;
	}

	& .entered-link {
		overflow: hidden;
		color: hsl(257, 27%, 26%);
	}

	& .shortened-link {
		color: hsl(180, 66%, 49%);
	}

	& .shortened-link,
	& .shorten-btn {
		justify-self: end;
	}

	& .copied {
		background-color: hsl(257, 27%, 26%);
	}

	@media (max-width: 47rem) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr auto auto;
		align-items: stretch;

		padding: 1.4rem 2rem;

		& .entered-link {
			border-bottom: 1px solid hsl(257, 7%, 90%);
			padding-bottom: 2.6rem;
		}

		& .shorten-btn {
			padding: 2rem 50%;
			font-size: 2rem;
			width: 100%;
		}

		& .shortened-link,
		& .shorten-btn {
			justify-self: stretch;
		}
	}
`;
