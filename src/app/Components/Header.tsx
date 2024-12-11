import NavBar from './NavBar';

interface HeaderProps {
    }

const Header: React.FC<HeaderProps> = ({ }) => {
    return (
        <header className="flex relative justify-end mt-16 mb-12" >
      {/* <img className="absolute left-0 top-0" src="" alt="" /> */}
        <h1 className="absolute left-0 top-0 text-3xl ">レオ</h1>
        <div>
            <NavBar />
        </div>
    </header>
    );
}

export default Header;