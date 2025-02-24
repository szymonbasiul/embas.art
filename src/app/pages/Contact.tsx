'use client';
import { FormEvent } from 'react';
import phone from '../img/call.svg';
import mail from '../img/mail.svg';
import work from '../img/work.svg';
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
				access_key: 'cc991541-8f2f-48a6-911e-19b03bc27d9f',
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
		<section id="kontakt" className="contact">
			<footer className="bg-beigeLight text-dark text-center p-4">
				<div className="container flex flex-col items-center justify-center p-4 text-base text-justify md:text-lg sm:text-md leading-relaxed">
					<h2 className="section-title pt-[2em] pb-[1em] text-dark text-4xl md:text-3xl sm:text-2xl font-bold uppercase drop-shadow-lg">
						Kontakt
					</h2>

					<div className="flex flex-col container md:flex-row w-full rounded-xl shadow-2xl shadow-darkLight/30 p-8 space-y-8 md:space-y-0 md:gap-8">
						<div className="contact-info w-full md:w-1/2 flex flex-col text-xl space-y-6 gap-5">
							<p className="pt-2 text-dark md:text-left">
								Jeśli masz pytania, sugestie lub po prostu chcesz nawiązać
								relację, skontaktuj się ze mną. Możesz to zrobić korzystając z
								poniższych danych:
							</p>
							<div className="container">
								<div className="flex flex-col space-y-8">
									<div className="contact-phone flex gap-2  md:justify-start">
										<Image
											rel="icon"
											src={phone}
											alt="Phone icon"
											sizes="any"
										/>
										<span> +48 000 000 000</span>
									</div>
									<div className="contact-email flex gap-2  md:justify-start">
										<Image rel="icon" src={mail} alt="Mail icon" sizes="any" />
										<span> 123@123.com</span>
									</div>
									<div className="contact-work flex gap-2  md:justify-start">
										<Image
											rel="icon"
											src={work}
											alt="Briefcase icon"
											sizes="any"
										/>
										<span> miejsce pracy</span>
									</div>
								</div>
							</div>
							<p className="pt-2 text-dark md:text-left">
								Lub napisz korzystając z dostępnego formularza.
							</p>
						</div>

						<form
							onSubmit={handleSubmit}
							className="flex flex-col container w-full md:w-1/2 space-y-6"
						>
							<div className="form-group">
								<label htmlFor="name" className="text-lg font-semibold">
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									placeholder="John"
									className="w-full p-3 mt-2 border border-gray-300 rounded-md"
									required
								/>
							</div>
							<div className="form-group">
								<label htmlFor="email" className="text-lg font-semibold">
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									placeholder="email@example.com"
									className="w-full p-3 mt-2 border border-gray-300 rounded-md"
									required
								/>
							</div>
							<div className="form-group">
								<label htmlFor="message" className="text-lg font-semibold">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									placeholder="Wiadomość"
									className="w-full p-3 mt-2 border border-gray-300 rounded-md"
									required
								/>
							</div>
							<button
								type="submit"
								className="w-full p-3 mt-4 bg-darkLight text-white rounded-md hover:bg-dark transition duration-300"
							>
								Submit
							</button>
						</form>
					</div>
				</div>
			</footer>
		</section>
	);
}
