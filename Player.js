class Player {

    constructor(){

        this.index = null;

        this.distance = 0;
        this.name = null;

    }

    getCount(){

        var playerCountRef = database.ref('PlayerCount');
            playerCountRef.on("value", function(data){

                playerCount = data.val();

            })

    }

    updateCount(count){

        database.ref('/').update({

            PlayerCount: count

        });

    }

        update(){

            var playerIndex = "players/player" + this.index;

            database.ref(playerIndex).set({

                name: this.name,
                distance: this.distance

            })

        }

        static getPlayerInfo(){

            var playersInfo = database.ref('players');

            playersInfo.on("value",(data)=>{

                allPlayers = data.val;

            });


        }

}

