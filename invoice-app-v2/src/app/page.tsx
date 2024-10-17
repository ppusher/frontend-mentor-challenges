import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col p-24 justify-between">
			<p className="text-status-neutral bg-status-success">
				Often the biggest challenge when working with a framework is figuring
				out what you’re supposed to do when there’s something you need that the
				framework doesn’t handle for you. Tailwind has been designed from the
				ground up to be extensible and customizable, so that no matter what
				you’re building you never feel like you’re fighting the framework.
			</p>
			<Link
				className="text-[33px] text-accent underline text-center"
				href="/invoices"
			>
				Go to Invoices
			</Link>
		</main>
	);
}
