namespace SpriteKind {
    export const enviornment = SpriteKind.create()
    export const ui = SpriteKind.create()
    export const ore = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    Render.moveWithController(2, 5, 1)
    if (tiles.tileAtLocationEquals(location, assets.tile`myTile9`)) {
        timer.background(function () {
            color.FadeToBlack.startScreenEffect()
            color.pauseUntilFadeDone()
            tiles.setCurrentTilemap(tilemap`level1`)
            mySprite.setPosition(928, 1536)
            sprites.destroyAllSpritesOfKind(SpriteKind.ore)
            sprites.destroyAllSpritesOfKind(SpriteKind.enviornment)
            createSprites()
            Render.setViewAngleInDegree(160)
            color.startFade(color.Black, color.originalPalette)
            color.pauseUntilFadeDone()
            color.Darken.startScreenEffect(100)
        })
    }
    if (tiles.tileAtLocationEquals(location, assets.tile`myTile13`)) {
        timer.background(function () {
            color.FadeToBlack.startScreenEffect()
            color.pauseUntilFadeDone()
            tiles.setCurrentTilemap(tilemap`level3`)
            mySprite.setPosition(592, 624)
            sprites.destroyAllSpritesOfKind(SpriteKind.ore)
            sprites.destroyAllSpritesOfKind(SpriteKind.enviornment)
            createSprites()
            Render.setViewAngleInDegree(160)
            color.startFade(color.Black, color.originalPalette)
            color.pauseUntilFadeDone()
            color.Darken.startScreenEffect(100)
            color.pauseUntilFadeDone()
            color.Darken.startScreenEffect(100)
            color.pauseUntilFadeDone()
            color.Darken.startScreenEffect(100)
        })
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (moveDirection == 1) {
        Render.moveWithController(6, 5, 1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ore, function (sprite, otherSprite) {
    if (browserEvents.MouseLeft.isPressed()) {
        sprites.destroy(otherSprite, effects.disintegrate, 500)
        info.changeScoreBy(1)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.jumpWithHeightAndDuration(mySprite, 16, 500)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    Render.moveWithController(4, 5, 1)
    moveDirection = 1
})
browserEvents.Shift.onEvent(browserEvents.KeyEvent.Released, function () {
    Render.moveWithController(4, 5, 1)
})
browserEvents.Shift.onEvent(browserEvents.KeyEvent.Pressed, function () {
    Render.moveWithController(6, 5, 1)
})
function createSprites () {
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
        tree1 = sprites.create(img`
            ...............cc...............
            ............ccc65c66............
            ............c6c55c76............
            ...........6cc7557c66...........
            ..........cc77777577c6..........
            .........666c677776cc66.........
            ........c7776c7c67657576........
            ........ccc666c666655666........
            ......c66cc7666667777c6766......
            .....c777c77667667767767776.....
            .....cc66cccc77c677cc666666.....
            ....c6766666c7c6767677777766....
            ...cc777666666677767777667c66...
            .666cc6677666667777777776677666.
            .67776677c676677777776677677776.
            cc6666ccc67767776777776cc7767666
            c666777667766776c776777c67776c66
            .c6777666ccc667c676cc666667776c.
            .cc6666766666cc66666666776cc666.
            ...66776c666666666677667766cccc.
            ...cc76c66766666667677667776c...
            ...6cccc677666666776777c77666...
            ......6ccc7c67767776c776cc......
            ........ccc6777c67776cc6........
            ...........cc77c67766...........
            .............6c6666.............
            ............ffeeeef.............
            ..........ffeeeeeeeef...........
            .............feeeffe............
            ..............fef...............
            ..............fef...............
            ...............f................
            `, SpriteKind.enviornment)
        tiles.placeOnTile(tree1, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
        tree2 = sprites.create(img`
            .............6666...............
            ..........666667766.6666........
            .........677777777767776........
            ......66667775577757777666......
            .....677666675557557776777666...
            .....6776777775555577777766776..
            ...66666777777775777777766666...
            .66667767777755757555777776776..
            6666777677775577557555777767766.
            .6667767777777775577777777767666
            .c6766777677777775777777677766..
            cc77666667777777777777777666666c
            cc76666677777777777777777766776c
            c6666776777777777777766677666776
            66667766667776777767767766766666
            ccc76677677776677766767776776ccc
            cc7766776777677677676667767766cc
            .666c676667677766667766666666cc.
            .ccc66676666776666677677666cccc.
            ...ccc77c6767666676676677666ccc.
            ...cc676c7766676677666666c666cc.
            ....c6cc676c6677677c66c666ccc...
            ....ccccc6c66667667cc6ccc6ccc...
            ......ccccc66c66c66cccccccc.....
            .......cc.cc6c6ccc6cccc.cc......
            ...........cccccccccc...........
            .............feeeeee............
            ............feeeeeefe...........
            .........eeeeefeeeffee..........
            ............ffffeef..ee.........
            ...............fee..............
            ................e...............
            `, SpriteKind.enviornment)
        tiles.placeOnTile(tree2, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile16`)) {
        tree4 = sprites.create(img`
            ......cc66......
            .....c6576c.....
            ....c677576c....
            ....cc677666....
            ...cc6c6667cc...
            ..6c666777cc6c..
            ..c76666766776..
            ..c6777777776c..
            ..cc67777776cc..
            .c67cc76676676c.
            .c777666667777c.
            .c6777777777766.
            .cc7767776776666
            c676cc6766666776
            c777766666677776
            cc7777777777776c
            .c676777677767c.
            ..cc667666766c..
            ...ccc6c66ccc...
            .....cccccc.....
            .......ff.......
            ......eefe......
            .....efeefe.....
            .......ee.......
            `, SpriteKind.enviornment)
        tiles.placeOnTile(tree4, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile15`)) {
        tree3 = sprites.create(img`
            ................c6..................
            ...........66ccc67cc6...............
            ...........c666c776ccc6c............
            ............c6c77776776c............
            .........6cc6677777766cc............
            ........6776777777777c666...........
            .........6776667767666c6c...........
            ..........c666676676776cc...........
            .........c66666666666777c...........
            ........667766666666666676..........
            .......67766667666776667776.........
            ......cc66677766767776666cc.........
            .....6776677766776777766676c........
            ....6776666666777667776666776.......
            .....c667776667766676677776776......
            ......c7776666666677767777766cc.....
            ....6cc7766776677677777777776776....
            ..cc6666667776777777777776666677c...
            .c666666677766776777776666677666c...
            ..cc67766666677767767766666777666c..
            ..c677667766666666666666777666666c..
            cc666667776666766666677667776666c...
            666c66667666776676776776667766666c..
            ccc6666666677767767766766666677666c.
            .c666cc6666676677677666666776666666c
            .c66cc6666666667766666676677766666cc
            .66cc666666666666666666776666666cc..
            ..cc666c666666666667766777666666c...
            ...c66cc666666666667766777666666c...
            ...c6cc666c666666667666666666ccc....
            ....ccc66cc66c666666666666666c......
            ......c6cc666c666c6666c666c6c.......
            ......ccc666cc66cc666ccc66ccc.......
            ........ccccccc6ccccccec6c..........
            ..............eccecc.ec.c...........
            ...............eeee..e..............
            ...............ceef.ce..............
            ...............ceefcec..............
            ...............feefce...............
            ...............fceeec...............
            ...............ffceec...............
            `, SpriteKind.enviornment)
        tiles.placeOnTile(tree3, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
        gold = sprites.create(img`
            . c 5 5 c . . c 4 5 4 c . . . . 
            . c 4 5 4 c . c c c c c . c c c 
            b c 4 4 4 c . d b b c c c d d b 
            6 6 c c 6 c . . c 4 5 c . . c 6 
            c c c 6 c c c . c 5 5 4 c . c c 
            . c d d d d d c c 4 4 b b . c b 
            c d d b b b b b c c c c c . . c 
            b b b b b b b 4 5 5 c . . . . . 
            . c c b . . 4 5 5 4 d d d 6 6 c 
            . . . c . 4 4 5 4 d d b b c 6 6 
            c c c c c d 4 4 b d b b b c c c 
            4 5 4 c c d b b b b b b b c 5 4 
            5 4 b . c . b b b b b b c 4 5 4 
            4 b c . c . b b b b c c c 5 4 6 
            b c . . . . c b b b c c . c c . 
            . . c 6 . . c c c c . . . . c c 
            `, SpriteKind.ore)
        tiles.placeOnTile(gold, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
        gold = sprites.create(img`
            ................
            ..55....4454....
            .c454..cccccc...
            .c454c.ccc....cc
            bc444c.db..cccdd
            bc444c.dbbbcccdd
            66.c6c..cc45c..c
            66.c6c..cc45c..c
            c..6c...cc554c..
            ..c6c....c554c..
            .cdddddc.c44bb..
            .cdddddc..44bb.c
            cddbbbbbc.cccc..
            cddbbbbbc....c..
            bbbbbbb4555c....
            bbbbbbb4555c....
            .ccb..45554ddd66
            .ccb..45554ddd66
            ...c.44544ddbbc6
            ...c.44544ddbbc6
            cc..cd44bbdbbbcc
            ccc.cd44bbdbbbcc
            454c.dbbbbbbbbc5
            454c.dbbbbbbbbc5
            54b...bbbbbbbc45
            54b...bbbbbbbc45
            4bc...bbbbbcc.54
            4bc...bbbbbc..54
            bc....cbbbbc..c.
            bc....cbbb....c.
            ..c...cccc.....c
            ..c...cc.......c
            `, SpriteKind.ore)
        tiles.placeOnTile(gold, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile11`)) {
        e1 = sprites.create(img`
            ...ff...........f.....
            ..ff.....fffff..ff....
            .ff....ff11111ff.ffff.
            .ff...fb111f111bf..fff
            ..fff.f111fff111f..fff
            ..ffffd111f5f111dfffff
            ...fffd1111f1111dffcf.
            ....ffddd11111dddf111.
            ..c1ffbdbfdddfbdbf1b1.
            .1b1ffcdc51115cdcfb111
            c11bffcdcf111fcdcff1bc
            1bbffffb1111111bfffb1.
            .11fffffcdb11bdfffff..
            ....c111cbfbbfc111cf..
            ....1b1b1fffff1b1b1f..
            ....1b1b1fffff1b1b1f..
            .....fffffffffffffff..
            .f...fff.ffffffff.f...
            .f...ff..fffffff......
            .ff.fff.ffff.fff...f..
            ..fffff..ffff..ff..f..
            ...ff...ff.f.f..fff...
            ..............f.......
            `, SpriteKind.Enemy)
        tiles.placeOnTile(e1, value)
        e1.follow(mySprite, 30)
        animation.runImageAnimation(
        e1,
        [img`
            ........................
            ....ff...........f......
            ...ff.....fffff..ff.....
            ..ff....ff11111ff.ffff..
            ..ff...fb111f111bf..fff.
            ...fff.f111fff111f..fff.
            ...ffffd111f5f111dfffff.
            ....fffd1111f1111dffcf..
            .....ffddd11111dddf111..
            ...c1ffbdbfdddfbdbf1b1..
            ..1b1ffcdc41114cdcfb111.
            .c11bffcdcf111fcdcff1bc.
            .1bbffffb1111111bfffb1..
            ..11fffffcdb11bdfffff...
            .....c111cbfbbfc111cf...
            .....1b1b1fffff1b1b1f...
            .....1b1b1fffff1b1b1f...
            ......fffffffffffffff...
            ..f...fff.ffffffff.f....
            ..f...ff..fffffff.......
            ..ff.fff.ffff.fff...f...
            ...fffff..ffff..ff..f...
            ....ff...ff.f.f..fff....
            ...............f........
            `,img`
            ........................
            ...ff.............f.....
            ...ff.....fffff...ff....
            ..ff....ff11111ff.ffff..
            ..ff...fb111f111bf..fff.
            ...fff.f111fff111f..fff.
            ...ffffd111f5f111dfffff.
            ....fffd1111f1111dffcf..
            .....ffddd11111dddf111..
            ...c1ffbdbfdddfbdbf1b1..
            ..1b1ffcdc51115cdcfb111.
            .c11bffcdcf111fcdcff1bc.
            .1bbffffb1111111bfffb1..
            ..11fffffcdb11bdfffff...
            .....c111cbfbbfc111cf...
            .....1b1b1fffff1b1b1f...
            .....1b1b1fffff1b1b1f...
            ......fffffffffffffff...
            ...f..ffffffffffff.f....
            ..f...ff..fffffff.......
            ..ff.fff..fff.fff...ff..
            ...fffff.ffff.f.ff..f...
            ....ff....f.ff...fff....
            .........f....f.........
            `,img`
            ..f.....................
            ...f...............f....
            ...ff.....fffff...f.....
            ..ff....ff11111ff.ffff..
            ..ff...fb111f111bf..fff.
            ...fff.f111fff111f..fff.
            ...ffffd111f4f111dfffff.
            ....fffd1111f1111dffcf..
            .....ffddd11111dddf111..
            ...c1ffbdbfdddfbdbf1b1..
            ..1b1ffcdc51115cdcfb111.
            .c11bffcdcf111fcdcff1bc.
            .1bbffffb1111111bfffb1..
            ..11fffffcdb11bdfffff...
            .....c111cbfbbfc111cf...
            .....1b1b1fffff1b1b1f...
            .....1b1b1fffff1b1b1f...
            ......fffffffffffffff...
            ......fff.ffffffff.f....
            ..ff..ff.ffffffff.......
            ..ff.fff..fffffff.......
            ...fffff..fff.f.ff..ff..
            ....ff...f..f.f..fff....
            .........ff..f..........
            `,img`
            ........................
            .ff.................ff..
            ..fff.....fffff....f....
            ...ff...ff11111ff..fff..
            ...fff.fb111f111bf..fff.
            ...fff.f111fff111f..fff.
            ...ffffd111f5f111dfffff.
            ....fffd1111f1111dffcf..
            .....ffddd11111dddf111..
            ...c1ffbdbfdddfbdbf1b1..
            ..1b1ffcdc51115cdcfb111.
            .c11bffcdcf111fcdcff1bc.
            .1bbffffb1111111bfffb1..
            ..11fffffcdb11bdfffff...
            .....c111cbfbbfc111cf...
            .....1b1b1fffff1b1b1f...
            .....1b1b1fffff1b1b1f...
            ......fff.fffffffffff...
            ......ffffffffffff.f....
            ...ff.ff..fffffff.......
            ...fffff.ffffffff.......
            ...fffff..ffff..ff......
            ....ff.....f..f..ff.....
            .........f..f.f...fff...
            `,img`
            ..f.....................
            ...f...............f....
            ...ff.....fffff...f.....
            ..ff....ff11111ff.ffff..
            ..ff...fb111f111bf..fff.
            ...fff.f111fff111f..fff.
            ...ffffd111f5f111dfffff.
            ....fffd1111f1111dffcf..
            .....ffddd11111dddf111..
            ...c1ffbdbfdddfbdbf1b1..
            ..1b1ffcdc51115cdcfb111.
            .c11bffcdcf111fcdcff1bc.
            .1bbffffb1111111bfffb1..
            ..11fffffcdb11bdfffff...
            .....c111cbfbbfc111cf...
            .....1b1b1fffff1b1b1f...
            .....1b1b1fffff1b1b1f...
            ......fffffffffffffff...
            ......fff.ffffffff.f....
            ..ff..ff.ffffffff.......
            ..ff.fff..fffffff.......
            ...fffff..fff.f.ff..ff..
            ....ff...f..f.f..fff....
            .........ff..f..........
            `,img`
            ........................
            ...ff.............f.....
            ...ff.....fffff...ff....
            ..ff....ff11111ff.ffff..
            ..ff...fb111f111bf..fff.
            ...fff.f111fff111f..fff.
            ...ffffd111f5f111dfffff.
            ....fffd1111f1111dffcf..
            .....ffddd11111dddf111..
            ...c1ffbdbfdddfbdbf1b1..
            ..1b1ffcdc51115cdcfb111.
            .c11bffcdcf111fcdcff1bc.
            .1bbffffb1111111bfffb1..
            ..11fffffcdb11bdfffff...
            .....c111cbfbbfc111cf...
            .....1b1b1fffff1b1b1f...
            .....1b1b1fffff1b1b1f...
            ......fffffffffffffff...
            ...f..ffffffffffff.f....
            ..f...ff..fffffff.......
            ..ff.fff..fff.fff...ff..
            ...fffff.ffff.f.ff..f...
            ....ff....f.ff...fff....
            .........f....f.........
            `],
        randint(180, 210),
        true
        )
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.moveWithController(2, 5, 1)
    moveDirection = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    timer.background(function () {
        color.clearFadeEffect()
        color.Darken.startScreenEffect(5000)
        color.pauseUntilFadeDone()
        color.Darken.startScreenEffect(5000)
        color.pauseUntilFadeDone()
        color.Darken.startScreenEffect(5000)
    })
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    Render.moveWithController(4, 5, 1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    timer.background(function () {
        color.clearFadeEffect()
        color.Brighten.startScreenEffect(5000)
        color.pauseUntilFadeDone()
        color.Brighten.startScreenEffect(5000)
        color.pauseUntilFadeDone()
        color.Brighten.startScreenEffect(5000)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (Math.percentChance(0.5)) {
        lostGold = randint(0, info.score())
        game.splash("you were killed mining", "you lost " + lostGold + " gold")
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile17`)
        info.setScore(info.score() - lostGold)
        Render.setViewAngleInDegree(90)
        color.clearFadeEffect()
    }
})
let lostGold = 0
let e1: Sprite = null
let gold: Sprite = null
let tree3: Sprite = null
let tree4: Sprite = null
let tree2: Sprite = null
let tree1: Sprite = null
let mySprite: Sprite = null
let moveDirection = 0
info.setScore(0)
moveDirection = 1
color.FadeToBlack.startScreenEffect()
color.pauseUntilFadeDone()
scene.setBackgroundImage(img`
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = Render.getRenderSpriteVariable()
let tCuesor = sprites.create(img`
    . . . 1 . . . 
    . . . 1 . . . 
    . . . 1 . . . 
    1 1 1 . 1 1 1 
    . . . 1 . . . 
    . . . 1 . . . 
    . . . 1 . . . 
    `, SpriteKind.ui)
mySprite.setImage(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f e e e e f f . . . . 
    . . . f e e e f f e e e f . . . 
    . . f f f f f 2 2 f f f f f . . 
    . . f f e 2 e 2 2 e 2 e f f . . 
    . . f e 2 f 2 f f 2 f 2 e f . . 
    . . f f f 2 2 e e 2 2 f f f . . 
    . f f e f 2 f e e f 2 f e f f . 
    . f e e f f e e e e f e e e f . 
    . . f e e e e e e e e e e f . . 
    . . . f e e e e e e e e f . . . 
    . . e 4 f f f f f f f f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile17`)
tCuesor.setFlag(SpriteFlag.RelativeToCamera, true)
browserEvents.setCursorVisible(false)
createSprites()
Render.setViewMode(ViewMode.raycastingView)
Render.moveWithController(4, 5, 1)
Render.setAttribute(Render.attribute.fov, 1)
Render.setAttribute(Render.attribute.wallZScale, 2)
color.startFade(color.Black, color.originalPalette)
