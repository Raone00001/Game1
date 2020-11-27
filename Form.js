class Form {

    constructor(){

        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greetings = createElement('h2');

    }

    hide(){

        this.greetings.hide;
        this.button.hide;
        this.input.hide;

    }

    display(){

        var title = createElement('h2');
            title.html('Car Racing Game');
            title.position(150,0);

        //var input = createInput('Name');
        
        //var button = createButton('Play');

        //var greetings = createElement('h3');

        this.input.position(150,160);
        this.button.position(100,100);

        this.button.mousePressed(()=>{

            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount+= 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            //name.update(Name);
            
            //playerCount = playerCount+1;
            //player.update(name);
            //player.updateCount(playerCount);

            this.greetings.html("Hello!" + player.name);
            this.greetings.position(150,150);

        });

    }

}