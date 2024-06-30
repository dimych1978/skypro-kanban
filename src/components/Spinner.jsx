export const Spinner = ({ display, width, height }) => {
  return (
    <img
      src="/img/Spinner-3.gif"
      style={{
        position: 'relative',
        width: width ?? '25px',
        height: height ?? '25px',
        display: display,
      }}
    ></img>
  );
};
