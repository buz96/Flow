import sketch from 'sketch'



export default function() {


const hotspotStyle = sketch.SharedStyle.fromStyle({
    name: 'Flow styles/Hotspot',
    style: {
          fills: [],
          borders: [{ color: '#F78B00' }],
          }, 
    document: document
});

const doc = sketch.getSelectedDocument()

const document = sketch.fromNative(context.document)
const page = document.selectedPage

const selectedLayers = doc.selectedLayers
const selectedCount = selectedLayers.length
var currentArtboard = selectedLayers.layers[0]

currentArtboard.style.syncWithSharedStyle(hotspotStyle)

}