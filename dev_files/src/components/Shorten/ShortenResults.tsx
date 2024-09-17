import styled from "styled-components";
import ShortenResultsItem from "./ShortenResultsItem";
import Loader from "../UI/Loader";

interface ShortenedListItem {
	mainUrl: string;
	shortUrl: string;
}

interface ShortenResultsProps {
	shortenedList: ShortenedListItem[];
	isLoading: boolean;
}

const ShortenResults: React.FC<ShortenResultsProps> = ({
	shortenedList,
	isLoading,
}) => {
	return (
		<StyledUl className='containerWrapper'>
			{isLoading && <Loader />}
			{shortenedList.map(
				(item: ShortenedListItem): React.ReactNode => (
					<ShortenResultsItem mainUrl={item.mainUrl} shortUrl={item.shortUrl} />
				)
			)}
		</StyledUl>
	);
};

export default ShortenResults;

const StyledUl = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
`;
