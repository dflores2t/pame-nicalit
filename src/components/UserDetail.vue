<template>
  <div class="user-detail">
    <div class="header">
      <div class="welcome">PAME-NICALIT .::. Solicitudo de Crédito</div>
      <div class="desc">
        Hemos enviado tu solicitud de crédito con la siguiente información.
      </div>
    </div>

    <div class="user-info">
      <div>Datos Personales</div>
      <div>Nombre Completo: {{ user.fullName }}</div>
      <div>N° Cedula: {{ user.nCedula }} {{ user.lastName }}</div>
      <div>Trabajador Ex Nicalit: {{ user.exNicalit }}</div>
      <div>Direccion: {{ user.address }}</div>
      <div>Departamento: {{ user.depart }}</div>
      <div>Datos del Negocio</div>
      <div>Descripción del Negocio: {{ user.bName }}</div>
    </div>

    <!-- <div class="github-info">
      <div v-if="userHasData">
        <div>
          <img
            class="avatar-image"
            :src="responseData.avatar_url"
            alt="Github avatar image"
          />
        </div>
        <div class="">
          <a v-bind:href="responseData.html_url" target="_blank">
            {{ responseData.html_url }}
          </a>
          <ul>
            <li>followers: {{ responseData.followers }}</li>
            <li>following: {{ responseData.following }}</li>
          </ul>
        </div>
      </div>
      <div v-else class="github-error">
        Can't find your username in GitHub.
      </div>
    </div> -->

    <div class="footer">
      <button
        @click="this.$emit('toRestart')"
        type="button"
        class="btn-secondary"
      >
        Regresar
      </button>
    </div>
  </div>
</template>

<script>
// import GitHubApi from '../services/GitHubApi'
import emailjs from "emailjs-com";

export default {
  name: "userDetails",

  data() {
    return {
      user: this.$store.state.user,
      responseData: {},
    };
  },
  created() {
    // GitHubApi()
    //   .get('/users/' + this.user.username)
    //   .then((response) => {
    //     this.responseData = response.data
    //   })
    //   .catch((error) => {
    //     console.error(error)
    //   })
    this.sendEmail();
  },
  methods: {
    sendEmail() {
      let templateParams = {
        fullName: this.user.fullName,
        nCedula: this.user.nCedula,
        exNicalit: this.user.exNicalit,
        address: this.user.address,
        depart: this.user.depart,
        bName: this.user.bName,
      };
      // emailjs
      //   .send("service_44fll2w", "template_j7jc8uq", templateParams, "SaaesCsoq4f8UPZ2F")
      //   .then(
      //     () => {
      //       alert("Solicitud Enviada!");
      //     },
      //     (error) => {
      //       alert("Solicitud no Enviada", error);
      //     }
      //   );
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
