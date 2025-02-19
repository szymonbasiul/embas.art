import Footer from './pages/Footer';
import Header from './pages/Header';
import Navbar from './components/Navbar';
import Biography from './pages/Biography';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

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
