import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "" +
                (active
                    ? "border-[#E6FF55] text-[#E6FF55] "
                    : "border-transparent text-[#00473C] ") +
                className
            }
        >
            {children}
        </Link>
    );
}
