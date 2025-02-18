import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';

export default function Home() {
	return (
		<div>
			<Navbar />
			<Header />
			<main>
				<SectionOne />
				<SectionTwo />
			</main>
			<Footer />
		</div>
	);
}
