import { Card } from "@/components/ui/card";
import CEO from "../../images/CEO.png";

export function TestimonialSection() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 mt-10">
			{/* Top Section */}
			<div className="text-center mb-16 space-y-4">
				<a
					href="#"
					className="text-blue-400 hover:text-blue-300 transition-colors"
				>
					Read Customer's Review
				</a>
				<h2 className="text-4xl md:text-6xl font-medium text-gray-200">
					<span className="text-gray-400">5700+</span> Happy Customers
				</h2>
			</div>

			{/* Testimonial Card */}
			<Card className="max-w-6xl w-full bg-black/30 border-gray-800 backdrop-blur-sm px-6 md:px-16 py-8 md:py-12">
				<div className="grid md:grid-cols-2 gap-12 p-6 md:p-8">
					{/* Image Section */}
					<div className="relative aspect-[4/5] md:aspect-auto">
						<img
							src={CEO}
							alt="Customer testimonial"
							className="rounded object-contain w-full h-full hover:scale-110 transition-transform duration-300 p-5"
						/>
					</div>

					{/* Content Section */}
					<div className="flex flex-col justify-center space-y-8">
						<h3 className="text-2xl md:text-3xl text-gray-200 font-bold">
							The Key to Our Success
						</h3>

						<blockquote className="text-lg md:text-xl text-gray-400">
							"Our business wouldn't be where it is today without DarkRise. The
							feature has been instrumental in our growth."
						</blockquote>

						<div className="space-y-2">
							<p className="text-gray-200 font-medium">David Miller</p>
							<p className="text-gray-400">CEO, SmallBizCo</p>
						</div>

						{/* Metrics */}
						<div className="grid grid-cols-2 gap-8 pt-4 border-t border-gray-800">
							<div>
								<p className="text-3xl md:text-4xl font-bold text-gray-200">
									10k
								</p>
								<p className="text-sm text-gray-400 mt-1">New customers</p>
							</div>
							<div>
								<p className="text-3xl md:text-4xl font-bold text-gray-200">
									20%
								</p>
								<p className="text-sm text-gray-400 mt-1">Market share</p>
							</div>
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
}
