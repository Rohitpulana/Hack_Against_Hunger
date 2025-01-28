const FirstPage = () => {
  return (
    <>
      <div className="wrapper">
        <img className="logo" src="/images/logo.jpg" alt="" />
      </div>

      <style jsx>
        {`
          .wrapper {
            background-color:rgb(255, 255, 255);
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .logo {
            width: 3000px;
            height: 200px;
          }
        `}
      </style>
    </>
  );
};

export default FirstPage;
