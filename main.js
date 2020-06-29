const body = document.querySelector('body')

let coin = {
    state: 0,
    flip: function () {
        let min = Math.ceil(0)
        let max = Math.floor(1)
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
        this.state = randomNumber
        return this.state
        //console.log(this.state)



        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function () {
        if (this.state === 0) {
            return 'heads'
        } else if (this.state === 1) {
            return 'tails'
        }


        // 2. Return the string "Heads" or "Tails", depending on whether
        // "this.state" is 0 or 1. 
    },







    toHTML: function () {
        let image = document.createElement('img');
        body.append(image);
        if (0 === this.state) {
            image.src = "images/heads.jpg"
        } else if (1 === this.state) {
            image.src = "images/tails.jpg"
        }

        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }
};

function display20Flips() {
    for (let index = 0; index < 20; index++) {
        coin.flip()
        body.append(coin.toString())

    }
}

display20Flips()

function display20Images() {
    for (let index = 0; index < 20; index++) {
        coin.flip()
        body.append(coin.toHTML())

    }
}

display20Images()