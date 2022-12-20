import store from "../store";
import axios from "axios";

export const Departamento = [
  { text: "MANAGUA", value: "MANAGUA" },
  { text: "CARAZO", value: "CARAZO" },
  { text: "MASAYA", value: "MASAYA" },
];

export const Municipios = {
  MANAGUA: [
    { text: "MANAGUA", value: "MANAGUA" },
    { text: "SAN RAFAEL DEL SUR", value: "SAN RAFAEL DEL SUR" },
  ],
  CARAZO: [{ text: "JINOTEPE", value: "JINOTEPE" }],
  MASAYA: [{ text: "MASATEPE", value: "MASATEPE" }],
};
export const Comarcas = {
  MANAGUA: [{ text: "SIN INFORMACIÓN", value: "SIN INFORMACIÓN" }],
  "SAN RAFAEL DEL SUR": [
    { text: "CASCO URBANO", value: "CASCO URBANO" },
    { text: "EL SALTO", value: "EL SALTO" },
    { text: "LOS RIZO", value: "LOS RIZO" },
    { text: "MASACHAPA", value: "MASACHAPA" },
    { text: "SAN PABLO", value: "SAN PABLO" },
    { text: "LOS LARIOS", value: "LOS LARIOS" },
    { text: "KM 54", value: "KM 54" },
    { text: "CASA DE TEJAS", value: "CASA DE TEJAS" },
    { text: "EL PORTILLO", value: "EL PORTILLO" },
    { text: "POCHOMIL", value: "POCHOMIL" },
    { text: "EL CHILAMATE", value: "EL CHILAMATE" },
    { text: "GUTIERREZ NORTE", value: "GUTIERREZ NORTE" },
    { text: "SAN CRISTOBAL", value: "SAN CRISTOBAL" },
    { text: "SAN JOSE DE LA MONTAÑA", value: "SAN JOSE DE LA MONTAÑA" },
    { text: "LOS VELASQUEZ", value: "LOS VELASQUEZ" },
    { text: "LOS ANGULO", value: "LOS ANGULO" },
    { text: "SANTA RITA", value: "SANTA RITA" },
    { text: "LOS BALTODANO", value: "LOS BALTODANO" },
    { text: "CITALAPA", value: "CITALAPA" },
    { text: "GUTIERREZ SUR", value: "GUTIERREZ SUR" },
    { text: "SANCHEZ NORTE", value: "SANCHEZ NORTE" },
    { text: "SANCHEZ SUR", value: "SANCHEZ SUR" },
    { text: "LOS GARCIA", value: "LOS GARCIA" },
    { text: "LOS VIVAS", value: "LOS VIVAS" },
    { text: "LA GALLINA", value: "LA GALLINA" },
  ],
  JINOTEPE: [{ text: "SIN INFORMACIÓN", value: "SIN INFORMACIÓN" }],
  MASATEPE: [{ text: "SIN INFOMACION", value: "SIN INFORMACIÓN" }],
};
// LOAN DETAILS-> MONTH OF PAYMENT
export const DatosPrestamo = ["6 Meses", "12 Meses", "18 Meses", "24 Meses"];

//UNIT INFORMATION
export const UnitM = [
  "UNIDAD",
  "GALON",
  "BOLSON",
  "DOCENA",
  "QUINTAL",
  "SACO",
  "CAJA",
  "FLETE",
  "MARCA",
  "PULGADAS",
  "LIBRAS",
  "METROS",
];

//api cloudinary
const CLOUDINARY_UPLOAD_PRESET = "zfv3t0br";
const apiClient = axios.create({
  baseURL: "https://api.cloudinary.com/v1_1/propositivapr/image/upload",
  withCredentials: false,
  headers: {
    Accept: "multipart/form-data",
    "Content-Type": "multipart/form-data",
  },
});
const config = {
  onUploadProgress: (event) => {
    store.commit("updateProgress", (event.loaded * 100) / event.total);
  },
};

export default {
  uploadId(image) {
    const formData = new FormData(); //creacion objeto form
    formData.append("file", image); //creacion control tipo file
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET); //creacion control con el misma variable de cloudinary
    return apiClient.post("", formData, config);
  },
  getBase64ImageFromURL(url) {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.setAttribute("crossOrigin", "anonymous");

      img.onload = () => {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        var dataURL = canvas.toDataURL("image/png");

        resolve(dataURL);
      };

      img.onerror = (error) => {
        reject(error);
      };

      img.src = url;
    });
  },
};
