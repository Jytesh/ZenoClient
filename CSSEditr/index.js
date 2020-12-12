window.PogU = function() {
    var editor = CodeMirror.fromTextArea(document.getElementById('mainCode'), {
        lineNumbers: true,
        value: "/* Your CSS Here */",
        mode: "css"
    });
    console.log('setup');
    editor.on('change', () => {
        console.log('woosh')
        window.updatePreview(editor.getValue());
    });
}