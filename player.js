class Player{
    constructor(){


    }
    getCount(){
        var a=database.ref('playercount')
        a.on("value",function(t){playerCount=t.val()})
    }
    updateCount(k){database.ref('/').update({playercount:k})}
    update(r){
        var p="player"+playerCount
        database.ref(p).set({name:r})
    }

}