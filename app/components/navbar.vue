
<template>
    <div class="nav-container">
        <div>
            <router-link to="/"></router-link>
            <router-link to="/photo"></router-link>
            <router-link to="/projects"></router-link>
        </div>
    </div>
</template>
<script>
export default Navbar = {
    name:"navbar",
    data: function(){
        return{

        };
    }
};
</script>
<style>
.nav-container
{
    width: 100%
}
</style>
