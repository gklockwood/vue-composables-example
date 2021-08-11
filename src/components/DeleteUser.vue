<template>
  <user-alert v-if="alertIsVisible" title="Delete the User?" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
    import UserAlert from './UserAlert.vue';
    // importing the useAlert composable/hook
    import useAlert from '../hooks/alert.js';

    export default {
        components: {
            UserAlert,
        },
        setup() {
            // using the useAlert composable/hook
            // We also return the array holding the returned functions 
            const [alertIsVisible, showAlert, hideAlert] = useAlert();

            // Return the functions locally 
            return {
                alertIsVisible,
                showAlert,
                hideAlert
            };
        },
    };
</script>