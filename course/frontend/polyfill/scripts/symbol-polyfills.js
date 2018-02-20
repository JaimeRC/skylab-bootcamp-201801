
function isSymbol(world) {
    if (world.match(/[^\d\wñç]/ig) != null)
        return true;
}
