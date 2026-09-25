import "./SecondLayout.css";

const SecondLayout = ({ children }) => {
  return (
    <div className="Second-layout">
      <main className="Second-content">{children}</main>
    </div>
  );
};

export default SecondLayout;
