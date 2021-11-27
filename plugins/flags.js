export default function({ store }, inject) {
    inject("isMobile", () => store.getters["getIsMobile"])

    if (window.matchMedia("(max-width: 768px)").matches) {
        store.commit('setIsMobile', true)
    } else {
        store.commit('setIsMobile', false)
    }
}