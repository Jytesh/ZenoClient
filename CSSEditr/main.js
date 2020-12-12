var hasFirst = true;
var prev = '';
window.updatePreview = function(val) {
    var view = document.getElementById('mainView');
    if (!hasFirst) {
        hasFirst = true;
        view.removeInsertedCSS(prev).then(() => {
            view.insertCSS(val).then((key) => {
                prev = key;
            }).catch(console.log);
        }).catch(console.log);
        return
    }
    view.insertCSS(val).then((key) => {
        prev = key;
    }).catch(console.log);
}