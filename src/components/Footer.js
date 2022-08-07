function Footer() {
  return (
    <>
      &#169; Zaporizhzhya,
      <a href="https://github.com/kofdan" className="black">
        Merlikov Vasilii,
      </a>{" "}
      <span className="black">{new Date().getFullYear()}</span>
    </>
  );
}

export { Footer };
