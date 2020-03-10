<template>
    <div>
        <comp-featured/>
        <comp-content/>
    </div>
</template>
<script>
import compFeatured from './features';
import compContent from './contents';
export default {
    components:{
        compFeatured,
        compContent
    }
}
</script>