interface FooterProps {
}

const Footer: React.FC<FooterProps> = ({ }) => {
return (
    <footer className="relative">
        <div className="absolute bottom-0 right-0 text-secondary font-medium">
            <p><a href="https://leomtr.com/">メタ レオポルド </a>© 2024 </p>
        </div>
    </footer>
);
}

export default Footer;