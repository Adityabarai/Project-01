import "./App.css";

import { Trophy } from "lucide-react";
import { Button } from "./components/ui/button";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	// NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { AnimatedButton } from "@/components/ui/animated-button";
import { BorderBeam } from "@/components/ui/border-beam";
import dashboard from "./images/dashboard.png";
// import Marquee from "@/components/ui/marquee";
// import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import Marquee from "react-fast-marquee";

function App() {
	return (
		<div className="min-h-screen bg-black text-white ">
			{/* Navigation */}
			<header className=" header sticky top-0 z-30 p-5 false ml-80 backdrop-blur ">
				<nav className="navbar flex items-center justify-center gap-20 p-5 rounded-full ">
					<div className="flex items-center">
						<div className="text-blue-500 text-2xl ml-5">✷</div>
						<span className="text-xl font-semibold">Darkrise</span>
					</div>

					<div className="hidden md:flex items-center space-x-5">
						<NavigationMenu>
							<NavigationMenuList className="relative">
								<NavigationMenuItem>
									<NavigationMenuTrigger className="hover:text-gray-300">
										All Pages
									</NavigationMenuTrigger>
									<NavigationMenuContent className="absolute left-0 mt-2 w-auto bg-black rounded border-gray-700 shadow-lg ">
										<div className="grid grid-cols-2 gap-5 p-5 lg:w-[600px] ">
											{/* First Column: Landing */}
											<div>
												<h3 className="text-sm font-bold text-gray-400 mb-4">
													LANDING
												</h3>
												<ul>
													<li>
														<a
															href="/"
															className="block text-sm font-medium leading-none text-white no-underline hover:text-gray-300"
														>
															Home
														</a>
														<p className="text-sm font-bold text-gray-400 mb-4">
															A Colorful Dark World
														</p>
													</li>
												</ul>
											</div>

											{/* Second Column: Essentials */}
											<div className="mr-10 mb-10">
												<h3 className="text-sm font-bold text-gray-400 p-1 ">
													ESSENTIALS
												</h3>
												<ul className="grid grid-cols-3 gap-y-2 gap-x-20 mr-10">
													{[
														{ title: "About", href: "/about" },
														{ title: "Pricing", href: "/pricing" },
														{ title: "Integrations", href: "/integrations" },
														{
															title: "Integrations Details",
															href: "/integrations-details",
														},
														{ title: "Feature", href: "/feature" },
														{ title: "Blog", href: "/blog" },
														{ title: "Blog Details", href: "/blog-details" },
														{ title: "Changelog", href: "/changelog" },
														{ title: "Contact", href: "/contact" },
														{ title: "Terms", href: "/terms" },
														{ title: "Privacy", href: "/privacy" },
														{ title: "404", href: "/404" },
													].map((item, index) => (
														<li key={index} className="text-left">
															<a
																href={item.href}
																className="block text-sm font-medium text-white hover:text-gray-300"
															>
																{item.title}
															</a>
														</li>
													))}
												</ul>
											</div>
										</div>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>

						<button className="text-gray-300 hover:text-white">
							Integrations
						</button>
						<button className="text-gray-300 hover:text-white">Pricing</button>
						<button className="text-gray-300 hover:text-white">Contact</button>
					</div>

					<Button>
						<AnimatedButton className="hover:bg-gray-800 rounded-full mr-5 px-8 py-6">
							Get This Template
						</AnimatedButton>
					</Button>
				</nav>
			</header>

			{/* Hero Section */}

			<div className="relative flex items-center justify-center max-w-6xl mx-auto px-6 pt-20 text-center">
				<div className="relative inline-flex items-center rounded-full px-4 py-2 bg-gray-800/50 overflow-hidden">
					<Trophy size={16} className="text-yellow-500" />
					<span className="text-sm text-gray-300">
						Awarded as the best startup in 2023
					</span>
					<BorderBeam size={250} duration={12} delay={9} />
				</div>
			</div>
			<div className="bg-[url('./images/background.png')] bg-cover">
				<div className="max-w-6xl mx-auto px-6 text-center p-16">
					<h1 className="text-5xl md:text-6xl mb-6 p-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
						Earn revenue by selling anything
					</h1>
					<h2 className="text-5xl md:text-6xl  mb-8 text-gray-500">
						from the internet on your app.
					</h2>

					<p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
						Gain invaluable predictive analytics and actionable insights
						empowering.
					</p>

					<div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
						<Button className="bg-gray  text-w">
							<AnimatedButton className=" hover:bg-gray-800 rounded-full mr-5 px-8 py-6">
								Start 14 Days Free Trial
							</AnimatedButton>
						</Button>
						<Button className=" text-white hover:bg-gray-800 rounded-full px-8 py-6 text-lg">
							Request Free Demo
						</Button>
					</div>

					<div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
						<span>No Credit Card Required</span>
						<span>•</span>
						<span>Cancel Anytime</span>
					</div>

					{/* Dashboard Preview */}
					<div className="flex items-center justify-center ">
						<img
							className="object-contain m-20 "
							src={dashboard}
							alt="Dashboard"
						/>
					</div>
				</div>
			</div>

			{/* Background Gradient Effect */}
			<div className="flex items-center justify-center -mt-5">
				<h1 className="text-2xl">
					Trusted by 15,000+ founders & business owners
				</h1>
			</div>
			<div className="marquee-container flex items-center justify-center p-10 w-full  mb-8">
				<Marquee gradient={false} speed={80} className="mb-8 overflow-hidden p-5">
					<span className=" text-5xl font-bold m-24 ">
						✷ Logoipsum
					</span>
					<span className=" text-5xl font-bold m-24 ">
						✷ Logoipsum
					</span>
					<span className=" text-5xl font-bold m-24 ">
						✷ Logoipsum
					</span>
				</Marquee>
			</div>
			
		</div>
	);
}

export default App;
