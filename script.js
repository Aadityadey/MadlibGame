function generateMadLibs() {
    const adjective = document.getElementById("adjective").value;
    const animal = document.getElementById("animal").value;
    const time = document.getElementById("time").value;
    const emotion = document.getElementById("emotion").value;
    const place = document.getElementById("place").value;
    const food1 = document.getElementById("food1").value;
    const food2 = document.getElementById("food2").value;
    const activity = document.getElementById("activity").value;
    const person1 = document.getElementById("person1").value;
    const number = document.getElementById("number").value;
    const person2 = document.getElementById("person2").value;

    const madLibsText = `Bats are so ${adjective}! They are ${animal} animals which have wings. They like to fly around at ${time}, which makes some people scared of them. But bats are ${emotion}, and they don't want to hurt people. I have a pet bat that lives in ${place}. I like to feed him ${food1} and ${food2}. He likes to ${activity}. I am his favorite person, but he also likes ${person1}. I want to convince my parents to get me ${number} more bats like ${person2}.`;

    document.getElementById("madLibsText").textContent = madLibsText;
    document.getElementById("madLibsStory").classList.remove("hidden");
}
