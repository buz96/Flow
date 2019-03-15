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

function searchFlow (currentArtboard){

	var lrs = currentArtboard.layers
	var lng = lrs.length
	console.log(lng)

	for (let b = lng - 1; b >= 0; b--) {

		var selectedChild = lrs[b]
		var flw = selectedChild.flow
		//console.log(flw)
			if(flw == undefined )
			{
			
				console.log('flow not found')
				//console.log(selectedChild)


				if(selectedChild.type == 'SymbolInstance'){
					console.log('That is symbol')
	
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
			
			console.log(trgtID)

			var pageArtboard = page.layers

			for (var c = pageArtboard.length - 1; c >= 0; c--) {

				if (pageArtboard[c].id == trgtID){
					console.log('target is '+pageArtboard[c].name)

					//new sketch.

					new sketch.Text({
    					parent: artboard,
    					alignment: sketch.Text.Alignment.center,
    					text: 'to ' + pageArtboard[c].name,
    					fixedWidth: true,
    					frame: new sketch.Rectangle( artboardX+X, artboardY+Y, W, H),
    				})

    				new sketch.ShapePath({
						name: 'Flow way',
						shapePath: sketch.ShapePath.ShapeType.Custom,
						parent: artboard,
						frame: new sketch.Rectangle( 30, 30, 50, 60),
						points: [ 
						{ type: 'CurvePoint',
    						cornerRadius: 0,
    						curveFrom: [0.20,0.20],
    						curveTo: [0.20,0.20],
    						point: [(0.20,0.20)],
    						pointType: 'Straight' },

    					{ type: 'CurvePoint',
    						cornerRadius: 0,
    						curveFrom: (0.20,0.40),
    						curveTo: (0.20,0.40),
    						point: (0.20,0.40),
    					   	pointType: 'Straight' },

    					{ type: 'CurvePoint',
							cornerRadius: 0,
    						curveFrom: (0.20,0.20),
    						curveTo: (0.20,0.20),
    						point: (0.20,0.20),
    					   	pointType: 'Straight' }], 
						
						closed: false,
						
						style: {
        					fills: [],
        					borders: [{ color: '#F78B00' }],
      					},
					})
					
					console.log('curve is created')

					/*
					points: 
   [ { type: 'CurvePoint',
       cornerRadius: 0,
       curveFrom: [Object],
       curveTo: [Object],
       point: [Object],
       pointType: 'Straight' },

     { type: 'CurvePoint',
       cornerRadius: 10,
       curveFrom: [Object],
       curveTo: [Object],
       point: [Object],
       pointType: 'Straight' },

     { type: 'CurvePoint',
       cornerRadius: 10,
       curveFrom: [Object],
       curveTo: [Object],
       point: [Object],
       pointType: 'Straight' },

     { type: 'CurvePoint',
       cornerRadius: 0,
       curveFrom: [Object],
       curveTo: [Object],
       point: [Object],
       pointType: 'Straight' } ],
  	closed: false }
*/

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

sketch.UI.message("Creating of flow chart is done!")
}

}