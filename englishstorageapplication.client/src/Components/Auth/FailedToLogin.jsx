const failedToLogin = (
    <div
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }}
    >
        <div className="alert alert-danger" role="alert">
            <h3>Mistake in login</h3>
        </div>
    </div>
);

export default failedToLogin;