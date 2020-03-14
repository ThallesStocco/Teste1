<template>
    <div>
        <b-nav pills>
            <b-nav-item active to="/home">Inicío</b-nav-item>
            <b-nav-item to="/cadastrar"> Cadastrar</b-nav-item>
            <b-nav-item to="/artigos">Artigos</b-nav-item>
        </b-nav>
    </div>
</template>

<script>
export default {
  name: 'Navigation',
  data: function () {
  }
}
</script>
