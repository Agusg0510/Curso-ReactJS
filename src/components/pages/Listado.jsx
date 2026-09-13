import { Global } from "../../helpers/Global";
import { Peticion } from "../../helpers/Peticion";

export const Listado = ({ articulos, setArticulos }) => {
  const eliminar = async (id) => {
    let { peticion } = await Peticion(Global.url + "articulo/" + id, "DELETE");
    if (peticion.status === "success") {
      let articulosActualizados = articulos.filter(
        (articulo) => articulo._id !== id,
      );
      setArticulos(articulosActualizados);
    }
  };
  return articulos.map((articulo) => {
    return (
      <article key={articulo._id} className="articulo-item">
        <div className="mascara">
          {!articulo.imagen || articulo.imagen == "default.png" ? (
            <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/960px-JavaScript-logo.png?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=thumbnail" />
          ) : (
            <img src={Global.url + "imagen/" + articulo.imagen} />
          )}
        </div>

        <div className="datos">
          <h3 className="title">{articulo.titulo}</h3>
          <p className="description">{articulo.contenido}</p>

          <button className="edit">Editar</button>
          <button
            className="delete"
            onClick={() => {
              eliminar(articulo._id);
            }}
          >
            Borrar
          </button>
        </div>
      </article>
    );
  });
};
