const canvas = document.getElementById("myCanvas")
canvas.height = window.innerHeight
canvas.width = window.innerWidth

const ctx = canvas.getContext("2d")
const myCar = new Car(canvas.width/2,canvas.height/2,30,50)
myCar.draw(ctx)

function animate(){
    myCar.update()
    canvas.height = window.innerHeight
    ctx.beginPath()
    myCar.draw(ctx)
    requestAnimationFrame(animate)

}

animate()



