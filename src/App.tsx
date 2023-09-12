import { SiteHeader } from "./components/SiteHeader";

export const App = () => {
	return (
		<div className="flex flex-col items-center">
			<SiteHeader />

			<div className="mt-10 p-4">
				<ul>
					<li>
						• <strong>Three states</strong> – <code>light</code>,{" "}
						<code>dark</code>, <code>same as device</code>
					</li>

					<li>
						• <strong>No flash</strong> – background is never white during page
						load if dark theme is chosen
					</li>

					<li>
						• <strong>Reactive</strong> –
						{
							" a change of the device's theme is instantly reflected on the page, no refresh required"
						}
					</li>
				</ul>

				<div className="mt-7 text-center">
					Learn more at{" "}
					<a
						href="https://zwyx.dev/blog/proper-dark-theme"
						target="_blank"
						rel="noreferrer"
					>
						zwyx.dev/blog/proper-dark-theme
					</a>
				</div>
			</div>
		</div>
	);
};
