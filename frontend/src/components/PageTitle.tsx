interface PageTitleProps {
  firstLine: string;
  secondLine: string;
}

function PageTitle({ firstLine, secondLine }: PageTitleProps) {
  return (
    <div className="text-5xl font-bold">
      {firstLine}
      <br />
      {secondLine}
    </div>
  );
}

export default PageTitle;
