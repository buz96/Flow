import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

export default function() {


const doc = sketch.getSelectedDocument()

const document = sketch.fromNative(context.document)
const page = document.selectedPage

const selectedLayers = doc.selectedLayers
const selectedCount = selectedLayers.length
var currentArtboard = selectedLayers.layers[0]

var lg = currentArtboard
var currentName = currentArtboard.name
var artboardFrame = currentArtboard.frame

//var lg = selectedLayers.name

console.log(lg)


}