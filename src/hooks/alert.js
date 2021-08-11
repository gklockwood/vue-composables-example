import { ref } from 'vue';

// Typical naming convention begins with "use"; in this case useAlert
// We can export this whole function as is using "export default"
export default function useAlert() {
    const alertIsVisible = ref(false);

    function showAlert() {
        alertIsVisible.value = true;
    }

    function hideAlert() {
        alertIsVisible.value = false;
    }

    // We can store our returns in an array
    return [
        alertIsVisible,
        showAlert,
        hideAlert
    ];
}