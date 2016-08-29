var blocks = 0;

function blockClick(number){
    blocks = blocks + number;
    document.getElementById("blocks").innerHTML = blocks;
};

var woodpick = 0;

function buyWoodpick(){
    var woodpickCost = Math.floor(100 * Math.pow(1.2,woodpick));     //works out the cost of this cursor
    if(blocks >= woodpickCost){                                   //checks that the player can afford the cursor
        woodpick = woodpick + 1;                                   //increases number of cursors
    	blocks = blocks - woodpickCost;                          //removes the cookies spent
        document.getElementById('woodpick').innerHTML = woodpick;  //updates the number of cursors for the user
        document.getElementById('blocks').innerHTML = blocks;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(100 * Math.pow(1.2,woodpick));       //works out the cost of the next cursor
    document.getElementById('woodpickCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	
	blockClick(woodpick);
	
}, 1000);

var stonepick = 0;

function buyStonepick(){
    var stonepickCost = Math.floor(1000 * Math.pow(2.2,stonepick));     //works out the cost of this cursor
    if(blocks >= stonepickCost){                                   //checks that the player can afford the cursor
        stonepick = stonepick + 1;                                   //increases number of cursors
    	blocks = blocks - stonepickCost;                          //removes the cookies spent
        document.getElementById('stonepick').innerHTML = stonepick;  //updates the number of cursors for the user
        document.getElementById('blocks').innerHTML = blocks;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(1000 * Math.pow(2.2,stonepick));       //works out the cost of the next cursor
    document.getElementById('stonepickCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	
	blockClick(stonepick);
	
}, 750);
