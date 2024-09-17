import Header from "./components/Header/Header";
import Features from "./components/Features/Features";
import CallToAction from "./components/CallToAction/CallToAction";
import Footer from "./components/Footer/Footer";
import Shorten from "./components/Shorten/Shorten";

const App: React.FC = () => {
	return (
		<>
			<Header />
			<Shorten />
			<Features />
			<CallToAction />
			<Footer />
		</>
	);
};

export default App;
