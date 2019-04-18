module.exports = (sequelize, DataTypes) => {
    const Song = sequelize.define('Song', {
        title: DataTypes.STRING,
        genre: DataTypes.STRING,
        artist:DataTypes.STRING,
        album: DataTypes.STRING,
        albumImage: DataTypes.STRING,
        youTubeId: DataTypes.STRING,
        lyrics: DataTypes.TEXT
    });

    return Song;
}