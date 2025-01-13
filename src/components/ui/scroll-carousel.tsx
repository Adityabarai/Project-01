import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import sales from "../../images/sales.png";
import audience from "../../images/audience.png";
import man from "../../images/man.png";

interface CarouselPage {
	title: string;
	subtitle: string;
	description: string;
	features: string[];
	image: string;
}

const pages: CarouselPage[] = [
	{
		title: "Get proper data &",
		subtitle: "sales statistics.",
		description:
			"Gain invaluable predictive analytics and actionable insights, empowering your to make data-driven decisions and close deals more effectively looking.",
		features: [
			"Event marketing",
			"Content creation",
			"Brand strategy",
			"Data analyzing",
		],
		image: sales,
	},
	{
		title: "Bring visitors from",
		subtitle: "different sources.",
		description:
			"Gain invaluable predictive analytics and actionable insights, empowering your to make data-driven decisions and close deals more effectively looking.",
		features: [
			"Event marketing",
			"Content creation",
			"Brand strategy",
			"Data analyzing",
		],
		image: audience,
	},
	{
		title: "Acquire and retrain",
		subtitle: "more customer.",
		description:
			"Gain invaluable predictive analytics and actionable insights, empowering your to make data-driven decisions and close deals more effectively looking.",
		features: [
			"Event marketing",
			"Content creation",
			"Brand strategy",
			"Data analyzing",
		],
		image: man,
	},
];

export function ScrollCarousel() {
	return (
		<div className="relative bg-black">
			{pages.map((page, index) => (
				<CarouselPage key={index} page={page} index={index} />
			))}
		</div>
	);
}

function CarouselPage({ page, index }: { page: CarouselPage; index: number }) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	const y = useSpring(
		useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]),
		{ stiffness: 100, damping: 20 }
	);

	const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

	const scale = useTransform(
		scrollYProgress,
		[0, 0.2, 0.8, 1],
		[0.8, 1, 1, 0.8]
	);

	return (
		<motion.div
			ref={ref}
			style={{
				y,
				opacity,
				scale,
			}}
			className="sticky top-0 min-h-screen flex items-center justify-center p-4 lg:p-8 "
		>
			<div className="container mx-auto px-32 py-24">
				<div className="relative rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
					<div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
						{/* Content Section */}
						<div className="space-y-8">
							<div className="space-y-4">
								<div className="lg:text-6xl tracking-tight p-10 m-10">
									{page.title}
									<span className="block text-gray-500">{page.subtitle}</span>
									<p className="text-gray-400 text-2xl mt-10">
										{page.description}
									</p>
								</div>
							</div>

							<div className="grid grid-cols-2 gap-6 p-10 ml-14">
								{page.features.map((feature, index) => (
									<div key={index} className="flex items-center gap-2">
										<div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
											<Check className="h-3 w-3" />
										</div>
										<span className="text-sm text-gray-300">{feature}</span>
									</div>
								))}
							</div>

							<Button
								className="rounded-full px-6 bg-white text-black hover:bg-gray-200 ml-20"
								size="lg"
							>
								Get Started Now
							</Button>
						</div>

						{/* Dashboard Section */}
						<div className="relative">
							<div className="absolute inset-0   rounded-2xl" />
							<div className="relative space-y-6 p-6">
								<img
									src={page.image}
									alt="Feature illustration"
									className="w-full rounded-xl shadow-2xl"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
