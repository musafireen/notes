var doc = app.activeDocument;

for (var i = 0; i < doc.textFrames.length; i++) {
    var tf = doc.textFrames[i];
    try {
        if (tf.textRange.characterAttributes.textFont.name === "SutonnyMJBold" ) {
            tf.textRange.characterAttributes.textFont = app.textFonts.getByName("SutonnyMJ-Bold");
        }
    } catch (e) {}
}
