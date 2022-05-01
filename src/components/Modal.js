function Modal({ rate, text, created_at }) {
  return (
    <>
      <div className='single_body__review'>
        <p>{created_at}</p>
        <p>Rate: {rate}</p>
        <p>Comment: {text}</p>
      </div>
    </>
  );
}

export default Modal;
