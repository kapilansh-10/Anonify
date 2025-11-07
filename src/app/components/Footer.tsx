


export default function Footer() {

    return (
        <footer className="py-8 bg-gradient-to-t from-pink-50 to-white border-t border-pink-100 text-center text-gray-600">
            <p className="text-sm">
                Made with 💖 by {" "}
                <a 
                    href="https://github.com/kapilansh-10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 font-medium hover:underline"
                >
                    Kapilansh
                </a>{" "}
                | © {new Date().getFullYear()} Anonify
            </p>
        </footer>
    )
}