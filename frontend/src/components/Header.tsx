interface HeaderProps {
  header: string;
}

function Header({ header }: HeaderProps) {
  return <h2 className="text-2xl font-normal text-gray-700">{header}</h2>;
}

export default Header;
