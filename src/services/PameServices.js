import store from "../store";
import axios from "axios";
import imageCompression from "browser-image-compression";

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
    { text: "SAN RAFAEL DEL SUR", value: "SAN RAFAEL DEL SUR" },
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
//redes sociales
export const rsociales = [
  "INSTAGRAM",
  "YOUTUBE",
  "LINKEDLN",
  "TIKTOK",
  "QUORA",
];
//actividades economicas
export const aeconomica = [
  "COMERCIO",
  "SERVICIO",
  "PEQ. INDUSTRIA",
  "AGROPECUARIO",
  "PESCA",
  "OTRO",
];
// LOAN DETAILS-> MONTH OF PAYMENT
export const DatosPrestamo = [
  "1 MESES",
  "2 MESES",
  "3 MESES",
  "4 MESES",
  "5 MESES",
  "6 MESES",
  "7 MESES",
  "8 MESES",
  "9 MESES",
  "10 MESES",
  "11 MESES",
  "12 MESES",
  "13 MESES",
  "14 MESES",
  "15 MESES",
  "16 MESES",
  "17 MESES",
  "18 MESES",
  "19 MESES",
  "20 MESES",
  "21 MESES",
  "22 MESES",
  "23 MESES",
  "24 MESES",
];

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
const CLOUDINARY_UPLOAD_PRESET = "bwhefoph";
const apiClient = axios.create({
  baseURL: "https://api.cloudinary.com/v1_1/dptw3ohtb/image/upload",
  withCredentials: false,
  headers: {
    Accept: "multipart/form-data",
    "Content-Type": "multipart/form-data",
  },
});

//api to connect phpmailer
const apiSendMail = axios.create({
  baseURL: "https://nicalit.propositivapr.com/email/pame.php",
  withCredentials: false,
});
//api error mail
const apiErrMail = axios.create({
  baseURL: "https://nicalit.propositivapr.com/email/err.php",
  withCredentials: false,
});

const config = {
  onUploadProgress: (event) => {
    store.commit("updateProgress", (event.loaded * 100) / event.total);
  },
};

export default {
  async uploadId(inputId, image) {
    const file = image;
    if (!file) {
      return;
    }
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 450,
      useWebWorker: true,
      onProgress: (progress) => {
        store.commit(`${inputId}updateProgress`, progress);
      },
    };
    try {
      const compressFile = imageCompression(file, options);
      const formData = new FormData();
      formData.append("file", await compressFile);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
      return apiClient.post("", formData);
    } catch (error) {
      console.log(error);
    }
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

export const sendMail = ({ name, ncedula, email, data }) => {
  return apiSendMail.post("", {
    email,
    name,
    ncedula,
    message: "Adjunto, Nueva Solicitud de Credito de : ",
    pdf: data,
  });
};
export const errMail = (error) => {
  return apiErrMail.post("", error);
};

//currency method
export const money = (value) =>
  new Intl.NumberFormat("es-NI", {
    currency: "NIO",
    style: "currency",
  }).format(value);

// made table
export const renderTable = (data, columns, total, tname) => {
  return {
    table: {
      headerRows: 1,
      widths:
        tname === "tProducto"
          ? ["*", "auto", "auto", "auto", "auto"]
          : [
              "*",
              "auto",
              "auto",
              "auto",
              "auto",
              "auto",
              "auto",
              "auto",
              "auto",
            ],
      body: buildTableHeader(data, columns, total, tname),
    },
  };
};

//build header pdf
const buildTableHeader = (data, columns, total, tname) => {
  if (tname === "tProducto") {
    let body = [];
    body.push([
      {
        text: "PROGRAMA DE APOYO A MICROEMPRESARIOS.",
        colSpan: 5,
        margin: 5,
        alignment: "center",
      },
      "",
      "",
      "",
      "",
    ]);
    body.push([
      {
        text: "Plan De Inversión.",
        colSpan: 5,
        margin: 5,
        alignment: "center",
      },
      "",
      "",
      "",
      "",
    ]);
    buildTableBody(data, columns, body);
    body.push([
      {
        text: "Total",
        alignment: "right",
        colSpan: 4,
      },
      "",
      "",
      "",
      { text: `${money(total)}`, alignment: "center" },
    ]);
    return body;
  } else {
    let body = [];
    body.push([
      {
        text: "PROGRAMA DE APOYO A MICROEMPRESARIOS.",
        colSpan: 9,
        margin: 5,
        alignment: "center",
      },
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ]);
    body.push([
      {
        text: "Garantías Prendarias.",
        colSpan: 9,
        margin: 5,
        alignment: "center",
      },
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ]);
    buildTableBody(data, columns, body);
    body.push([
      {
        text: "Total",
        alignment: "right",
        colSpan: 8,
      },
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      { text: `${money(total)}`, alignment: "center" },
    ]);
    return body;
  }
};
//build body table
const buildTableBody = (data, columns, body) => {
  let header = [];
  columns.forEach((e) => header.push({ text: `${e}`, alignment: "center" }));
  body.push(header);
  data.forEach(function (row) {
    var dataRow = [];
    columns.forEach(function (column) {
      dataRow.push({
        text: `${row[column].toString()}`,
        alignment: "center",
      });
    });
    body.push(dataRow);
  });
};
