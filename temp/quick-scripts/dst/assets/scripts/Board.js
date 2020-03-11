
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Board.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3cc14jBWA9JpJsB1iJiWwed', 'Board');
// scripts/Board.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
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
      "default": null,
      type: cc.TiledMap
    },
    users: {
      "default": [],
      type: [cc.Node]
    },
    enemies: {
      "default": [],
      type: [cc.Node]
    }
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    this.positionFirstCellX = this.board.node.x - this.board.getTileSize().width * this.board.getMapSize().width / 2 + this.board.getTileSize().width / 2;
    this.positionFirstCellY = this.board.node.y + this.board.getTileSize().height * this.board.getMapSize().height / 2 - this.board.getTileSize().height / 2;
    this.gotToPosition(this.users[0], 3, 4);
  },
  moveUp: function moveUp(character) {
    character.y = character.y + this.board.getTileSize().height;
  },
  moveDown: function moveDown(character) {
    character.y = character.y - this.board.getTileSize().height;
  },
  moveLeft: function moveLeft(character) {
    character.x = character.x - this.board.getTileSize().width;
  },
  moveRight: function moveRight(character) {
    character.x = character.x + this.board.getTileSize().width;
  },
  gotToPosition: function gotToPosition(character, xPositionNumber, yPositionNumber) {
    character.x = this.positionFirstCellX + this.board.getTileSize().width * xPositionNumber;
    character.y = this.positionFirstCellY - this.board.getTileSize().height * yPositionNumber;
  } // update (dt) {},

});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQm9hcmQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJib2FyZCIsInR5cGUiLCJUaWxlZE1hcCIsInVzZXJzIiwiTm9kZSIsImVuZW1pZXMiLCJzdGFydCIsInBvc2l0aW9uRmlyc3RDZWxsWCIsIm5vZGUiLCJ4IiwiZ2V0VGlsZVNpemUiLCJ3aWR0aCIsImdldE1hcFNpemUiLCJwb3NpdGlvbkZpcnN0Q2VsbFkiLCJ5IiwiaGVpZ2h0IiwiZ290VG9Qb3NpdGlvbiIsIm1vdmVVcCIsImNoYXJhY3RlciIsIm1vdmVEb3duIiwibW92ZUxlZnQiLCJtb3ZlUmlnaHQiLCJ4UG9zaXRpb25OdW1iZXIiLCJ5UG9zaXRpb25OdW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxJQUFBQSxLQUFLLEVBQUU7QUFDSCxpQkFBUyxJQUROO0FBRUhDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZOLEtBaEJDO0FBb0JSQyxJQUFBQSxLQUFLLEVBQUU7QUFDSCxpQkFBUyxFQUROO0FBRUhGLE1BQUFBLElBQUksRUFBRSxDQUFDTCxFQUFFLENBQUNRLElBQUo7QUFGSCxLQXBCQztBQXdCUkMsSUFBQUEsT0FBTyxFQUFFO0FBQ0wsaUJBQVMsRUFESjtBQUVMSixNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDUSxJQUFKO0FBRkQ7QUF4QkQsR0FIUDtBQWlDTDtBQUVBO0FBRUFFLEVBQUFBLEtBckNLLG1CQXFDSTtBQUNMLFNBQUtDLGtCQUFMLEdBQTBCLEtBQUtQLEtBQUwsQ0FBV1EsSUFBWCxDQUFnQkMsQ0FBaEIsR0FBcUIsS0FBS1QsS0FBTCxDQUFXVSxXQUFYLEdBQXlCQyxLQUF6QixHQUFpQyxLQUFLWCxLQUFMLENBQVdZLFVBQVgsR0FBd0JELEtBQXpELEdBQStELENBQXBGLEdBQXlGLEtBQUtYLEtBQUwsQ0FBV1UsV0FBWCxHQUF5QkMsS0FBekIsR0FBK0IsQ0FBbEo7QUFDQSxTQUFLRSxrQkFBTCxHQUEwQixLQUFLYixLQUFMLENBQVdRLElBQVgsQ0FBZ0JNLENBQWhCLEdBQXFCLEtBQUtkLEtBQUwsQ0FBV1UsV0FBWCxHQUF5QkssTUFBekIsR0FBa0MsS0FBS2YsS0FBTCxDQUFXWSxVQUFYLEdBQXdCRyxNQUExRCxHQUFpRSxDQUF0RixHQUEyRixLQUFLZixLQUFMLENBQVdVLFdBQVgsR0FBeUJLLE1BQXpCLEdBQWdDLENBQXJKO0FBRUEsU0FBS0MsYUFBTCxDQUFtQixLQUFLYixLQUFMLENBQVcsQ0FBWCxDQUFuQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQztBQUNILEdBMUNJO0FBNENMYyxFQUFBQSxNQTVDSyxrQkE0Q0VDLFNBNUNGLEVBNENhO0FBQ2RBLElBQUFBLFNBQVMsQ0FBQ0osQ0FBVixHQUFjSSxTQUFTLENBQUNKLENBQVYsR0FBYyxLQUFLZCxLQUFMLENBQVdVLFdBQVgsR0FBeUJLLE1BQXJEO0FBQ0gsR0E5Q0k7QUFnRExJLEVBQUFBLFFBaERLLG9CQWdESUQsU0FoREosRUFnRGU7QUFDaEJBLElBQUFBLFNBQVMsQ0FBQ0osQ0FBVixHQUFjSSxTQUFTLENBQUNKLENBQVYsR0FBYyxLQUFLZCxLQUFMLENBQVdVLFdBQVgsR0FBeUJLLE1BQXJEO0FBQ0gsR0FsREk7QUFvRExLLEVBQUFBLFFBcERLLG9CQW9ESUYsU0FwREosRUFvRGU7QUFDaEJBLElBQUFBLFNBQVMsQ0FBQ1QsQ0FBVixHQUFjUyxTQUFTLENBQUNULENBQVYsR0FBYyxLQUFLVCxLQUFMLENBQVdVLFdBQVgsR0FBeUJDLEtBQXJEO0FBQ0gsR0F0REk7QUF3RExVLEVBQUFBLFNBeERLLHFCQXdES0gsU0F4REwsRUF3RGdCO0FBQ2pCQSxJQUFBQSxTQUFTLENBQUNULENBQVYsR0FBY1MsU0FBUyxDQUFDVCxDQUFWLEdBQWMsS0FBS1QsS0FBTCxDQUFXVSxXQUFYLEdBQXlCQyxLQUFyRDtBQUNILEdBMURJO0FBNERMSyxFQUFBQSxhQTVESyx5QkE0RFNFLFNBNURULEVBNERvQkksZUE1RHBCLEVBNERxQ0MsZUE1RHJDLEVBNERzRDtBQUN2REwsSUFBQUEsU0FBUyxDQUFDVCxDQUFWLEdBQWMsS0FBS0Ysa0JBQUwsR0FBMEIsS0FBS1AsS0FBTCxDQUFXVSxXQUFYLEdBQXlCQyxLQUF6QixHQUFpQ1csZUFBekU7QUFDQUosSUFBQUEsU0FBUyxDQUFDSixDQUFWLEdBQWMsS0FBS0Qsa0JBQUwsR0FBMEIsS0FBS2IsS0FBTCxDQUFXVSxXQUFYLEdBQXlCSyxNQUF6QixHQUFrQ1EsZUFBMUU7QUFDSCxHQS9ESSxDQWlFTDs7QUFqRUssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIGJvYXJkOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlRpbGVkTWFwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB1c2Vyczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLk5vZGVdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbmVtaWVzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiBbY2MuTm9kZV1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbkZpcnN0Q2VsbFggPSB0aGlzLmJvYXJkLm5vZGUueCAtICh0aGlzLmJvYXJkLmdldFRpbGVTaXplKCkud2lkdGggKiB0aGlzLmJvYXJkLmdldE1hcFNpemUoKS53aWR0aC8yKSArIHRoaXMuYm9hcmQuZ2V0VGlsZVNpemUoKS53aWR0aC8yO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25GaXJzdENlbGxZID0gdGhpcy5ib2FyZC5ub2RlLnkgKyAodGhpcy5ib2FyZC5nZXRUaWxlU2l6ZSgpLmhlaWdodCAqIHRoaXMuYm9hcmQuZ2V0TWFwU2l6ZSgpLmhlaWdodC8yKSAtIHRoaXMuYm9hcmQuZ2V0VGlsZVNpemUoKS5oZWlnaHQvMjtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmdvdFRvUG9zaXRpb24odGhpcy51c2Vyc1swXSwgMywgNCk7XHJcbiAgICB9LFxyXG5cclxuICAgIG1vdmVVcChjaGFyYWN0ZXIpIHtcclxuICAgICAgICBjaGFyYWN0ZXIueSA9IGNoYXJhY3Rlci55ICsgdGhpcy5ib2FyZC5nZXRUaWxlU2l6ZSgpLmhlaWdodDtcclxuICAgIH0sXHJcblxyXG4gICAgbW92ZURvd24oY2hhcmFjdGVyKSB7XHJcbiAgICAgICAgY2hhcmFjdGVyLnkgPSBjaGFyYWN0ZXIueSAtIHRoaXMuYm9hcmQuZ2V0VGlsZVNpemUoKS5oZWlnaHQ7XHJcbiAgICB9LFxyXG5cclxuICAgIG1vdmVMZWZ0KGNoYXJhY3Rlcikge1xyXG4gICAgICAgIGNoYXJhY3Rlci54ID0gY2hhcmFjdGVyLnggLSB0aGlzLmJvYXJkLmdldFRpbGVTaXplKCkud2lkdGg7XHJcbiAgICB9LFxyXG5cclxuICAgIG1vdmVSaWdodChjaGFyYWN0ZXIpIHtcclxuICAgICAgICBjaGFyYWN0ZXIueCA9IGNoYXJhY3Rlci54ICsgdGhpcy5ib2FyZC5nZXRUaWxlU2l6ZSgpLndpZHRoO1xyXG4gICAgfSxcclxuXHJcbiAgICBnb3RUb1Bvc2l0aW9uKGNoYXJhY3RlciwgeFBvc2l0aW9uTnVtYmVyLCB5UG9zaXRpb25OdW1iZXIpIHtcclxuICAgICAgICBjaGFyYWN0ZXIueCA9IHRoaXMucG9zaXRpb25GaXJzdENlbGxYICsgdGhpcy5ib2FyZC5nZXRUaWxlU2l6ZSgpLndpZHRoICogeFBvc2l0aW9uTnVtYmVyO1xyXG4gICAgICAgIGNoYXJhY3Rlci55ID0gdGhpcy5wb3NpdGlvbkZpcnN0Q2VsbFkgLSB0aGlzLmJvYXJkLmdldFRpbGVTaXplKCkuaGVpZ2h0ICogeVBvc2l0aW9uTnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19