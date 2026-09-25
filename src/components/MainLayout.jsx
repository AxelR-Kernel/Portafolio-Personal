/* import Navbar from "./Navbar/navbar"; */

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      {/* Aquí se agregaran las secciones o demás componentes */}
      {/* <Navbar /> */}

      <main className="main-content">{children}</main>
    </div>
  );
};

export default MainLayout;
