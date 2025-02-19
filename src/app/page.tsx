import Footer from './pages/Footer';
import Header from './pages/Header';
import Navbar from './pages/Navbar';
import Biography from './pages/Biography';
import Gallery from './pages/Gallery';

export default function Home() {
	return (
		<div>
			<Navbar />
			<Header />
			<main>
				<Biography />
				<Gallery />
			</main>
			<Footer />
		</div>
	);
}
