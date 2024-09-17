import { twJoin } from "tailwind-merge";

export default function Button({
	children,
	onClick,
	ariaLabel,
	type = "primary",
	className,
}) {
	const style = () => {
		switch (type) {
			case "primary":
				return "bg-primary-red p-4 text-custom-rose-50 rounded-full w-full";
			case "outline":
				return "bg-white border border-custom-rose-900 text-custom-rose-900 w-full font-medium flex justify-center p-2 rounded-full items-center";
		}
	};

	return (
		<button
			aria-label={ariaLabel}
			onClick={onClick}
			className={twJoin(style(), className)}
		>
			{children}
		</button>
	);
}
