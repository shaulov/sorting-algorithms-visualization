import './bar.scss';

type BarProps = {
  width: string;
  height: string;
}

function Bar ({width, height}: BarProps) : JSX.Element {
  const barStyles = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <div className='bar' style={barStyles} />
  );
}

export default Bar;
