const product = {
  proName: "Parker Jotter Standard CT Ball Pen (Black)",
  rating: 4.3,
  offer: "10%",
  proPrice: 270,
};
// console.log(product);
const profile = {
  name: "Apna College",
  isVerified: true,
  isFollowed: true,
  noPosts: 195,
  noFollowers: "569K",
  noFollowing: 4,
  profileBio:
    "We are India's largest free learning platform. Learn to code for free.",
};
console.log(profile);
a = 3;
console.log(a);
b = 5;
console.log(b);
c = a + b;
console.log(c);
console.log(profile.noFollowers);

console.log("Conditional Statements in JavaScript");

let age = 23;

if (age >= 18) {
  console.log("You can vote");
}
if (age < 18) {
  console.log("You can't vote");
}

// Dark Mode

let mode = "dark";
let bgColor, textColor;

if (mode == "dark") {
  bgColor = "black BG";
  textColor = "white TEXT";
} else {
  bgColor = "white BG";
  textColor = "black TEXT";
}

console.log(bgColor);
console.log(textColor);

for (const key in profile) {
  console.log("Key = " + key + " & Value = " + profile[key]);
}
