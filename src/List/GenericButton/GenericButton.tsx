const GenericButton = (props: any) => {
  return (
    <>
      <button {...props}>{props.text}</button>
    </>
  );
};

export default GenericButton;
