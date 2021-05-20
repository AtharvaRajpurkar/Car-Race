class Form{
    constructor(){

    }
    display(){
        var title =createElement("H2")
        title.html("Car Racing Game")
        title.position(40,100)
        var input=createInput("Enter your name")
        var button=createButton("Click here")
        var great=createElement("H3")
        button.position(700,500)
        input.position(450,250)
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name=input.value()
            playerCount+=1
            player.update(name)
            player.updateCount(playerCount)
            great.html("Let's Play!!"+name)
            great.position(80,200)
        })
    }
}
