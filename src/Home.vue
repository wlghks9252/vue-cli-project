<template>
    <div>
        <Appstatus></Appstatus>
        <h1>{{ homeTitle }}</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                homeTitle: "홈 입니다"
            }
        }
    }
</script>