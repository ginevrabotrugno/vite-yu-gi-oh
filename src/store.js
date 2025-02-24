import { reactive } from 'vue'

export const store = reactive ({
    cardsList: [],
    apiURL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    archetypesList: [],
    apiEndpoint: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    searchArchetype: "",
    apiArchetypeParam: "archetype",
});