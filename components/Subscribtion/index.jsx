import React, { useState } from "react";

// React Icons
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Subscription = () => {


	const showToast = (msg) => {
		toast(msg, {
			position: "bottom-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	}

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const formHandler = async (e) => {
		e.preventDefault();

		axios.post("https://api.pccoeieee.org/services/subscribe/", {
			name: name,
			email: email
		},)
			.then(function (response) {
				showToast(response.data.message)
				console.log();
			})
	}



	return (
		<><div className="subscription-card bg-white py-6 md:py-8">
			<div className="max-w-7xl w-100 m-auto px-4">
				<div className="max-w-xl w-100 m-auto p-4 py-10 rounded-md text-center">
					<div>
						<h2 className="text-light-purple max-w-md w-100 m-auto my-4 text-3xl text-white font-bold sm:text-4xl">
							Subscribe To Our Newsletter
						</h2>
						<p className="text-gray-600 text-xl font-normal text-gray my-1 mb-6">Stay updated</p>
					</div>
					<div className="grid place-items-center grid-cols-1 gap-10">
						<div className="mt-10 sm:mt-0">
							<div className="md:grid md:grid-cols-1 md:gap-6">
								<div className="mt-5 md:col-span- md:mt-0">
									<form action="#" method="POST" onSubmit={formHandler}>
										<div className="overflow-hidden shadow sm:rounded-md">
											<div className=" px-4 py-5 sm:p-6">
												<div className="grid grid-cols-2 gap-10">
													<div className="col-span-10">
														<label htmlFor="last-name" className="block text-sm font-medium text-left text-black">
															Name
														</label>
														<input
															type="text"
															name="last-name"
															id="last-name"
															autoComplete="family-name"
															className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
															onChange={(e) => setName(e.target.value)} />
													</div>

													<div className="col-span-10">
														<label htmlFor="email-address" className="block text-sm text-left font-medium text-black">
															Email address
														</label>
														<input
															type="text"
															name="email-address"
															id="email-address"
															autoComplete="email"
															className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
															onChange={(e) => setEmail(e.target.value)} />
													</div>
												</div>
											</div>
											<div className="bg-gray-50 text-center sm:px-6">
												<button
													type="submit"
													className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-10 text-sm font-medium text-black shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
												>
													Subscribe
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
			<ToastContainer
				position="bottom-center"
				autoClose={5000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light" />
		</>
	);
};

export default Subscription;
