
interface HeaderProps {
    pageName: string;
    userName: string;
}

function Header({ pageName, userName }: HeaderProps) {
  return (
    <header>
        <div className="flex justify-between items-center text-main w-full h-20 px-4 bg-main-bg border-b-2 border-b-main-bg-darker">
            <h1 className="text-3xl">{pageName}</h1>
            <p>Welcome, {userName}</p>
        </div>
    </header>
  );
}

export default Header;