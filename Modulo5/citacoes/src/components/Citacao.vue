<template>
    <div class="citacao">
        <div class="interno">
            <slot name="autor"></slot>
            <slot name="texto"></slot>
            <slot name="fonte" class="alinhar"></slot>
        </div>
    </div>
</template>

<script>
export default {
    created(){
        console.log('Citação created')
    },
    destroyed(){
        console.log('Citação destroyed')
    },
    activated(){
        console.log('Citação activated')
    },
    deactivated(){
        console.log('Citação deactivated')
    }
}
</script>

<style scoped>
    .citacao {
        box-sizing: border-box;
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        width: 450px;
        height: 320px;
    }
    .interno{
        box-sizing: border-box;
        max-width: 450px;
        max-height: 320px;

    }
	/* h2{
		color: yellow ;
    } */
    h6{
        text-align: right;
    }
</style>
