import "./styles/side.css";

function SideBar() {
  return (
    <>
      <div id="general" className="bigger">
        <h1>Twitter logo</h1>
        <a className="" href="explore">
          home
        </a>
        <br />
        <a className="" href="explore">
          pesquisar
        </a>
        <br />
        <a className="" href="explore">
          notifications
        </a>
        <br />
        <a className="" href="explore">
          messages
        </a>
        <br />
        <a className="" href="explore">
          lists
        </a>
        <br />
        <a className="" href="explore">
          bookmarks
        </a>
        <br />
        {/*<button className="" onClick={abrirJan()}>
        Verified
      </button>
      <a className="" href="user"></a>
  <button className="" onClick={abrirJan()}></button>*/}
      </div>

      <div id="general" className="smaller" style={{ textAlign: "center" }}>
        <h1>TL</h1>
        <a className="" href="explore">
          H
        </a>
        <br />
        <a className="" href="explore">
          P
        </a>
        <br />
        <a className="" href="explore">
          N
        </a>
        <br />
        <a className="" href="explore">
          M
        </a>
        <br />
        <a className="" href="explore">
          L
        </a>
        <br />
        <a className="" href="explore">
          B
        </a>
        <br />
        {/*<button className="" onClick={abrirJan()}>
        Verified
      </button>
      <a className="" href="user"></a>
  <button className="" onClick={abrirJan()}></button>*/}
      </div>
    </>
  );
}
export default SideBar;
