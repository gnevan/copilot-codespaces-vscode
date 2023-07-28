function skillsMember() {
    var skills = ["HTML", "CSS", "JS", "PHP", "MySQL"];
    var member = {
        name: "John Doe",
        age: 25,
        skills: skills,
        calculateNumbers: function (var1, var2) {
            return var1 + var2;
        }
    };
    console.log(member); // returns Object {name: "John Doe", age: 25, skills: Array[5], calculateNumbers: function}
    console.log(member.name); // returns "John Doe"
    console.log(member.skills[0]); // returns "HTML"
    console.log(member.calculateNumbers(1, 2)); // returns 3
}