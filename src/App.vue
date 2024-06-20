<template>
  <AppHeader></AppHeader>
  <RouterView></RouterView>
  <AppFooter></AppFooter>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'


export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  }


  
}
</script>