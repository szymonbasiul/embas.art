'use client';
import { FormEvent } from 'react';
import mail from '../../../public/mail.svg';
import Image from 'next/image';

export default function Contact() {
	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({
				access_key: '53d7d26d-b44b-4c9d-86c9-6f8818f33d2d',
				name: (e.target as HTMLFormElement).name.valueOf,
				email: (e.target as HTMLFormElement).email.value,
				message: (e.target as HTMLFormElement).message.value,
			}),
		});
		const result = await response.json();
		if (result.success) {
			console.log(result);
		}
	}

	return (
		<section
			id="kontakt"
			className="contact bg-beigeLight text-dark flex-grow py-16"
		>
			<div className="container mx-auto px-4 md:px-8">
				{/* Nagłówek */}
				<h2 className="section-title text-3xl md:text-4xl font-bold text-center uppercase drop-shadow-lg mb-8">
					Kontakt
				</h2>

				{/* Treść formularza kontaktowego */}
				<div className="flex justify-center items-center w-full">
					<div className="max-w-4xl w-full bg-white p-8 rounded-xl shadow-lg">
						{/* Podtytuł */}
						<p className="text-center text-dark font-semibold text-lg mb-6">
							Masz pytania, sugestie lub chcesz nawiązać kontakt? Napisz do
							mnie:
						</p>

						{/* Informacje kontaktowe */}
						<div className="flex flex-col items-center space-y-4 text-center mb-6">
							<div className="flex items-center gap-2">
								<Image rel="icon" src={mail} alt="Mail icon" sizes="any" />
								<span className="text-dark font-medium">embas@wp.pl</span>
							</div>
						</div>

						{/* Formularz */}
						<form
							onSubmit={handleSubmit}
							className="mt-6 flex flex-col space-y-6 max-w-lg mx-auto"
						>
							<div className="form-group">
								<label htmlFor="name" className="text-lg font-semibold">
									Imię
								</label>
								<input
									type="text"
									id="name"
									name="name"
									placeholder="Podaj swoje imię"
									className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark"
									required
								/>
							</div>
							<div className="form-group">
								<label htmlFor="email" className="text-lg font-semibold">
									E-mail
								</label>
								<input
									type="email"
									id="email"
									name="email"
									placeholder="Podaj swój adres e-mail"
									className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark"
									required
								/>
							</div>
							<div className="form-group">
								<label htmlFor="message" className="text-lg font-semibold">
									Wiadomość
								</label>
								<textarea
									id="message"
									name="message"
									placeholder="Napisz wiadomość"
									className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark"
									required
								/>
							</div>
							<button
								type="submit"
								className="w-full p-3 text-white bg-dark bg-opacity-75 rounded-md hover:bg-darkLight transition duration-300 uppercase font-bold"
							>
								Wyślij
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
