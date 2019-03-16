import sketch from 'sketch'


export default function() {
  sketch.UI.message("Start creating flow chart ")

const doc = sketch.getSelectedDocument()

const document = sketch.fromNative(context.document)
const page = document.selectedPage

const selectedLayers = doc.selectedLayers
const selectedCount = selectedLayers.length

const Z = 4

////////////////////////////


var symbolsPage = null
const pages = document.pages

for (var q = pages.length - 1; q >= 0; q--) {
    let pageName = document.pages[q].name
    console.log(pageName)
    if(pageName == 'Symbols'){
      symbolsPage = document.pages[q]
    break
    }
}

//function getSymbol(){}

function searchFlow (currentArtboard){

	var lrs = currentArtboard.layers
	var lng = lrs.length
	console.log(lng)

	for (let b = lng - 1; b >= 0; b--) {

		var selectedChild = lrs[b]
		var flw = selectedChild.flow
		
    if(flw == undefined ){
			
				console.log('flow not found')

				if(selectedChild.type == 'SymbolInstance'){
					console.log('That is symbol')
	         
          //getSymbol()

					//get staff from symbol
				}
				else{
	
					if (selectedChild.type == 'Group'){
		
						if(selectedChild.layers > 0){
							console.log('no childs')	
						}
						else{
							console.log('go to clild'+selectedChild.name)
								searchFlow(selectedChild)
						}
					}
	
				}
			}


			else
			{
				
			console.log('flow is Detected')
			
			var X = selectedChild.frame.x/Z
    		var Y = selectedChild.frame.y/Z
    		var W = selectedChild.frame.width/Z
			var H = selectedChild.frame.height/Z


			new sketch.Shape({

    			frame: new sketch.Rectangle( artboardX+X, artboardY+Y, W, H),
      			parent: artboard,
      			name: selectedChild.name,
      			style: {
        		fills: [],
        		borders: [{ color: '#F78B00' }],
      			},
    		})		

    		let trgtID = flw.targetId

			var targetArtboard = page.layers

			for (var c = targetArtboard.length - 1; c >= 0; c--) {

				if (targetArtboard[c].id == trgtID){
					console.log('target is '+targetArtboard[c].name)

					new sketch.Text({
    					parent: artboard,
    					alignment: sketch.Text.Alignment.center,
    					text: 'to ' + targetArtboard[c].name,
    					fixedWidth: true,
    					frame: new sketch.Rectangle( artboardX+X, artboardY+Y, W, H),
    				})

          var trgtX = targetArtboard[c].frame.x
          var trgtY = targetArtboard[c].frame.y
          
          var path = NSBezierPath.bezierPath();
            //path.parent = artboard; //
            path.moveToPoint(NSMakePoint(X,Y));
            path.lineToPoint(NSMakePoint(trgtX/Z,trgtY/Z));
            //path.lineToPoint(NSMakePoint(100,100));

            var shape = MSShapeGroup.layerWithPath(MSPath.pathWithBezierPath(path));
            var border = shape.style().addStylePartOfType(1);
            border.color = MSColor.colorWithRGBADictionary({r: 0.8, g: 0.1, b: 0.1, a: 1});
            border.thickness = 3;
            
            var documentData = context.document.documentData();
            var currentParentGroup = documentData.currentPage().currentArtboard() || documentData.currentPage()
            context.document.currentPage().addLayers([shape]);
          
         
          /*
    				new sketch.ShapePath({
						name: 'Flow way',
						shapePath: sketch.ShapePath.ShapeType.Custom,
						parent: artboard,
						//frame: new sketch.Rectangle( 30, 30, 50, 60),
						points: [ 
						{ NSMakePoint(10,10), },
    				{ NSMakePoint(10,120), },
            ], 
						
						closed: false,
						// style: {fills: [],borders: [{ color: '#F78B00' }],},
					})
          */
          
					console.log('curve is created')

				}

			}
			
			}
		}
}




if (selectedCount < 2) {
    sketch.UI.message('You need to select at least 2 layers ⚠️')
} 

else 
{
    sketch.UI.message(`${selectedCount} layers selected`)

    var artboard = new sketch.Artboard({
    	frame: new sketch.Rectangle(-20, -700, 800, 600),
    	parent: page,
    	name: "Graph scheme",

  	})

    for (var i = 0; i < selectedCount; i++) {

    	sketch.UI.message("🚧 in progress"+(i+1) + " from" + selectedCount + " layers")

    	var currentArtboard = selectedLayers.layers[i]
    	var currentName = currentArtboard.name
    	var artboardFrame = currentArtboard.frame

    	var artboardX = artboardFrame.x/Z
    	var artboardY = artboardFrame.y/Z
    	var artboardW = artboardFrame.width/Z
		  var artboardH = artboardFrame.height/Z


		/* var currentSlice = new sketch.Slice(
			{
			parent: selectedLayers.layers[i],
			frame: new sketch.Rectangle( X, Y, W, H),
			scales: '1',
			formats:'png',
			}
		)
		
		var preview = new sketch.export(
			currentArtboard,
			{
			scales: '1',
			formats: 'png'
			}
		)

		console.log(preview)
		*/
		
		const shape = new sketch.Shape({

    		frame: new sketch.Rectangle( artboardX, artboardY, artboardW, artboardH),
      		parent: artboard,
      		name: currentName,
      		style: {
        		fills: ['#fafafdff'], //change to image
        		borders: [],
      		},
    	})

    	const layer = new sketch.Text({
    		parent: artboard,
    		alignment: sketch.Text.Alignment.center,
    		text: currentName,
    		fixedWidth: true,
    		frame: new sketch.Rectangle( artboardX, artboardY-20 , artboardW, ),
    	})

		searchFlow(currentArtboard)

    }

artboard.adjustToFit()

document.centerOnLayer(artboard)

sketch.UI.message('Creating of flow chart is done!')

var sound = NSSound.soundNamed('Tink')
sound.play()

}

}