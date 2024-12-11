import NavBar from './NavBar';

interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps> = ({className}) => {
    return (
    <header className={className}>
        <section className="flex relative justify-end mt-16 mb-12 " >
            <h1 className="absolute left-0 top-0 text-3xl ">レオ</h1>
            <div>
                <NavBar />
            </div>
        </section>
    </header>
    );
}

export default Header;