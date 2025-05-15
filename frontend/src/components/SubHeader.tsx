interface SubHeaderProps {
    subHeader: string;
}

function SubHeader({ subHeader }: SubHeaderProps) {
    return <p className="text-1xl font-normal text-gray-600 mt-2">{subHeader}</p>
}

export default SubHeader;