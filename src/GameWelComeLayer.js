/**
 * Created by Larry_lee on 2015/2/25.
 */

var MATRIX_ROW_COUNT = 11;
var MATRIX_COL_COUNT = 9;

var MATRIX_CONTINUOUS = 2;



var GameWelComeLayer = cc.Layer.extend({
    sprits:null,
    ctor:function(){
        this._super();

        var size = cc.director.getWinSize();
        var scoreHeight = 86;
        var listBgHeight = 684;

        var bg = new cc.Sprite(res.background);
        bg.setAnchorPoint(0.5,0.5);
        bg.setPosition(size.width/2,size.height/2);
        this.addChild(bg,0);

        var aa = new cc.TurnOffTiles(2,cc.size(48,32), 2);
        bg.runAction(aa);

        //add score bg
        var score = new cc.Sprite(res.score_bg);
        score.setAnchorPoint(0.5,0.5);
        score.setPosition(size.width/2,size.height - (scoreHeight/2+20));
        this.addChild(score,2);

        var listBg = new cc.Sprite(res.list_bg);
        listBg.setAnchorPoint(0.5,0.5);
        listBg.setPosition(size.width/2,size.height - (scoreHeight + 40 + listBgHeight/2));
        this.addChild(listBg,2);

        var c = cc.spriteFrameCache.addSpriteFrame(res.aaa_plist,res.aaa_png);

        var sprite3 = cc.Sprite(cc.spriteFrameCache.getSpriteFrame("aaa.png"));//plist里面对于的图片名称
        sprite3.setPosition(size.width/2,size.height/2);
        this.addChild(sprite3);
        return true;


    }


});

