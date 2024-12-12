import HorizontalScroll from "./HorizontalScroll";

interface FooterProps {
}

const Footer: React.FC<FooterProps> = ({ }) => {
return (
    <footer>
        <HorizontalScroll/>
        <div className="fixed bottom-10 right-20 ">
            <div className="text-secondary font-medium tracking-widest">
                <p><a className="font-semibold" href="https://leomtr.com/" target="_blank">メタ レオポルド </a>© 2024 </p>
            </div>
        </div>
    </footer>
);
}

export default Footer;