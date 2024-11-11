var title = document.getElementById("title")
var button = document.getElementById("reading_button")
var reading_output = document.getElementById("reading_output")
var input_text = document.getElementById("input_text")
var image_output = document.getElementById("card_image")

var cards = ["The Sun", "The Star", "The World", "The Magician", "Strength","The High Priestess", "Wheel of Fortune", "The Moon", "Ace of Pentacles", "Ace of Cups", "Ten of Pentacles"]
var meanings = ["Success, positivity, joy, and vitality. Represents happiness, clarity, and fulfillment. The Sun brings optimism and a reminder to appreciate life's blessings.", "Hope, inspiration, serenity, and renewal. Signifies healing, optimism, and calm after difficulties. It's a reminder to have faith in yourself and to look toward a brighter future.", "Completion, achievement, fulfillment, and integration. Represents the end of a journey or cycle, success, and wholeness. This card speaks to the satisfaction of completing something meaningful.", "Manifestation, power, resourcefulness, and skill. Reminds you that you have the tools and potential to achieve your goals. It's about taking action and realizing your inner power.", "Inner strength, courage, compassion, and patience. Encourages resilience and gentle control. This card is about managing challenges with grace and having confidence in yourself.", "Intuition, subconscious, mystery, and inner wisdom. Encourages listening to your intuition and exploring what lies beneath the surface. It's a call to trust your inner voice.", "Fate, cycles, change, and destiny. Often symbolizes a turning point. It can indicate that events are unfolding as part of a larger plan, reminding you to stay adaptable.", "Illusion, intuition, fear, and the unconscious. Highlights the unknown, including fears and illusions. The Moon invites introspection, intuition, and exploring dreams or hidden aspects of life.", "New opportunities, prosperity, material abundance, and potential. Represents the potential for material or financial growth. It's about laying the groundwork for future success and stability.", "New love, emotional beginnings, compassion, and creativity. Signals a fresh start in matters of the heart or deep emotions. It's about opening up to feelings, connections, and creative flow.", "Legacy, family, financial security, and long-term success. Represents wealth, family, and generational stability. It's a card of abundance, gratitude, and lasting achievement."]
var images = ["assets/sun.png","assets/star.png","assets/world.png","assets/magician.png","assets/strength.jpg","assets/highpriestess.png","assets/fortune.png","assets/themoon.png","assets/acepen.jpg","assets/acecup.jpg","assets/ten.jpg"]
var fonts = ['Arial', 'Verdana', 'Helvetica', 'Georgia', 'Courier New', 'Times New Roman']
var colors = ["#1a1a1a", "#2d2d2d", "#333333", "#4d4d4d", "#595959", "#404040", "#262626", "#1a1a1a", "#2a2a2a", "#212121"];
var rotation = ["10deg", "20deg", "180deg", "360deg", "-15deg", "15deg"];



button.addEventListener("click", function(){
    var current_input = input_text.value;
    if (current_input){
        generate(current_input);
        restyle();
    }
    else{
        alert("Input your name!")
    }
})

function generate(incUserInput){
    var random_index = Math.floor(Math.random()*cards.length);
    console.log(random_index);
    var selected_card = cards[random_index];
    var selected_meaning = meanings[random_index];
    var selected_image = images[random_index];
    reading_output.innerText = incUserInput + "'s" + " tarot reading: " + "\n" + "\n" +  selected_card + "\n" + selected_meaning;
    image_output.src = selected_image;
}

function restyle(){
    var random_font = fonts[Math.floor(Math.random()*fonts.length)];
    var random_color = colors[Math.floor(Math.random()*colors.length)];
    var random_rotation = rotation[Math.floor(Math.random()*rotation.length)]

    reading_output.style.fontFamily = random_font;
    reading_output.style.color = random_color;
    title.style.fontFamily = random_font;
    input_text.style.fontFamily = random_font;

    image_output.style.rotate = random_rotation




}