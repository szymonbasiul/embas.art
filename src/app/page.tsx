import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Biography from './components/Biography';
import Contact from './components/Contact';
import Gallery from './components/Gallery';

export default function Home() {
	return (
		<div>
			<Navbar />
			<main>
				<Header />
				<Biography />
				<Gallery />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}
