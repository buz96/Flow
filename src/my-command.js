import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

export default function() {


const doc = sketch.getSelectedDocument()

const document = sketch.fromNative(context.document)
const page = document.selectedPage

const selectedLayers = doc.selectedLayers
const selectedCount = selectedLayers.length
var currentArtboard = selectedLayers.layers[0]

var lg = currentArtboard.points
var currentName = currentArtboard.name
var artboardFrame = currentArtboard.frame

//var lg = selectedLayers.name

//console.log(lg)

new sketch.ShapePath({
            name: 'Flow way',
            shapePath: sketch.ShapePath.ShapeType.Custom,
            parent: currentArtboard,
            frame: new sketch.Rectangle( 10, 10, 50, 60),
            points: [ 
              { type: 'CurvePoint',
                cornerRadius: 0,
                curveFrom: [ {x:0.2, y:0.2} ],
                curveTo: [ {x:0.2, y:0.2} ],
                point: [ {x:0.2, y:0.2} ],
                pointType: 'Straight' },

              { type: 'CurvePoint',
                cornerRadius: 0,
                curveFrom: [ {x:1, y:1} ],
                curveTo: [ {x:1, y:1} ],
                point: [ {x:1, y:1} ],
                  pointType: 'Straight' }, 
            ],
            closed: false,
            
            style: {
                  fills: [],
                  borders: [{ color: '#F78B00' }],
                },
          })

sketch.UI.message("Done!")

}