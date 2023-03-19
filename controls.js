class Controls{
    constructor(){
        this.forward =false
        this.right = false
        this.bottom =false
        this.left =false
        this.#addKeyboardListner()
    }

    #addKeyboardListner(){
        document.onkeydown=(event)=>{
            switch (event.key) {
                case "ArrowUp":
                    this.forward = true
                    break
                case "ArrowDown":
                    this.bottom = true
                    break
                case "ArrowLeft":
                    this.left = true
                    break
                case "ArrowRight":
                    this.right = true
                    break
            }
            console.table(this)
        }
        document.onkeyup=(event)=>{
            switch (event.key) {
                case "ArrowUp":
                    this.forward = false
                    break
                case "ArrowDown":
                    this.bottom = false
                    break
                case "ArrowLeft":
                    this.left = false
                    break
                case "ArrowRight":
                    this.right = false
                    break
            }
            console.table(this)
        }
    }

}