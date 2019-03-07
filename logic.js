// Initialize Firebase
var config = {
    apiKey: "AIzaSyDae3QkVfRDgXaSwGOj_--0RgTMMD01rjA",
    authDomain: "auth-test-c280c.firebaseapp.com",
    databaseURL: "https://auth-test-c280c.firebaseio.com",
    projectId: "auth-test-c280c",
    storageBucket: "auth-test-c280c.appspot.com",
    messagingSenderId: "620254735878"
};

firebase.initializeApp(config);



$("#sub").on("click", function () {
    event.preventDefault();

    var email = $("#exampleInputEmail1").val().trim();
    var password = $("#exampleInputPassword1").val().trim();

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(email, password);
        console.log(errorCode);
        console.log(errorMessage);



        if (errorMessage !== "") {
            $("#worked").html("<h1>" + "SOMETHING IS WRONG " + errorMessage + "</h1>");
        }

       
            $("#1worked").html("<h1>" + "User Created Successfully" + "</h1>");
            $("#1worked").append("<h1>" + "UserName: " + email + "</h1>");
            $("#1worked").append("<h1>" + "Password: " + password + "</h1>");
        

    });





})


$("#subLogin").on("click", function () {
    event.preventDefault();

    var email = $("#exampleInputEmailLogin").val().trim();
    var password = $("#exampleInputPasswordLogin").val().trim();

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // //     // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...

    });

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            //$("#working").html("<h1>" + "Yes it worked" + "</h1>")
            document.location.href = "profile.html";
        } else {
            // No user is signed in.
            //$("#working").html("<h1>" + "it aint work" + "</h1>")
            //document.location.href = "index.html";
            incorrect();
        }
    });
    console.log(password + " " + email);
})

function incorrect() {
    var incorrect = setTimeout(function () {
        var wrong = document.write("The password you've is enter is incorrect");
    }, 1000);
}

firebase.auth().signOut().then(function () {
    // Sign-out successful.
}).catch(function (error) {
    // An error happened.
});