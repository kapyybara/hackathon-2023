import { signInWithGoogle } from '../services/apis/auth'
import logo from '../assets/logo.png'

export function Login() {
	const res = `{'question': {'What is ReactJS?': {'choices': ['A. A programming language', 'B. A front-end framework', 'C. A JavaScript library'], 'ans': 'C'}, 'What is the component-based architecture in ReactJS?': {'choices': ['A. A way of organizing files in a project', 'B. A way of structuring code in a project', 'C. A way of breaking down UI into small, reusable components'], 'ans': 'C'}, 'What is the virtual DOM in ReactJS?': {'choices': ['A. A fake version of the HTML DOM', 'B. A new markup language for the web', 'C. A way of optimizing CSS styles in a project'], 'ans': 'A'}, 'What is the declarative approach in ReactJS?': {'choices': ['A. A way of writing imperative code in JavaScript', 'B. A way of describing the desired outcome and letting ReactJS handle the implementation', 'C. A way of writing efficient algorithms in JavaScript'], 'ans': 'B'}, 'What are the benefits of using ReactJS?': {'choices': ['A. Fast and efficient performance', 'B. Large and active community', 'C. Reusable UI components and efficient state management', 'D. All of the above'], 'ans': 'D'}}}`
	console.log(JSON.parse(res.replaceAll("'", `"`)))
	return (
		<>
			<div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
				<div className="w-full max-w-md space-y-8">
					<div>
						<img
							className="mx-auto h-12 w-auto"
							src={logo}
							alt="Your Company"
						/>
					</div>
					<form className="mt-8 space-y-6" action="#" method="POST">
						<input type="hidden" name="remember" defaultValue="true" />
						<div className="-space-y-px rounded-md shadow-sm">
							<div>
								<label htmlFor="email-address" className="sr-only">
									Email address
								</label>
								<input
									id="email-address"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									placeholder="Email address"
								/>
							</div>
							<div>
								<label htmlFor="password" className="sr-only">
									Password
								</label>
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									placeholder="Password"
								/>
							</div>
						</div>

						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<input
									id="remember-me"
									name="remember-me"
									type="checkbox"
									className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
								/>
								<label
									htmlFor="remember-me"
									className="ml-2 block text-sm text-gray-900"
								>
									Remember me
								</label>
							</div>

							<div className="text-sm">
								<a
									href="#"
									className="font-medium text-indigo-600 hover:text-indigo-500"
								>
									Forgot your password?
								</a>
							</div>
						</div>

						<div class="flex gap-4">
							<button className="group relative flex items-center w-1/2 justify-center rounded-md bg-indigo-600 px-3 py-2 font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
								Sign in
							</button>
							<button
								class="w-1/2 flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-gray relative"
								onClick={signInWithGoogle}
							>
								<span class="absolute left-4">
									<svg
										width="24px"
										height="24px"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
										// xmlns:xlink="http://www.w3.org/1999/xlink"
									>
										<path
											fill="#EA4335 "
											d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"
										/>
										<path
											fill="#34A853"
											d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"
										/>
										<path
											fill="#4A90E2"
											d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"
										/>
										<path
											fill="#FBBC05"
											d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"
										/>
									</svg>
								</span>
								<span class="pl-4">Sign in with Google</span>
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}
