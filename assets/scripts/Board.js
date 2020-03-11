// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        board: {
            default: null,
            type: cc.TiledMap
        },
        users: {
            default: [],
            type: [cc.Node]
        },
        enemies: {
            default: [],
            type: [cc.Node]
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.positionFirstCellX = this.board.node.x - (this.board.getTileSize().width * this.board.getMapSize().width/2) + this.board.getTileSize().width/2;
        this.positionFirstCellY = this.board.node.y + (this.board.getTileSize().height * this.board.getMapSize().height/2) - this.board.getTileSize().height/2;
        
        this.gotToPosition(this.users[0], 3, 4);
    },

    moveUp(character) {
        character.y = character.y + this.board.getTileSize().height;
    },

    moveDown(character) {
        character.y = character.y - this.board.getTileSize().height;
    },

    moveLeft(character) {
        character.x = character.x - this.board.getTileSize().width;
    },

    moveRight(character) {
        character.x = character.x + this.board.getTileSize().width;
    },

    gotToPosition(character, xPositionNumber, yPositionNumber) {
        character.x = this.positionFirstCellX + this.board.getTileSize().width * xPositionNumber;
        character.y = this.positionFirstCellY - this.board.getTileSize().height * yPositionNumber;
    }

    // update (dt) {},
});
