function Footer() {
  return (
    <>
      <footer>
        &#169; Zaporizhzhya,
        <a href='https://github.com/kofdan' className='black'>
          Merlikov Vasilii,
        </a>{" "}
        <span className='black'>{new Date().getFullYear()}</span>
      </footer>
    </>
  );
}

export { Footer };
