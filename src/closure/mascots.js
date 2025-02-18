//Crea un closure para guardar datos de mascotas

function createPetList() {
    let petList = [];
    function addPet(pet) {
        if (pet===undefined) {
            return [];
        }
        petList.push(pet);
        console.log(petList);
        return petList; 
    }
    return addPet;
}

const addPet = createPetList();
addPet('cat');
addPet('dog');
addPet('fish');

const addPet2 = createPetList();
addPet2('parrot');
addPet2();
console.log(addPet2);

const addObjPet = createPetList();
addObjPet({
    age: 3,
    description: "A nice cat",
    name: "Michi",
    type: "cat",
    weight: "2kg"
});

addObjPet({
    age: 3,
    description: "A nice cat",
    name: "Michi",
    type: "cat",
    weight: "2kg"
});