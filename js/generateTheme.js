var uglifycss = require('uglifycss');
var fs = require('fs-extra');

var uiStyles = require('./uiStyles');

var editorCSS = uglifycss.processFiles(
    [ './css/editor.css' ]
);

var presentationCSS = uglifycss.processFiles(
    [ './css/presentation.css' ]
);

var previewCSS = uglifycss.processFiles(
    [ './css/preview.css' ]
);

const css = {
    css: {
        className: "red-graphite",
        editor: editorCSS,
        presentation: presentationCSS,
        preview: previewCSS
    }
};

var theme = Object.assign(
    uiStyles, 
    css
);

fs.writeFile('./RedGraphite.json', JSON.stringify(theme) , 'utf-8');
