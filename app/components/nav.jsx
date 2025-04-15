"use client";

import { GoArrowLeft } from 'react-icons/go';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from "react";
import LoadingIndicator from './loading-indicator';
import NavLink from './nav-link';

export const Navigation = () => {
	const ref = useRef(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const searchParams = useSearchParams();
	const customUsername = searchParams.get('customUsername');

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref} className="navigation">
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500 border-zinc-800"
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8 text-base">
						<NavLink href={"/projects" + (customUsername ? `?customUsername=${customUsername}` : '')}>
							<span className="inline-flex items-center">Projects <LoadingIndicator /></span>
						</NavLink>
						<NavLink href={"/contact" + (customUsername ? `?customUsername=${customUsername}` : '')}>
							<span className="inline-flex items-center">Contact <LoadingIndicator /></span>
						</NavLink>
					</div>

					<NavLink 
						href={"/" + (customUsername ? `?customUsername=${customUsername}` : '')}
						className="text-zinc-300 hover:text-zinc-100"
					>
						<GoArrowLeft className="w-6 h-6" />
					</NavLink>
				</div>
			</div>
		</header>
	);
};
