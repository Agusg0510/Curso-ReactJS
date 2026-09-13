import React from "react";
import { useState, useEffect } from "react";
import { Peticion } from "../../helpers/Peticion";
import { Global } from "../../helpers/Global";
import { Listado } from "./Listado";

export const Articulos = () => {
  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    let data = [
      {
        _id: 1,
        titulo: "Titulo 1",
        contenido: "Contenido",
      },
      {
        _id: 2,
        titulo: "Titulo 2",
        contenido: "Contenido",
      },
      {
        _id: 3,
        titulo: "Titulo 3",
        contenido: "Contenido",
      },
    ];

    setArticulos(data);
    setCargando(false);
  }, []);

  const conseguirArticulos = async () => {
    const { datos, cargando } = await Peticion(Global.url + "articulos", "GET");

    // let peticion = await fetch(URL, {
    //   method: "GET"
    // })

    // let datos = await peticion.json();

    if (datos.status === "success") {
      setArticulos(datos.articulos);
    }
    setCargando(false);
  };

  return (
    <>
      {cargando ? (
        "Cargando..."
      ) : articulos.length >= 1 ? (
        <Listado articulos={articulos} setArticulos={setArticulos} />
      ) : (
        <h1>No hay articulos</h1>
      )}
    </>
  );
};
