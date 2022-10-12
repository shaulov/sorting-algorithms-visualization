import './bar.scss';

type BarProps = {
  width: number;
  height: number;
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
