import "./App.css";

import { useState } from "react";
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
import Marquee from "react-fast-marquee";
import { ScrollCarousel } from "./components/ui/scroll-carousel";
import { Card, CardContent } from "@/components/ui/card";
import {
	Grid3X3,
	Calendar,
	PieChart,
	MessageSquare,
	ShoppingBag,
	Users,
} from "lucide-react";
import Hubspot from "./images/Hubspot.png";
import Kickstart from "./images/Kickstarter.png";
import Intercom from "./images/Intercom.png";
import Mailchimp from "./images/Mailchimp.png";
import Zapier from "./images/Zapier.png";
import Slack from "./images/Slack.png";
import Shopify from "./images/Shopify.png";
import { TestimonialSection } from "./components/ui/testimonial-section";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
// import { Sparkles } from "lucide-react";
// import { Link } from "react-router-dom";
import person1 from "./images/person1 (1).png"
import person2 from "./images/person1 (2).png"
import person3 from "./images/person1 (3).png"
import person4 from "./images/person1 (4).png"
import person5 from "./images/person1 (5).png"
import person6 from "./images/person1 (6).png"

function App() {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	const features = [
		{
			icon: Grid3X3,
			title: "Setup Everything Fast",
			description:
				"Our system continuously monitors your network and data environments for any suspicious activities.",
			gradient: "from-blue-500 to-purple-500",
		},
		{
			icon: Calendar,
			title: "Schedule Campaign",
			description:
				"We ensure that all sensitive data is encrypted and at rest, using industry-standard encryption protocols.",
			gradient: "from-green-500 to-teal-500",
		},
		{
			icon: PieChart,
			title: "Live Reports",
			description:
				"In the event of a security incident, our automated response system takes immediate action.",
			gradient: "from-red-500 to-pink-500",
		},
		{
			icon: MessageSquare,
			title: "Chat Module in Website",
			description:
				"Our system continuously monitors your network and data environments for any suspicious activities.",
			gradient: "from-yellow-500 to-orange-500",
		},
		{
			icon: ShoppingBag,
			title: "Unlimited Products",
			description:
				"We ensure that all sensitive data is encrypted and at rest, using industry-standard encryption protocols.",
			gradient: "from-indigo-500 to-purple-500",
		},
		{
			icon: Users,
			title: "Collect Information",
			description:
				"In the event of a security incident, our automated response system takes immediate action.",
			gradient: "from-pink-500 to-rose-500",
		},
	];

	interface Testimonial {
		name: string;
		role: string;
		company: string;
		quote: string;
		image: string;
	}

	const testimonials: Testimonial[] = [
		{
			name: "Emily Brown",
			role: "Data Scientist",
			company: "StartupCo",
			quote:
				"I've tried other data analytics tools, but none compare to DarkRise. The feature is simply amazing.",
			image:
				person1,
		},
		{
			name: "David Miller",
			role: "CEO",
			company: "SmallBizCo",
			quote:
				"Our business wouldn't be where it is today without DarkRise. The feature has been instrumental in our growth.",
			image:
				person2,
		},
		{
			name: "Sarah Johnson",
			role: "Marketing Manager",
			company: "NonProfit",
			quote:
				"I was worried about the learning curve, but DarkRise is incredibly user-friendly. I was able to start seeing results almost immediately.",
			image:
				person3,
		},
		{
			name: "Michael Johnson",
			role: "VP of Marketing",
			company: "RetailCo",
			quote:
				"We were struggling to make sense of our data, but DarkRise has given us the clarity we needed. The feature has helped us identify new opportunities.",
			image:
				person4,
		},
		{
			name: "Emily Brown",
			role: "Data Scientist",
			company: "StartupCo",
			quote:
				"I've tried other data analytics tools, but none compare to DarkRise. The feature is simply amazing.",
			image:
				person5,
		},
		{
			name: "David Miller",
			role: "CEO",
			company: "SmallBizCo",
			quote:
				"Our business wouldn't be where it is today without DarkRise. The feature has been instrumental in our growth.",
			image:
				person6,
		},
	]; 

	return (
		<div className="min-h-screen bg-black text-white ">
			{/* Navigation */}
			<header className=" header sticky top-0 z-30 p-5 false ml-80  ">
				<nav className="navbar text-1xl flex items-center justify-center gap-16 p-3 rounded-full backdrop-blur">
					<div className="flex items-center">
						<div className="text-blue-500 text-2xl ml-5">✷</div>
						<span className="text-2xl ">Darkrise</span>
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
				<Marquee
					gradient={false}
					speed={80}
					className="mb-8 overflow-hidden p-5"
				>
					<span className=" text-5xl font-bold m-24 ">✷ Logoipsum</span>
					<span className=" text-5xl font-bold m-24 ">✷ Logoipsum</span>
					<span className=" text-5xl font-bold m-24 ">✷ Logoipsum</span>
				</Marquee>
			</div>
			<div>
				<ScrollCarousel />
			</div>
			<div className="text-center ">
				<h1 className="md:text-5xl  mb-8 text-gray-500">and, more features</h1>
				<p className="text-center max-w-prose mx-auto">
					Gain invaluable predictive analytics and actionable insights,
					empowering your team to make data-driven decisions and close.
				</p>
			</div>
			<div>
				<div className="bg-black min-h-screen p-6 md:p-8 mt-10">
					<div className="max-w-7xl mx-auto">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{features.map((feature, index) => (
								<Card
									key={index}
									className="group relative bg-[#111] border-[#222] hover:border-[#333] transition-all duration-500 overflow-hidden"
								>
									<CardContent
										className="p-10"
										onMouseEnter={() => setHoveredIndex(index)}
										onMouseLeave={() => setHoveredIndex(null)}
									>
										<div className="relative">
											{/* Animated Icon */}
											<div className="flex items-center justify-center w-fit cursor-pointer transition-all duration-300 ease-out rounded-full p-4">
												<div className="relative w-16 h-16 bg-[#222] rounded-full overflow-hidden">
													<div
														className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${
															hoveredIndex === index
																? "translate-y-[-200%]"
																: ""
														}`}
													>
														<feature.icon className="w-8 h-8 text-white" />
													</div>
													<div
														className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${
															hoveredIndex === index
																? "translate-y-[-50%]"
																: "translate-y-[100%]"
														}`}
													>
														<feature.icon className="w-8 h-8 text-white" />
													</div>
												</div>
											</div>
										</div>

										{/* Title */}
										<h3 className="text-2xl font-semibold text-white mb-3 mt-6">
											{feature.title}
										</h3>

										{/* Description */}
										<p className="text-gray-400 text-base leading-relaxed">
											{feature.description}
										</p>

										{/* Gradient Corner Effect */}
										<div
											className={`absolute -bottom-20 -right-20 w-60 h-40 opacity-0 group-hover:opacity-50 
                  transition-opacity duration-500 ease-in-out bg-gradient-to-br ${feature.gradient}`}
											style={{
												borderRadius: "50%",
												filter: "blur(80px)",
											}}
										/>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className="min-h-screen  flex items-center justify-center -m-32 ">
					<div className="max-w-7xl mx-auto w-full space-y-12 border border-[#222] rounded px-20 pt-20">
						<div className="text-center space-y-6">
							<h2 className="text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-200/80 to-gray-200/60">
								Connect with 100+ tools
							</h2>
							<p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto p-3">
								Gain invaluable predictive analytics and actionable insights
								empowering you to make data-driven decisions.
							</p>
							<Button
								variant="outline"
								size="lg"
								className="bg-gray-900/50 text-gray-200 border-gray-800 hover:bg-gray-800/50"
							>
								Explore All Tools
								<span className="ml-2">→</span>
							</Button>
						</div>

						<Marquee
							gradient={false}
							speed={80}
							className="flex overflow-hidden "
						>
							<div className="p-5">
								<Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-colors ">
									<CardContent className="p-6 flex flex-col items-center justify-center space-y-3">
										<div
											className={`w-48 h-12 rounded-full flex items-center justify-center`}
										>
											<img src={Hubspot} className="w-16 h-14" />
										</div>
										<span className="text-gray-400 text-xl font-bold">
											Hubspot
										</span>
									</CardContent>
								</Card>
							</div>
							<div className="px-5">
								<Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-colors">
									<CardContent className="p-6 flex flex-col items-center justify-center space-y-3">
										<div
											className={`w-48 h-12 rounded-full flex items-center justify-center`}
										>
											<img src={Kickstart} className="w-16 h-14" />
										</div>
										<span className="text-gray-400 text-xl font-bold">
											Kickstart
										</span>
									</CardContent>
								</Card>
							</div>
							<div className="px-5">
								<Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-colors">
									<CardContent className="p-6 flex flex-col items-center justify-center space-y-3">
										<div
											className={`w-48 h-12 rounded-full flex items-center justify-center`}
										>
											<img src={Intercom} className="w-16 h-14" />
										</div>
										<span className="text-gray-400 text-xl font-bold">
											Intercom
										</span>
									</CardContent>
								</Card>
							</div>
							<div className="px-5">
								<Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-colors">
									<CardContent className="p-6 flex flex-col items-center justify-center space-y-3">
										<div
											className={`w-48 h-12 rounded-full flex items-center justify-center`}
										>
											<img src={Hubspot} className="w-16 h-14" />
										</div>
										<span className="text-gray-400 text-xl font-bold">
											Hubspot
										</span>
									</CardContent>
								</Card>
							</div>
							<div className="px-5">
								<Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-colors">
									<CardContent className="p-6 flex flex-col items-center justify-center space-y-3">
										<div
											className={`w-48 h-12 rounded-full flex items-center justify-center`}
										>
											<img src={Kickstart} className="w-16 h-14" />
										</div>
										<span className="text-gray-400 text-xl font-bold">
											Kickstart
										</span>
									</CardContent>
								</Card>
							</div>
						</Marquee>

						<Marquee
							direction="right"
							gradient={false}
							speed={80}
							className="flex overflow-hidden"
						>
							<div className="px-5">
								<Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-colors">
									<CardContent className="p-6 flex flex-col items-center justify-center space-y-3">
										<div
											className={`w-48 h-12 rounded-full flex items-center justify-center`}
										>
											<img src={Mailchimp} className="w-16 h-14" />
										</div>
										<span className="text-gray-400 text-xl font-bold">
											Mailchimp
										</span>
									</CardContent>
								</Card>
							</div>
							<div className="px-5">
								<Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-colors">
									<CardContent className="p-6 flex flex-col items-center justify-center space-y-3">
										<div
											className={`w-48 h-12 rounded-full flex items-center justify-center`}
										>
											<img src={Zapier} className="w-16 h-14" />
										</div>
										<span className="text-gray-400 text-xl font-bold">
											Zapier
										</span>
									</CardContent>
								</Card>
							</div>
							<div className="px-5">
								<Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-colors">
									<CardContent className="p-6 flex flex-col items-center justify-center space-y-3">
										<div
											className={`w-48 h-12 rounded-full flex items-center justify-center`}
										>
											<img src={Slack} className="w-16 h-14" />
										</div>
										<span className="text-gray-400 text-xl font-bold">
											Slack
										</span>
									</CardContent>
								</Card>
							</div>
							<div className="px-5">
								<Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-colors">
									<CardContent className="p-6 flex flex-col items-center justify-center space-y-3">
										<div
											className={`w-48 h-12 rounded-full flex items-center justify-center`}
										>
											<img src={Shopify} className="w-16 h-14" />
										</div>
										<span className="text-gray-400 text-xl font-bold">
											Shopify
										</span>
									</CardContent>
								</Card>
							</div>
							<div className="px-5">
								<Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-colors">
									<CardContent className="p-6 flex flex-col items-center justify-center space-y-3">
										<div
											className={`w-48 h-12 rounded-full flex items-center justify-center`}
										>
											<img src={Shopify} className="w-16 h-14" />
										</div>
										<span className="text-gray-400 text-xl font-bold">
											Shopify
										</span>
									</CardContent>
								</Card>
							</div>
						</Marquee>
					</div>
				</div>
			</div>
			<div>
				<TestimonialSection />
			</div>
			<div className="bg-black py-12 mt-20">
				<div className="container mt-10">
					<div className="grid grid-cols-3">
						{/* Column 1 */}
						<div>
							<Marquee
								direction="up"
								speed={30}
								pauseOnHover
								gradient={false}
								className="h-[500px] overflow-hidden" // Reduced height
							>
								{testimonials.map((testimonial, index) => (
									<div key={`col1-${index}`} className="flex">
										<Card className="bg-zinc-900 border-zinc-800 w-[550px] h-[250px]">
											{" "}
											{/* Adjusted card height */}
											<CardContent className="p-10 flex flex-col items-start">
												<p className="text-zinc-300 text-xl leading-relaxed">
													"{testimonial.quote}"
												</p>
												<div className="flex items-center mt-3">
													<Avatar>
														<AvatarImage
															src={testimonial.image}
															alt={testimonial.name}
														/>
														<AvatarFallback>
															{testimonial.name
																.split(" ")
																.map((n) => n[0])
																.join("")}
														</AvatarFallback>
													</Avatar>
													<div className="ml-3">
														<h3 className="text-lg font-bold text-white">
															{testimonial.name}
														</h3>
														<p className="text-sm text-zinc-400">
															{testimonial.role}, {testimonial.company}
														</p>
													</div>
												</div>
											</CardContent>
										</Card>
									</div>
								))}
							</Marquee>
						</div>

						{/* Repeat for Column 2 and Column 3 */}
						<div>
							<Marquee
								direction="up"
								speed={30}
								pauseOnHover
								gradient={false}
								className="h-[500px] overflow-hidden" // Reduced height
							>
								{testimonials.map((testimonial, index) => (
									<div key={`col1-${index}`} className="flex">
										<Card className="bg-zinc-900 border-zinc-800 w-[550px] h-[250px]">
											{" "}
											{/* Adjusted card height */}
											<CardContent className="p-10 flex flex-col items-start">
												<p className="text-zinc-300 text-xl leading-relaxed">
													"{testimonial.quote}"
												</p>
												<div className="flex items-center mt-3">
													<Avatar>
														<AvatarImage
															src={testimonial.image}
															alt={testimonial.name}
														/>
														<AvatarFallback>
															{testimonial.name
																.split(" ")
																.map((n) => n[0])
																.join("")}
														</AvatarFallback>
													</Avatar>
													<div className="ml-3">
														<h3 className="text-lg font-bold text-white">
															{testimonial.name}
														</h3>
														<p className="text-sm text-zinc-400">
															{testimonial.role}, {testimonial.company}
														</p>
													</div>
												</div>
											</CardContent>
										</Card>
									</div>
								))}
							</Marquee>
						</div>

						<div>
							<Marquee
								direction="up"
								speed={30}
								pauseOnHover
								gradient={false}
								className="h-[500px] overflow-hidden" // Reduced height
							>
								{testimonials.map((testimonial, index) => (
									<div key={`col1-${index}`} className="flex">
										<Card className="bg-zinc-900 border-zinc-800 w-[550px] h-[250px]">
											{" "}
											{/* Adjusted card height */}
											<CardContent className="p-10 flex flex-col items-start">
												<p className="text-zinc-300 text-xl leading-relaxed">
													"{testimonial.quote}"
												</p>
												<div className="flex items-center mt-3">
													<Avatar>
														<AvatarImage
															src={testimonial.image}
															alt={testimonial.name}
														/>
														<AvatarFallback>
															{testimonial.name
																.split(" ")
																.map((n) => n[0])
																.join("")}
														</AvatarFallback>
													</Avatar>
													<div className="ml-3">
														<h3 className="text-lg font-bold text-white">
															{testimonial.name}
														</h3>
														<p className="text-sm text-zinc-400">
															{testimonial.role}, {testimonial.company}
														</p>
													</div>
												</div>
											</CardContent>
										</Card>
									</div>
								))}
							</Marquee>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-80 flex justify-center">
				<Button>
					<AnimatedButton className="hover:bg-gray-800 rounded-full mr-5 px-8 py-6">
						Get This Template
					</AnimatedButton>
				</Button>
			</div>
			<div className="px-80 mt-10">
				<div className="bg-black/30 border border-[#222] rounded px-16 pt-16 overflow-hidden bg-[url('./images/banner.png')] bg-cover">
					<div className="container mx-auto px-4 mt-16 ">
						<div className="grid lg:grid-cols-2 items-center relative ">
							{/* Left Column */}
							<div className="space-y-6 relative z-10">
								<h1 className="text-5xl font-medium leading-tight text-gray-400 -mt-40 ">
									Grow your sales now
								</h1>
								<p className="text-xl text-gray-400 max-w-xl">
									Gain invaluable predictive analytics and actionable insights
									empowering you to make data-driven decisions.
								</p>

								<Button>
									<AnimatedButton className="bg-black hover:bg-gray-800 rounded-full mr-5 px-8 py-6 mt-60">
										Explore All Tools 
									</AnimatedButton>
								</Button>
							</div>

							{/* Right Column */}
							<div className="relative">
								<img
									src={dashboard}
									alt="Sales Dashboard"
									className="ml-32 rounded-lg shadow-2xl"
								/>
							</div>

							{/* Gradient Background */}
							<div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-tr from-blue-600/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10" />
						</div>
					</div>
				</div>
			</div> 
			<footer className="bg-black text-gray-400 py-16 mt-28">
				<div className="container mx-auto px-4">
					{/* Logo Section */}
					<div className="mb-16 cursor-pointer flex items-center">
						{/* <Link to="/" className="flex items-center gap-2 text-white"> */}
						{/* <Sparkles className="w-6 h-6 text-blue-500" /> */}
						<div className="text-blue-500 text-4xl"> ✷ </div>
						<span className="text-5xl ml-1">Darkrise</span>
						{/* </Link> */}
					</div>

					{/* Navigation Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
						{/* Company Column */}
						<div className="space-y-4">
							<h3 className="text-gray-500 font-medium cursor-pointer">
								Company
							</h3>
							<ul className="space-y-3 cursor-pointer pt-10 text-white">
								<li>
									{/* <Link to="/" className="hover:text-white transition-colors"> */}
									About
									{/* </Link> */}
								</li>
								<li>
									{/* <Link to="/" className="hover:text-white transition-colors"> */}
									Product Features
									{/* </Link> */}
								</li>
								<li>
									{/* <Link to="/" className="hover:text-white transition-colors"> */}
									Changelog
									{/* </Link> */}
								</li>
								<li>
									{/* <Link to="/" className="hover:text-white transition-colors"> */}
									Contact
									{/* </Link> */}
								</li>
							</ul>
						</div>

						{/* Product Column */}
						<div className="space-y-4">
							<h3 className="text-gray-500 font-medium cursor-pointer ">
								Product
							</h3>
							<ul className="space-y-3 cursor-pointer pt-10 text-white">
								<li>
									{/* <Link to="/" className="hover:text-white transition-colors"> */}
									Pricing & Plans
									{/* </Link> */}
								</li>
								<li>
									{/* <Link to="/" className="hover:text-white transition-colors"> */}
									Product Features
									{/* </Link> */}
								</li>
								<li>
									{/* <Link to="/" className="hover:text-white transition-colors"> */}
									Integration
									{/* </Link> */}
								</li>
								<li>
									{/* <Link to="/" className="hover:text-white transition-colors"> */}
									Integration Details
									{/* </Link> */}
								</li>
							</ul>
						</div>

						{/* Resources Column */}
						<div className="space-y-4 cursor-pointer">
							<h3 className="text-gray-500 font-medium">Resources</h3>
							<ul className="space-y-3 cursor-pointer pt-10 text-white">
								<li>
									{/* <Link to="/" className="hover:text-white transition-colors"> */}
									Blog
									{/* </Link> */}
								</li>
								<li>
									{/* <Link to="/" className="hover:text-white transition-colors"> */}
									Blog Details
									{/* </Link> */}
								</li>
								<li>
									{/* <Link to="/" className="hover:text-white transition-colors"> */}
									Changelog
									{/* </Link> */}
								</li>
							</ul>
						</div>

						{/* Services Column */}
						<div className="space-y-4">
							<h3 className="text-gray-500 font-medium cursor-pointer">
								Services
							</h3>
							<ul className="space-y-3 cursor-pointer pt-10 text-white">
								<li>
									{/* <Link to="/" className="hover:text-white transition-colors"> */}
									Book A Demo
									{/* </Link> */}
								</li>
								<li>
									{/* <Link to="/" className="hover:text-white transition-colors"> */}
									Contact
									{/* </Link> */}
								</li>
								<li>
									{/* <Link to="/" className="hover:text-white transition-colors"> */}
									404
									{/* </Link> */}
								</li>
							</ul>
						</div>
					</div>

					{/* Bottom Section */}
					<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
						<p className="text-sm mb-4 md:mb-0">
							Copyright © 2024 Darkrise. All Rights Reserved
						</p>
						<div className="flex gap-6 text-sm cursor-pointer">
							{/* <Link to="/" className="hover:text-white transition-colors"> */}
							Privacy Policy
							{/* </Link>
							<Link to="/" className="hover:text-white transition-colors"> */}
							Terms & Conditions
							{/* </Link> */}
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
