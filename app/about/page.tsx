"use client";
import React, { useRef, useState } from "react";
import TeamCard from "../../components/ui/team-card";
import Header from "../../components/Header"; // Header eklendi
import Talktous from "../../components/talktous";
import Footer from "../../components/Footer";
import Image from "next/image";
import { RadialGlow } from "../../components/ui/radial-glow";

const team = [
	{ name: "Fevziye Nur Aksoy", role: "Founder" },
	{ name: "Bilal Aksoy", role: "Founder" },
	{ name: "Fevziye Nur Aksoy", role: "Founder" },
	{ name: "Bilal Aksoy", role: "Lead Developer" },
	{ name: "Fevziye Nur Aksoy", role: "Designer" },
	{ name: "Bilal Aksoy", role: "Community Manager" },
];

export default function About() {
	const containerRef = useRef<HTMLDivElement>(null);
	const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
	const [techTab, setTechTab] = useState("Languages");
	const [tabChanging, setTabChanging] = useState(false);

	const techTabs = React.useMemo(() => [
		"Languages",
		"Front-end",
		"Back-end",
		"Databases",
		"Services",
		"Brokers",
		"Other",
	], []);

	const languages = [
		{
			name: "JavaScript",
			icon: <Image src="https://skillicons.dev/icons?i=javascript" alt="JavaScript" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
		{
			name: "TypeScript",
			icon: <Image src="https://skillicons.dev/icons?i=typescript" alt="TypeScript" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
		{
			name: "Python",
			icon: <Image src="https://skillicons.dev/icons?i=python" alt="Python" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
		{
			name: "Go",
			icon: <Image src="https://skillicons.dev/icons?i=go" alt="Go" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
		{
			name: "C",
			icon: <Image src="https://skillicons.dev/icons?i=c" alt="C" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
		{
			name: "C++",
			icon: <Image src="https://skillicons.dev/icons?i=cpp" alt="C++" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
		{
			name: "C#",
			icon: <Image src="https://skillicons.dev/icons?i=cs" alt="C#" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
		{
			name: "Java",
			icon: <Image src="https://skillicons.dev/icons?i=java" alt="Java" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
		{
			name: "Kotlin",
			icon: <Image src="https://skillicons.dev/icons?i=kotlin" alt="Kotlin" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
		{
			name: "Swift",
			icon: <Image src="https://skillicons.dev/icons?i=swift" alt="Swift" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
		{
			name: "Ruby",
			icon: <Image src="https://skillicons.dev/icons?i=ruby" alt="Ruby" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
		{
			name: "Rust",
			icon: <Image src="https://skillicons.dev/icons?i=rust" alt="Rust" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
		{
			name: "Dart",
			icon: <Image src="https://skillicons.dev/icons?i=dart" alt="Dart" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
		{
			name: "Scala",
			icon: <Image src="https://skillicons.dev/icons?i=scala" alt="Scala" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
		{
			name: "Perl",
			icon: <Image src="https://skillicons.dev/icons?i=perl" alt="Perl" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
		{
			name: "Shell",
			icon: <Image src="https://skillicons.dev/icons?i=bash" alt="Shell" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
	];
	const frontend = [
		{
			name: "React",
			icon: <Image src="https://skillicons.dev/icons?i=react" alt="React" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
		{
			name: "Next.js",
			icon: <Image src="https://skillicons.dev/icons?i=nextjs" alt="Next.js" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
		{
			name: "Vue.js",
			icon: <Image src="https://skillicons.dev/icons?i=vue" alt="Vue.js" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
		{
			name: "TailwindCSS",
			icon: <Image src="https://skillicons.dev/icons?i=tailwind" alt="TailwindCSS" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
		{
			name: "HTML5",
			icon: <Image src="https://skillicons.dev/icons?i=html" alt="HTML5" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
		{
			name: "CSS3",
			icon: <Image src="https://skillicons.dev/icons?i=css" alt="CSS3" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
	];
	const backend = [
		{
			name: "Node.js",
			icon: <Image src="https://skillicons.dev/icons?i=nodejs" alt="Node.js" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
		{
			name: "Express",
			icon: <Image src="https://skillicons.dev/icons?i=express" alt="Express" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
		{
			name: "NestJS",
			icon: <Image src="https://skillicons.dev/icons?i=nestjs" alt="NestJS" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
		{
			name: "Django",
			icon: <Image src="https://skillicons.dev/icons?i=django" alt="Django" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
		{
			name: "Flask",
			icon: <Image src="https://skillicons.dev/icons?i=flask" alt="Flask" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
		{
			name: "PHP",
			icon: <Image src="https://skillicons.dev/icons?i=php" alt="PHP" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
	];
	const databases = [
		{
			name: "PostgreSQL",
			icon: <Image src="https://skillicons.dev/icons?i=postgres" alt="PostgreSQL" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
		{
			name: "MongoDB",
			icon: <Image src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
		{
			name: "MySQL",
			icon: <Image src="https://skillicons.dev/icons?i=mysql" alt="MySQL" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
		{
			name: "Redis",
			icon: <Image src="https://skillicons.dev/icons?i=redis" alt="Redis" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
	];
	const services = [
		{
			name: "Firebase",
			icon: <Image src="https://skillicons.dev/icons?i=firebase" alt="Firebase" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
		{
			name: "AWS",
			icon: <Image src="https://skillicons.dev/icons?i=aws" alt="AWS" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
		{
			name: "Vercel",
			icon: <Image src="https://skillicons.dev/icons?i=vercel" alt="Vercel" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
	];
	const brokers = [
		{
			name: "RabbitMQ",
			icon: <Image src="https://skillicons.dev/icons?i=rabbitmq" alt="RabbitMQ" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
		{
			name: "Kafka",
			icon: <Image src="https://skillicons.dev/icons?i=kafka" alt="Kafka" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
	];
	const other = [
		{
			name: "Docker",
			icon: <Image src="https://skillicons.dev/icons?i=docker" alt="Docker" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
		{
			name: "Git",
			icon: <Image src="https://skillicons.dev/icons?i=git" alt="Git" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
		{
			name: "Linux",
			icon: <Image src="https://skillicons.dev/icons?i=linux" alt="Linux" className="w-10 h-10" width={40} height={40} unoptimized />,
		},
	];

	const techMap: Record<string, typeof languages> = {
		"Languages": languages,
		"Front-end": frontend,
		"Back-end": backend,
		"Databases": databases,
		"Services": services,
		"Brokers": brokers,
		"Other": other,
	};

	// Sekme altı çizgi için ref ve ölçüm
	const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
	const [underlineStyle, setUnderlineStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 });

	// Aktif sekme değişince underline'ı kaydır
	React.useEffect(() => {
		const idx = techTabs.indexOf(techTab);
		const btn = tabRefs.current[idx];
		if (btn) {
			const rect = btn.getBoundingClientRect();
			const parentRect = btn.parentElement?.getBoundingClientRect();
			if (parentRect) {
				setUnderlineStyle({
					left: rect.left - parentRect.left,
					width: rect.width,
				});
			}
		}
	}, [techTab, techTabs]);

	function TechCard({ name, icon, mousePos }: { name: string; icon: React.ReactNode; mousePos?: { x: number; y: number } | null }) {
		const cardRef = React.useRef<HTMLDivElement>(null);
		const [center, setCenter] = React.useState<{ x: number; y: number }>({ x: 0, y: 0 });

		React.useLayoutEffect(() => {
			function updateCenter() {
				if (cardRef.current) {
					const rect = cardRef.current.getBoundingClientRect();
					setCenter({
						x: rect.left + rect.width / 2,
						y: rect.top + rect.height / 2,
					});
				}
			}
			updateCenter();
			window.addEventListener("resize", updateCenter);
			return () => window.removeEventListener("resize", updateCenter);
		}, []);

		React.useLayoutEffect(() => {
			if (mousePos && cardRef.current) {
				const rect = cardRef.current.getBoundingClientRect();
				setCenter({
					x: rect.left + rect.width / 2,
					y: rect.top + rect.height / 2,
				});
			}
		}, [mousePos]);

		let glowStyle: React.CSSProperties = {};
		let showGlow = false;

		if (mousePos) {
			const dx = mousePos.x - center.x;
			const dy = mousePos.y - center.y;
			const dist = Math.sqrt(dx * dx + dy * dy);

			const maxDist = 240;
			const opacity = Math.max(0, 1 - dist / maxDist);

			if (opacity > 0.01) {
				showGlow = true;
				glowStyle = {
					background: `radial-gradient(300px circle at 50% 50%, #a259ff88 ${Math.round(
						opacity * 100
					)}%, transparent 100%)`,
					opacity,
					pointerEvents: "none",
					position: "absolute",
					inset: 0,
					zIndex: 1,
					transition: "opacity 0.2s",
				};
			}
		}

		return (

			<div
				ref={cardRef}
				className="flex items-center bg-[#11111a]/60 rounded-2xl shadow-lg border border-[#23233a] px-6 py-4 gap-4 min-h-[80px] hover:shadow-[0_0_0_2px_#7c3aed33] transition-all relative overflow-hidden backdrop-blur-md"
				style={{
					background: "transparent",
					boxShadow: showGlow ? "0 0 0 2px #a259ff33" : "none",
					transition: "box-shadow 0.2s",
				}}
			>

				{showGlow && <div style={glowStyle} />}
				{icon}
				<span className="text-xl font-semibold text-gray-100">{name}</span>
			</div>

		);
	}

	return (

		<div
			ref={containerRef}
			className="relative min-h-screen w-full overflow-x-hidden"
			onMouseMove={e => {
				setMousePos({
					x: e.clientX,
					y: e.clientY,
				});
			}}
			onMouseLeave={() => setMousePos(null)}
		>
			<Header />
			<div className="h-12 md:h-20" />
			<section ref={containerRef} className="container mx-auto px-4 py-12">
				{/* Hero Section ve diğer içerik */}
				{/* Hero Section */}
				<section className="relative z-10 flex flex-col items-center justify-center text-center mt-12 mb-16">
					<span className="text-lg font-semibold text-[#a78bfa] mb-2">
						Who we are?
					</span>
					<h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-gray-100 to-indigo-300 mb-4">
						Heroes
					</h1>
					<p className="text-lg md:text-xl text-gray-400 max-w-2xl">
						We are a group of people who love to code and create new things.
					</p>
				</section>
				{/* Team Cards */}
				<section className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mb-24">
					{team.map((member, i) => {
						let heart = "";
						if (member.name === "Fevziye Nur Aksoy") heart = " 🤍";
						if (member.name === "Bilal Aksoy") heart = " 🖤";
						return (
							<TeamCard
								key={i}
								name={member.name + heart}
								role={member.role}
								mousePos={mousePos}
							/>
						);
					})}
				</section>
				{/* Technologies Section */}
				<section className="relative z-10 container mx-auto px-4 pb-24">
					<div className="flex flex-col items-center justify-center text-center mb-10">
						<span className="text-lg font-semibold text-[#a78bfa] mb-2">
							What we use?
						</span>
						<h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-gray-100 to-indigo-300 mb-2">
							Technologies
						</h2>
						<p className="text-lg md:text-xl text-gray-400 max-w-2xl">
							We use the latest technologies to create new things.
						</p>
					</div>
					{/* Tabs */}
					<div className="flex gap-8 justify-center mb-8 border-b border-[#23233a] relative" style={{ position: "relative" }}>
						{techTabs.map((tab, idx) => (
							<button
								key={tab}
								ref={el => { tabRefs.current[idx] = el; }}
								className={`pb-2 text-lg font-medium transition-colors duration-300 relative
									${techTab === tab
										? "text-[#a78bfa]"
										: "text-gray-400 hover:text-gray-200"}
								`}
								onClick={() => {
									if (techTab !== tab) {
										setTabChanging(true);
										setTimeout(() => {
											setTechTab(tab);
											setTabChanging(false);
										}, 200);
									}
								}}
							>
								{tab}
							</button>
						))}
						{/* Animated underline */}
						<span
							className="absolute bottom-0 h-0.5 bg-[#a78bfa] rounded transition-all duration-300"
							style={{
								left: underlineStyle.left,
								width: underlineStyle.width,
								pointerEvents: "none",
							}}
						/>
					</div>
					{/* Tab Content */}
					<div
						className={`transition-all duration-300 ${
							tabChanging ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
						}`}
					>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{(techMap[techTab] || []).map(tech => (
								<TechCard
									key={tech.name}
									name={tech.name}
									icon={tech.icon}
									mousePos={mousePos}
								/>
							))}
						</div>
					</div>
					<style jsx global>{`
						@keyframes fadein {
							from { opacity: 0; transform: translateY(16px);}
							to { opacity: 1; transform: translateY(0);}
						}
						.animate-fadein {
							animation: fadein 0.3s;
						}
					`}</style>
				</section>
				{/* Blog Section */}
				<section className="relative z-10 container mx-auto px-4 pb-24">
					<div className="flex flex-col items-center justify-center text-center gap-3 mb-16">
						<span className="text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-br from-violet-500 to-indigo-600 font-semibold">
							Void Blog
						</span>
						<h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-100 to-indigo-300 leading-tight">
							Articles
						</h1>
						<p className="text-sm sm:text-base font-medium text-gray-500 max-w-md sm:max-w-lg">
							Hear from our experts about the latest technologies and our experiences.
						</p>
					</div>
					{/* RadialGlow örnek kart */}
					<RadialGlow className="max-w-md mx-auto p-8 rounded-2xl border border-[#23233a] bg-[#181825]/60 mb-8">
						<h2 className="text-lg font-bold mb-2">Radial Glow Hover Efekti</h2>
						<p className="text-gray-400">Bu kartın üstüne mouse ile gelince ışık efekti oluşur.</p>
					</RadialGlow>
				</section>
			</section>
			<Talktous />
			<div className="h-40" />
			<Footer />
		</div>
	);
}

