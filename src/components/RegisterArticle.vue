<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        label-align="left"
        id="input-group-1"
        label="Título:"
        label-for="input-title"
        description="Escreva o nome do seu artigo por extenso."
      >
        <b-form-input
          id="input-title"
          v-model="form.title"
          type="text"
          required
          placeholder="Título do artigo email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nome do Autor:" label-for="input-autor" label-align="left">
        <b-form-input
          label-align="left"
          id="input-autor"
          v-model="form.autor"
          required
          placeholder="Entre com o nome autor"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Instituição:" label-for="input-instution" label-align="left">
        <b-form-input
          id="input-instution"
          v-model="form.institution"
          required
          placeholder="Entre com o nome da Instituição do autor"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Área de conhecimento:" label-for="input-field" label-align="left">
        <b-form-select id="input-field" v-model="form.workfield" :options="fields" required></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Enviar</b-button>
      <b-button type="reset" variant="danger">Resetar</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'RegisterArticle',
  data () {
    return {
      form: {
        title: '',
        name: '',
        institution: '',
        workfield: ''
      },

      fields: ['Eng. de Software', 'Inteligência Artificial', 'Aplicativos Móveis', 'Cidades Inteligentes']
    }
  },

  methods: {
    onSubmit () {
      //Enviar para o backend
    },

    onReset () {
      console.log(this.form)

      this.form.email = ''
      this.form.title = ''
      this.form.name = ''
      this.form.institution = ''
      this.form.workfield = ''
    }
  }
}
</script>
