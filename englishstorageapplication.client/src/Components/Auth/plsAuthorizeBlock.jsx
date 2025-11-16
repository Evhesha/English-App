const plsAuthorizeBlock = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "40vh",
      }}
    >
      <div className="alert alert-danger" role="alert">
        <h1>You are not logged in or signed-up in the system</h1>
        <h3>Please login or sign-up</h3>
      </div>
    </div>
  );

export default plsAuthorizeBlock;