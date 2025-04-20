var Common_config = {
    title: '挑战杯项目',
    iid: '',
    reset() {
        __g.reset(7)
    }
}

try {
    window.name
} catch (e) {
    module.exports = Common_config
}
