<template>
<div>
    <b-navbar toggleable="lg" type="dark" class="bg-nav ">
        <b-navbar-brand></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item to="/">Home</b-nav-item>
                <b-nav-item to="/list">Link</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ms-auto">
                 <b-navbar-nav class="m-1">
                     <b-icon icon="person-fill" class="m-2 text-light h3"></b-icon>
                     <b-nav-item>Profile</b-nav-item>
                 </b-navbar-nav>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</div>
</template>

<script>


export default {
    name:'NavComponent'
}
</script>

<style scoped>
.bg-nav{
    background-color: #244c74;
    font-weight: bold;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: 0 8px 8px -4px black;
  
}

</style>
