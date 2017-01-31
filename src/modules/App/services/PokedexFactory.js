
angular.module('App')
        .factory('pokedex', PokedexFactory);

/**
 * @link https://pokemondb.net/pokedex
 * @type type
 */
var DATABASE = {
    pikachu: {
        name: 'Pikachu',
        icon: 'icon-pikachu',
        sref: 'page.pikachu',
        types: ['ELECTRIC'],
        specie: 'Mouse Pokémon',
        height: '1′4″ (0.41m)',
        weight: '13.2 lbs (6.0 kg)',
        abilities: ['Static', 'Lightning Rod (hidden ability)'],
        description: 'Pikachu is an Electric type Pokémon introduced in Generation 1. It is known as the Mouse Pokémon.'
    },
    bulbasaur: {
        name: 'Bulbasaur',
        icon: 'icon-bulbasaur',
        sref: 'page.bulbasaur',
        types: ['GRASS', 'POISON'],
        specie: 'Seed Pokémon',
        height: '2′4″ (0.71m)',
        weight: '15.2 lbs (6.9 kg)',
        abilities: ['Overgrow', 'Chlorophyll (hidden ability)'],
        description: 'Bulbasaur is a Grass/Poison type Pokémon introduced in Generation 1. It is known as the Seed Pokémon.'
    },
    squirtle: {
        name: 'Squirtle',
        icon: 'icon-squirtle',
        sref: 'page.squirtle',
        types: ['WATER'],
        specie: 'Tiny Turtle Pokémon',
        height: '1′8″ (0.51m)',
        weight: '19.8 lbs (9.0 kg)',
        abilities: ['Torrent', 'Rain Dish (hidden ability)'],
        description: 'Squirtle is a Water type Pokémon introduced in Generation 1. It is known as the Tiny Turtle Pokémon.'
    }
};


function PokedexFactory() {
    return {
        getInfo: function (pokemon) {
            return DATABASE[pokemon];
        }
    };
}


