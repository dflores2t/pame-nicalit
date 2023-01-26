<template>
  <div class="user-detail">
    <div class="header">
      <div class="welcome">PAME-NICALIT .::. Solicitudo de Crédito</div>
      <div class="desc">
        Estimado {{ user.fullName }} Hemos enviado tu solicitud de crédito con
        tu información.
      </div>
    </div>

    <div class="footer">
      <button
        @click="this.$emit('toRestart')"
        type="button"
        class="btn-success btn-lg"
      >
        Regresar
      </button>
      <br />
    </div>
    <!-- section to show modal -->
    <Teleport to="body">
      <modal :show="showModal" @close="showModal = false"> </modal>
    </Teleport>
  </div>
</template>

<script>
import Modal from "./Modal.vue";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import pdfMake from "pdfmake/build/pdfmake";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { money, sendMail } from "../services/PameServices";
import PameServices from "../services/PameServices";
import imgLogo from "../assets/img/pamenicalit.png";
export default {
  name: "userDetails",
  components: {
    Modal,
  },
  data() {
    return {
      user: this.$store.state.user,
      imgUrl: "./assets/img/pamenicalit.png",
      showModal: false,
      logo: "data:image/png;base64,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ASwABrAIgE/KAGAJBXALYAALgAEMYDkH4A7AABYA5wN4x68BX/nRNQEwgAEsAC52YegKXmakGoAnAANYAAxgAMs5ANd/FyWABcAAnlsYegALgAEsAuBz0u37F2QRgAEMYAEwgAEspQDcABjAAmAAA1jOB3gAMIAFwIkBbgAsAQC+ARjAAuAUAO96FTSAAQxgAAuAAQxgATCAASwABrAAeCYTgAEsAAYwgOV8gFsAA1gADGAAC4ABLAAG8OHZ9WNIAAYwgAEsAAYwgAXAAAawABjAAmAAA1gA/A87d5DaMAxFUXQQMB1IsuT9L7aTBEpJ2tiWJcc6dwcB/3dCCAYwgHUugH++kW0GMIAFYAADWO0BTgAGsAAMYAALwAAWgAF8SKXu7rEIwAAGsAAM4JW7AGABGMASgAEsAAMYwAIwgAGsQwGeAQxgARjAAFZ7gAOAASwAAxjAAjCABWAAA1gABjCABWAAA1gABrAADODauxAALAADWAIwgAVgAANYAAYwgHUowAXAABaAxwI4AVinADgDGMACMIABLAADWAAGMIAFYAADWAAGMIAFYAALwAAGsAAMYAALwAAGMIABDGABGMDrAS4AFoABLAG4PcAZwAIwgCUAA1hDARwBDGABGMAAFoABLAADGMACMIABLAADGMAC8JYmAAvAAAawANy+DGABGMAAFoABLAEYwAIwgAEsAAMYwAIwgCUAA1gABjCABWAAA1hHApwADGABeFiAFwALwACWzghwuTjAEcACMIClMwKcAQxgARjAAjCAASwAAxjAAjCAAQxgAANYAAYwgAVgAANYAAawAAxgAAvAAAawAAxgCcAAFoABDGABGMAAVieAA4ABLAADGMACMIAFYAADWAAGMIAFYAADWAAGsAAMYAALwAAGsAD88QAnAAvAAJYADGABGMAAFoABDGABGMACMIABLAADGMACMIABDOAKj04BMIAFYAADWO0BzgAGsAAMYAALwAAWgAEMYAEYwAAWgAEMYAEYwAIwgAEsAAMYwAIwgAEMYAADWAAGMIAFYAADWAD+BIBnAAvAAJYA3B7gAGB1BDgCGMACMIABLAADWAAGMIAFYAADWAAGMIAFYAALwAAGsAAMYAALwAAGMIABDGABGMAAFoABDGABGMAC8LuPIoABLAADGMACMIAFYAAfDHABsAAMYAnA7QHOABaAASwBGMACMIABLAADGMACMIAFYAADWBcEOAAYwAIwgAEsAANYAAYwgAVgAANYAL5eANbZAA4ABrAAPBTAEcDqCnABMIAFYAADWO0BzgAGsAAMYAALwAAWgAEMYAEYwAAWgAEMYB0DcAQwgAXgMQFOABaAASwBuFkTgAXg41sALAAD+NUXcwCrL8Dp0ocWASwAA/gVwDOABWAASwBuD3AAsLoCPAMYwAIwgAGs9gAHAANYAB4K4McuFACrM8D3d1FGAANYAB4K4AxgdQY4AxjAAvDzlkvuQqr76VgE4L1GJQADWAD+Vbw0wBHA6gxwAjCABeCRAH68iSMBWJ0Bvj+LAcAAFoDHADjX/A8WgAG8F6kMYAALwIMAnKp+OBYBeHtzuewv0AAWgAH8bBmmin8wYxGA9wgcYwoABrAAPArAVWMRgAVgARjAABaAASwBGMACMIABLAADGMACMIAlAANYAAYwgAVgAANYAAawAAxgAAvAAAawACwAC8AAFoABDGABGMAAFoAFYAALwAIwgAEsAAMYwAIwgAVgAANYAAYwgAVgAEsABrAADGAAC8AABrAADGAJwAAWgAEMYAHYiABYAAawAAxgAAvAAAawACwAA1gAFoABDGABGMAAFoABLAADGMACMIABLAADWAIwgAVgAANYAAYwgAVgAEsABrAADGAAC8AABrAADGABGMAAFoABDGABWAAGsAAsAAMYwAIwgAEsAANYABaABWAAA1gABrAEYAALwAAGsAAMYAALwACWAAxgARjAABaAAQxgARjAAjCAASwAAxjAArAADGBPPoAFYAADWAAGMIAFYAALwAKwAAxgAAvAAJYADGABGMAAFoABDGABGMASgAEsAAMYwAIwgAEsAANYAAYwgAXgzysBWAAGMIAFYABLAAawAAxgAAvAAAawAAxgCcAAFoABDGABGMAAFoABLAADGMACMIABrGEANjIAltsAsABsZAAstwFgAAvAAjCABWAB2MgAWG4DwAAWgAEsAAMYwAKwkQGw3AaAJQADWAAGMIAFYCMDYLkNAEsABrAADGAAC8BGBsByGwAWgI0MgOU2AAxgAVgABrAALAAbGQDLbQAYwAIwgAVgAVgANjIAltsAsARgAAvAAAawAGxkACy3AWAJwAAWgAEMYAHYyABYbgPAArCRAbAADGAAC8ACsNwGgAVgIwNguQ0AA1gA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",
    };
  },
  created() {
    this.sendEmail();
  },
  methods: {
    ShowModal() {
      setTimeout(() => {
        this.showModal = true;
      }, 0);
    },
    disabledModal() {
      setTimeout(() => {
        this.showModal = false;
      }, 5000);
    },
    sendEmail() {
      this.ShowModal();
      this.exportToPdf()
        .then(() => this.disabledModal())
        .catch((err) => console.log(err));
    },
    async exportToPdf() {
      let desc = [],
        um = [],
        c = [],
        cu = [],
        ct = [],
        description = [],
        brand = [],
        model = [],
        serie = [],
        nplaca = [],
        color = [],
        auso = [],
        vcompra = [];
      this.user.products.forEach((element) => {
        desc.push(element.description);
        um.push(element.unit);
        c.push(element.quantity);
        cu.push(money(element.cu));
        ct.push(money(element.ct));
      });

      this.user.gprendaria.forEach((element) => {
        description.push(element.description);
        brand.push(element.brand);
        model.push(element.model);
        serie.push(element.serie);
        nplaca.push(element.serie);
        color.push(element.color);
        auso.push(element.auso);
        vcompra.push(money(element.vcompra));
      });

      let docDefinition = {
        info: {
          title: "Solicitud de Credito",
          author: "Pame-Nicalit",
          subject: "Solicitud de Credito",
        },
        pageSize: "A4",
        pageOrientation: "portrait",
        pageMargins: [40, 100, 40, 60],
        header: {
          layout: "noBorders",
          margin: [0, 30, 0, 0],
          alignment: "center",
          columns: [
            {
              svg: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 1080" style="enable-background:new 0 0 1920 1080;" xml:space="preserve"> <style type="text/css">	.st0{fill:#D8E183;}	.st1{fill:#137CC1;}</style><g id="New_Layer"><path class="st0" d="M1643.77,742.42H293.34V326.05c0,0-2.78-60.37,172.1-120.05L888.06,50.55c0,0,66.62-32.62,156.14-1.39l530.87,197.78c0,0,62.46,27.06,68.7,87.44V742.42z"/> <g transform="translate(0.000000,400.000000) scale(0.100000,-0.100000)"><g><path class="st1" d="M8619.71,1742.3C5899.08,600.47,5956.3,623.88,5917.29,665.49c-20.81,20.81-33.81,41.62-26.01,49.42c5.2,5.2,548.81,234.09,1206.86,509.79s1199.06,501.99,1201.66,504.59c2.6,2.6,0,28.61-7.8,59.82c-20.81,72.83-119.65,114.44-210.68,88.43c-78.03-23.41-738.68-278.31-1945.54-751.69c-400.55-156.06-827.12-317.32-949.36-356.34c-431.76-140.45-624.24-275.71-746.48-528l-72.83-148.26l-7.8-1750.47l-7.8-1747.87l1464.36,5.2l1464.36,7.8v1326.51c0,1222.47-2.6,1334.31-46.82,1412.34c-26.01,44.22-67.63,83.23-91.03,83.23c-72.83,0-273.1-137.85-364.14-249.7c-153.46-184.67-169.06-270.5-182.07-951.96c-10.4-587.82-13-619.04-59.82-619.04s-49.42,26.01-49.42,559.21c0,574.82,20.81,759.49,109.24,931.15c130.05,257.5,330.33,390.15,892.14,590.43c426.56,153.46,1599.61,676.26,1776.48,795.9c299.11,197.68,488.99,462.98,468.18,655.45l-7.8,80.63L8723.75,805.95C6773.01-2.96,6710.59-28.97,6671.57-5.56c-18.21,13-33.81,33.81-33.81,46.82c0,10.4,619.04,278.31,1375.92,590.43c754.29,312.12,1446.15,595.63,1534.58,634.64c153.46,65.02,161.26,70.23,189.87,189.87c23.41,104.04,23.41,143.05-10.4,221.08c-20.81,52.02-44.22,93.64-52.02,93.64c-10.4,0-2229.05-897.34-3121.19-1264.08c-265.3-106.64-397.95-127.45-371.94-54.62c5.2,15.61,200.28,106.64,436.97,200.28c234.09,96.24,837.52,340.73,1336.91,543.61c501.99,202.88,1043,423.96,1204.26,488.99c158.66,65.02,291.31,130.05,291.31,143.05c0,52.02-130.05,150.86-200.28,148.26C9212.74,1976.39,8926.63,1869.75,8619.71,1742.3z"/>			<path class="st1" d="M10237.53,1960.79c-18.21-7.8-49.42-44.22-70.23-83.23l-36.41-72.83l590.43-239.29C13226.07,551.05,13431.55,462.62,13402.94,428.8c-41.62-52.02-62.42-46.82-348.53,70.23c-2863.69,1167.85-3144.6,1277.09-3178.41,1230.27c-49.42-70.23-44.22-306.92,13-369.34c23.41-28.61,179.47-109.24,343.33-174.27c954.56-387.55,2694.63-1113.22,2712.83-1128.83c10.4-13,2.6-36.41-18.21-54.62c-33.81-26.01-195.07,31.21-970.17,351.13c-746.48,309.52-1909.13,790.7-2080.79,863.53c-57.22,23.41-39.01-148.26,28.61-291.31c109.24-236.69,325.12-405.75,801.11-637.24c462.98-221.08,1076.81-488.99,1282.29-559.21c72.83-23.41,252.3-91.03,403.15-150.86c236.69-93.64,293.91-127.45,434.37-265.3c135.25-135.25,166.46-187.27,213.28-335.53c49.42-158.66,54.62-241.89,54.62-775.1c0-554.01-2.6-595.63-44.22-587.82c-41.62,7.8-49.42,65.02-62.42,619.04c-15.61,595.63-26.01,689.26-109.24,847.92c-52.02,104.04-244.49,275.71-353.74,322.52c-83.23,33.81-91.03,31.21-148.26-36.41l-62.42-70.23v-1352.52v-1349.91h1456.55h1459.16l-7.8,1763.47l-7.8,1760.87l-59.82,111.84c-88.43,166.46-249.7,330.33-390.15,395.35c-67.63,33.81-249.7,104.04-408.36,156.06c-156.06,54.62-590.43,218.48-962.37,364.14c-1950.74,764.69-1992.36,780.3-2067.79,689.26c-15.61-20.81-26.01-54.62-20.81-78.03c5.2-28.61,392.75-202.88,1191.25-535.8c650.25-270.5,1193.85-504.59,1204.26-515c13-13,2.6-36.41-26.01-49.42c-39.01-20.81-361.54,104.04-1659.43,645.05c-886.94,371.94-1641.23,673.66-1677.64,673.66S10255.74,1968.59,10237.53,1960.79z"/><path class="st1" d="M7457.07-4091.72c-533.2-130.05-892.14-590.43-892.14-1144.44c0-361.54,130.05-668.45,371.94-889.54c166.46-148.26,356.34-239.29,613.83-288.71c197.68-39.02,228.89-39.02,413.56,0c244.49,54.62,429.16,140.45,585.22,278.31l117.04,104.04l-124.85,132.65l-127.45,135.25l-96.24-85.83c-286.11-249.7-723.08-286.11-998.78-83.23c-122.25,91.03-169.06,148.26-254.9,304.32c-62.42,117.04-70.23,156.06-70.23,390.15c0,293.91,41.62,410.96,218.48,593.03c161.26,171.67,267.9,213.28,535.8,213.28c252.3,0,358.94-36.41,559.21-195.07l91.04-72.83l124.85,145.66c122.25,137.85,124.85,145.66,78.03,189.87c-98.84,98.84-358.94,231.49-528,267.9C7862.83-4047.5,7644.34-4047.5,7457.07-4091.72z"/><path class="st1" d="M9543.07-4957.85c-213.28-483.78-442.17-1003.98-509.79-1157.44l-124.85-280.91h202.88h202.88l119.65,280.91l117.04,278.31l556.61,5.2l554.01,7.8l117.04-280.91l117.04-278.31l213.28-7.8l213.28-7.8l-85.83,189.87c-46.82,104.04-278.31,626.84-512.4,1160.04l-423.96,967.57h-187.27h-184.67L9543.07-4957.85z M10318.16-5022.88l195.07-449.97l-392.75-7.8c-213.28-2.6-395.35-2.6-400.55,5.2c-15.61,13,364.14,899.94,384.95,899.94C10115.29-4575.5,10208.92-4778.38,10318.16-5022.88z"/><path class="st1" d="M2975.56-5251.76l-2.6-1144.44h202.88h202.88l-7.8,785.5c-2.6,431.76,0,801.1,7.8,821.91c7.8,23.41,260.1-278.31,652.85-785.5l639.84-821.91h166.46h166.46v1144.44v1144.44h-195.07h-195.07v-780.3c0-429.16-7.8-780.3-18.21-780.3c-13,0-70.23,67.63-130.05,150.86c-59.82,80.63-330.33,429.16-598.23,772.49l-488.99,624.24l-200.28,7.8l-200.28,7.8L2975.56-5251.76z"/><path class="st1" d="M5628.58-5251.76V-6396.2h195.07h195.07v1144.44v1144.44h-195.07h-195.07V-5251.76z"/><path class="st1" d="M11740.9-5251.76V-6396.2h806.31h806.31v182.07v182.07h-611.23h-611.23v962.37v962.37h-195.07h-195.08V-5251.76z"/><path class="st1" d="M13795.69-5251.76V-6396.2h195.08h195.07v1144.44v1144.44h-195.07h-195.08V-5251.76z"/><path class="st1" d="M14680.03-4276.39v-166.46l358.94-7.8l356.34-7.8l7.8-967.57l5.2-970.17h195.07h195.07l5.2,970.17l7.8,967.57l364.14,7.8l364.14,7.8l5.2,166.46l5.2,169.06h-933.76h-936.36V-4276.39z"/></g></g></g><g id="MasterLayer_1"></g></svg>',
              fit: [90, 90],
            },
            "Programa de Apoyo a Microempresarios (PAME) Solicitud de Crédito Plan de Negocio",
            "",
          ],
          table: {
            headerRows: 1,
            widths: ["*", "*", "*"],

            body: [[{}], ["", "", ""]],
          },
        },
        content: [
          {
            layout: "headerLineOnly",
            style: "content",
            alignment: "left",
            table: {
              headerRows: 1,
              widths: ["*", "*", "*"],
              body: [
                [
                  {
                    text: "DATOS PERSONALES",
                    alignment: "center",
                    colSpan: 3,
                    marginBottom: 10,
                  },
                  "",
                  "",
                ],
                [" ", " ", " "],
                [
                  {
                    text: `Nombre y Apellidos: ${this.user.fullName}`,
                    colSpan: 2,
                  },
                  " ",
                  "N° de Cédula: " + this.user.nCedula,
                ],
                [
                  `Ex Trabajador de Nicalit: ${this.user.exNicalit}`,
                  `Familiar de Extrabajador: ${this.user.famExTrabajador}`,
                  `No es Extrabajador: ${this.user.noExTrabajador}`,
                ],
                [
                  {
                    text: `Nombre del Ex-Trabajador de Nicalit del cual es familiar: ${this.user.nameFamExTrabajador}`,
                    colSpan: 3,
                  },
                  "",
                  "",
                ],
                [
                  {
                    text: `Dirección Domiciliar : ${this.user.address}`,
                    colSpan: 3,
                  },
                  "",
                  "",
                ],
                [
                  `Departamento: ${this.user.depart}`,
                  `Municipio: ${this.user.municipio}`,
                  `Comuninidad: ${this.user.comunidad}`,
                ],
                [
                  `Teléfono 1: ${this.user.phoneHome}`,
                  `Teléfono 2: ${this.user.phoneMovil}`,
                  `Correo Electrónico: ${this.user.email}`,
                ],
                [
                  {
                    text: `Redes Sociales que usa para promocionar su negocio: WhatsApp ${this.user.rsWhatsapp}, Facebook: ${this.user.rsFacebook}, Ninguno: ${this.user.none}`,
                    colSpan: 3,
                  },
                  "",
                  "",
                ],
                [
                  `Otras : ${this.user.otrarrss}`,
                  {
                    text: `Número de Cuenta Bancaria BAC: ${this.user.cuentaBac}`,
                    colSpan: 2,
                  },
                  ``,
                ],
                [
                  `Referencias Personales: ${this.user.referenciaPersonal}`,
                  `Télefono: ${this.user.referenciaPhone}`,
                  ``,
                ],
                [" ", " ", " "],
              ],
            },
          },
          {
            layout: "headerLineOnly",
            style: "content",
            alignment: "left",
            table: {
              headerRows: 1,
              widths: ["*", "*", "*"],
              body: [
                [
                  {
                    text: "DATOS DEL NEGOCIO",
                    alignment: "center",
                    colSpan: 3,
                    marginBottom: 10,
                  },
                  "",
                  "",
                ],
                [" ", " ", " "],
                [
                  {
                    text: `Tipo de Apoyo Solicitado: ${this.user.aSolicitado}`,
                    colSpan: 3,
                  },
                  " ",
                  " ",
                ],
                [
                  {
                    text: `Descripción del Negocio: ${this.user.dNegocio}`,
                    colSpan: 3,
                  },
                  " ",
                  " ",
                ],
                [
                  {
                    text: `Actividad Económica: ${this.user.aEconomica}`,
                    colSpan: 3,
                  },
                  " ",
                  " ",
                ],
                [
                  {
                    text: `Dirección del Negocio: ${this.user.dirNegocio}`,
                    colSpan: 3,
                  },
                  " ",
                  " ",
                ],
                [
                  `Departamento: ${this.user.departn}`,
                  `Municipio: ${this.user.municipion}`,
                  `Comunidad : ${this.user.comunidadn}`,
                ],
                [
                  `Beneficiarios Directos: ${this.user.bDirecto}`,
                  `Empleados Generados: ${this.user.eGenerado}`,
                  "",
                ],
                [
                  {
                    text: `Cuando Inicío o Iniciará Operaciones el Negocio: ${this.user.fOperaciones}`,
                    colSpan: 3,
                  },
                  "",
                  "",
                ],
                ["", "", ""],
              ],
            },
          },
          {
            layout: "headerLineOnly",
            style: "content",
            alignment: "left",
            pageBreak: "after",
            pageOrientation: "landscape",
            table: {
              headerRows: 1,
              widths: ["*", "*", "*"],
              body: [
                [
                  {
                    text: "DATOS DEL PRESTAMO QUE SOLICITA",
                    alignment: "center",
                    colSpan: 3,
                    marginBottom: 10,
                  },
                  "",
                  "",
                ],
                [" ", " ", " "],
                [
                  `Monto del Préstamo: C$${this.user.mPrestamo}`,
                  `Plazo del Préstamo(meses): ${this.user.plazoPrestamo}`,
                  "",
                ],
                [
                  {
                    text: `Monto de cuota mensual que puede pagar: C$${this.user.cuotaPrestamo}`,
                    colSpan: 3,
                  },
                  "",
                  "",
                ],
                [
                  {
                    text: "Autorización para Consultar Información Crediticia.",
                    colSpan: 3,
                    alignment: "center",
                    marginTop: 20,
                  },
                  "",
                  "",
                ],
                [
                  {
                    text: "Autorizo expresamente a Nicalit S.A. para que consulte mi comportamiento y registro crediticio en cualquier Central de Riesgo Privada.",
                    colSpan: 3,
                    alignment: "center",
                  },
                  "",
                  "",
                ],
                [
                  {
                    text: `Acepto: ${this.user.iCrediticia}`,
                    colSpan: 3,
                    alignment: "center",
                  },
                  "",
                  "",
                ],
                ["", "", ""],
                [
                  {
                    text: "________________________________",
                    colSpan: 3,
                    alignment: "center",
                    marginTop: 10,
                  },
                  "",
                  "",
                ],
                [
                  {
                    text: "Firma del Solicitante",
                    colSpan: 3,
                    alignment: "center",
                    marginTop: 2,
                  },
                  "",
                  "",
                ],
                [
                  {
                    text: "Cualquier información comunicarse con Melina Zamora Tel: 8239-6873 o Roger Gómez 8206-1406",
                    colSpan: 3,
                    alignment: "center",
                    marginTop: 15,
                  },
                  "",
                  "",
                ],
                ["", "", ""],
              ],
            },
            pageBreak: "after",
          },
          {
            style: "content",
            alignment: "center",
            table: {
              headerRows: 1,
              widths: ["*", "*", "*", "*", "*"],
              body: [
                [
                  {
                    text: "PROGRAMA DE APOYO A MICROEMPRESARIOS.",
                    colSpan: 5,
                    marginBottom: 10,
                  },
                  "",
                  "",
                  "",
                  "",
                ],
                [
                  {
                    text: "Plan De Inversión.",
                    colSpan: 5,
                    marginBottom: 5,
                  },
                  "",
                  "",
                  "",
                  "",
                ],
                [
                  "Descripción",
                  "Unidad de Medida",
                  "Cantidad",
                  "Costo Unitario",
                  "Costo Total",
                ],
                [desc, um, c, cu, ct],
                [
                  {
                    text: "Total",
                    alignment: "right",
                    colSpan: 4,
                  },
                  "",
                  "",
                  "",
                  `${money(this.user.tproducts)}`,
                ],
              ],
            },
          },
          {
            style: "content",
            alignment: "center",
            marginTop: 40,
            table: {
              headerRows: 1,
              widths: ["*", "*", "*", "*", "*", "*", "*", "*", "*"],
              body: [
                [
                  {
                    text: "PROGRAMA DE APOYO A MICROEMPRESARIOS.",
                    colSpan: 9,
                    marginBottom: 10,
                  },
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                ],
                [
                  {
                    text: "Garantías Prendarias.",
                    marginBottom: 5,
                    colSpan: 9,
                  },
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                ],
                [
                  "Descripción",
                  "Marca",
                  "Modelo",
                  "N° de Serie/Chasis",
                  "N° de Placa",
                  "Color",
                  "Año de Uso",
                  "Valor de Compra",
                  "Valor Actual",
                ],
                [
                  description,
                  brand,
                  model,
                  serie,
                  nplaca,
                  color,
                  auso,
                  vcompra,
                  "",
                ],
                [
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
                  `${money(this.user.tgprendaria)}`,
                ],
              ],
            },
          },
          {
            style: "content",
            alignment: "center",
            marginTop: 40,
            pageBreak: "before",
            pageOrientation: "portrait",
            table: {
              headerRows: 1,
              widths: ["*", "*"],
              body: [
                [
                  {
                    text: "PROGRAMA DE APOYO A MICROEMPRESARIOS.",
                    colSpan: 2,
                    marginBottom: 10,
                  },
                  "",
                ],
                [
                  {
                    text: "Cédula de Identidad del Solicitante.",
                    marginBottom: 5,
                    colSpan: 2,
                  },
                  "",
                ],
                [
                  {
                    image: await PameServices.getBase64ImageFromURL(
                      this.user.idCardFront
                    ),
                    colSpan: 2,
                    margin: [5, 5],
                    fit: [350, 200],
                  },
                  "",
                ],
                [
                  {
                    image: await PameServices.getBase64ImageFromURL(
                      this.user.idCardBack
                    ),
                    colSpan: 2,
                    margin: [5, 5],
                    fit: [350, 200],
                  },
                  "",
                ],
              ],
            },
          },
          {
            style: "content",
            alignment: "center",
            marginTop: 40,
            pageBreak: "before",
            table: {
              headerRows: 1,
              widths: ["*", "*"],
              body: [
                [
                  {
                    text: "PROGRAMA DE APOYO A MICROEMPRESARIOS.",
                    colSpan: 2,
                    marginBottom: 10,
                  },
                  "",
                ],
                [
                  {
                    text: "Cédula de Identidad del Fiador.",
                    marginBottom: 5,
                    colSpan: 2,
                  },
                  "",
                ],
                [
                  {
                    image: await PameServices.getBase64ImageFromURL(
                      this.user.idCardFrontGuarantor
                    ),
                    colSpan: 2,
                    margin: [5, 5],
                    fit: [350, 200],
                  },
                  "",
                ],
                [
                  {
                    image: await PameServices.getBase64ImageFromURL(
                      this.user.idCardBackGuarantor
                    ),
                    colSpan: 2,
                    margin: [5, 5],
                    fit: [350, 200],
                  },
                  "",
                ],
              ],
            },
          },
        ],
        styles: {
          content: {
            fontSize: 9,
            marginTop: 10,
          },
        },
      };
      const pdf = pdfMake.createPdf(docDefinition);
      pdf.download(this.user.nCedula);
      pdf.getBase64(async (data) => {
        let name =
          this.user.nCedula === "" ? "PAME-NICALIT" : this.user.nCedula;
        const result = await sendMail(this.user.email, name, data);
      });
    },
  },
  computed: {
    userHasData() {
      return !(Object.keys(this.responseData).length === 0);
    },
  },
};
</script>

<style>
.header {
  border: 1 solid #dddddd;
  margin: 30px 0;
}
.header .welcome {
  margin: 10px 0;
  font-size: 1.75rem;
  font-weight: bold;
}
.user-info {
  margin-bottom: 50px;
}
.avatar-image {
  max-width: 200px;
}
.footer {
  display: flex;
  margin: 50px auto;
}

@media (min-width: 768px) {
  .user-detail {
    display: grid;
  }
  .header {
    text-align: center;
    grid-column-start: 1;
    grid-column-end: 3;
  }
  .footer {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  .user-info {
    padding: 10px;
    margin: auto;
  }
  .github-info {
    border: 1px solid #ddd;
    padding: 10px;
    margin: auto;
  }
}
</style>
